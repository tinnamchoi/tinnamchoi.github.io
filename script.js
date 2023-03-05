let top_button = document.getElementById("top_button");

window.onscroll = function() {top_function()};

function top_function() {
  if (document.documentElement.scrollTop > 0) {
    top_button.style.display = "block";
  } else {
    top_button.style.display = "none";
  }
}
