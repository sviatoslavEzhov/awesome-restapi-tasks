<template>
	<div class="form-wrapper">
		<header class="form-wrapper__header">
			<span v-if="header" class="form-wrapper__text">{{ header }}</span>
		</header>
		<div class="form-wrapper__inner">
			<div v-if="description" class="login-form__description form-wrapper__text">
				{{ description }}
			</div>
			<slot/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FormWrapper',

	props: {
		header: {
			type: String,
			default: ''
		},

		description: {
			type: String,
			default: ''
		}
	}
}
</script>

<style scoped>
.form-wrapper {
	background-color: #C3C3C3;
	border-radius: 5px;
	overflow: hidden;
	min-width: 445px;
}

.form-wrapper__header {
	display: flex;
	justify-content: center;
	background-color: #A5A5A5;
	padding: 15px;

}

.form-wrapper__text {
	font-size: 17px;
	line-height: 21px;
	color: #5F5F5F;
}

.form-wrapper__inner {
	padding: 15px 25px 30px;
}

.login-form__description {
	margin-bottom: 14px;
}
</style>
