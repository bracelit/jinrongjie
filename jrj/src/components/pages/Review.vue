<template>
	<div class="review">
		{{msg}}
	</div>
</template>

<script>
	export default{
		name:'Review',
		data(){
			return{
				msg:'review'
			}
		},
		methods:{
			getdata(){
				console.log('review')
			}
		},
		created(){
			this.getdata()
		}
	}
</script>

<style>
</style>