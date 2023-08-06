<template>
	<div class="todo-filters">
		<VInput
			class="todo-filters__search"
			placeholder="Search"
			@input="e => SET_FILTER({ search: e.target.value })"
		/>
		<div class="todo-filters__list">
			<div class="todo-filters__item">
				<span>Filter by status</span>
				<VSelect
					:options="$constants.TODO_FILTER"
					@selected="value => SET_FILTER({ status: value })"
				/>
			</div>
			<div class="todo-filters__item">
				<span>Filter by user id</span>
				<VSelect
					:options="userIdsOptions"
					@selected="value => SET_FILTER({ userId: value })"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import VSelect from "@UI/VSelect.vue";
import VInput from "@UI/VInput.vue";
import {mapMutations, mapState} from "vuex";

export default {
	name: 'TodoFilter',

	components: {
		VSelect,
		VInput
	},

	computed: {
		userIdsOptions() {
			return ['All', ...this.uniqueUserIds]
		},

		...mapState('todos', ['uniqueUserIds'])
	},

	methods: {
		...mapMutations('todos', ['SET_FILTER'])
	}
}
</script>

<style scoped>
	.todo-filters {
		border: 1px solid #ffffff;
		border-radius: 5px;
		padding: 0.5rem;
		background-color: #ccc;
	}
	.todo-filters__search {
		margin-bottom: 1rem;
		width: 100%;
	}

	.todo-filters__list {
		display: flex;
	}

	.todo-filters__item:not(:last-of-type) {
		margin-right: 1rem;
	}

	.todo-filters__item span {
		color: #5F5F5F;
		margin-right: 0.5rem;
	}
</style>
