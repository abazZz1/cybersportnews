var button = new Audio();
button.src = "audio/odin-klik-myshki.mp3"

function playButton(num) {
  button.play();
}

var btn = new Audio();
btn.src = "audio/buttonclickrelease.mp3"

function playButton(num) {
  btn.play();
}

var but = new Audio();
but.src = "vylet-1.mp3"

function playButton(num) {
  but.play();
}

var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var img1 = document.getElementById("myImg1");
var img2 = document.getElementById("myImg2");
var img3 = document.getElementById("myImg3");
var img4 = document.getElementById("myImg4");
var img5 = document.getElementById("myImg5");
var img6 = document.getElementById("myImg6");
var img7 = document.getElementById("myImg7");
var img8 = document.getElementById("myImg8");
var img9 = document.getElementById("myImg9");
var img10 = document.getElementById("myImg10");
var img11 = document.getElementById("myImg11");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img1.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img2.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img3.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img4.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img5.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img6.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img7.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img8.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img9.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img10.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

img11.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

document.onclick = () => applyCursorRippleEffect(event);

function applyCursorRippleEffect(e) {
   const ripple = document.createElement("div");

   ripple.className = "ripple";
   document.body.appendChild(ripple);

  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`;
   ripple.style.animation = `ripple-effect .4s  linear`;
   ripple.onanimationend = () => {
     document.body.removeChild(ripple);

   }

}

var d = new Date();
var curr_date = d.getDate();
var curr_month = d.getMonth() + 1; //months are zero based
var curr_year = d.getFullYear();
if(curr_month < 10) {
var date = "Current date: " + curr_date + ":0" + curr_month + ":" + curr_year;
document.getElementById("CurrDate").innerHTML = date;
document.getElementById("CurrDate1").innerHTML = date;
}
else if (curr_month >= 10 && curr_month <= 12){
var date1 = "Current date: " + curr_date + ":" + curr_month + ":" + curr_year;
document.getElementById("CurrDate").innerHTML = date1;
document.getElementById("CurrDate1").innerHTML = date1;
}
