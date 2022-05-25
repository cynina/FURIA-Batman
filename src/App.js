import "./styles.css";
import { useState } from "react";
import { Wheel } from "./components/Roulette";
import Grow from "@mui/material/Grow";
import { makeStyles, Modal } from "@material-ui/core";
import { getRandomInt } from "./utils";
import BGPrize from "./assets/bg_prize.png";
import PrizeFrame from "./assets/prize_frame.gif";

const useStyles = makeStyles(() => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundImage: `url(${BGPrize})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "60%",
    width: "100%",
    outline: "none",
    position: "absolute",
  },
  paper2: {
    backgroundImage: `url(${PrizeFrame})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    fontSize: "10vw",
    textAlign: "center",
    color: "white",
    height: "100%",
    width: "100%",
    outline: "none",
    position: "absolute",
  },
  wheelContainer: {
    width: "47%",
    height: "47vw",
    position: "absolute",
    top: "10%",
    left: "26%",
  },
  prize: {
    margin: 0,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textShadow: "1px 1px 10px #ffffffcc, 1px 1px 10px #ccc",
  },
}));

export default function App() {
  const classes = useStyles();
  const [couponNum, setCouponNum] = useState(1);
  const [mustSpin, setMustSpin] = useState(false);
  const [open, setOpen] = useState(false);
  const [spinning, setSpinning] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const mockData = {
    1: "$50 GIFT CARD",
    2: "NICE TRY!",
    3: "SCARF",
    4: "SCARF",
    5: "SCARF",
    6: "SCARF",
    7: "SCARF",
    8: "NICE TRY!",
    9: "SCARF",
    10: "NICE TRY!",
    11: "SCARF",
    12: "SCARF",
    13: "SCARF",
    14: "NICE TRY!",
    15: "SCARF",
    16: "NICE TRY!",
    17: "SCARF",
    18: "SCARF",
    19: "SCARF",
    20: "SCARF",
  };

  const onClick = () => {
    if (!spinning) {
      setSpinning(true);
      const newCouponNum = getRandomInt(1, 20);
      setCouponNum(newCouponNum);
      console.log(newCouponNum);
      setMustSpin(true);
    }
  };

  return (
    <div className="App">
      <div className={classes.wheelContainer}>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={couponNum}
          onClick={() => onClick()}
          onStopSpinning={() => {
            setSpinning(false);
            setMustSpin(false);
            handleOpen();
          }}
        />
      </div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        className={classes.modal}
      >
        <Grow in={open}>
          <div className={classes.paper}>
            <div className={classes.paper2}>
              <p className={classes.prize}>{mockData[couponNum]}</p>
            </div>
          </div>
        </Grow>
      </Modal>
    </div>
  );
}
