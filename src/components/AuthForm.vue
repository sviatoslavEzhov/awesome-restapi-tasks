<template>
	<FormWrapper
		:header="header"
		:description="description"
	>
		<form
			class="auth-form"
			@submit.prevent="checkForm"
		>
			<VInput
				class="auth-form__input auth-form__username"
				v-model.trim="username"
				@focus="resetErrors"
				placeholder="Enter Username"
			/>
			<VInput
				class="auth-form__input auth-form__password"
				v-model.trim="phoneNumber"
				@focus="resetErrors"
				placeholder="Enter Phone Number"
			/>
			<VButton
				class="auth-form__button"
				type="submit"
			>
				{{ buttonText }}
			</VButton>
		</form>
		<div
			v-if="errors.length"
			class="auth-error"
		>
			<p v-for="error in errors">
				{{ error }}
			</p>
		</div>
	</FormWrapper>
</template>

<script>
import constants from "@/constants.js";
import FormWrapper from "@UI/FormWrapper.vue";
import VButton from "@UI/VButton.vue";
import VInput from "@UI/VInput.vue";

const { LOG_IN, SING_UP } = constants
const usernameRegexPattern = /^[a-zA-Z]+$/
// https://ihateregex.io/expr/phone/
const phoneNumberRegexPattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/

export default {
	name: "AuthForm",

	components: {
		VButton,
		VInput,
		FormWrapper
	},

	emits: ['submit'],

	props: {
		authType: {
			type: String,
			default: LOG_IN,
			validator: function (value) {
				return [LOG_IN, SING_UP].includes(value)
			}
		},

		header: {
			type: String
		},

		description: {
			type: String
		}
	},

	data() {
		return {
			username: '',
			phoneNumber: '',
			errors: []
		}
	},

	computed: {
		buttonText() {
			switch (this.authType) {
				case LOG_IN:
					return 'Login'
				case SING_UP:
					return 'Register'
				default:
					return 'Wrong authType prop'
			}
		}
	},

	methods: {
		resetErrors() {
			this.errors = []
		},

		checkForm() {
			this.resetErrors()

			const isUsernameValid = usernameRegexPattern.test(this.username)
			const isPhoneNumberValid = phoneNumberRegexPattern.test(this.phoneNumber)

			if (!this.username) {
				this.errors.push('Username required.')
			}

			if (!this.phoneNumber) {
				this.errors.push('Phone number required.')
			}

			if (!isUsernameValid) {
				this.errors.push('Username is not valid.')
			}

			if (!isPhoneNumberValid) {
				this.errors.push('Phone number is not valid.')
			}

			if (!this.errors.length) {
				this.submit()
			}
		},

		submit() {
			this.$emit('submit', {
				username: this.username,
				phoneNumber: this.phoneNumber,
				authType: this.authType
			})
		}
	}
}
</script>

<style scoped>
	.auth-form {
		display: flex;
		flex-direction: column;
	}

	.auth-form__username {
		margin-bottom: 20px;
	}

	.auth-form__password {
		margin-bottom: 25px;
	}

	.auth-error {
		margin-top: 1rem;
		padding: 1rem;
		border-radius: 5px;
		color: #721c24;
		background-color: #f8d7da;
		border: 1px solid #f5c6cb;
		animation: horizontal-shaking 0.15s
	}

	p {
		margin-top: 0;
		margin-bottom: 0.5rem;
	}

	@keyframes horizontal-shaking {
		0% { transform: translateX(0) }
		25% { transform: translateX(5px) }
		50% { transform: translateX(-5px) }
		75% { transform: translateX(5px) }
		100% { transform: translateX(0) }
	}
</style>
