var oocImages = [];

for (var i = 1; i <= 21; i++) {
  oocImages.push(i);
}

function oocItPNG(oocImages) {
  var randOOCPNG = oocImages[Math.floor(Math.random() * oocImages.length)];
  var img = document.createElement("img");
  var imgShortcut = `https://plextora.github.io/pulsus-ooc-gen/pulsus-ooc-imgs/${randOOCPNG}.png`;
  console.log(imgShortcut);
  img.setAttribute("class", "img-fluid");
  img.src = imgShortcut;
  document.getElementById("oocGoesHere").innerHTML = "";
  document.getElementById("oocGoesHere").appendChild(img);
}
