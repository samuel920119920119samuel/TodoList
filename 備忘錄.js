//刪除線
$('#submitform').on('click','.del_line', function(){
  // 下面這樣寫為什麼不行咧QQ
  //$('<s>').before('<a>');
  //$('</s>').after('</a>');
  if(!$('.del_line').prop('checked')){
    $('#text').css('text-decoration', 'none');
  }else{
    $('#text').css('text-decoration', 'line-through');
    //為什麼是反的啊好神祕
  }
});

//刪除記事
$('#submitform').on('click', '.del', function(){
  $(this).parents('p').remove();
});

//新增記事
$(".add_note").keypress(function(e){
  code = (e.keyCode ? e.keyCode : e.which);
  if (code == 13){
 $('<p><input class="del_line" type="checkbox"><a id=text>'+$('.add_note').val()+'</a><input class="del" type="checkbox"></p>').appendTo('#note');
   //換成下面這樣寫哪裡錯啊
    //var txValue = document.getElementsByClassName('add_note').value;
    //document.getElementByClassName("add_notet").innerHTML = txValue;
 
//刪除欄位輸入文字
    $('input[class="add_note"]').val("");
  }
});

//參考
//http://www.died.tw/2012/02/js-javascriptenter.html
//http://www.darkthread.net/jQuery/Tutorial06/default.htm
//http://kikinote.net/article/134.html
//http://blog.winwu.today/2012/08/inputvalue.html
//http://white1027.blogspot.tw/2013/06/js-jquery.html