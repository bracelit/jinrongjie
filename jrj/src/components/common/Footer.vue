<template>
	<div class="footer">
	  <div>
	  <span>财经</span><span>股票</span><span>行情</span><span>港股</span><span>新股</span>
	  <span>美股</span><span>消费</span><span>基金</span><span>黄金</span><span>理财</span>
	  <span>博客</span><span>银行</span><span>商业</span><span>任务</span><span>科技</span>
	  <span>信托</span><span>投资</span><span>互联网</span><span>港股</span><span>金融</span>
	  </div>
	  <div class="page_buttom">Copyright JTJ 2018.com All right</div>
	</div>
</template>

<script>
	export default{
		name:'Footer',
		data(){
			return{
				msg:'头部'
			}
		}
	}
</script>

<style lang="less" scoped>
@import "../../styles/main.less";
	.footer{
		.h(200);
		.bg-color(#49535d);
		span{
			display: inline-block;
			width: 20%;
			.fs(14);
			text-align:center;
			color:lightgrey;
		}
		.page_buttom{
			.h(46);
			.bg-color(#404a54);
			text-align:center;
			.lh(46);
			.fs(14);
			color:grey;
		}
	}
</style>