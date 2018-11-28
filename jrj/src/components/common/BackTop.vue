<template>
	<div class="back-top">
	<div class="box" 
		v-scroll-hide='isShow'  
    scroll-hide-distance="100"
	v-go-top:click
	>
	<transition
		enter-active-class="animated fadeIn"
		leave-active-class="animated fadeOut"
		mode="out-in"
		>
   <i class="fa fa-arrow-circle-up" v-show="isShow"></i>
   </transition>
	</div>
	
	</div>
</template>

<script>
	import Vue from 'vue'
  // 实现回到顶部
  let  scrollEvent=function(distance,vnode){
  // return function(){


	let bodyDistance=document.documentElement.scrollTop// 获取当前位置
	   //根据距离修改显示隐藏
//	   console.log(vnode.context.isShow)
  	if (bodyDistance>=distance) {
  		if (vnode.context.isShow==false) {
  			vnode.context.isShow=true
  		}
  		
  	}else{
  		if (vnode.context.isShow) {
  			vnode.context.isShow=false
  		}
  		
  	}
   // }
}
Vue.directive('go-top',{
  bind(el,binding,vnode){
      //监听元素是否被点击
//    console.log(binding)
      let eventType=binding.arg
       // let eventType=binding.modifiers//第一种方式通过arg 来获取
      // let eventType=binding.expression
//     console.log(eventType)
      el.addEventListener(eventType,()=>{
        document.documentElement.scrollTop=0;  
      })
     // 
  }
})
 Vue.directive('scroll-hide',{
        bind(el,binding,vnode){
//         console.log(el)// 自定义指令绑定的节点
//         console.log(binding)// 绑定对象
//         console.log(vnode)// 虚拟dom
           // 
           let distance=el.getAttribute('scroll-hide-distance');//设定的fa值

          window.addEventListener('scroll',function(){
            scrollEvent(distance,vnode)
          })
         
        },
        unbind(el,binding,vnode){
//      	 console.log('解绑')
          let distance=el.getAttribute('scroll-hide-distance');//设定的fa值
        	   window.removeEventListener('scroll',function(){scrollEvent(distance,vnode)})
              // window.removeEventListener('scroll',fun) 

        }
		})
	export default{
		name:'BackTop',
		data(){
			return{
				isShow:false
			}
		}
	}
</script>

<style lang="less">
	@import "../../styles/common/animate.css";
	@import url("../../styles/main.less");
	.back-top{
		color: grey;
		.w(50);
		.h(50);
		
		position:fixed ;
		right:0.5rem;
		bottom:1rem;
		z-index:100;
		
	}
</style>