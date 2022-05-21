const express = require("express");

const router = express.Router();

const {
  addKaryawan,
  getKaryawans,
  getKaryawan,
  updateKaryawan,
  deleteKaryawan,
} = require("../controllers/karyawan");

router.post("/karyawan", addKaryawan);
router.get("/karyawans", getKaryawans);
router.get("/karyawan/:id", getKaryawan);
router.patch("/update/:id", updateKaryawan);
router.delete("/delete/:id", deleteKaryawan);

module.exports = router;
