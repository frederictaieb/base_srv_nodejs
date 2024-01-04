const express = require("express");
const {Candidates} = require("../models");

const router = express.Router();

router.get("/", async (req, res)=> {
    const listOfCandidates = await Candidates.findAll();
    res.json(listOfCandidates);
});

router.post("/", async (req, res)=> {
    candidate = req.body;
    await Candidates.create(candidate);
    res.json(candidate);
});

module.exports = router;