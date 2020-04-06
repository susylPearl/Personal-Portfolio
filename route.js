const express = require('express');
const cors = require('cors');

const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(cors());
router.use(express.json());

const { sendEmail } = require('./mail');

router.post("/api/sendMail", (req, res) => {
    console.log(req.body);
    sendEmail(req.body, res);
});