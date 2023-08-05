<template>
	<button class="v-button" :type="type">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: "VButton",

	props: {
		type: {
			type: String,
			default: 'button'
		}
	}
}
</script>

<style scoped>
	button {
		background-color: #519945;
		border-radius: 5px;
		font-size: 17px;
		font-weight: 600;
		line-height: 21px;
		color: #ffffff;
		border: none;
		padding: 10px 30px;
		cursor: pointer;
	}

	button:hover {
		filter: brightness(110%);
		transition-duration: .4s;
	}

	button:active {
		filter: brightness(80%);
		transition-duration: .4s;
	}
</style>
