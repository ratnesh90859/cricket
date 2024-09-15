const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const upload = require('../middleware/multerConfig');

// @route   POST /register
// @desc    Register a team and upload a logo
router.post('/', upload.single('teamLogo'), (req, res) => {
  try {
    const teamData = req.body;
    const logoFile = req.file;

    // Log form data and file details
    console.log('Team Data:', teamData);
    console.log('Logo File:', logoFile);

    res.status(200).json({
      message: 'Team registered successfully!',
      team: teamData,
      file: logoFile
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error processing request' });
  }
});

module.exports = router;
