import "./Section_line2.css"

export default function SectionLine({ text, color = "#6aaeb6", lineColor = "#b9e0e6", shortLine = "70px"}) {
  return (
    <div className="section-title" dir="rtl">
      {/* الخط القصير على اليمين */}
      <span
        className="lineee short-line"
        style={{ backgroundColor: lineColor, width: shortLine }}
      ></span>

      {/* العنوان */}
      <h2 className="title-text" style={{ color: color }}>
        {text}
      </h2>

      {/* الخط الطويل على الشمال */}
      <span className="lineee long-line" style={{ backgroundColor: lineColor }}></span>
    </div>
  );
}