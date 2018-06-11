// fix 100 vh in Android Chrome
// var vhFix = new VHChromeFix([{
//   selector: '.fullViewH',
//   vh: 100
// }]);

$(document).ready(function() {

  //Get current year
  $(".year").text((new Date).getFullYear());

  //Remove parent if child empty
  $("p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty").parent(":empty").remove();
  //Remove if empty
  $("p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty").remove();

  //for Plus Search page
  $("#search_option>div:nth-child(2)").after($("#search_option>div:first").clone().removeClass('uk-row-first'));
  $("#search_option [data-uk-alert]:nth-last-child(3) .option").remove();
  $("#search_option>div:first button").removeClass('uk-alert-close');
  $("#add").click(function() {
    //button #add cannot place in <form> or won't working
    var counter = $("#search_option>div").length;
    $("#search_option>div:first button").addClass('uk-alert-close');
    var newSearch = $("#search_option>div:first").clone().removeClass('uk-row-first');
    if (counter < 8) {
      if (counter < 5) {
        $("#search_option>div:first button").removeClass('uk-alert-close');
      }
      $("#search_option>div:nth-child(2)").after(newSearch);
      $("#search_option [data-uk-alert]:nth-last-child(3) .option").remove();
    }
    $("#search_option>div:first button").removeClass('uk-alert-close');
  });

  //Uikit 2 - accordion toggleClass class when open/close
  $('.uk-accordion').on('toggle.uk.accordion', function() {
    $(this).children(".accordion_title").toggleClass('open');
  });

  //remove self after show .listMore
  $(".btnMore").click(function() {
    $(this).parent().siblings(".listMore").removeClass("uk-hidden");
    $(this).parent().remove();
  });

  //uikit 2 - searchBar sticky under #header
  $("#searchBar").on('active.uk.sticky', function() {
    $(this).css("top", $("#header").height());
  });

});