<template>
	<div class="finance">
		<transition-group
			appear
			enter-active-class="animated slideInDown"
			mode="out-in"
			>
		<Header key="1"></Header>
		<div class="nav" v-if="islogin" key="2">
			<router-link tag="p" to="/login"><input type="button"  value="登录" /></router-link>
			<p>
			<input type="button" name="" id="" value="自选股" />
			<input type="button" name="" id="" value="自选基金" />
			</p>
		</div>
		</transition-group>
		<transition-group
			appear
			enter-active-class="animated slideInUp"
			mode="out-in"
			>
		<p key="1" class="navtip"><span @click="getData">首页</span><span class="fa fa-angle-right">财经</span></p>
		<p key="2">动态</p>
		<div key="3" class="newslist">
			<ul v-for="(val,dex) in 5">
				<li v-for="(item,index) in list" :key='index':style="index!=0&&index%5==0?'border-bottom:0.02rem solid grey':'border-bottom:0.02rem dashed grey'">{{item.detail.base_detail.title}}</li>
			</ul>
			<Footer>
				
			</Footer>
			<BackTop></BackTop>
		</div>
		</transition-group>
	</div>
</template>
<script>
	import Vue from 'vue'
	import Header from'../common/Header';
	import Footer from'../common/Footer';
	import BackTop from '../common/BackTop'
	import {Indicator} from'mint-ui';
	export default{
		name:'Finance',
		components:{Header,Footer,BackTop},
		data(){
			return{
				msg:'财经',
				list:[],
				page:1,
				islogin:true
			}
			},
		methods:{
			login(){
				this.islogin=window.localStorage.getItem('user')?false:true;
			},
			getData(){
				Indicator.open({
					text: 'Loading...',
  					spinnerType: 'fa fa-circle'
				})
				this.$axios.get('api/homepage/v2/index/get_push.json?secCateId=10016&name_encode=&feedtype=3&is_vertical=false',{params:{
					page:3,
					
				}})
			.then((res)=>{
				this.list=this.list.concat(res.data.entity)
//				console.log(res.data.entity);
				this.page++;
				Indicator.close();
			})
			.catch((err)=>{
				console.log(err)
			})
			}
		},
		created(){
			this.getData();
			this.login();
		}
	}
</script>

<style lang="less" scoped>
@import url("../../styles/main.less");
@import url("../../styles/common/animate.css");
.finance{
	.padding(46,0,0,0);
	.nav{
		position:fixed;
		display:flex;
		top:unit(46/37.5,rem);
		left:0px;
		.padding(0,10,0,10);
		.bg-color(#f1f1f1);
		.h(50);
		.w(375);
		align-items:center;
		justify-content:spance-between;
	    p{
	    	flex: 1;
	    	display:flex;
	    	.h(50px);
	    	align-items:center;
	    	
	    	input{
				padding:0px 10px;
				.bg-color(#416dd1);
				.h(31px);
				.margin(0,10,0,0);
				color:white;
			}
	    }
	}
	.newslist{
		.h(326);
		ul{
			.padding(0,14,0,14);
			li{
			.fs(13);
			overflow:hidden;
			.h(49);
			.lh(49);
			}
			li:nth-child(1){
				border-top:0.02rem solid black;
			}
			li:nth-child(8){
				border:none !important;
			}
		}
	}
	.navtip{
		.padding(0,14,0,14);
		.margin-top(50);
		.fs(14);
		.lh(30);
        span{
        	margin-left: unit(5/37.5,rem);
        }
	}
	p:nth-of-type(2){
		.fs(20);
		color:#496ebc;
		.lh(30);.padding(0,14,0,14);
	}
}
</style>