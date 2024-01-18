// KELILING PERSEGI
const sisikel = document.getElementById("sisi-kel");
const kelPersegi = document.getElementById("kelPersegi");
const outputKelPersegi = document.getElementById("outputKelPersegi");
kelPersegi.addEventListener("click", function () {
  let s = sisikel.value;
  let k = 4 * s;
  outputKelPersegi.innerHTML += `Keliling persegi apabila diketahui ukuran sisi ${s} adalah...<br>`;
  outputKelPersegi.innerHTML += `K = 4 x s<br>`;
  outputKelPersegi.innerHTML += `K = 4 x ${s}<br>`;
  outputKelPersegi.innerHTML += `K = ${k}<br>`;
  outputKelPersegi.innerHTML += `Jadi, keliling persegi adalah ${k}`;
});

// LUAS PERSEGI
const sisiluas = document.getElementById("sisi-luas");
const LuasPersegi = document.getElementById("LuasPersegi");
const outputLuasPersegi = document.getElementById("outputLuasPersegi");
LuasPersegi.addEventListener("click", function () {
  let s = sisiluas.value;
  let l = s * s;
  outputLuasPersegi.innerHTML += `Luas persegi apabila diketahui ukuran sisi ${s} adalah...<br>`;
  outputLuasPersegi.innerHTML += `L = s x s<br>`;
  outputLuasPersegi.innerHTML += `L = ${s} x ${s}<br>`;
  outputLuasPersegi.innerHTML += `L = ${l}<br>`;
  outputLuasPersegi.innerHTML += `Jadi, luas persegi adalah ${l}`;
});

// KELILING PERSEGI PANJANG
const panjangKel = document.getElementById("panjang-kel");
const lebarKel = document.getElementById("lebar-kel");
const kelPersegiP = document.getElementById("kelPersegiP");
const outputKelP = document.getElementById("outputKelP");
kelPersegiP.addEventListener("click", function () {
  let p = parseFloat(panjangKel.value);
  let l = parseFloat(lebarKel.value);
  let x = p + l;
  let K = 2 * x;
  outputKelP.innerHTML += `Keliling persegi panjang apabila diketahui ukuran panjang ${p} dan lebar ${l} adalah...<br>`;
  outputKelP.innerHTML += `K = 2 ( p + l )<br>`;
  outputKelP.innerHTML += `K = 2 ( ${p} + ${l} )<br>`;
  outputKelP.innerHTML += `K = 2 (${x})<br>`;
  outputKelP.innerHTML += `K = ${K}<br>`;
  outputKelP.innerHTML += `Jadi, keliling persegi panjang adalah ${K}`;
});

// LUAS PERSEGI PANJANG
const panjangLuas = document.getElementById("panjang-luas");
const lebarLuas = document.getElementById("lebar-luas");
const luasPersegiP = document.getElementById("luasPersegiP");
const outputLuasP = document.getElementById("outputLuasP");
luasPersegiP.addEventListener("click", function () {
  let p = parseFloat(panjangLuas.value);
  let l = parseFloat(lebarLuas.value);
  let L = p * l;
  outputLuasP.innerHTML += `Luas persegi panjang apabila diketahui ukuran panjang ${p} dan lebar ${l} adalah...<br>`;
  outputLuasP.innerHTML += `L = p x l<br>`;
  outputLuasP.innerHTML += `L = ${p} x ${l}<br>`;
  outputLuasP.innerHTML += `L = ${L}<br>`;
  outputLuasP.innerHTML += `Jadi, luas persegi panjang adalah ${L}`;
});

function reset() {
  // Mendapatkan semua elemen input dengan class 'form-control'
  var inputElements = document.querySelectorAll(".form-control");

  // Mendapatkan semua elemen div dengan class 'form'
  var divElements = document.querySelectorAll(".form");

  // Mengatur nilai properti 'value' elemen input menjadi string kosong
  inputElements.forEach(function (input) {
    input.value = "";
  });

  // Mengatur konten HTML elemen div menjadi string kosong
  divElements.forEach(function (div) {
    div.innerHTML = "";
  });
}
