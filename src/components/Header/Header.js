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
          <li><a href="/campaigns">الحملات</a></li>
          <li><a href="/about">عن الجمعية</a></li>
          <li><a href="/store">المتجر الخيري</a></li>
          <li><a href="/articles">الأخبار والمقالات</a></li>
          <li><a href="/contact">اتصل بنا</a></li>
        </ul>
        <button className="donate-btn">تبرع الآن</button>
      </nav>

    </header>
  );
}
