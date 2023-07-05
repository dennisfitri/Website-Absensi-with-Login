const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const mahasiswaController = require('../controllers/mahasiswaController');
const kehadiranController = require('../controllers/kehadiranController');
const Rekap = require('../models/rekapModels');
const rekapController = require('../controllers/riwayatController');
const authController = require('../controllers/auth');
// const conn = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'crud_db'
//   });
router.get('/', (req, res) => {
    res.render('index');
});
router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/login', (req, res) => {
    res.render('login');
});
router.post('/auth/register', authController.register );
router.post('/auth/login', authController.login);
router.get('/mahasiswa', mahasiswaController.index);
router.get('/kehadiran', kehadiranController.kehadiran);
router.post('/save', mahasiswaController.create);
router.post('/update', mahasiswaController.update);
router.post('/delete', mahasiswaController.delete);
router.get('/kehadiran/:npm/hadir', kehadiranController.inputHadir);
router.get('/kehadiran/:npm/sakit', kehadiranController.inputSakit);
router.get('/kehadiran/:npm/izin', kehadiranController.inputIzin);
router.get('/kehadiran/:npm/alpa', kehadiranController.inputAlpa);
router.get('/rekap', rekapController.getAllRekap)

// router.get('/rekap', async (req, res) => {
//     try {
//       const rekap = await Rekap.getAllRekap();
//       res.render('rekap', {rekap});
//     } catch (err) {
//       console.error(err);
//       res.status(500).send('Internal Server Error');
//     }
//   });
// router.get('/rekap', (req, res) => {
//     // const query = `
//     //   SELECT keterangan, COUNT(*) AS jumlah
//     //   FROM kehadiran
//     //   GROUP BY keterangan
//     // `;
//     const query = `
//       SELECT npm, keterangan, COUNT(*) AS jumlah
//       FROM kehadiran
//       GROUP BY npm
//     `;
//     conn.query(query, (err, result) => {
//       if (err) throw err;
//       res.render('rekap', { data: result });
//     });
//     const query2 = `
//       SELECT npm, keterangan, COUNT(*) AS hadir
//       FROM kehadiran
//       WHERE keterangan='hadir'
//       GROUP BY npm
//     `;
//     conn.query(query2, (err, result) => {
//       if (err) throw err;
//       res.render('rekap', { data: result });
//     });
//   });
//   const query2 = `
//       SELECT npm, keterangan, COUNT(*) AS hadir
//       FROM kehadiran
//       WHERE keterangan='hadir'
//       GROUP BY npm
//     `;
//     conn.query(query2, (err, result) => {
//       if (err) throw err;
//       res.render('rekap', { data: result });
//     });
//   const query3 = `
//       SELECT npm, keterangan, COUNT(*) AS sakit
//       FROM kehadiran
//       WHERE keterangan='sakit'
//       GROUP BY npm
//     `;
//     conn.query(query3, (err, result) => {
//       if (err) throw err;
//       res.render('rekap', { data: result });
//     });
//     const query4 = `
//       SELECT npm, keterangan, COUNT(*) AS sakit
//       FROM kehadiran
//       WHERE keterangan='izin'
//       GROUP BY npm
//     `;
//     conn.query(query4, (err, result) => {
//       if (err) throw err;
//       res.render('rekap', { data: result });
//     });
//     const query5 = `
//       SELECT npm, keterangan, COUNT(*) AS sakit
//       FROM kehadiran
//       WHERE keterangan='tanpa keterangan'
//       GROUP BY npm
//     `;
//     conn.query(query5, (err, result) => {
//       if (err) throw err;
//       res.render('rekap', { data: result });
//     });


module.exports = router;
