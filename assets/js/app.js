$(document).ready(function() {
  //Select '<a>' tags with class '.btn'
  const buttonClicked = $(".btn");

  buttonClicked.on("click", function() {
    let buttonId = $(this).attr("id");

    switch (buttonId) {
      case "burger_page":
        window.location.href = "https://mysterious-garden-21264.herokuapp.com/";
        break;
      case "burger_code":
        window.location.href = "https://github.com/pirueto2004/burger";
        break;
      case "burger_post":
        window.location.href =
          "https://www.linkedin.com/feed/update/urn:li:activity:6548185993420304384";
        break;
    }
  });
});
