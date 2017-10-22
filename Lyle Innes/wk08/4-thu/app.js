console.log('js on');

$searchBox = $('#gif-field');
$searchButton = $('#set-gif');
$gifContainer = $('#gif-container');

$searchButton.on('click', function() {
  event.preventDefault();
  $gifContainer.empty();
  $.ajax({
    url: 'http://api.giphy.com/v1/gifs/search',
    method: 'get',
    data: { api_key: 'QldCXhisnkbYVUVAXFXdlLZVYe5UD7fP', q: $searchBox.val(), limit: 10}
  }).done(function(response) {
    $data = response.data
    $.each($data, function(index, value){
      var img = $('<img>');
      img.attr('src', value.images.original.url);
      img.appendTo($gifContainer)
    })
    // console.log($gifContainer.children().length)
  })
});
var infiniScroll = function(){
  $.ajax({
      url: 'http://api.giphy.com/v1/gifs/search',
      method: 'get',
      data: { api_key: 'QldCXhisnkbYVUVAXFXdlLZVYe5UD7fP', q: $searchBox.val(), limit: 10, offset: $gifContainer.children().length }
    }).done(function(response) {
      $data = response.data
      $.each($data, function(index, value){
        var img = $('<img>');
        img.attr('src', value.images.original.url);
        img.appendTo($gifContainer)
      })
    })
}

$(window).scroll(function () {
    if ($(document).height() <= $(window).scrollTop() + $(window).height()) {
      infiniScroll();
    }
 });