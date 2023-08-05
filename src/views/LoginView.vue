<template>
	<AuthForm
		:authType="$constants.LOG_IN"
		:responseError="error"
		header="Log In"
		description="Enter Your credentials"
		@submit="login"
		@reset="resetHandler"
	/>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import AuthForm from "@components/AuthForm.vue";

export default {
	name: "LogInView",

	components: {
		AuthForm
	},

	data() {
		return {
			error: null
		}
	},

	computed: {
		...mapState('users', ['list', 'loaded'])
	},

	methods: {
		resetHandler() {
			this.error = null
		},

		async login(user) {
			if (!this.loaded) {
				await this.readUsers()
			}

			const response = await this.findUser(user)

			if (response.status === 200) {
				this.SET_INFO(response.profile)
				this.$router.push({ name: 'Profile' })
			} else if(response.status === 404) {
				this.error = response.message
			}
		},

		...mapMutations('profile', ['SET_INFO']),
		...mapActions('users', ['readUsers', 'findUser'])
	}
}
</script>
