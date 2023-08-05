<template>
	<FormWrapper
		header="Login"
		description="Enter your credentials"
	>
		<LoginForm/>
	</FormWrapper>
</template>

<script>
import FormWrapper from "@UI/FormWrapper.vue";
import LoginForm from "@components/LoginForm.vue";

export default {
	name: "LoginView",

	components: {
		LoginForm,
		FormWrapper
	}
}
</script>

<style scoped>

</style>
