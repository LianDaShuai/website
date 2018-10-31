requirejs.config({
	baseUrl:"js/plugins",
	paths:{
		baiduT:"baiduTemplate",
		page:"jPages",
		extend:"jquery.extend",
		jquery:"jquery.min",
		lazy:"lazyload.min",
		swiper:"swiper.min"
	},
	shim:{
		baiduT:{
			exports:"baidu"
		},
		page:{
			deps:["jquery"]
		},
		extend:{
			deps:["jquery"]
		},
		jquery:{
			exports:"jQuery"
		},
		lazy:{
			deps:["jquery"]
		},
		swiper:{
			exports:"Swiper",
			deps:["jquery"]
		}
	}
});

requirejs(["jquery","swiper","baiduT","extend","lazy","page"],function($,sw,bd){
	var mySwiper = new sw ('.swiper-container', {
		loop: true,
		pagination: {
			el: '.swiper-pagination',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		scrollbar: {
			el: '.swiper-scrollbar',
		}
	});

	$(".menu").tab("","mouseenter");

	$(".menu").hover(function(){
		$(".sub_menu").addClass("active");
	},function(){
		$(".sub_menu").removeClass("active");
	});
});