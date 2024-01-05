const express = require("express");
const {Candidates} = require("../models");

const router = express.Router();

router.get("/", async (req, res)=> {
    const listOfCandidates = await Candidates.findAll();
    res.json(listOfCandidates);
});
router.get("/byId/:id", async (req, res) => {
    const id = req.params.id;
    const candidate = await Candidates.findByPk(id);
    res.json(candidate);
});

router.post("/", async (req, res)=> {
    candidate = req.body;
    await Candidates.create(candidate);
    res.json(candidate);
});

module.exports = router;