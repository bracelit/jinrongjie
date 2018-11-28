<template>
	<div class="banner">
	<div class="tabbtn">
		<span @click="tab(index)" v-for="(val,index) of arr":class="index==now?'dynamic':''">{{val}}</span>
	</div>
	<mt-tab-container v-model="active" swipeable>
  <mt-tab-container-item  id="tab-container0">
    <img @touchmove="follow(0)" src="../../img/timg 3.jpg"/>
  </mt-tab-container-item>
  <mt-tab-container-item  id="tab-container1">
    <img @touchmove="follow(1)" src="../../img/timg.jpg"/>
  </mt-tab-container-item>
  <mt-tab-container-item  id="tab-container2">
    <img @touchmove="follow(2)" src="../../img/timg1.jpg"/>
  </mt-tab-container-item>
  <mt-tab-container-item  id="tab-container3">
    <img @touchmove="follow(3)" src="../../img/timg4.jpg"/>
  </mt-tab-container-item>
  <mt-tab-container-item  id="tab-container4">
    <img @touchmove="follow(4)" src="../../img/timg5.jpg"/>
  </mt-tab-container-item>
</mt-tab-container>
	</div>
</template>

<script>
	import Vue from 'vue';
	import  {TabContainer, TabContainerItem} from 'mint-ui';
	Vue.component(TabContainer.name, TabContainer);
	Vue.component(TabContainerItem.name, TabContainerItem);
	export default{
		name:'Slides',
		data(){
			return{
				arr:['上证','深成','恒指','黄金','白银'],
				active:'tab-container1',
				now:0
			}
		},
		methods:{
			tab(index){
				this.now=index;
				this.active='tab-container'+index;
				console.log(this.active);
			},
			follow(n){
				this.now=n;
				console.log(this.now);
			}
		}
	}
</script>

<style lang="less">
@import url("../../styles/main.less");
@import '../../../node_modules/swiper/dist/css/swiper.css';
.banner{
	flex-wrap:wrap;
	.tabbtn{
		.w(375);
		display:flex;
		margin-bottom:0.4rem;
		justify-content:space-around;
		border-bottom:0.02rem solid blue;
		span{
			.fs(15);
			display:inline-block;
			.w(60);
			.h(30);
			border:0.02rem solid grey;
			border-bottom:none;
			text-align:center;
			.lh(30);
			
		}
	}
	img{
		.w(375);
		.h(220);
	}
	}
	.dynamic{
		background: skyblue;
	}	
</style>