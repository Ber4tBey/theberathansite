import "../styles/Header.css";
import React from "react";

function Header() {
  return (
    <header className="headerContainer" id="header">
      <div className="headerInner">
        {/*  */}
        <div className="headerRight">
          <div className="headerRightInner">
            <img
              src={`${process.env.PUBLIC_URL}/berat.png`}
              alt="theberathan"
              className="headerPhoto"
            />
          </div>
        </div>
        <div className="headerLeft">
          <div className="headerLeftInner">
            <div className="headerText">
              <h1 className="headerBannerText">
                Yazılımda ve Girişimcilikte
                <span className="headerColored"> Yenilikçi Çözümler</span>
              </h1>
              <div className="headerSubtitle">
                <h6 className="headerSubtitleText">
                  En güncel yazılım trendleri ve girişimcilik tavsiyeleri için
                  doğru yerdesiniz.
                </h6>
              </div>
            </div>
            <div className="headerCTA">
              <button className="headerCTAB">Çok Yakında</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
