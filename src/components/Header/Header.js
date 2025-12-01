import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo_66d368304b3ee.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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

      {/* صف الروابط + زر التبرع - Desktop */}
      <nav className="nav-bar hidden md:flex">
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

      {/* Hamburger Menu Button - Mobile */}
      <div className="mobile-menu-header flex md:hidden items-center justify-between px-4 py-3 bg-white border-b border-gray-200" dir="rtl">
        <button 
          onClick={toggleMenu}
          className="hamburger-btn flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </button>
        <button className="donate-btn">تبرع الآن</button>
      </div>

      {/* Mobile Menu - Mobile */}
      <nav className={`mobile-nav flex md:hidden flex-col ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 bg-white border-b border-gray-200`}>
        <ul className="mobile-nav-links flex flex-col gap-4 p-4" dir="rtl">
          <Link to="/" onClick={closeMenu}><li className="mobile-nav-item">الصفحة الرئيسية</li></Link>
          <Link to="/campaigns" onClick={closeMenu}><li className="mobile-nav-item">الحملات</li></Link>
          <Link to="/aboutcharity" onClick={closeMenu}><li className="mobile-nav-item">عن الجمعية</li></Link>
          <Link to="/store" onClick={closeMenu}><li className="mobile-nav-item">المتجر الخيري</li></Link>
          <Link to="/newsandarticles" onClick={closeMenu}><li className="mobile-nav-item">الأخبار والمقالات</li></Link>
          <Link to="/callus" onClick={closeMenu}><li className="mobile-nav-item">اتصل بنا</li></Link>
        </ul>
      </nav>

    </header>
  );
}
