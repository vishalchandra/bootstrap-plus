/*Bootstrap addon for creating rows with compact gutter widths
  works with tablet and desktop mode. To make row with compact 
  gutter width add a new class compact to div along with class 
  row-fluid and also add class .hidden-phone since only works 
  for tablet and desktop screen mode.                         */

$(document).ready(function(){
    init_screen_phone = $(".row-fluid.compact").is(':hidden') ? 1 : 0; //1 if phone

    makecompact = function(){ // Compact function should be called only once
        $(".row-fluid.compact").each(function(){
            var tmp_numl=0; //No. of columns in the row
            var tmp_ml_total=0; //Sum of left margins
            var tmp_cf=0.3; //Compact Factor 0<tmp_cf<=1
            var tmp_norm=100/parseFloat($(this).css("width")); //Normalize to percentage for fluidity

            $(this).children("div[class^='span']").each(function(){
                tmp_numl++;
                tmp_ml_total+=parseFloat($(this).css("marginLeft"));
            });

            $(this).children("div[class^='span']").each(function(){
                var tmp_w=parseFloat($(this).css("width"));
                var tmp_ml=parseFloat($(this).css("marginLeft"));
                $(this).css("marginLeft",(tmp_ml*tmp_cf*tmp_norm)+"%");
                $(this).css("width",tmp_norm*(tmp_w+(((1-tmp_cf)*tmp_ml_total)/tmp_numl))+"%");
            });
        });
    }

    $(window).resize(function(){ // Check for screen change
        if($(".row-fluid.compact").is(':visible') && init_screen_phone){
            init_screen_phone = 0; // Disables next calling of compact function 
            makecompact(); // Apply compact function
        }
    });

    if(!init_screen_phone)
        makecompact(); // If initially screen not phone, apply compact function
});
    