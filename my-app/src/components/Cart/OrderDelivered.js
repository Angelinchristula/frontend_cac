import { Fragment } from "react";
import classes from "./Cart.module.css";

const OrderDelivered = (props) => {
  return (
    <Fragment>
      <section>
        <h2>Thank you for ordering!!!</h2>
        <p>
          <b>EAT and fall in Love with us!</b>
        </p>
      </section>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Fragment>
  );
};

export default OrderDelivered;