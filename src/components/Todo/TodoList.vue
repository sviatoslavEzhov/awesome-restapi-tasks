<template>
	<ul class="todo-list">
		<li
			v-for="item in list"
			:key="item.id"
			class="todo-item"
			:class="{ 'todo-item__favorite': favoriteList.includes(item.id) }"
		>
			<p :class="{ 'completed': item.completed }">
				{{ item.title }}
			</p>
			<img
				@click="$emit('favoriteChanged', item.id)"
				class="favorite-icon"
				src="/src/assets/favorite.svg"
				alt="favorite"
			>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'TodoList',

	props: {
		list: {
			type: Array,
			default: () => []
		},

		favoriteList: {
			type: Array,
			default: () => []
		}
	}
}
</script>

<style scoped>
	.todo-list {
		width: 100%;
		list-style: none;
		padding-left: 0;
		margin: 0;
	}

	.todo-item {
		display: flex;
		align-items: center;
		background-color: #cccccc;
		border-radius: 5px;
		color: #5F5F5F;
	}

	.todo-item:not(:last-of-type) {
		margin-bottom: 0.5rem;
	}

	p {
		padding: 0.5rem 1rem;
		margin: 0;
		display: flex;
		align-items: center;
	}

	p.completed {
		text-decoration: line-through;
	}

	.favorite-icon {
		flex-shrink: 0;
		width: 1.5rem;
		height: 100%;
		margin-left: auto;
		margin-right: 0.5rem;
		opacity: 0;
		transition-duration: 0.2s;
		cursor: pointer;
		padding: 2px;
		background-color: #519945;
		border-radius: 3px;
	}

	.todo-item__favorite .favorite-icon,
	.todo-item:hover .favorite-icon {
		opacity: 1;
	}
</style>
