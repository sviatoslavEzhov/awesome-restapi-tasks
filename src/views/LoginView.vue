<template>
	<AuthForm
		:authType="$constants.LOG_IN"
		header="Log In"
		description="Enter Your credentials"
		@submit="login"
	/>
</template>

<script>
import { mapActions } from 'vuex'
import AuthForm from "@components/AuthForm.vue";

export default {
	name: "LogInView",

	components: {
		AuthForm
	},

	created() {
		this.readUsers()
	},

	computed: {
		...mapState('users', ['list'])
	},

	methods: {
		login(data) {
			console.log(`login`, data)
		},

		...mapActions('users', ['readUsers'])
	}
}
</script>
