$(function(){
  var myScroll;
  // ready
  $(document).ready(function(){
  	myScroll = new iScroll('wrapper',
                           {bounce: false});
  });
  // on load
  $(window).bind('load', function(e){
    // refresh iScroll
    myScroll.refresh();
  });

  $(document)
    .bind('touchmove', function (e) { e.preventDefault(); })
    .bind('iscroll', function(e, pos){
      console.log(pos);
      if ( 0 <= pos.y && pos.y < 1000 ) {
        var bows = $('.rainbow');
        for ( var i = bows.length-1 ; i >= 0 ; i-- ) {
          var x = (320-pos.y+100*i);
          x = (x >= 0) ? x : 0;
          $(bows[i])
            .css('-webkit-transform',
                 'translate3d(' + x + 'px, ' + pos.y + 'px, 0)');
        }
      }
      else if ( 1000 <= pos.y && pos.y < 1200 ) {
        $('.rainbow')
          .css('-webkit-transform',
               'translate3d(0px, ' + (2000 - pos.y) + 'px, 0)');
      }
      else {
      }
    });
});
