<template>
	<div class="detail">
	<Header></Header>
	<div v-for="(item,index) in arr" :key="index">
		<p>{{item.title}}</p>
		<p>{{item.makeDate}}{{item.paperMediaSource}}</br><a>A股头条</a><span>付费特辑</span></p>
		<p>{{item.detail}}</p>
		<p><img src="../../img/lock.png"/></p>
		<p><img  v-for="(val,ind) in len " :key="'img'+ind":src="val"/></p>
	</div>
		<Take></Take>
	</div>
</template>
<script>
import {Indicator} from 'mint-ui';
import Take from'../common/Take'
import Header from'../common/Header'
export default{
	name:'Detail',
	components:{Take,Header},
	data(){
		return{
			msg:'detail',
			arr:[],
			len:[]
		}},
		methods:{
			getdata(){
				Indicator.open({
					text: 'Loading...',
  					spinnerType: 'fa fa-circle'
				})
				http://m.jrj.com.cn/json/pay/headline/headlineAbstract?iiid=25382909
				this.$axios.get('apione/json/pay/headline/headlineAbstract?',{params:{
					iiid:this.$route.query.iiid,
				}})
				.then((res)=>{
					this.arr=this.arr.concat(res.data);
					Indicator.close()
					this.len=this.arr[0].imgUrl.split(',');
				}).catch((err)=>{
					console.log(err)
				})
			}
		},
		created(){
			this.getdata();
		}
}
</script>

<style lang="less" scoped="scoped">
@import url("../../styles/main.less");
.detail{
	.padding(50,10,0,10);
	p:nth-child(1){
		.fs(30);font-weight:600;
		
	}
	p:nth-child(2){
		.fs(16);
		color:#333;
		a{
			color: deepskyblue;
		}
		span{
			border: 1px solid red;
			text-align: center;
			color: red;
			margin-left: 5px;
		}
	}
	p:nth-child(3){
		.fs(20);
		color: #333;
	}
	p:nth-child(4){
		text-align: center;
		.lh(100);
		margin-bottom: 10px;
		img{
			.h(84);
			.w(84);
		}
	}
	p:nth-child(5){
		position: relative;
		img{
			width: 100%;
		}
	}
}
</style>