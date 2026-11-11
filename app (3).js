const express = require('express');
const app = express();
const port = 3000;

const dataAnggota = [
  { id: 1, nama: "Ahmad Fauzan", nim: "20250040089" },
  { id: 2, nama: "Zacky Alif", nim: "20250040159" },
  { id: 3, nama: "Jihad", nim: "20200040050" },
  { id: 4, nama: "Victorius", nim: "20250041000" }
];

app.get('/', (req, res) => {
  res.send(`Selamat datang di server Kelompok 9`);
});

app.get('/team/:nama', (req, res) => {
  res.send(`Hai, saya ${req.params.nama} dari Kelompok 9`);
});

app.get('/info', (req, res) => {
  res.json(dataAnggota);
});

app.get('/data', (req, res) => {
  res.redirect('/info');
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});