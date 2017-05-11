
/*************切换效果****************/
$(document).ready(function() {
	$.fn.fullpage({
		slidesColor: ['#F9F3DC', '#F9F3DC', '#F9F3DC', '#F9F3DC', '#F9F3DC'],
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
		menu: '#menu',
		loopBottom: true,
		afterRender: function(){
           $('#main_top').animate({ opacity: '1',paddingTop:'12%'},1000);
           $('#skill').fadeIn('slow');		
		   $('#contact').fadeIn('slow');
		},
		afterLoad: function(anchorLink, index){
           if(index ==1){$('#main_top').animate({ opacity: '1',paddingTop:'12%'},1000);}
           if(index == 3){$('#skill').fadeIn('slow');}			
		   if(index == 5){$('#contact').fadeIn('slow');}
		},
		onLeave: function(index, direction){
		    if(index ==1){$('#main_top').animate({ opacity: '0.5',paddingTop:'4%'},1000);}
			if(index == 5){$('#contact').fadeOut('slow');}
		}
	});
	/**********第四页的作品的轮播特效********/
    var T=["百度前端技术学院ife2017任务","用fullpage实现的个人主页","单页特效Demo","天猫静态页面仿写"];
    var P=0;//设置作品切换的序号。
	for(i=0;i<4;i++){
	  $('#'+i).click(function(){
		var a=this.id;
		recover();
		$("#title").html(T[a]);
		$('#playbox>li:eq('+this.id+')').attr('class', 'show');
	  });
	}
	function recover(){
		$("#playbox").children('li').attr('class', 'hide');
	}

});
