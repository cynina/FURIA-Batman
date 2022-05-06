import "./styles.css";
import React, { useState } from "react";
import { Wheel } from "./components/Roulette";
import { makeStyles, Modal } from "@material-ui/core";
import { getRandomInt } from "./utils";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    position: "absolute",
    width: "70%",
    border: "2px solid #000",
    fontSize: 30,
    textAlign: "center",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3)
  },
  wheelContainer: {
    width: "20em",
    height: "20em",
    margin: "0 auto",
    marginTop: "5em",
    position: "relative"
  },
  button: {
    margin: "3em auto",
    display: "block",
    width: "10rem",
    cursor: "pointer"
  }
}));

export default function App() {
  const classes = useStyles();
  const [couponNum, setCouponNum] = useState(1);
  const [mustSpin, setMustSpin] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const mockData = {
    1: "Intenta nuevamente",
    2: "Ganaste",
    3: "Intenta nuevamente",
    4: "Ganaste",
    5: "Intenta nuevamente",
    6: "Ganaste",
    7: "Intenta nuevamente",
    8: "Ganaste"
  };

  const onClick = () => {
    const newCouponNum = getRandomInt(1, 8);
    setCouponNum(newCouponNum);
    console.log(newCouponNum);
    console.log(couponNum);
    setMustSpin(true);
  };

  return (
    <div className="App">
      <h1>Ruleta</h1>
      <div className={classes.wheelContainer}>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={couponNum}
          onStopSpinning={() => {
            setMustSpin(false);
            handleOpen();
          }}
        />
      </div>
      <img
        src="https://github.com/weibenfalk/wheel-of-fortune-part2/blob/main/vanilla-js-wheel-of-fortune-part2-FINISHED/button.png?raw=true"
        className={classes.button}
        alt="button"
        onClick={() => onClick()}
      />
      <Modal open={open} onClose={handleClose} className={classes.modal}>
        <div className={classes.paper}>
          <p>{mockData[couponNum]}</p>
        </div>
      </Modal>
    </div>
  );
}
