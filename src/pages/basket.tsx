import { NavLink } from "react-router-dom";
import empty from "../img/vector.png";
import baskets2 from "../img/basket2.png";
import trash from "../img/trash.png";
import "./css/basket.css";
import { BasketOrder } from "../components/basketOrder";
import { FC } from "react";
import { deleteBasket } from "../rtk/slice";
import { useAppDispatch, useAppSelector } from "../hooks/redux";

export const Basket: FC = () => {
  const getPizzaSelector = useAppSelector(state => state.Reducer.orderPizza)
  const dispatch = useAppDispatch()
  const pizza = useAppSelector(state => state.Reducer.orderPizza)

  let price = pizza?.reduce((sum:number, item:any) => {
    return item.price + sum;
  }, 0);

  let count = pizza?.reduce((sum:number, item:any) => {
    return item.count + sum;
  }, 0);

  const deleteHandler = () => {
    dispatch(deleteBasket(getPizzaSelector));
  };

  return (
    <>
      {getPizzaSelector.length === 0 && (
        <div className="basket-empty">
          <div className="empty-text">
            <h1>Корзина пустая </h1>
            <span>Вероятней всего, вы не заказывали ещё пиццу.</span>
            <span>
              Для того, чтобы заказать пиццу, перейди на главную страницу.
            </span>
          </div>
          <div className="empty-img">
            <img src={empty} alt="/" />
          </div>
          <div className="empty-btn">
            <NavLink to="/">
              <button>Вернуться назад</button>
            </NavLink>
          </div>
        </div>
      )}
      {getPizzaSelector.length !== 0 && (
        <div className="container">
          <div className="basket-content">
            <div className="basket-intro">
              <div className="basket-name">
                <img src={baskets2} alt="/" />
                <h1>Корзина</h1>
              </div>
              <div className="delete-basket">
                <button className="btn" onClick={deleteHandler}>
                  <img src={trash} alt="/" />
                  Очистить корзину
                </button>
              </div>
            </div>
          </div>
          {getPizzaSelector.map((item:any) => {
            return (
              <BasketOrder
                id={item.id}
                img={item.img}
                name={item.name}
                size={item.size}
                dough={item.dough}
                count={item.count}
                price={item.price}
                key={item.id}
              />
            );
          })}

          <div className="basket-sum">
            <div className="basket-order-all-count">
              <h4>
                Всего пицц: <span>{count} шт.</span>
              </h4>
            </div>
            <div className="basket-all-price">
              <h4>
                Сума заказа: <span>{price} грн.</span>
              </h4>
            </div>
          </div>
          <div className="basket-btn">
            <NavLink to="/">
              <button className="btn btn-outline-secondary">
                Вернуться назад
              </button>
            </NavLink>
            <button className="btn btn-danger">Оплатить сейчас</button>
          </div>
        </div>
      )}
    </>
  );
};
