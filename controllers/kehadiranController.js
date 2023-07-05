const Mahasiswa = require('../models/mahasiswaModels');
const Kehadiran = require('../models/kehadiranModels');


// class kehadiranController {
//   static async kehadiran(req, res) {
//     try {
//       const results = await Mahasiswa.getAll();
//       res.render('kehadiran', { results });
//     } catch (error) {
//       console.log(error);
//       res.status(500).send('Terjadi kesalahan pada server');
//     }
//   }
const kehadiranController = {};
kehadiranController.inputHadir = async (req, res) => {
  let data = req.params.npm
  Kehadiran.inputHadir( data, 'hadir',(err, results) => {
    if (err) throw err;
    res.redirect('/kehadiran')
  })
},
kehadiranController.inputSakit = async (req, res) => {
  let data = req.params.npm
  Kehadiran.inputSakit(data, 'sakit',(err, results) => {
    if (err) throw err;
    res.redirect('/kehadiran')
  })
},
kehadiranController.inputIzin = async (req, res) => {
  let data = req.params.npm
  Kehadiran.inputIzin(data, 'izin',(err, results) => {
    if (err) throw err;
    res.redirect('/kehadiran')
  })
},
kehadiranController.inputAlpa = async (req, res) => {
  let data = req.params.npm
  Kehadiran.inputAlpa(data, 'tanpa keterangan',(err, results) => {
    if (err) throw err;
    res.redirect('/kehadiran')
  })
},
// kehadiranController.inputKeterangan = async (req, res) => {
//   let data = req.params.npm
//   Kehadiran.inputHadir(data, 'hadir',(err, results) => {
//     if (err) throw err;
//     res.redirect('/kehadiran')
//   })
// }
//   try {
//     const mahasiswaId = req.params.npm;
//     await Kehadiran.inputHadir(mahasiswaId, 'hadir');
//     res.redirect('/');
//     } catch (error) {
//       console.log(error);
//       res.status(500).send('Terjadi kesalahan pada server');
//       }
// }
//   static async inputHadir(req, res) {
//     try {
//       const mahasiswaId = req.params.npm;
//       await Kehadiran.inputKeterangan(mahasiswaId, 'hadir');
//       res.redirect('/');
//     } catch (error) {
//       console.log(error);
//       res.status(500).send('Terjadi kesalahan pada server');
//     }
//   }

//   static async inputSakit(req, res) {
//     try {
//       const mahasiswaId = req.params.npm;
//       await Kehadiran.inputKeterangan(mahasiswaId, 'sakit');
//       res.redirect('/');
//     } catch (error) {
//       console.log(error);
//       res.status(500).send('Terjadi kesalahan pada server');
//     }
//   }

 
// };
// kehadiranController.kehadiran = (req, res) => {
//       Kehadiran.getAll((err, results) => {
//         if (err) throw err;
//         res.render('kehadiran', { results: results });
//       });
//     };
// class KehadiranController {
//   static async getAll(req, res) {
//     try {
//       const results = await Mahasiswa.getAll();
//       res.render('kehadiran', { results });
//     } catch (error) {
//       console.log(error);
//       res.status(500).send('Terjadi kesalahan pada server');
//     }
//   }

//   static async inputHadir(req, res) {
//     try {
//       const mahasiswaNpm = req.params.npm;
//       await Kehadiran.inputKeterangan(mahasiswaNpm, 'hadir');
//       res.redirect('/');
//     } catch (error) {
//       console.log(error);
//       res.status(500).send('Terjadi kesalahan pada server');
//     }
//   }

//   static async inputSakit(req, res) {
//     try {
//       const mahasiswaNpm = req.params.npm;
//       await Kehadiran.inputKeterangan(mahasiswaNpm, 'sakit');
//       res.redirect('/');
//     } catch (error) {
//       console.log(error);
//       res.status(500).send('Terjadi kesalahan pada server');
//     }
//   }
// }

// module.exports = kehadiranController;

// const Kehadiran = require('../models/kehadiranModels');
// const Mahasiswa = require('../models/mahasiswaModels');



kehadiranController.kehadiran = (req, res) => {
  Kehadiran.getAll((err, results) => {
    if (err) throw err;
    res.render('kehadiran', { results: results });
  });
};


// kehadiranController.inputKehadiran = (req, res) => {
//   let data = {npm: req.body.npm, keterangan: req.body.keterangan};
//   Kehadiran.create(data, (err, results) => {
//     if (err) throw err;
//     res.redirect('/');
//   });
// };

module.exports = kehadiranController;