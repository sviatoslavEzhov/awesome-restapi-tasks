<template>
	<select v-model="selected">
		<option
			v-for="option in options"
			:key="option"
			:value="option"
		>
			{{ option }}
		</option>
	</select>
</template>

<script>
export default {
	name: 'VSelect',

	props: {
		options: {
			type: Array,
			required: true
		}
	},

	data() {
		return {
			selected: this.options[0]
		}
	},

	watch: {
		selected: {
			handler(newVal) {
				this.$emit('selected', newVal)
			}
		}
	}
}
</script>

<style scoped>
	select {
		border-radius: 5px;
		font-size: 17px;
		line-height: 21px;
		border: none;
		outline: none;
		padding: 10px;
	}
</style>
