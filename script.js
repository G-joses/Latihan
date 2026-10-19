console.log("Script berhasil di muat");

// 1. cari elemen dari html
const tombol = document.getElementById("tombol");
const pesan = document.getElementById("pesan");

// 2. pasang event click
tombol.addEventListener("click", function () {
  pesan.textContent = "Tombol di klik!";
});
