const { karyawan } = require("../../models");

exports.addKaryawan = async (req, res) => {
  // code here
  try {
    const data = req.body;
    const createdData = await karyawan.create({
      ...data,
    });

    console.log(data);

    res.send({
      status: "success",
      data: {
        createdData,
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "Failed",
      message: "Server error",
    });
  }
};

exports.getKaryawans = async (req, res) => {
  try {
    const data = await karyawan.findAll({
      attributes: {
        exclude: ["updatedAt"],
      },
    });

    res.send({
      status: "Successfully",
      data,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "Failed",
      message: "Server error",
    });
  }
};

exports.getKaryawan = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await karyawan.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt"],
      },
    });

    //responx
    res.send({
      status: "success",
      data: {
        karyawan: data,
      },
    });

    //tangkap errorny
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.updateKaryawan = async (req, res) => {
  try {
    const { id } = req.params;

    const data = req.body;

    await karyawan.update(data, {
      where: {
        id,
      },
    });

    res.send({
      status: "success",
      message: `Update Barang id: ${id} finished`,
      data: req.body,
    });
  } catch (err) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.deleteKaryawan = async (req, res) => {
  try {
    const { id } = req.params;

    await karyawan.destroy({
      where: {
        id,
      },
    });

    res.send({
      status: "success",
      message: `Delete karyawan id: ${id} finished`,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};
