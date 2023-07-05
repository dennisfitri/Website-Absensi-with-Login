const mysql = require('mysql');

//konfigurasi koneksi
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crud_db'
});

const Mahasiswa = {};

Mahasiswa.getAll = (callback) => {
  let sql = "SELECT * FROM mahasiswa";
  conn.query(sql, callback);
};

Mahasiswa.create = (data, callback) => {
  //let data = {mahasiswa_id: req.body.mahasiswa_id, mahasiswa_nama: req.body.mahasiswa_nama, mahasiswa_jurusan: req.body.mahasiswa_jurusan};
  let sql = "INSERT INTO mahasiswa SET ?";
  conn.query(sql, data, callback);
};

Mahasiswa.update = (data, id, callback) => {
  let sql = "UPDATE mahasiswa SET mahasiswa_nama=?, mahasiswa_jurusan=? WHERE npm=?";
  conn.query(sql, [data.mahasiswa_nama, data.mahasiswa_jurusan, id], callback);
};

Mahasiswa.delete = (id, callback) => {
  let sql = "DELETE FROM mahasiswa WHERE npm=?";
  conn.query(sql, id, callback);
};

module.exports = Mahasiswa;
