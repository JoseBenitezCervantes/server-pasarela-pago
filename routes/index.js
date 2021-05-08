const express = require("express");
const router = express.Router();

router.post("/payment", (req, res) => {
  const validData = () => {
    const { name, number, cvv, month, year } = req.body;
    let isValidData = true;
    if (
      !(
        number &&
        number.toString().length > 15 &&
        number.toString().length < 18
      )
    ) {
      return false;
    }
    if (
      !(
        !!month &&
        !!year &&
        !!cvv &&
        name.length > 0 &&
        cvv.length > 0 &&
        cvv.length < 5
      )
    ) {
      return false;
    }
    return isValidData;
  };
  if (validData()) {
    res.send({
      statusCode: 200,
      message: "Success",
    });
  } else {
    res.send({
      statusCode: 400,
      message: "Wrong Data",
    });
  }
});

module.exports = router;
