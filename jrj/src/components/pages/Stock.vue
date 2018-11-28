<template>
	<div class="stock">
		<div class="header">
			<router-link to="/Home"><img src="../../img/logo.png"/></router-link>
			<span>手机金融界</span>
			<span>
				<router-link to="/search"><span class="fa fa-search"></span></router-link>
				<i class="fa fa-heart-o"></i>
			</span>
		</div>
		<div><router-link to="/login">登录自选</router-link><router-link to="reg">注册</router-link></div>
		<div><Slides></Slides></div>
		<div class="text">
			<p><a>•七天学抓板</a><a>•新股</a><a>•行情</a><a>•美股</a><a>•龙虎榜</a></p>
			<p><a>•7x24要闻</a><a>•公司</a><a>•机会</a><a>•涨停揭秘</a></p>
		</div>
		<div>
			<p>沐阳：下周指数将继续增高!</p>
			<p>空空道人：确保一个阳线，下周继续涨</p>
			<p>限时观看，强势龙头股安全买入法分享</p>
			<p>权益升级！288元尊享体验</p>
			<p><span>热门</span><span>资金流：创投5股劵商2</span><span @click="change">{{sub}}<i id="submenu" :class="isshow?'fa fa-caret-down':'fa fa-caret-up'"active-class='fa-rotate-180'></i></span></p>
			<div v-show="isshow" class="subtext">
				<ul>
					<li>•<span>下周看点，关注高题材股</span></li>
					<li>•<span>大宗交易泄密！白马股筹码松动</span></li>
					<li>•<span>下周解禁：四公司解禁超5亿股</span></li>
					<li>•<span>昨夜退市新规发布，这两家公司风险提示也</span></li>
				</ul>
			</div>
			<p><span>福利</span>您有一份智能诊股报告待领取</p>
		</div>
		<div class="content">
		<ul
			v-infinite-scroll="loadMore"
			infinite-scroll-disabled="loading"
			infinite-scroll-distance="10">
		
			<li v-for="(item,index) in arr"><p>{{item.title}}</p><p>{{item.cTime}}</p></li>
		</ul>
		<BackTop></BackTop>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import Header from  '../common/Header';
	import Slides from '../common/Stockslide';
	import BackTop from '../common/BackTop'
	import {Indicator} from'mint-ui';
	import { InfiniteScroll } from 'mint-ui';
	Vue.use(InfiniteScroll);
	let timestamp=new Date();
	let day=timestamp.getDate();
	export default{
		name:'Stock',
		components:{Header,Slides,BackTop},
		data(){
			return{
				msg:'我是股票',
				infoCls:'001010',
				num:'5',
				arr:[],
				day:day,
				isshow:false,
				sub:'展开'
			}
		},
		methods:{
			change(){
				this.sub=this.isshow?'展开':'收起'
				this.isshow=!this.isshow;
			},
			loadMore(){
				this.getData();
			},
			getData(){
				Indicator.open({
					text: 'Loading...',
  					spinnerType: 'fa fa-circle'
				})
			      let  str='2018-11-'+this.day+'%2018:08:15'
//					console.log(str);//获取时间戳查看最近一天新闻
				//时间makeDate=2018-11-16%2018:08:15
				//timestamp4.toLocaleDateString().replace(/\//g, "-") + " %" + timestamp4.toTimeString().substr(0, 8)
				//http://m.jrj.com.cn/json/news/getRecommendedNews?vname=recommendNews&chanNum=611&infoCls=001010&num=15
				this.$axios.get('apione/json/news/getRecommendedNews?vname=recommendNews&chanNum=611',{params:{
					num:this.num,
					infoCls:this.infoCls,
					makeDate:str
				}})
			.then((res)=>{
                 let data=eval(res.data.split('=')[1]);
                 this.day--;
                 this.arr=this.arr.concat(data);
                 console.log(this.day);
                 console.log(data);
                 console.log(str);
				Indicator.close();
			})
			.catch((err)=>{
				console.log(err)
			})
			}
		}
	}
</script>

<style lang="less" scoped>
@import url("../../styles/main.less");
@import url("../../styles/common/animate.css");
.stock{
	div{
		display:flex;
	}
	.header{
		.h(46);
	display:flex;
	justify-content:space-between;
	.bg-color(#be0000);
	align-items:center;
	.fs(20);
	color:white;
	span{
		color:white;
		.margin(0,10,0,10)
	}
	
	}
	div:nth-child(2){
		justify-content: space-between;
		.h(46);
		align-items: center;
		a{
			.margin(0,15,0,15);
			.fs(15);
			color: #416dd1;
		}
	}
	.text{
		display: flex;
		flex-wrap: wrap;
		p{
		  display: flex;
		  justify-content: center;
		  .w(375);
		  .fs(15);
		  .h(30);
		  .margin(10,0,0,0);
		  .bg-color(#f6f6f6);
		  align-items: center;
		  border-top:0.02rem #e7e7e7;
		  border-bottom:0.02rem #e7e7e7 ;
		  a{
		  	color: blue;
		  }
		  a:first-child{
		  	color: red;
		  }
		  a:last-child{
		  	color: red;
		  }
		}
	}
	div:nth-child(5){
		flex-wrap: wrap;
		p{
    		display: block;
    		.fs(22);
    		.w(375);
    		font-weight: 600;
    		color: #606060;
    		.lh(35);
    		border-bottom:0.02rem dashed grey;
    		.padding(0,10,0,10);
		}
		p:nth-child(3){
			color: red;
		}
		p:nth-child(5){
			display: flex;
			justify-content: space-between;
			align-items: center;
			span:nth-child(1){
				.bg-color(#be0000);
				display: inline-block;
				.h(20);
				border-radius: 0.05rem;
				.margin(0,5,0,5);
				.fs(15);
				.lh(20);
				font-weight: 300;
				color:#fff;
			}
			span:nth-child(3){
				.fs(15);
				
			}
		}
		p:nth-child(6){
			span:nth-child(1){
				.bg-color(#be0000);
				display: inline-block;
				.h(20);
				border-radius: 0.05rem;
				.margin(0,5,0,5);
				.fs(15);
				.lh(20);
				font-weight: 300;
				color:#fff;
			}
		}
	}
	.content{
		ul{
			li{
				p{
					.padding(0,10,0,10);.lh(30);
				}
				p:nth-child(1){
					.fs(20);
				}
				p:nth-child(2){
					.fs(10);
				}
			}
		}
	}
	#submenu{
						.bg-color(red)!important;
						color: #fff !important;
						.padding(0,3,0,3)
					}
	.subtext{
		flex-wrap: wrap;
		ul{
			list-style:square!important;color: red;
			li{
				
				
				.w(375);
				.h(30);
				display: flex;
				align-items: center;
				.padding(0,10,0,10);
				box-sizing: border-box;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				span{
					.fs(20);
				
					color: #000000!important;
					
				}
			}
		}
	}
}
</style>