import "./Section_Line.css";
import { Link } from "react-router-dom";

export default function SectionTitle({
  title = "الحملات الجارية",
  linkText = "عرض المزيد",
  onLinkClick,
  linkHref = "#",
  className = ""
}) {
  
  return (
    <div className={`section-wrapper ${className}`}>
      {/* الخط اليمين: flex: 1 */}
      <span className="line" style={{ flex: 1 }} aria-hidden="true"></span>
      
      <h2 className="title">{title}</h2>

      <span className="line" style={{ flex: 20 }} aria-hidden="true"></span>

      {onLinkClick ? (
        <button type="button" className="more" onClick={onLinkClick}>
          {linkText}
        </button>
      ) : (
        <Link className="more" to={linkHref}>
          {linkText}
        </Link>
      )}

      {/* الخط الشمال: flex: 1 */}
      <span className="line" style={{ flex: 1 }} aria-hidden="true"></span>

    </div>
  );
}