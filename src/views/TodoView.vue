<template>
	<div class="todo-page">
		<TodoFilter class="todo-page__filter" />
		<TodoForm
			class="todo-page__form"
			@addTodo="ADD_TODO"
		/>
		<TodoList
			v-if="getFilteredList.length"
			:list="getFilteredList"
			:favoriteList="favorite"
			@favoriteChanged="favoriteHandler"
		/>
		<div v-else class="placeholder">Todo list is Empty</div>
	</div>
</template>

<script>
import {mapActions, mapState, mapGetters, mapMutations} from "vuex";
import TodoForm from "@components/Todo/TodoForm.vue";
import TodoList from "@components/Todo/TodoList.vue";
import TodoFilter from "@components/Todo/TodoFilter.vue";

export default {
	name: 'TodoView',

	components: {
		TodoList,
		TodoFilter,
		TodoForm
	},

	created() {
		if (!Object.keys(this.info).length) {
			this.$router.push({ name: 'LogIn' })
		}

		if (!this.loaded) {
			this.readTodos()
		}

		this.readFavoriteTodo()
	},

	computed: {
		...mapState('profile', ['info']),
		...mapState('todos', ['loaded', 'favorite']),
		...mapGetters('todos', ['getFilteredList'])
	},

	methods: {
		favoriteHandler(id) {
			this.favorite.includes(id)
				? this.deleteFavoriteItem(id)
				: this.createFavoriteItem(id)
		},

		...mapActions('todos', [
			'readTodos',
			'readFavoriteTodo',
			'createFavoriteItem',
			'deleteFavoriteItem'
		]),
		...mapMutations('todos', ['ADD_TODO'])
	}
}
</script>

<style scoped>
	.todo-page {
		min-width: 60%;
		padding: 2rem 0;
		display: flex;
		flex-direction: column;
	}

	.todo-page__filter,
	.todo-page__form {
		margin-bottom: 1rem;
	}

	.placeholder {
		padding: 1rem 0;
		color: #ffffff;
		font-size: 2rem;
	}
</style>
