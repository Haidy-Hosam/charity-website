import React from "react";
import "./Header.css";
import logo from "../../assets/logo_66d368304b3ee.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">

      {/* الشريط الأسود الرفيع فوق */}
      <div className="top-strip"></div>

      {/* صف اللوجو + الاتصال */}
      <div className="top-bar">
        <div className="logo-contact">
          <div className="contact">
            <span className="contact-label">اتصل بنا</span>
            <span className="contact-number">0506125552</span>
          </div>
          <div className="divider"></div>
          <img src={logo} alt="logo" className="logo-img" />
        </div>
      </div>

      {/* صف الروابط + زر التبرع */}
      <nav className="nav-bar">
        <ul className="nav-links">
          <Link to = "/"><li><a href="/">الصفحة الرئيسية</a></li></Link>
          <Link to = "/campaigns"><li>الحملات</li></Link>
          <Link to = "/aboutcharity"><li>عن الجمعية</li></Link>
          <Link to = "/store"><li>المتجر الخيري</li></Link>
          <Link to = "/newsandarticles"><li>الأخبار والمقالات</li></Link>
          <Link to = "/callus"><li>اتصل بنا</li></Link>
        </ul>
        <button className="donate-btn">تبرع الآن</button>
      </nav>

    </header>
  );
}
