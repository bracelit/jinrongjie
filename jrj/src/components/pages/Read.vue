<template>
	<div class="read">{{msg}}</div>
</template>

<script>
	export default{
		name:'Read',
		data(){
			return{
				msg:'read'
			}
		},
		methods:{
			getdata(){
				console.log('read')
			}
		},
		created(){
			this.getdata()
		}
	}
</script>

<style>
</style>