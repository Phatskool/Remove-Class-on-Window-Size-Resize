<script>
jQuery(document).ready(function($) {
  var alterClass = function() {
    var window  = document.body.clientWidth;
    if (window  < 1024) {
      jQuery('.vc_row').removeClass('fp-section');
    } else if (window  >= 1024) {
      jQuery('.vc_row').addClass('fp-section');
    };
  };
  jQuery(window).resize(function(){
    alterClass();
  });
  alterClass();
});
</script>
