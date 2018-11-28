<template>
	<div class="header">
	<router-link  to="/home"><img src="../../img/logo.png"/></router-link>
	<span>{{message}}</span>
	 <router-link to="/search"><i class="fa fa-search"></i></router-link>
	</div>
</template>
<script>
	export default{
		name:'Header',
		data(){
			return{
				msg:'头部'
			}
		},
		props:['message']
	}
</script>

<style lang="less">
@import "../../styles/main.less";
.header{
	position: fixed;
	top: 0px;
	left: 0px;
	right: 0px;
	.h(46);
	display:flex;
	justify-content:space-between;
	.bg-color(#be0000);
	align-items:center;
	img{
		.w(46);
		.h(46);
		margin:0 10px;
		display:block;
	}
	span{
		.fs(20);
		color:#fff;
		font-weight:600;
	}
	i{
		color: white;
		margin-right: 10px;
	}
}
</style>