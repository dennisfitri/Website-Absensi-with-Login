-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 27, 2023 at 06:58 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crud_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `absensi`
--

CREATE TABLE `absensi` (
  `absensi_id` int(11) NOT NULL,
  `absensi_nama` varchar(255) NOT NULL,
  `absensi_jurusan` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `absensi`
--

INSERT INTO `absensi` (`absensi_id`, `absensi_nama`, `absensi_jurusan`) VALUES
(202103002, 'Dennis Fitri', 'Sistem Informasi'),
(202103008, 'Latifah Arum Sulistyaningsih', 'Sistem Informasi'),
(202103015, 'Rachel Marta Maria', 'Sistem Informasi');

-- --------------------------------------------------------

--
-- Table structure for table `accses_token`
--

CREATE TABLE `accses_token` (
  `token` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `kehadiran`
--

CREATE TABLE `kehadiran` (
  `npm` int(11) DEFAULT NULL,
  `keterangan` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `kehadiran`
--

INSERT INTO `kehadiran` (`npm`, `keterangan`) VALUES
(202103002, 'hadir'),
(202103009, 'sakit'),
(2021030021, 'hadir'),
(2021030022, 'hadir');

-- --------------------------------------------------------

--
-- Table structure for table `mahasiswa`
--

CREATE TABLE `mahasiswa` (
  `npm` int(11) NOT NULL,
  `mahasiswa_nama` varchar(255) DEFAULT NULL,
  `mahasiswa_jurusan` varchar(255) DEFAULT NULL,
  `id_matakuliah` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mahasiswa`
--

INSERT INTO `mahasiswa` (`npm`, `mahasiswa_nama`, `mahasiswa_jurusan`, `id_matakuliah`) VALUES
(20210302, 'Rachel Marta', 'Sistem Informasi', 1),
(202103001, 'Dennis Fitri', 'Sistem Informasi', 2);

-- --------------------------------------------------------

--
-- Table structure for table `matakuliah`
--

CREATE TABLE `matakuliah` (
  `id_matakuliah` int(11) NOT NULL,
  `nama_matakuliah` varchar(50) DEFAULT NULL,
  `id_dosen` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `matakuliah`
--

INSERT INTO `matakuliah` (`id_matakuliah`, `nama_matakuliah`, `id_dosen`) VALUES
(1, 'Rekayasa Perangkat Lunak', 2),
(2, 'Data Mining', 3);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`) VALUES
(2, 'kharisma', 'kharisma@gmail.com', '$2a$08$Zv5FLhm.Sn8Jbpf5.3d7v.mi1HCkQEFwL82NnZ47MQaKhoQfcZ5Pm', 'dosen'),
(3, 'ulfi', 'ulfi@gmail.com', '$2a$08$SRlIYzDOhmk4refIvYeBcuLvcFMOfhC8MORmkC1bS81sq8tSfX3.K', 'dosen'),
(4, 'anton', 'anton@gmail.com', '12345678', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `absensi`
--
ALTER TABLE `absensi`
  ADD PRIMARY KEY (`absensi_id`);

--
-- Indexes for table `kehadiran`
--
ALTER TABLE `kehadiran`
  ADD KEY `npm` (`npm`);

--
-- Indexes for table `mahasiswa`
--
ALTER TABLE `mahasiswa`
  ADD PRIMARY KEY (`npm`),
  ADD KEY `id_matakuliah` (`id_matakuliah`);

--
-- Indexes for table `matakuliah`
--
ALTER TABLE `matakuliah`
  ADD PRIMARY KEY (`id_matakuliah`),
  ADD KEY `id_dosen` (`id_dosen`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `kehadiran`
--
ALTER TABLE `kehadiran`
  ADD CONSTRAINT `kehadiran_ibfk_1` FOREIGN KEY (`npm`) REFERENCES `mahasiswa` (`npm`);

--
-- Constraints for table `mahasiswa`
--
ALTER TABLE `mahasiswa`
  ADD CONSTRAINT `mahasiswa_ibfk_1` FOREIGN KEY (`id_matakuliah`) REFERENCES `matakuliah` (`id_matakuliah`);

--
-- Constraints for table `matakuliah`
--
ALTER TABLE `matakuliah`
  ADD CONSTRAINT `matakuliah_ibfk_1` FOREIGN KEY (`id_dosen`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
