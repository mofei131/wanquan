// 首页&详情2banner轮播
var mySwiper = new Swiper ('.baswr', {
    loop: true,
     autoplay: {
        delay: 3000,
      },
    pagination: {
      el: '.swiper-pagination',
    },
  })
	
	//页面刷新选项卡样式
	$(function(){
			$($('.card')[0]).css({"color":"#FD550C","border-bottom":"4px solid #FC5507"}).siblings('.card').css({"color":"#51565D","border-bottom":"0px"})
	});
	
	//选择选项卡
	$('.card').click(function(){
		$(this).css({"color":"#FD550C","border-bottom":"4px solid #FC5507"}).siblings('.card').css({"color":"#51565D","border-bottom":"0px"})
	})
	
	//计时器
	let date = $("#jishi").children("span").eq(0).text()
	let hour = $("#jishi").children("span").eq(1).text()
	let min = $("#jishi").children("span").eq(2).text()
	let second = $("#jishi").children("span").eq(3).text()
	window.onload = function(){
	setInterval(function(){
		if(second == 0){
			second = 60
			if(min == 0){
				min = 60
				if(hour == 0){
					hour = 24
				}else{
					hour--
				}
			}else{
				min--
			}
		}else{
			second--
		}
		$("#jishi").children("span").eq(1).html(hour)
		$("#jishi").children("span").eq(2).html(min)
		$("#jishi").children("span").eq(3).html(second)
	},1000)
	}
	
	//改变数量
	let i = 1
	let money = 2.00
	$('#add').click(function(){
		i++;
		money += 2.00
		$("#num").html(i);
		$('.reddmk2right').html(money.toFixed(2)+'元')
	})
	$('#red').click(function(){
		if(i>1){
			i--
			$("#num").html(i);
		}
		if(money>2.00){
			money -= 2.00
		}
		$('.reddmk2right').html(money.toFixed(2)+'元')
	})
	
	//（同意||不同意）协议
	$('.show').click(function(){
		$('.show').hide()
		$('.show1').show()
	})
	$('.show1').click(function(){
		$('.show1').hide() 
		$('.show').show()
	})
	
	//生成二维码
	$(function(){
		$('#qrcode').qrcode({
			render:"table",
			text:"245454545",
			width: 360, //二维码宽
			height: 360, //二维码长
			correctLevel:3
			});
	})
	
	//监控页面滚动到底部加载
		var list =[{image:'http://hlstore.yimetal.cn/2021/wanquan/shangpin.png',name:'儿童益智梦工厂全天票',num:'1',mobile:'17656231523',zong:'1388',stu:1,url:'#'},
		{image:'http://hlstore.yimetal.cn/2021/wanquan/shangpin.png',name:'儿童益智梦工厂全天票',num:'1',mobile:'17656231523',zong:'1388',stu:2,url:'#'},
		{image:'http://hlstore.yimetal.cn/2021/wanquan/shangpin.png',name:'儿童益智梦工厂全天票',num:'1',mobile:'17656231523',zong:'1388',stu:3,url:'#'},
		{image:'http://hlstore.yimetal.cn/2021/wanquan/shangpin.png',name:'儿童益智梦工厂全天票',num:'1',mobile:'17656231523',zong:'1388',stu:1,url:'#'},
		{image:'http://hlstore.yimetal.cn/2021/wanquan/shangpin.png',name:'儿童益智梦工厂全天票',num:'1',mobile:'17656231523',zong:'1388',stu:1,url:'#'},
		{image:'http://hlstore.yimetal.cn/2021/wanquan/shangpin.png',name:'儿童益智梦工厂全天票',num:'1',mobile:'17656231523',zong:'1388',stu:1,url:'#'},
		{image:'http://hlstore.yimetal.cn/2021/wanquan/shangpin.png',name:'儿童益智梦工厂全天票',num:'1',mobile:'17656231523',zong:'1388',stu:1,url:'#'},
		{image:'http://hlstore.yimetal.cn/2021/wanquan/shangpin.png',name:'儿童益智梦工厂全天票',num:'1',mobile:'17656231523',zong:'1388',stu:1,url:'#'},
		{image:'http://hlstore.yimetal.cn/2021/wanquan/shangpin.png',name:'儿童益智梦工厂全天票',num:'1',mobile:'17656231523',zong:'1388',stu:1,url:'#'},
		{image:'http://hlstore.yimetal.cn/2021/wanquan/shangpin.png',name:'儿童益智梦工厂全天票',num:'1',mobile:'17656231523',zong:'1388',stu:1,url:'#'},
		{image:'http://hlstore.yimetal.cn/2021/wanquan/shangpin.png',name:'儿童益智梦工厂全天票',num:'1',mobile:'17656231523',zong:'1388',stu:1,url:'#'},
		{image:'http://hlstore.yimetal.cn/2021/wanquan/shangpin.png',name:'儿童益智梦工厂全天票',num:'1',mobile:'17656231523',zong:'1388',stu:2,url:'#'},
		{image:'http://hlstore.yimetal.cn/2021/wanquan/shangpin.png',name:'儿童益智梦工厂全天票',num:'1',mobile:'17656231523',zong:'1388',stu:3,url:'#'},
		{image:'http://hlstore.yimetal.cn/2021/wanquan/shangpin.png',name:'儿童益智梦工厂全天票',num:'1',mobile:'17656231523',zong:'1388',stu:1,url:'#'},
		{image:'http://hlstore.yimetal.cn/2021/wanquan/shangpin.png',name:'儿童益智梦工厂全天票',num:'1',mobile:'17656231523',zong:'1388',stu:1,url:'#'},
		{image:'http://hlstore.yimetal.cn/2021/wanquan/shangpin.png',name:'儿童益智梦工厂全天票',num:'1',mobile:'17656231523',zong:'1388',stu:1,url:'#'},
		{image:'http://hlstore.yimetal.cn/2021/wanquan/shangpin.png',name:'儿童益智梦工厂全天票',num:'1',mobile:'17656231523',zong:'1388',stu:1,url:'#'},
		{image:'http://hlstore.yimetal.cn/2021/wanquan/shangpin.png',name:'儿童益智梦工厂全天票',num:'1',mobile:'17656231523',zong:'1388',stu:1,url:'#'},
		{image:'http://hlstore.yimetal.cn/2021/wanquan/shangpin.png',name:'儿童益智梦工厂全天票',num:'1',mobile:'17656231523',zong:'1388',stu:1,url:'#'},
		{image:'http://hlstore.yimetal.cn/2021/wanquan/shangpin.png',name:'儿童益智梦工厂全天票',num:'1',mobile:'17656231523',zong:'1388',stu:1,url:'#'},]
		var is = 10
		var y = 0
		var jindu=''
		var suxing = ''
		for(let i =0;i<list.length;i++){
			if(i <10){
				jindu = list[i].stu == 1?'已支付':list[i].stu == 2?'已完成':'未支付'
				suxing = list[i].stu == 1?'dingceng1right':list[i].stu == 2?'dingceng1right2':'dingceng1right3'
				 $('.dingbox ul').append("<li><a href="+list[i].url+"><div class=dinglileft><img src="+list[i].image+"></div><div class=dingliright><div class=dingceng1><div class=dingceng1left>"+list[i].name+"</div><div class="+suxing+">"+jindu+"</div></div><div class=dingceng2><div class=dingceng2left>数量："+list[i].num+"</div><div class=dingceng2right>手机号："+list[i].mobile+"</div></div><div class=dingceng3>总价：¥"+list[i].zong+"</div></div></a></li>")
			}
		}
		$(window).scroll(function(){
				if ($(document).height() - ($(window).scrollTop() + $(window).height()) < 50 ) {
					$('.jzwai').show()
					setTimeout(function(){
						 for(let i in list){
							 if(i>is){
								 jindu = list[i].stu == 1?'已支付':list[i].stu == 2?'已完成':'未支付'
								 suxing = list[i].stu == 1?'dingceng1right':list[i].stu == 2?'dingceng1right2':'dingceng1right3'
								 y++
								 if(y == 10){
									 y =0
									 is+=10
									 return
								 }
								 $('.dingbox ul').append("<li><a href="+list[i].url+"><div class=dinglileft><img src="+list[i].image+"></div><div class=dingliright><div class=dingceng1><div class=dingceng1left>"+list[i].name+"</div><div class="+suxing+">"+jindu+"</div></div><div class=dingceng2><div class=dingceng2left>数量："+list[i].num+"</div><div class=dingceng2right>手机号："+list[i].mobile+"</div></div><div class=dingceng3>总价：¥"+list[i].zong+"</div></div></a></li>")
							 }	 
						 }
						$('.jzwai').hide()
						clearTimeout()
					}, 2000);
				}else{
					clearTimeout()
					$('.jzwai').hide()
				}
				});
		