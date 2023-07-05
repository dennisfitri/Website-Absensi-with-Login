const mysql = require('mysql');

//konfigurasi koneksi
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crud_db'
});

const Rekap = {};

Rekap.getAllRekap = () => {
  return new Promise((resolve, reject) => {
    // const query = `
    // SELECT kehadiran.npm, mahasiswa.mahasiswa_nama, COUNT(kehadiran.keterangan) AS jumlah
    // FROM kehadiran
    // INNER JOIN mahasiswa ON kehadiran.npm = mahasiswa.npm
    // GROUP BY kehadiran.npm, mahasiswa.mahasiswa_nama
    // `;
    const query = `
        SELECT kehadiran.npm, mahasiswa.mahasiswa_nama,
        COUNT(CASE WHEN kehadiran.keterangan = 'hadir' THEN 1 ELSE NULL END) AS jumlah_hadir,
        COUNT(CASE WHEN kehadiran.keterangan = 'sakit' THEN 1 ELSE NULL END) AS jumlah_sakit,
        COUNT(CASE WHEN kehadiran.keterangan = 'izin' THEN 1 ELSE NULL END) AS jumlah_izin,
        COUNT(CASE WHEN kehadiran.keterangan = 'tanpa keterangan' THEN 1 ELSE NULL END) AS jumlah_alpa,
        COUNT(kehadiran.keterangan) AS jumlah 
        FROM kehadiran
        INNER JOIN mahasiswa ON kehadiran.npm = mahasiswa.npm
        WHERE kehadiran.keterangan = 'hadir' OR kehadiran.keterangan = 'sakit' OR kehadiran.keterangan = 'izin' OR kehadiran.keterangan = 'tanpa keterangan'
        GROUP BY kehadiran.npm, mahasiswa.mahasiswa_nama
    `;

    conn.query(query, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

// Rekap.getRekapByKeterangan = (keterangan) => {
//   return new Promise((resolve, reject) => {
//     const query = `
//         SELECT kehadiran.npm, mahasiswa.mahasiswa_nama, COUNT(kehadiran.keterangan) AS jumlah
//         FROM kehadiran
//         INNER JOIN mahasiswa ON kehadiran.npm = mahasiswa.npm
//         WHERE keterangan = ?
//         GROUP BY kehadiran.npm, mahasiswa.mahasiswa_nama
//     `;
//     conn.query(query, [keterangan], (err, result) => {
//       if (err) reject(err);
//       resolve(result);
//     });
//   });
// };

module.exports = Rekap;
