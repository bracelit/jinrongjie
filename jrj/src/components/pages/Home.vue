<template>
<div class="home">
	<transition-group
	enter-active-class="animated fadeIn"
	leave-active-class="animated fadeOut"
	mode="out-in">
	<Header :message="title" v-show="ceilling" :key="1"></Header>
	<div :class="{'nav2':true,'nav':!ceilling&&subnav}" v-show="!ceilling" :key="2">
	<router-link to="/home" active-class="active">推荐</router-link>
	<router-link to="/rise" active-class="active">涨停</router-link>
	<router-link to="/finance" active-class="active">财经</router-link>
	<router-link to="/stock" active-class="active">股票</router-link>
	<router-link v-show="subnav" v-for="(item,ind) in addarr" to="" :key="'_'+ind">{{item}}</router-link>
	<a @click="subnav=!subnav" v-text="subnav?'收起':'更多'" :class="{'fa':true,'fa-angle-down':!subnav,'fa-angle-up':subnav}"></a>
	</div>
	</transition-group>
	<div class="addnav" :key="2">
	<router-link to="/home" active-class="active">推荐</router-link>
	<router-link to="/rise" active-class="active">涨停</router-link>
	<router-link to="/finance" active-class="active">财经</router-link>
	<router-link to="/stock" active-class="active">股票</router-link>
	<router-link v-show="subnav" v-for="(item,ind) in addarr" to="" :key="'lala'+ind">{{item}}</router-link>
	<a @click="subnav=!subnav" v-text="subnav?'收起':'更多'" :class="{'fa':true,'fa-angle-down':!subnav,'fa-angle-up':subnav}"></a>
	</div>
	<div class="exp"><ul>
		<li><p>上证指数</p><p>2574.68</p><p>-0.04%</p></li>
		<li><p>深证成指</p><p>7635.16</p><p>+0.25%</p></li>
		<li><p>创业扳指</p><p>1315.43</p><p>+0.83%</p></li>
	</ul></div>
	<div class="msglist">
		<div class="main"
			v-infinite-scroll="loadMore"
		infinite-scroll-disabled="loading"
		infinite-scroll-distance="10">
			<img src="http://img.jrjimg.cn/2018/11/20181121171538700.jpg"/>
			<router-link tag="ul":to="{path:'/detail',query:{iiid:25382909}}">
				<li><p><span class="totop">【置顶】</span>A股头条Z3精华版：低价股人气爆棚标的该如何选择？</p><span>金融界网站</span><span>1000+人已订阅</span></li>
				<li><img src="http://img.jrjimg.cn/2018/09/20180927142735682.jpg"/></li>
			</router-link>
			<router-link tag="ul" :to="{path:'/detail',query:{iiid:item.iiid}}" v-for="(item,idx) in data" :key="'n'+idx">
				<li><p>{{item.title}}</p><span>{{item.paperMediaSource}}</span><span v-text="date(item.makeDate)"></span></li>
				<img v-for="(val,index) in item.imgUrl" :src="val"/>
			</router-link>
		</div>
	</div>
	<BackTop></BackTop>
</div>
</template>
<script>
import Vue from 'vue'
import { InfiniteScroll,Indicator } from 'mint-ui';
Vue.use(InfiniteScroll);
import Header from '../common/Header';
import BackTop from '../common/BackTop';
import Rise from '../pages/Rise'
export default{
		name:'Home',
		components:{
			Header,BackTop
		},
		data(){
			return {
				msg:'  我是首页',
				data:[],
				n:30,
				title:'手机金融界',
				ceilling:true,
				addarr:['股票','基金','航股','行情','外汇','评论','汽车','论坛','私募','保险','期货','信托'],
				subnav:false
			}
		},
		methods:{
			date(value){
				//计算与当时时间差，显示更新时间日期
			    let oldtime= new Date(value).getTime();
			    let newtime=new Date().getTime();
			    let timediffer=(newtime-oldtime)/1000;
			    switch(true){
			    	case timediffer<60==true:
			    	return parseInt(timediffer)+'秒前';
			    	break;
			    	case timediffer<3600==true:
			    	return parseInt(timediffer/60)+'分钟前';
			    	break;
			    	case timediffer<86400==true:
			    	return parseInt(timediffer/3600)+'小时前';
			    	break;
			    	case timediffer<259200==true:
			    	return parseInt(timediffer/86400)+'天前';
			    	break;
			    	default:
			    	return value;
			    }
			},
			watchScroll(){
				let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				if(scrollTop>50){
					this.ceilling=false;
				}else{
					this.ceilling=true;
				}
			},
			loadMore(){
				this.getlist()
			},
			format(imgurl){
			},
			getlist(){
				Indicator.open({
					text: 'Loading...',
  					spinnerType: 'fa fa-circle'
				})
				this.$axios.get('apione/api/news/indexNews?',{params:{
					n:this.n
				}}).then((res)=>{
					this.n=this.n+10;
					this.data=this.data.concat(res.data.data);
					Indicator.close()
				}).catch((err)=>{
					console.log(err)
				})
			}
		},
		created(){
			this.getlist();
			this.format()
		},
		mounted(){
				window.addEventListener('scroll',this.watchScroll)
			},
		destroyed(){
			delete this.loadMore;
			window.removeEventListener('scroll',this.watchScroll);
		}
	}
</script>
<style lang="less" scoped>
@import url("../../styles/main.less");
@import url("../../styles/common/animate.css");
.home{
	.nav2{
		display:flex;
		justify-content:space-between;
		background:#fff;
		box-shadow:0 2px 2px gray;
		align-items:center;
		.h(50);
		position:fixed;
		top:0px;
		left:0px;
		right:0px;
		z-index:2;
		a{
			.fs(18);
			width:20%;
			text-align:center;
			.lh(50)
		}
	}
	.nav{
		position:fixed;
		top:0px;
		flex-wrap:wrap;
		left:0px;
		right:0px;
		z-index:2;
		.h(200) !important;
		bottom:150px;
	}
	.addnav{
		display:flex;
		justify-content:space-between;
		flex-wrap:wrap;
		background:#fff;
		.padding(50,0,0,0);
		align-items:center;
		z-index:2;
		a{
			width:20%;
			.fs(18);
			text-align:center;
			.lh(30)
		}
	}
	.active{
		color: red;
		border-bottom: 1px solid blue;
	}
	.exp{
		ul{
			background: #f8f8f8;
			.padding(10,0,10,0);
			display: flex;
			flex-wrap: wrap;
			li{
				p:nth-child(1){
					color: #666;
				}
				flex: 1;
				text-align: center;
				p{
					text-align: center;
					.fs(16);
					color: red;
				}
				p:nth-child(3){
					.fs(12);
					color: red;
				}
			}
			li:nth-child(1){
				p:nth-child(3){
					.fs(12);
					color: green;
				}
			}
		}
	}
	.msglist{
		.padding(10,10,0,10);
		.main{
			img{
				width: 100%;
			}
			ul{
				display: flex; .margin(5,0,10,0);flex-wrap:wrap;
				.padding(0,0,10,0);
				border-bottom: 2px solid lightgray;
				.fs(20);
				color: #666;
				img{
					.w(100);
			    .h(80)
				}
				li:nth-child(1){
					span{
						.fs(16);
						.margin(0,5,0,0)
					}
					p{
						.h(52);
						overflow: hidden;
					}
				}
				img{
					.w(100);
					.h(80);
				}
				li:nth-child(2){
					flex: 1;
				}
				.totop{
					color: red;
					font-weight: 600;
				}
			}
		}
	}
}
</style>