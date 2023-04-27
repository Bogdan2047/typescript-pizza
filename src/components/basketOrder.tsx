import { FC, useState } from "react";
import { useAppDispatch } from "../hooks/redux";
import { deleteOrder, getOrderPizzaMinus, getOrderPizzaPlus } from "../rtk/slice";

type ComesProps = {
    name: string,
    id: number,
    img: any,
    price: number,
    size: any,
    dough: any,
    count: number,
}

export const BasketOrder:FC <ComesProps>= (props: ComesProps) => {
  const [counts, setCounts] = useState<number>(props.count);

  const dispatch = useAppDispatch()

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

  let data:any = {
    id : props.id,
    count : props.count,
    price : props.price,
  };

  const deleteHandler = () => {
    dispatch(deleteOrder(props.id));
  };

  return (
    <div className="basket-order" key={props.id}>
      <div className="basket-order-img">
        <img src={props.img} alt="/" />
      </div>
      <div className="basket-order-data">
        <h4>{props.name}</h4>
        <h6>
          {typeNames[props.dough]}, {typeSize[props.size]} см.
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
        <h4>{props.price} грн.</h4>
      </div>
      <div className="basket-order-delete">
        <button className="btn-skip" onClick={deleteHandler}>
          x
        </button>
      </div>
    </div>
  );
};
