<template>
	<div>
		<form @submit="addTodo">
			<input type="text" name="title" placeholder="Add Todo..." v-model="title">
			<input type="submit" value="submit">
		</form>
	</div>
</template>

<script>
export default {
	name: "AddTodo",
	data() {
		return {
			title: '',
		}
	},
	methods: {
		addTodo(e) {
			e.preventDefault()
			const newTodo = {
				title: this.title,
				completed: false,
			}
			// Send up to parent

			this.title = '';
			this.$emit('add-todo', newTodo);
		}
	}
}
</script>

<style scoped>

</style>
