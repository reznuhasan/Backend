const multer = require('multer');
const path = require('path');

// Change the destination to your frontend assets folder
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "D:/riznu/Backend/Projects/Versity-Project/Doctor Appointment/frontend/src/assets");
  },
  filename: function (req, file, cb) {
    const name = Date.now() + '-' + file.originalname;
    cb(null, name);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
