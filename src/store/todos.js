import todosApi from "@/api/todosApi.js";
import favoriteApi from "@/api/favoriteApi.js";
import { onlyUnique } from '@/helpers/index.js';
import { v4 as uuidv4 } from 'uuid';

export default {
  namespaced: true,

  state: {
    list: [],
    loaded: false,
    loading: false,
    error: null,
    filter: {
      search: '',
      status: 'All',
      userId: 'All'
    },
    favorite: [],
    uniqueUserIds: []
  },

  mutations: {
    SET_LOADING: (state, payload) => state.loading = payload,
    SET_LOADED: (state, payload) => state.loaded = payload,
    SET_ERROR: (state, payload) => state.error = payload,
    SET_LIST: (state, payload) => state.list = payload,
    ADD_TODO: (state, payload) => state.list = [{ id: uuidv4(), title: payload}, ...state.list],
    SET_FILTER: (state, payload) => state.filter = { ...state.filter, ...payload },
    SET_USER_IDS: (state, payload) => state.uniqueUserIds = payload,
    SET_FAVORITE: (state, payload) => state.favorite = payload,
    CREATE_FAVORITE: (state, payload) => state.favorite.push(payload),
    DELETE_FAVORITE: (state, payload) => state.favorite = state.favorite
      .filter(item => item !== payload)
  },

  getters: {
    getFilteredList({ list, filter, favorite }) {
      return list
        .filter(item => {
          switch (filter.status) {
            case 'All':
              return true
            case 'Completed':
              return item.completed
            case 'Uncompleted':
              return !item.completed
            case 'Favorites':
              return favorite.includes(item.id)
          }
        })
        .filter(item => filter.userId === 'All' ? true : item.userId === filter.userId)
        .filter(item => item.title.includes(filter.search))
    }
  },

  actions: {
    async readTodos({ commit }) {
      commit('SET_LOADING', true)
      try {
        const result = await todosApi.read()
        commit('SET_LIST', result)
        commit('SET_USER_IDS', result.map(item => item.userId).filter(onlyUnique))
        commit('SET_LOADED', true)
      } catch (e) {
        commit('SET_ERROR', e)
      } finally {
        commit('SET_LOADING', false)
      }
    },

    readFavoriteTodo({ commit }) {
      const favoriteList = favoriteApi.read()
      commit('SET_FAVORITE', favoriteList)
    },

    createFavoriteItem({ commit }, id) {
      favoriteApi.create(id)
      commit('CREATE_FAVORITE', id)
    },

    deleteFavoriteItem({ commit }, id) {
      favoriteApi.delete(id)
      commit('DELETE_FAVORITE', id)
    },
  }
}
