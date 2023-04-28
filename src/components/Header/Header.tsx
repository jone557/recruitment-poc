import { FC } from "react";

import "./style.scss";
import { useNavigate } from "react-router-dom";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="header-container">
      <div>
        <span>Header</span>
      </div>

      <div>
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};
