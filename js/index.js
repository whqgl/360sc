$(function(){
	var cha=$('.cha');
	var shoptop=$('.shoptop');
	cha.click(function(){
		shoptop.css({display:'none'})
	})

	//懒加载
    $("img.lazy").lazyload();

    //返回顶部
    var rtop=$('.rtop');
    rtop.click(function(){
    	$('body,html').animate({ scrollTop: 0 },1000);
        return false;
    })


})