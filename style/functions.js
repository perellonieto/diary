function populateToC()
{
  var ToC = $("nav ul");

  var newLine, el, title, link;

  $("h1").each(function() {
    el = $(this);
    title = el.text();
    link = "#" + el.attr("id");

    newLine = $("<li>").html("<a href="+link+">"+title+"</a>");

    ToC.append(newLine);
  });
}

function showToC()
{
    /*
     * Shows table of contents
     */
    $(".table-of-contents ul").css("display", "initial");
}

function hideToC()
{
    /*
     * Hides table of contents
     */
    $(".table-of-contents ul").css("display", "none");
}

function refresh_interval()
{
  /*
   * If argument GET refresh is set, it refreshes the page every n seconds,
   * where n is the passed value
   */
  var $_GET = {};

  document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
    function decode(s) {
      return decodeURIComponent(s.split("+").join(" "));
    }

    $_GET[decode(arguments[1])] = decode(arguments[2]);
  });

  document.write($_GET['refresh']);
  //alert($_GET['refresh']);

//<meta http-equiv="refresh" content="5"> == $0
}

function init() {
  populateToC();
  //refresh_interval();
}

window.onload = init();
