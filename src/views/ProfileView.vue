<template>
	<CardWrapper :header="info.username">
		<p>Name: {{ info.name }}</p>
		<p>Email: <a :href="`mailto:${info.email}`">{{ info.email }}</a></p>
		<p>Phone: <a :href="`tel:${info.phone}`">{{ info.phone }}</a></p>

		<VButton :to="{ name: 'Todo' }">TODO list</VButton>
	</CardWrapper>
</template>

<script>
import { mapState } from "vuex";
import CardWrapper from "@UI/CardWrapper.vue";
import VButton from "@UI/VButton.vue";

export default {
	name: "ProfileView",

	components: {
		CardWrapper,
		VButton
	},

	created() {
		if (!Object.keys(this.info).length) {
			this.$router.push({ name: 'LogIn' })
		}
	},

	computed: {
		...mapState('profile', ['info'])
	}
}
</script>
