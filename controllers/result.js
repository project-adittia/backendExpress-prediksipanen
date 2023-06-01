// import db from "../config/database.js";

const db = require('../config/database.js');

export const getResult = async (req, res) => {
    try {
        const result = await db.query(
            `SELECT taksasi_harian.id, taksasi_harian.nama_blok, taksasi_harian.tanggal, taksasi_harian.pokok_total_panen, taksasi_harian.jumlah_tandan, taksasi_harian.tenaga_kerja, taksasi_harian.transportassi , taksasi_harian.jumlah_produksi, database_real.taksasi_manual, database_real.produksi_real
            FROM taksasi_harian
            LEFT JOIN database_real ON taksasi_harian.nama_blok=database_real.nama_blok AND taksasi_harian.tanggal=database_real.tanggal`
        );
        res.json(result);
    } catch (error) {
        console.log(error);
    }
};