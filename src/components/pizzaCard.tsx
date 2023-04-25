import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { getOrderPizzaMinus } from "../rtk/slice";
// import { getOrderPizza } from "../redux/actionCreator";
import "./css/pizza.css";

type TypeProps = {
  name: string,
    id: number,
    img: any,
    price: number,
    type: number[],
    size: number[],
    dough: number[],
    count: number,
}


export const PizzaCard: FC <TypeProps>= (props:TypeProps) => {
  const { id, img, name, size, type, price } = props;

  const typeNames = ["традиционное", "тонкое"];

  const [pizzaorder, setPizzaorder] = useState<number>(1);
  const [activeType, setActiveType] = useState<number>(0);
  const [activeSize, setActiveSize] = useState<number>(0);
  const [priceAction, setPriceAction] = useState<number>(price);

  let dispatch = useDispatch();

  const counIncrement = () => {
    setPizzaorder(pizzaorder + 1);
    dispatch(getOrderPizzaMinus(setSelected));
  };

  const changePriceOfSize = (i:number) => {
    if (i == 0) {
      setPriceAction(price);
    }

    if (i == 1) {
      setPriceAction(price + 10);
    }

    if (i == 2) {
      setPriceAction(price + 20);
    }
    return [setPriceAction, setActiveSize(i)];
  };

  let setSelected = {
    id: id,
    name: name,
    img: img,
    dough: activeType,
    size: activeSize,
    count: 1,
    price: priceAction,
  };

  return (
    <div className="cards" style={{ width: 18 + "rem" }} key={id}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
      </div>
      <div className="block-kids">
        <ul className="size-dough">
          {type.map((el:any, i:number) => {
            return (
              <li
                key={i}
                onClick={() => setActiveType(el)}
                className={activeType === el ? "active" : ""}
              >
                {typeNames[el]}
              </li>
            );
          })}
        </ul>
        <ul className="size-pizza">
          {size.map((item:any, i:number) => {
            return (
              <li
                key={i}
                onClick={() => changePriceOfSize(i)}
                className={activeSize === i ? "active" : ""}
              >
                {item} см.
              </li>
            );
          })}
        </ul>
      </div>
      <div className="price">
        <h4>от {priceAction} грн.</h4>
        <button
          className="btn btn-outline-danger"
          key={id}
          onClick={() => counIncrement()}
        >
          + Добавить {pizzaorder - 1}
        </button>
      </div>
    </div>
  );
};
