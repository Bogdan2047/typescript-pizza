import { FC } from "react";
import { NavLink } from "react-router-dom";
import "./css/footer.css";

export const Footer : FC = () => {
  return (
    <div className="footer-btn">
      <NavLink to="/blog">
        <button className="btn btn-primary">Blog</button>
      </NavLink>
    </div>
  );
};
