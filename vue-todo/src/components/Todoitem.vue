<template>
	<div
		class="todo-item"
		v-bind:class="{'is-complete': todo.completed}"
	>
		<p>
			<span v-on:click="makeComplete">{{ todo.title }}</span>
			<button class="del" @click="$emit('del-todo', todo.id)">x</button>
		</p>

	</div>
</template>

<script>
export default {
	name: "TodoItem",
	props: ["todo"],
	methods: {
		makeComplete() {
			this.todo.completed = !this.todo.completed;
		}
	}
}
</script>

<style scoped>
	.is-complete {
		text-decoration: line-through;
	}
</style>
