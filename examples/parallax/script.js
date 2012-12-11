$(function(){
  var myScroll;

  // on load
  $(window).bind('load', function(e){
    // iScroll
  	myScroll = new iScroll('wrapper',
                           {bounce: false});
    // set rainbow height
    var contentHeight = $('#wrapper').height();
    $('.rainbow').css('height', contentHeight/7+1+'px');
  });

  $(document)
    .bind('touchmove', function (e) { e.preventDefault(); })
    .bind('iscroll', function(e, pos){
      console.log(pos);
      if ( 0 <= pos.y && pos.y < 1000 ) {
        // set background color
        $('#wrapper').css('background', 'white');
        // slide in from right
        var bows = $('.rainbow');
        for ( var i = bows.length-1 ; i >= 0 ; i-- ) {
          var x = (320-pos.y+100*i);
          x = (x >= 0) ? x : 0;
          $(bows[i])
            .css('-webkit-transform',
                 'translate3d(' + x + 'px, ' + pos.y + 'px, 0)');
        }
      }
      else if ( 1000 <= pos.y && pos.y < 1300 ) {
        // set background color
        $('#wrapper').css('background', 'black');
        // move up 
        $('.rainbow')
          .css('-webkit-transform',
               'translate3d(0px, ' + (2000 - pos.y) + 'px, 0)');
      }
      else if ( 1300 <= pos.y && pos.y < 1556 ) {
        var color = parseInt(pos.y - 1300 +1);
        var colorStr = 'rgb('+color+', '+color+', '+color+')';
        $('#wrapper').css('background-color', colorStr);
      }
      else if ( 1556 <= pos.y ) {
        $('#wrapper').css('background-color', 'white');
      }
      else {
      }
    });
});
