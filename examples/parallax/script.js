$(function(){
  var myScroll;
  var contentHeight;
  var contentWidth;
  var points = [1000, 1300, 1556, 2000];
  var bows;
  var delay = 100;

  // on load
  $(window).bind('load', function(e){
    // iScroll
  	myScroll = new iScroll('wrapper',
                           {bounce: false});
    // set rainbow height
    contentHeight = $('#wrapper').height();
    contentWidth = $('#wrapper').width();
    bows = $('.rainbow');
    bows
      .css('height', contentHeight/7+1+'px')
      .css('-webkit-transform', 'translate3d('+contentWidth+'px, 0, 0)');
  });

  $(document)
    .bind('touchmove', function (e) { e.preventDefault(); })
    .bind('iscroll', function(e, pos){
      console.log(pos);
      if ( 0 <= pos.y && pos.y < points[0] ) {
        // set background color
        $('#wrapper').css('background', 'white');
        // slide in from right
        for ( var i = bows.length-1 ; i >= 0 ; i-- ) {
          var x = (contentWidth - pos.y + delay * i);
          x = (x > 0) ? x : 0;
          $(bows[i])
            .css('-webkit-transform',
                 'translate3d(' + x + 'px, ' + pos.y + 'px, 0)');
        }
      }
      else if ( points[0] <= pos.y && pos.y < points[1] ) {
        // set background color
        $('#wrapper').css('background', 'black');
        // move up 
        bows.css('-webkit-transform',
                 'translate3d(0px, ' + (points[0] + points[0] - pos.y) + 'px, 0)');
      }
      else if ( points[1] <= pos.y && pos.y < points[2] ) {
        // change background color
        var color = parseInt(pos.y - points[1] +1);
        $('#wrapper').css('background-color',
                          'rgb('+color+', '+color+', '+color+')');
      }
      else if ( points[2] <= pos.y && pos.y < points[3] ) {
        // show signature
        $('#wrapper').css('background-color', 'white');
        if ( pos.y - points[2] < contentHeight/2 ) {
          $('.signature')
            .css('-webkit-transform',
                 'translate3d(0, ' + (points[2] - pos.y) + 'px, 0)');
        }
      }
      else {
      }
    });
});
