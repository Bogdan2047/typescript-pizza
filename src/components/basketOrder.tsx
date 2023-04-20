import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteOrder,
  getOrderPizzaMinus,
  getOrderPizzaPlus,
} from "../redux/actionCreator";

export const BasketOrder = (props:any) => {
  const { id, img, name, size, dough, count, price } = props;
  const [counts, setCounts] = useState(count);

  const dispatch = useDispatch();

  const typeNames = ["традиционное тесто", "тонкое тесто"];
  const typeSize = [26, 30, 40];

  const plusHandler = () => {
    setCounts(counts + 1);
    dispatch(getOrderPizzaPlus(data));
  };

  const minusHandler = () => {
    setCounts(counts - 1);
    dispatch(getOrderPizzaMinus(data));
  };

  let data = {
    id,
    count,
    price,
  };

  const deleteHandler = () => {
    dispatch(deleteOrder(id));
  };

  return (
    <div className="basket-order" key={id}>
      <div className="basket-order-img">
        <img src={img} alt="/" />
      </div>
      <div className="basket-order-data">
        <h4>{name}</h4>
        <h6>
          {typeNames[dough]}, {typeSize[size]} см.
        </h6>
      </div>
      <div className="basket-order-count">
        <button className="btn-minus" onClick={minusHandler}>
          -
        </button>
        <h4>{counts}</h4>
        <button className="btn-plus" onClick={plusHandler}>
          +
        </button>
      </div>
      <div className="basket-order-price">
        <h4>{price} грн.</h4>
      </div>
      <div className="basket-order-delete">
        <button className="btn-skip" onClick={deleteHandler}>
          x
        </button>
      </div>
    </div>
  );
};
