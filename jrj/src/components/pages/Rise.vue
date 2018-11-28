<template>
	<div class="rise">
		<div class="banner"><img src="http://i0.jrjimg.cn/Astock/img/banner.jpg"/><div>已购买:65482人</div></div>
		<div class="summary">
			<p><span>A股头条Z3精华版</span><router-link tag="input" to="/login" v-if="loginstatus" type="button"  value="登录" /></p>
			<p>A股头条Z3精华版，由金融界智能金融豪华研究团队倾力打造，通过龙一点评等七大栏目全景透视市场，深度聚焦选股痛点，让赚钱更轻松！</p>
			<p><router-link active-class="active" to="/newest">最新</router-link><router-link active-class="active" to="/read">试读</router-link><router-link active-class="active" to="/review">回顾</router-link></p>
		</div>
		<div>
			 <router-view/>
		</div>
		<div></div>
	</div>
</template>

<script>
	export default{
		name:'Rise',
		data(){
			return{
				msg:'我是涨股',
				loginstatus:true
			}
			},
		methods:{
			login(){
				this.loginstatus=window.localStorage.getItem('user')?false:true;
			},
			getdata(){
				//http://m.jrj.com.cn/json/pay/headline/getHeadlines?curPage=1&homePage=1&pageSize=6
				this.$axios('apione/json/pay/headline/getHeadlines?curPage=1&homePage=1&pageSize=6')
				.then((res)=>{
//					console.log(res)
				}).catch((err)=>{
					console.log(err)
				})
			}
		},
		created(){
			this.getdata();
			this.login();
		}
	}
</script>

<style lang="less" scoped="scoped">
@import url("../../styles/main.less");
.rise{
	.banner{
		position:relative;
		img{
			.h(240);
			.w(375);
		}
		div{
			position: absolute;
			.w(120);
			.h(30);
			right: 0px;
			bottom:0px;
			.fs(14);
			text-align:center;
			.bg-color(#f10007);
			.lh(30);
			color:white;
			border-top-left-radius:2em;
			border-top-right-radius:2em;
		}
	}
	.summary{.padding(0,10,0,10);
		p:nth-child(1){
			display:flex;
			justify-content:space-around;
			align-items:center;
			.h(40);
			span{
				.fs(30);
			}
			input{
				.w(50);
				.h(30);
				text-align:center;
				color:red;
				border:1px solid red;
				.bg-color(#fff);
				.pre(border-radius,5px)
			}
		}
		p{
			.fs(16);
			.padding(10,0,15,0);
		}
		p:nth-child(3){
			display: flex;
			justify-content: space-between;
			align-items: center;
			.h(30);
			a{
				flex:1;
				text-align: center;
				.lh(30);
			}
		}
	}
	.active{
		border-bottom:0.1rem red solid;
		color:#333333;
	}
}
</style>