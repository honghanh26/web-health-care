import React, { useState } from "react";
import Logo from '../../assets/imgs/logo.png';

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  return (
    <nav className="navbar navbar-expand-md header">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img className="logo" src={Logo} alt="Healthy" />
        </a>
        <button className="navbar-toggler menu-mobile" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <div className={`nav-icon ${(showMenuMobile ? "open" : "")}`} onClick={() => { setShowMenuMobile(!showMenuMobile) }}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div className={`collapse navbar-collapse ${(showMenuMobile ? "show" : "")}`} id="navbarText">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 top-menu">
            <li className="nav-item">
              <a className="nav-link active ps-0" aria-current="page" href="/">自分の記録</a>
            </li>
            <li className="nav-item icon-challenge">
              <a className="nav-link ps-0" href="/">チャレンジ</a>
            </li>
            <li className="nav-item icon-info position-relative">
              <span className="info_count position-absolute d-flex justify-content-center align-items-center">1</span>
              <a className="nav-link ps-0" href="/">お知らせ</a>
            </li>
          </ul>
          <span className="navbar-text ms-md-5 position-relative">
            <div className={`nav-icon ${(showMenu ? "open" : "")}`} onClick={() => { setShowMenu(!showMenu) }}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            {showMenu &&
              <div className="list-group sub-menu position-absolute">
                <a href="/" className="list-group-item list-group-item-action active" aria-current="true">
                  自分の記録
                </a>
                <a href="/" className="list-group-item list-group-item-action">体重グラフ</a>
                <a href="/" className="list-group-item list-group-item-action">目標</a>
                <a href="/" className="list-group-item list-group-item-action">選択中のコース</a>
                <a href="/" className="list-group-item list-group-item-action">コラム一覧</a>
                <a href="/" className="list-group-item list-group-item-action">設定</a>
              </div>
            }
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Header;