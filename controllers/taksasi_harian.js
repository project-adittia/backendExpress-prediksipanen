import Taksasi from "../models/taksasimodels.js";

export const getTaksasi = async (req, res) => {
  try {
    const taksasi = await Taksasi.findAll({
      attributes: [
        "id",
        "id_petugas",
        "tanggal",
        "nama_blok",
        "luas_panen",
        "pokok_total_panen",
        "pokok_sample",
        "buah_matang",
        "angka_kerapatan_panen",
        "jumlah_tandan",
        "jumlah_produksi",
        "tenaga_kerja",
        "transportassi",
      ],
    });
    res.json(taksasi);
  } catch (error) {
    console.log(error);
  }
};

export const addTaksasi = async (req, res) => {
  const {
    id_petugas,
    tanggal,
    nama_blok,
    luas_panen,
    pokok_total_panen,
    pokok_sampel,
    buah_matang,
    akp,
    jumlah_tandan,
    jumlah_produksi,
    tenaga_kerja,
    transportassi,
  } = req.body;
  try {
    await Taksasi.create({
      id_petugas: id_petugas,
      tanggal: tanggal,
      nama_blok: nama_blok,
      luas_panen: luas_panen,
      pokok_total_panen: pokok_total_panen,
      pokok_sample: pokok_sampel,
      buah_matang: buah_matang,
      angka_kerapatan_panen: akp,
      jumlah_tandan: jumlah_tandan,
      jumlah_produksi: jumlah_produksi,
      tenaga_kerja: tenaga_kerja,
      transportassi: transportassi,
    });
    res.json({ message: "Berhasil menambahkan data taksasi" });
  } catch (error) {
    console.log(error);
  }
};

//history user

export const historyUser = async (req, res) => {
  try {
    const history = await Taksasi.findAll({
      where: {
        id_petugas: req.body.UserId,
      },
    })
    res.json(history);
  } catch (error) {
    console.log(error);
  }
};