<template>
	<input
		class="v-input"
		v-model="value"
		:type="type"
		:placeholder="placeholder"
	/>
</template>

<script>
export default {
	name: 'VInput',

	emits: ['update:modelValue'],

	props: {
		modelValue: {
			type: [String, Number]
		},

		type: {
			type: String,
			default: 'text'
		},

		placeholder: {
			type: String,
			default: 'Default Placeholder'
		}
	},

	computed: {
		value: {
			get() {
				return this.modelValue
			},
			set(value) {
				this.$emit('update:modelValue', value)
			}
		}
	}
}
</script>

<style scoped>
	input {
		border-radius: 5px;
		font-size: 17px;
		line-height: 21px;
		border: none;
		outline: none;
		padding: 10px;
	}
</style>
