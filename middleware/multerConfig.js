const multer = require('multer');
const path = require('path');

// Multer Disk Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + Date.now() + ext);
  }
});

// File Filter for Image Validation
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = /jpeg|jpg|png/;
  const mimeType = allowedFileTypes.test(file.mimetype);
  const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());

  if (mimeType && extname) {
    return cb(null, true);
  } else {
    cb(new Error('Only .jpeg, .jpg, or .png files are allowed!'));
  }
};

// Multer Upload Function
const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // Limit 5MB
  fileFilter: fileFilter
});

module.exports = upload;
