// Set the Access Token
var accessToken =
  "eb60faa2b28e0d2d2eedb833f4231389b26863cba85222a106b4ef4007084ef2";

// Call Dribble v2 API
$.ajax({
  url: "https://api.dribbble.com/v2/user/shots?access_token=" + accessToken,
  dataType: "json",
  type: "GET",
  success: function (data) {
    if (data.length > 0) {
      $.each(data.reverse(), function (i, val) {
        $("#shots").prepend(
          '<div class="swiper-slide" <a target="_blank" href="' +
            val.html_url +
            '" title="' +
            val.title +
            '"><img class="rounded-md object-cover block" src="' +
            val.images.hidpi +
            '"/>' +
            "</a></div>"
        );
      });
    } else {
      $("#shots").append("<p>No shots yet!</p>");
    }
  },
});
