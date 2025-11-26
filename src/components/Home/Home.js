import React from 'react'
import frame2 from '../../assets/Frame 2.png'
import SectionTitle from '../../components/common/Section_Line.js';
import './Home.css';
import CardGrid from '../../components/common/Cards/cardGrid.js';
import image4 from '../../assets/kids-playing-football-29318311.webp'
import image5 from '../../assets/pexels-gustavo-fring-4894722.webp'
import image6 from '../../assets/premium_photo-1661567408466-27899e8a4a2f.webp'

export default function Home() {
  const articles = [
   { id: 10, title: "زيارة جمعية حياة الطفل الخيرية" ,img : image4 , date: "2025 / 6 /10"},
   { id: 11, title: "زيارة جمعية حياة الطفل الخيرية" ,img : image5 , date: "2025 / 10 /6"},
   { id: 12, title: "زيارة جمعية حياة الطفل الخيرية" ,img : image6 , date: "2025 / 7 /4"},
];
  return (
    <>
    <div className="frame-wrapper">
      <img className="frame2" src={frame2} alt="Frame 2" />
    </div>
    <div>
      <SectionTitle title="الحملات الجارية" linkText="عرض المزيد" />
    </div>
    <div className='first text section'>
    <p>
      في هذا القسم تجد أحدث الحملات التي تطلقها جمعية سعادة طفل - إرث محمد لدعم الأطفال والأسر المحتاجة. يمكنك متابعة تفاصيل كل حملة، معرفة نسبة التبرعات المحققة، والمساهمة مباشرة في إحداث فرق حقيقي في حياة المستفيدين.
    </p>
    </div>

    {/* <div class="cardH">
      <article class="card">
      <img src={logo} alt="short description" class="card__img"/>
      <h3 class="card__title">Card title</h3>
      <p class="card__text">Short description about this card.</p>
      <div class="card__actions">
      <button class="btn">Action</button>
      </div>
      </article>
      <article class="card">
      <img src={logo} alt="short description" class="card__img"/>
      <h3 class="card__title">Card title</h3>
      <p class="card__text">Short description about this card.</p>
      <div class="card__actions">
      <button class="btn">Action</button>
      </div>
      </article>
      <article class="card">
      <img src={logo} alt="short description" class="card__img"/>
      <h3 class="card__title">Card title</h3>
      <p class="card__text">Short description about this card.</p>
      <div class="card__actions">
      <button class="btn">Action</button>
      </div>
      </article>
      </div> */}

    {/* <div class="card">
    <Cardgrid />
    </div> */}

    <CardGrid />
    <div>
      <SectionTitle title="الحملات البارزة" linkText="عرض المزيد" />
    </div>

    <div className='second text section'>
    <p>
نفتخر في جمعية سعادة طفل - إن محمد بمشاريعنا الإنسانية التي تساهم في تحسين جودة حياة الأطفال وأسرهم، هذا تعريف لأحد أبرز مشاريعنا التي تعكس التزامنا بالعمل الخيري والاستدامة، مع تفاصيل نسب الإنجاز وعدد المستفيدين.    </p>
    </div>

    <CardGrid data={articles} showButton = {false}   showPercentage = {false} showdate = {true} showdescription = {false}/>

    <div>
      <SectionTitle title="المتجر الخيري" linkText="عرض المزيد" />
    </div>
    </>
  )
}
