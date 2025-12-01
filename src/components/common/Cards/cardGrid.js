import "./cardgrid.css";
import image1 from "../../../assets/pexels-photo-7386009.webp";
import image2 from "../../../assets/pexels-photo-9070698.webp";
import image3 from "../../../assets/pexels-photo-27523732.webp";
import Card from "./card.js";

export default function CardGrid({data , showButton = true , showPercentage = true , showdate = false , showdescription = true}) {

  const initiateCard = [
    {
      id: "c1",
      title: "دفى الشتاء لأطفالنا",
      description:
        "مع دخول فصل الشتاء، يواجه الكثير من الأطفال والأسر المحتاجة صعوبة في توفير الملابس والدفايات اللازمة لحمايتهم من البرد. من خلال هذه الحملة نسعى لتوزيع 500 حقيبة شتوية تحتوي على (طاقية، جاكيت، قبعة، وكفوف) للأطفال في القرى الأكثر احتياجًا.",
      img: image1,
      percentage: 46,
      targetPath: "/donate/1",
    },
    {
      id: "c2",
      title: "تشرد أطفالنا",
      description:
        "مع دخول فصل الشتاء، يواجه الكثير من الأطفال والأسر المحتاجة صعوبة في توفير الملابس والدفايات اللازمة لحمايتهم من البرد. من خلال هذه الحملة نسعى لتوزيع 500 حقيبة شتوية تحتوي على (طاقية، جاكيت، قبعة، وكفوف) للأطفال في القرى الأكثر احتياجًا.",
      img: image2,
      percentage: 46,
      targetPath: "/donate/1",
    },
    {
      id: "c3",
      title: "جوع أطفالنا",
      description:
        "مع دخول فصل الشتاء، يواجه الكثير من الأطفال والأسر المحتاجة صعوبة في توفير الملابس والدفايات اللازمة لحمايتهم من البرد. من خلال هذه الحملة نسعى لتوزيع 500 حقيبة شتوية تحتوي على (طاقية، جاكيت، قبعة، وكفوف) للأطفال في القرى الأكثر احتياجًا.",
      img: image3,
      percentage: 46,
      targetPath: "/donate/1",
    },
  ];
const listToDisplay = data || initiateCard;
  return (
    <section className="cards-wrapper">
      {listToDisplay.map((item) => (
        <div className="grid-item" key={item.id}>
          <Card {...item} showButton={showButton} showPercentage = {showPercentage} showdate = {showdate} showdescription = {showdescription}/>
        </div>
      ))}
    </section>
  );
}
