const mysql = require('mysql');

//konfigurasi koneksi
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crud_db'
});

// class Kehadiran {
//     static async inputKeterangan(mahasiswaId, keterangan) {
//       const query = 'INSERT INTO kehadiran (npm, keterangan) VALUES (?, ?)';
//       await conn.execute(query, [mahasiswaId, keterangan]);
//     }
//   }
const Kehadiran = {};
Kehadiran.inputHadir = (npm, keterangan) => {
    let sql = 'INSERT INTO kehadiran (npm, keterangan) VALUES (?, ?)';
    conn.query(sql, [npm, keterangan]);
}
Kehadiran.inputSakit = (npm, keterangan) => {
    let sql = 'INSERT INTO kehadiran (npm, keterangan) VALUES (?, ?)';
    conn.query(sql, [npm, keterangan]);
}
Kehadiran.inputIzin = (npm, keterangan) => {
    let sql = 'INSERT INTO kehadiran (npm, keterangan) VALUES (?, ?)';
    conn.query(sql, [npm, keterangan]);
}
Kehadiran.inputAlpa = (npm, keterangan) => {
    let sql = 'INSERT INTO kehadiran (npm, keterangan) VALUES (?, ?)';
    conn.query(sql, [npm, keterangan]);
}

Kehadiran.getAll = (callback) => {
    let sql = "SELECT npm, mahasiswa_nama FROM mahasiswa";
    conn.query(sql, callback);
};


// async function Kehadiran.inputKeterangan(mahasiswaNpm, keterangan) {
//     const query = 'INSERT INTO kehadiran (npm, keterangan) VALUES (?, ?)';
//     await conn.execute(query, [mahasiswaNpm, keterangan]);
//   }
  

// // class Kehadiran {
// //   static async inputKeterangan(mahasiswaNpm, keterangan) {
// //     const query = 'INSERT INTO kehadiran (npm, keterangan) VALUES (?, ?)';
// //     await conn.execute(query, [mahasiswaNpm, keterangan]);
// //   }
// // }

module.exports = Kehadiran;


// const Kehadiran = {};

// Kehadiran.getAll = (callback) => {
//     let sql = "SELECT npm, mahasiswa_nama FROM mahasiswa";
//     conn.query(sql, callback);
//   };

// Kehadiran.create = (data, callback) => {
//     //let data = {absensi_id: req.body.absensi_id, absensi_nama: req.body.absensi_nama, absensi_jurusan: req.body.absensi_jurusan};
//     // let sql = "INSERT INTO absensi SET ?";
//     // conn.query(sql, data, callback);
//     let sql = 'INSERT INTO kehadiran (npm, keterangan) VALUES (?, ?)';
//     conn.query(sql, data, callback);
//     // const values = [nim, keterangan];
// };

// module.exports = Kehadiran;
