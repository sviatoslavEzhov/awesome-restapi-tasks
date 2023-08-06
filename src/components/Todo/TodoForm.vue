<template>
	<form class="todo-form" @submit.prevent="submitHandler">
		<VInput
			class="todo-form__input"
			placeholder="Enter todo title"
			v-model="todoText"
		/>
		<VButton type="submit">Add todo item</VButton>
	</form>
</template>

<script>
import VInput from "@UI/VInput.vue";
import VButton from "@UI/VButton.vue";

export default {
	name: 'TodoForm',

	components: {
		VInput,
		VButton
	},

	data() {
		return {
			todoText: ''
		}
	},

	methods: {
		submitHandler() {
			this.$emit('addTodo', this.todoText)
			this.todoText = ''
		}
	}
}
</script>

<style scoped>
	.todo-form {
		display: flex;
		border: 1px solid #ffffff;
		border-radius: 5px;
		padding: 0.5rem;
		background-color: #ccc;
	}

	.todo-form__input {
		flex-grow: 1;
		margin-right: 1rem;
	}
</style>
