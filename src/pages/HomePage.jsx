import React from "react";
import "../css/HomePage.css";
import PageHeader from "../components/PageHeader";
import groupPictureUrl from '../assets/homepage_groupshot.jpeg';
import chapterUrl from '../assets/homepage_chapter_location.png';

export default function HomePage() {
  // header props
  const titleText = "Penn Common Cents";
  const subTitleText = "Empowering students to manage their money and reach financial independence.";
  const headerUrl = `url(${groupPictureUrl})`;

  // body images
  const groupPicture = <img className="img-fluid py-3" src={ groupPictureUrl } alt="CC Group Shot"/>;
  const chapterPicture = <img className="img-fluid py-3" src={ chapterUrl } alt="CC Chapter Map"/>;

  return (
    <div>
      <PageHeader title={ titleText } 
                  subtitle={ subTitleText } 
                  backgroundUrl={ headerUrl }/>

      <div className="home-body container">
        <div className="row justify-content-center py-3">
          <div className="col-6">
            { groupPicture }
          </div>
          <div className="col-6">
            <h1 className="py-3 homepage-body-header">35+ Active Members</h1>
            <p className="homepage-body-text">
              With 35+ members across our seven committees and over 500 GBMers,
              Penn Common Cents is a thriving community dedicated to financial
              literacy, wellness, and social impact.
            </p>
          </div>
        </div>
        <div className="row justify-content-center py-5">
          <div className="col-6">
            <h1 className="py-3 homepage-body-header">3 Collegiate Chapters</h1>
            <p className="homepage-body-text">
              Common Cents was founded at Penn in 2019, and has since expanded
              to Cornell and Florida State University—broadening our nationwide
              reach to include thousands of like-minded undergraduate students.
            </p>
          </div>
          <div className="col-6">
            { chapterPicture }
          </div>
        </div>
      </div>
    </div>
  );
}
