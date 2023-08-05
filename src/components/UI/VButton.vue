<template>
	<Component :is="elementName" :to="to" class="v-button" :type="type">
		<slot></slot>
	</Component>
</template>

<script>
export default {
	name: "VButton",

	props: {
		type: {
			type: String,
			default: 'button'
		},

		to: {
			type: Object,
			default: null
		}
	},

	computed: {
		elementName() {
			return this.to ? 'router-link' : 'button'
		}
	}
}
</script>

<style scoped>
	button,
	a {
		background-color: #519945;
		border-radius: 5px;
		font-size: 17px;
		font-weight: 600;
		line-height: 21px;
		color: #ffffff;
		border: none;
		padding: 10px 30px;
		cursor: pointer;
		text-decoration: none;
	}

	button:hover,
	a:hover {
		filter: brightness(110%);
		transition-duration: .4s;
	}

	button:active,
	a:active {
		filter: brightness(80%);
		transition-duration: .4s;
	}
</style>
