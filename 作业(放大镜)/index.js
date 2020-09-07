var li = $('.miniImg_container ul li');
for(var i=0;i<li.children().length;i++){
    li.children().eq(i).attr('src',"./img/dog"+i+".jpg");
}
li.on('mouseover',function(){
    li.eq($(this).index()).addClass('active').siblings().removeClass('active');
    $('.img_container img').attr('src',li.eq($(this).index()).children().attr('src'));
    $('.magnifyImg_container img').attr('src',li.eq($(this).index()).children().attr('src'));
});
$('.img_container').on('mousemove',e=>{
    $('.magnify').css('display','block');
    $('.magnifyImg_container').css('display','block');
    var x = e.pageX - $('.magnify').width() / 2 - 444;
    var y = e.pageY - $('.magnify').height() / 2 - 100;
    $('.magnify').css({
        left: x + 'px',
        top: y + 'px'
    });
    x<0?$('.magnify').css('left',0):x>=260?$('.magnify').css('left',260):'';
    y<0?$('.magnify').css('top',0):y>=260?$('.magnify').css('top',260):'';
    $('.magnifyImg_container img').css({
        left: $('.magnify').position().left / 260 * ($('.magnifyImg_container').outerWidth() - $('.magnifyImg_container img').width()),
        top: $('.magnify').position().top / 260 * ($('.magnifyImg_container').outerHeight() - $('.magnifyImg_container img').height())
    })
});
$('.img_container').on('mouseleave',()=>{
    $('.magnify').css('display','none');
    $('.magnifyImg_container').css('display','none');
})