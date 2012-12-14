$(function(){
  var myScroll;
  var bows;
  var contentHeight;
  var contentWidth;
  var points = [0, 0, 0];
  var delay = 100;

  // on load
  $(window).bind('load', function(e){
    // iScroll
  	myScroll = new iScroll('wrapper',
                           {bounce: false});
    // get content size
    contentHeight = $('#wrapper').height();
    contentWidth = $('#wrapper').width();
    // set break points
    points[1] = contentWidth + delay * 6;
    points[2] = points[1] + contentHeight;
    // set rainbow height
    bows = $('.rainbow');
    bows
      .css('height', contentHeight / 7 + 1 +'px')
      .css('-webkit-transform', 'translate3d('+contentWidth+'px, 0, 0)')
      .css('display', 'block');
  });

  $(document)
    .bind('touchmove', function (e) { e.preventDefault(); })
    .bind('iscroll', function(e, pos){
      console.log(pos);
      if ( points[0] <= pos.y && pos.y < points[1] ) {
        // slide in from right
        for ( var i = bows.length-1 ; i >= 0 ; i-- ) {
          var x = (contentWidth - pos.y + delay * i);
          x = (x > 0) ? x : 0;
          $(bows[i])
            .css('-webkit-transform',
                 'translate3d(' + x + 'px, ' + pos.y + 'px, 0)');
        }
        // hide background image
        $('#wrapper').removeClass('sky');
        // opacity
        bows.css('opacity',  1);
      }
      else if ( points[1] <= pos.y && pos.y < points[2] ) {
        // show background image
        $('#wrapper').addClass('sky');
        // move up 
        var y = points[1] + pos.y / (points[2]-points[1]);
        bows.css('-webkit-transform',
                 'translate3d(0px, ' + y + 'px, 0)');
        // opacity
        var opacity = 1 - (pos.y-points[1]) / (points[2]-points[1]);
        bows.css('opacity',  opacity);
      }
      else {
      }
    });
});
