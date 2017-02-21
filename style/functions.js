function populateToC()
{
  var ToC = $("nav ul");

  var newLine, el, title, link;

  $(".filename").each(function() {
    el = $(this);
    title = el.text();
    link = "#" + el.attr("id");

    newLine = $("<li>").html("<a href="+link+">"+title+"</a>");

    ToC.append(newLine);
  });
}

function init() {
  populateToC();
}

window.onload = init();
