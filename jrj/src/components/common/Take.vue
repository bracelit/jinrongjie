<template>
<transition
	appear
	enter-active-class="animated slideInUp"
	mode="out-in">
<div id="take">
	<p>
		<span class="fa fa-book">试读</span>
		<router-link to="/login">立即订阅</router-link>
	</p>
</div>
</transition>
</template>

<script>
	export default{
		name:'Take'
	}
</script>

<style lang="less">
@import url("../../styles/common/animate.css");
#take{
	position: fixed;
	bottom: 0px;
	left: 0px;
	width: 100%;
	height: 1.5rem;
	border-top: 1px solid grey;
	box-sizing: border-box;
	p{
    display: flex;
    justify-content: space-between;
     font-size: 0.5rem;
    span{
    	color: #333;
    	display: inline-block;
    	line-height: 1.4rem; 
    	margin-left: 0.2rem;
    }
    a{
    	color: white;
    	display: inline-block;
    	width: 3rem;
    	height: 1.5rem;
    	line-height: 1.5rem;
    	text-align: center;
    	border-top-left-radius: 2rem;
    	border-bottom-left-radius: 2rem;
    	background: #eb2115;
    }
    }
}
</style>