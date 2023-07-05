
const Mahasiswa = require('../models/mahasiswaModels');

const mahasiswaController = {};

mahasiswaController.index = (req, res) => {
  Mahasiswa.getAll((err, results) => {
    if (err) throw err;
    res.render('mahasiswa', { results: results });
  });
};

mahasiswaController.create = (req, res) => {
  let data = {npm: req.body.npm, mahasiswa_nama: req.body.mahasiswa_nama, mahasiswa_jurusan: req.body.mahasiswa_jurusan};
  Mahasiswa.create(data, (err, results) => {
    if (err) throw err;
    res.redirect('/mahasiswa');
  });
};

mahasiswaController.update = (req, res) => {
  let data = {npm: req.body.npm, mahasiswa_nama: req.body.mahasiswa_nama, mahasiswa_jurusan: req.body.mahasiswa_jurusan};
  Mahasiswa.update(data, req.body.id, (err, results) => {
    if (err) throw err;
    res.redirect('/mahasiswa');
  });
};

mahasiswaController.delete = (req, res) => {
  Mahasiswa.delete(req.body.npm, (err, results) => {
    if (err) throw err;
    res.redirect('/mahasiswa');
  });
};

module.exports = mahasiswaController;
