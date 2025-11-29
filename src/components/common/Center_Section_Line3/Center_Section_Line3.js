import React from "react";
import "./Center_Section_Line3.css";

export default function CenterTitle({
  text,
  color = "#7fbfc1",       // لون العنوان
  lineColor = "#7fbfc1",   // لون الخطين
  lineWidth = "100%",      // طول الخطين
  lineHeight = "3px",      // سمك الخط
  fontSize = "20px"        // حجم العنوان
}) {
  return (
    <div className="center-title" dir="rtl">
      <span
        className="center-line"
        style={{ backgroundColor: lineColor, height: lineHeight, width: lineWidth }}
      ></span>

      <h2 className="center-title-text" style={{ color, fontSize }}>
        {text}
      </h2>

      <span
        className="center-line"
        style={{ backgroundColor: lineColor, height: lineHeight, width: lineWidth }}
      ></span>
    </div>
  );
}
