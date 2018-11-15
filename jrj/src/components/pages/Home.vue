<template>
<div class="home">
	{{msg}}
</div>
</template>

<script>
	export default{
		name:'Home',
		components:{
			
		},
		data(){
			return {
				msg:'  我是首页'
			}
		}
	}
</script>
<style lang="less" scoped>
@import url("../../styles/main.less");
.home{
	
}
</style>