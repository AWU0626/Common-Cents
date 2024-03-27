import React from "react";
import PageHeader from "../../components/PageHeader";
import { Link } from "react-router-dom";
import CopyEmail from "../../components/CopyEmail";
import EventCard from "../../components/EventCard";
import eventOneImgUrl from "../../assets/cardOne.jpg";
import eventTwoImgUrl from "../../assets/cardTwo.png";
import eventThreeImgUrl from "../../assets/cardThree.png";
import eventFourImgUrl from "../../assets/cardFour.png";

export default function EventPage() {
  const titleText = "Events";
  const subTitleText = "";

  const eventOneTitle = "The Power of Points—Why I Have 15 Credit Cards";
  const eventOneDescrption =
    "Common Cents' very own co-founder, John Ta (MLS '22), gave insider tips on what credit cards are, the best ways to optimize for rewards, and, most importantly, explained why he owns 15 cards at age 22. ";
  const eventOneCard = (
    <img className="img-fluid py-3" src={eventOneImgUrl} alt="Event One Card" />
  );

  const eventTwoTitle =
    "Golden Opportunities: Unlock Your Investment Potential with Goldman Sachs";
  const eventTwoDescription =
    "Joe Mangini (W ‘03), the VP of Goldman Sachs Private Wealth Management offered valuable advice on investing for the future—with a focus on asset allocation and managing macroeconomic risks.";
  const eventTwoCard = (
    <img className="img-fluid py-3" src={eventTwoImgUrl} alt="Event One Card" />
  );

  const eventThreeTitle =
    "Who Wants to be a Millionaire? Personal Finance Edition w/ Riepe College House";
  const eventThreeDescription =
    "First-year residents at Riepe played Who Wants to be a Millionaire—with a $300 top prize, lifelines, and personal finance themed questions that touched on topics like budgeting, credit/debt, investing, insurance, and estate planning.s";
  const eventThreeCard = (
    <img
      className="img-fluid py-3"
      src={eventThreeImgUrl}
      alt="Event One Card"
    />
  );

  const eventFourTitle = "Credit Card Crash Course w/ AIS";
  const eventFourDescription =
    "Common Cents collaborated with the Association of International Students to deliver a credit card event, with special focus on optimizing one’s credit score, applying for an SSN/ITIN, and taking advantage of seldom-used rewards and benefits to get value from credit cards. This event was specifically targeted towards international students and the FGLI community.";
  const eventFourCard = (
    <img
      className="img-fluid py-3"
      src={eventFourImgUrl}
      alt="Event One Card"
    />
  );


  const listservLink = "https://commoncents.us4.list-manage.com/subscribe?u=5a230065c3fcf65e1fed46fad&id=9b1766b78f";
  const linkTreeLink = "https://linktr.ee/penncc";

  return (
    <div>
      <PageHeader title={titleText} subtitle={subTitleText}></PageHeader>
      <div className="calendar-body container py-2">
        <div className="row justify-content-center py-4">
          <div className="col-10 py-2">
            <h2 className="body-text-bold-heavy">
              Check out our upcoming events below!
            </h2>
            <div style={{textAlign: 'left'}}>
              <p>Subscribe to our listserv to stay up to date with Common Cents Events:  {` `}
                <a href={ listservLink } style={{color: '#2b87ba'}}>Subscribe</a>
              </p>

              <p>We also have a LinkTree for Common Cents sites:  {` `}
                <a href={ linkTreeLink } style={{color: '#2b87ba'}}>Check Me Out!</a>
              </p>
            </div>
          </div>

          <div className="col-10 py-2">
            <h2 className="body-text-bold-heavy">About CC Events</h2>

            <p
              className="py-2"
              style={{ textAlign: "left", fontSize: "large" }}
            >
              CC regularly holds events that engage the Penn community with
              personal finance. Our diverse range of events caters to students'
              varying interests and needs, providing valuable opportunities to
              expand financial knowledge and develop essential skills. From
              speaker events led by experts to interactive budgeting workshops
              to collaborations with our campus partners, our events offer a
              dynamic platform for learning and exploring different aspects of
              personal finance.
            </p>
            <p
              className="py-2"
              style={{ textAlign: "left", fontSize: "large" }}
            >
              Most CC events are open to the entire Penn community. However,
              General Body Members have priority access to smaller specialized
              events focusing on advanced personal finance topics hosted by
              knowledgeable CC committee members that go beyond the basics of
              personal finance. Learn more about becoming a GBMer
              {` `}{" "}
              {
                <Link style={{ color: "#2b87ba" }} to="/">
                  here
                </Link>
              }
              !
            </p>
          </div>

          <div className="col-10 py-2">
            <h2 className="body-text-bold-heavy">
              Looking to Partner with Us?
            </h2>
            <p
              className="py-2"
              style={{ textAlign: "left", fontSize: "large" }}
            >
              Penn Common Cents encourages on-campus organizations and external
              parties to join our mission in making personal finance accessible
              for all. If you're interested in wokring with us on an event,
              please reach out to our Event Planning team
              {` `}{" "}
              {
                <CopyEmail
                  email="penn-events@commoncents.org"
                  title="here."
                ></CopyEmail>
              }
            </p>
          </div>

          <div className="col-10 py-2">
            <h2 className="body-text-bold-heavy py-4">Past Events</h2>

            <EventCard
              card={eventOneCard}
              title={eventOneTitle}
              description={eventOneDescrption}
            />

            <EventCard
              card={eventTwoCard}
              title={eventTwoTitle}
              description={eventTwoDescription}
            />

            <EventCard
              card={eventThreeCard}
              title={eventThreeTitle}
              description={eventThreeDescription}
            />

            <EventCard
              card={eventFourCard}
              title={eventFourTitle}
              description={eventFourDescription}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
