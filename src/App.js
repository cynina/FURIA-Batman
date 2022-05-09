import "./styles.css";
import { useState } from "react";
import { Wheel } from "./components/Roulette";
import { makeStyles, Modal } from "@material-ui/core";
import { getRandomInt } from "./utils";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "absolute",
    width: "70%",
    border: "2px solid #000",
    fontSize: 30,
    textAlign: "center",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
  },
  wheelContainer: {
    width: "45em",
    height: "45em",
    position: "fixed",
    top: "10%",
    left: "26%",
  },
  button: {
    margin: "3em auto",
    display: "block",
    width: "10rem",
    cursor: "pointer",
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
    1: "Scarf",
    2: "T-Shirt",
    3: "Scarf",
    4: "Sweatshirt",
    5: "Scarf",
    6: "Cap",
  };

  const onClick = () => {
    if (!spinning) {
      setSpinning(true);
      const newCouponNum = getRandomInt(1, 6);
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
      <Modal open={open} onClose={handleClose} className={classes.modal}>
        <div className={classes.paper}>
          <p>{mockData[couponNum]}</p>
        </div>
      </Modal>
    </div>
  );
}
