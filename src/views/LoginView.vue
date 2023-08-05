<template>
	<AuthForm
		:authType="$constants.LOG_IN"
		header="Log In"
		description="Enter Your credentials"
		@submit="login"
	/>
</template>

<script>
import AuthForm from "@components/AuthForm.vue";

export default {
	name: "LogInView",

	components: {
		AuthForm
	},

	methods: {
		login(data) {
			console.log(`login`, data)
		}
	}
}
</script>
