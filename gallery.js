$(document).ready(function (){
  $('#thumbs').delegate('img','click', function(){
    $('#target').attr('src',$(this).attr('src').replace('thumb','large'));
    $('#description').html($(this).attr('alt'));
  });  
})

