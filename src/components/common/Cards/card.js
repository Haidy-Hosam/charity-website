import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

export default function Card({
  id = 1,
  img,
  percentage,
  date,
  showPercentage = true,
  title,
  description,
  targetPath="/newsandarticles/campaignDetails",
  showButton = true,
  showdate = false,
  showdescription = true,
}) {
  const handleDonateClick = () => {
    console.log("u");
  };

  return (
    <Link to={`${targetPath}/${id}`} className="card_link">
      <article className="card-container">
        <div className="image-wrapper">
          <img src={img} alt={title} className="card_img" />
          {showPercentage && <div className="badge">{percentage}%</div>}

          <div className="card_overlay">
            <div className="overlay_content">
              {/* هنا ممكن تضيفي المبلغ وشريط التقدم مستقبلاً زي الصورة */}
              {/* العنوان والوصف بيظهروا هنا عند الهوفر بلون أبيض */}
              {title && <h3 className="overlay_title">{title}</h3>}
              {showdescription && <p className="overlay_text">{description}</p>}
              {showdate && date && <span className="card_date">{date}</span>}
            </div>
          </div>
        </div>

        {showButton && (
          <button className="btn" onClick={() => handleDonateClick()}>
            {" "}
            تبرع الآن{" "}
          </button>
        )}
      </article>
    </Link>
  );
}
