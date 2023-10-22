var titleText = document.title;


function transport(url) {
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function titleMarquee() {
  titleText = titleText.substring(1, titleText.length) + titleText.substring(0, 1);
  document.title = titleText;
  setTimeout("titleMarquee()", 500);
}

function togglePFP() {
  let pfp = document.getElementById("yendy-pfp");
  if (pfp.classList.contains("pfp-clicked")) {
    pfp.classList.remove("pfp-clicked");
  } else {
    pfp.classList.add("pfp-clicked");
  }
}

window.onload = function() {
  console.log("Hi hello, hi hello - QAEZZ");

  titleMarquee();
}

