<template>
   <div class="newest"
   	v-infinite-scroll="loadMore"
		infinite-scroll-disabled="loading"
		infinite-scroll-distance="10">
    <router-link
    	 class="contentList" 
    	 v-for="(item,index) in arr" 
    	 tag="div" :to="{path:'/detail',query:{iiid:item.iiid}}" 
    	 :key="'new'+index">
    	<div>
    	<span class="title">{{item.detail}}</span>
    	<p><span>{{item.paperMediaSource}}</span></br><span>{{item.makeDate}}</span></p>
    	</div>
    	<img :src="rep(item.imgUrl)"/>
    </router-link>
   </div>
</template>

<script>
import Vue from 'vue'
import { InfiniteScroll,Indicator } from 'mint-ui';
Vue.use(InfiniteScroll);
export default{
	name:'Newest',
	data(){
		return{
			msg:'newest',
			arr:[],
			page:1
		}},
		methods:{
			loadMore(){
				this.getdata()
			},
			rep(item){
//				return item.replace(/,/g,'')
                return item.split(',')[0]
			},
			getdata(){
				Indicator.open({
					text: 'Loading...',
  					spinnerType: 'fa fa-circle'
				})
				//http://m.jrj.com.cn/json/pay/headline/getHeadlines?curPage=1&homePage=1&pageSize=6
				this.$axios.get('apione/json/pay/headline/getHeadlines?homePage=1',{params:{
					curPage:this.page,
					pageSize:3
				}})
				.then((res)=>{
					this.arr=this.arr.concat(res.data.data);
					this.page++;
					Indicator.close()
				}).catch((err)=>{
					console.log(err)
				})
			}
		},
		created(){
			this.getdata();
		},
		destroyed(){
			delete this.loadMore
		}
}
</script>

<style lang="less" scoped="scoped">
@import url("../../styles/main.less");
.newest{
	.contentList{
		.h(120);
		display:flex;
		justify-content:space-between;
		div{
			.w(207);
			.h(120)
		}
		img{
			.h(102);
			.w(117);
		}
		.padding(0,10,0,10);
		.title{
			.fs(22);
			display:block;
			.h(60);
			overflow:hidden;
			font-weight:700;
		}
		p{
			.fs(16);
			color:gray;
			span{
				margin-right: 10px;
			}
		}
	}
}
</style>