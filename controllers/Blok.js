// import Blok from "../models/blokmodels.js";

const Blok = require('../models/blokmodels.js');

export const getBlok = async (req, res) => {
    try {
        const blok = await Blok.findAll({
            attributes: ["id", "nama_blok", "tahun_tanam", "jumlah_pokok", "rbt"],
        });
        res.json(blok);
    } catch (error) {
        console.log(error);
    }
};