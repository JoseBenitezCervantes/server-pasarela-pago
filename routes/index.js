const express = require("express");
const router = express.Router();

router.post("/payment", (req, res) => {
  const validData = () => {
    const { cardName, cardNumber, cvv, expiration } = req.body;
    console.log("🚀 ~ file: index.js ~ line 7 ~ validData ~ req.body", req.body)
    let isValidData = true;
    if (
      !(
        cardNumber &&
        cardNumber.toString().length > 15 &&
        cardNumber.toString().length < 18
      )
    ) {
      return false;
    }
    if (
      !(
        !!expiration &&
        !!cvv &&
        cardName.length > 0 &&
        cvv.length > 0 &&
        cvv.length < 5
      )
    ) {
      return false;
    }
    return isValidData;
  };
  if (validData()) {
    res.json({
      statusCode: 200,
      message: "Success",
    });
  } else {
    res.json({
      statusCode: 400,
      message: "Wrong Data",
    });
  }
});

module.exports = router;
