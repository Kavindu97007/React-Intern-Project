import React from 'react';
import ContentCard from '../../Component/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './content.css';

function Content() {
  return (
    <>
      <div className="header">
        <h1>Our Exclusive Courses</h1>
        <button className="view-more">View More</button>
      </div>
      <div className="cardCss">
        <ContentCard 
          title="Comprehensive Curriculum" 
          text="gdhsdfgsdfgsfdg" 
          image="../..../assets/img/images_toyota_mark-x_2012_1_b.jpg"
        />
        <ContentCard 
          title="Practical Learning" 
          text="dfvdfDEFGDFGD" 
          image="../..../assets/img/images_toyota_mark-x_2012_1_b.jpg"
        />
        <ContentCard 
          title="Track Records" 
          text="DVGFRGRRRRRRRRRRRRRR" 
          image="../..../assets/img/images_toyota_mark-x_2012_1_b.jpg"
        />
      </div>
    </>
  );
}

export default Content;
