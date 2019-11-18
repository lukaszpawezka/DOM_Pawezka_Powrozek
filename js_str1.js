/*jslint browser */

function imgFunct() {
 var ileZdjc = document.images.length;
 document.getElementById("wynik1").innerHTML = "Przepysznych zdjęć serniczków jest aż: " + ileZdjc;
}

function hrefFunct() {
 var ileHref = document.links.length;
 document.getElementById("wynik2").innerHTML = "Linków do serniczków na tej stronie jest: " + ileHref;
}

function formFunct() {
 var ileForm = document.forms.length;
 document.getElementById("wynik3").innerHTML = "Formularzy serniczkowych na tej stronie jest: " + ileForm;
}

function anchFunct() {
 var ileA = document.anchors.length;
 document.getElementById("wynik4").innerHTML = "Zakotwiczen serniczkowych na tej stronie jest: " + ileA;
}

function itemFunct() {
 var zdjc = document.images.item(0);
 document.getElementById("wynik5").appendChild(zdjc);
}

function item2Funct() {
 var zdjc = document.images.namedItem("serniczekDOM");
 document.getElementById("wynik6").appendChild(zdjc);
}

function czyAlt(event) {
 if (event.altKey) {
  var x = document.createElement("IMG");
  x.setAttribute("src", "img/jaglany.jpg");
  x.setAttribute("width", "450");
  x.setAttribute("height", "441");
  x.setAttribute("alt", "jaglany");
  document.getElementById("wynik7").appendChild(x);
 } else {
  alert("Wcisnij klawisz Alt!");
 }
}

function czyCtr(event) {
 if (event.ctrlKey) {
  var x = document.createElement("IMG");
  x.setAttribute("src", "img/podlaski.jpg");
  x.setAttribute("alt", "podlaski");
  document.getElementById("wynik8").appendChild(x);
 } else {
  alert("Wcisnij klawisz Ctrl!");
 }
}

function czyShift(event) {
 if (event.shiftKey) {
  var x = document.createElement("IMG");
  x.setAttribute("src", "img/prezydent.jpg");
  x.setAttribute("alt", "prezydent");
  document.getElementById("wynik9").appendChild(x);
 } else {
  alert("Wciśnij klawisz Shift!");
 }
}

function jakiKod(event) {
 var znak = event.keyCode;
 document.getElementById("wynik10").innerHTML = "Kod ostaniego wpisanego znaku to: " + znak;
}

function pokazWsp(event){
 var x = event.clientX;
 var y = event.clientY;
 var wspolrzedne = "Wspolrzedne najlepszego sedniczka: X: " + x + ", Y: " + y;
 document.getElementById("wynik11").innerHTML = wspolrzedne;
}

function pokazWsp2(event){
 var x = event.screenX;
 var y = event.screenY;
 var wspolrzedne = "Wspolrzedne najlepszego sedniczka: X: " + x + ", Y: " + y;
 document.getElementById("wynik12").innerHTML = wspolrzedne;
}

function wcisniecieMyszki() {
 document.getElementById("wiersz").style.fontSize = "30px";
}

function puszczenieMyszki() {
 document.getElementById("wiersz").style.fontSize = "20px";
}