/*Bootstrap addon for creating rows with compact gutter widths
  works with tablet and desktop mode. To make row with compact 
  gutter width add a new class compact to div along with class 
  row-fluid and also add class .hidden-phone since only works 
  for tablet and desktop mode.                             */

 $(document).ready(function(){
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
});
    