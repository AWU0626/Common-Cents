import React from "react";
import PageHeader from "../../components/PageHeader";
import coffeeUrl from "../../assets/Coffee_Cup.png";
import CopyEmail from "../../components/CopyEmail";

export default function CoffeeChatPage() {
  const titleText = "CC Coffee Chats";
  const subTitleText = "New for Spring 2024!";
  const coffeeChatEmail = "penn-coffee-chats@commoncents.org";

  const coffeePicture = (
    <img
      style={{ width: "90%", height: "85%" }}
      src={coffeeUrl}
      alt="CC Chapter Map"
    />
  );

  return (
    <div>
      <PageHeader title={titleText} subtitle={subTitleText}></PageHeader>
      <div className="cc-body container">
        <div className="row justify-content-center py-4">
          <div className="col-3 py-5">{coffeePicture}</div>
          <div className="col-7 py-4">
            <h3 style={{ fontWeight: 800, textAlign: "left" }}>
              Empowering Penn students, One Chat at a Time
            </h3>

            <div
              id="mission"
              className="col-10 py-2"
              style={{ textAlign: "left" }}
            >
              <h4 className="body-text-bold-heavy py-2">Our Mission</h4>
              <p className="body-text py-2">
                At CC Coffee Chats, we believe in the power of shared knowledge
                and experience. Our mission is to provide a personalized,
                one-on-one environment where members of the Penn community can
                gain a deeper understanding of financial literacy.
              </p>
              <p className="body-text py-2">
                In this new initiative launching Fall 2023, we aim to empower
                students to make informed decisions about their financial
                future.
              </p>
            </div>

            <div
              id="why-cc"
              className="col-10 py-2"
              style={{ textAlign: "left" }}
            >
              <h4 className="body-text-bold-heavy">Why CC Coffee Chats?</h4>
              <ul>
                <li className="body-text">
                  <p>
                    {" "}
                    <b>Personalized Conversations:</b> We're here to share
                    experiences and insights. Engage with us anytime!
                  </p>
                </li>
                <li className="body-text">
                  <p>
                    {" "}
                    <b>Student-Centric Dialogues:</b> As undergrads ourselves,
                    we understand your unique challenges and can share relevant
                    experiences.
                  </p>
                </li>
                <li className="body-text">
                  <p>
                    {" "}
                    <b>Holistic & Researched Discussions:</b> Our conversations
                    are informed by research and personal experiences. Our
                    members keep up with the latest news on banking, credit
                    cards, consumer advocacy, and more.
                  </p>
                </li>
                <li className="body-text">
                  <p>
                    {" "}
                    <b>Specialized Topics:</b> Engage in dialogues about credit
                    card strategies, travel insights, and more.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="row justify-content-center pb-2"
          style={{ textAlign: "left" }}
        >
          <div className="col-10">
            <h4 className="body-text-bold-heavy">Common Conversation Topics</h4>
            <ul>
              <li className="body-text">
                <p>
                  {" "}
                  <b>Budgeting Basics:</b> Discussing ways to manage and
                  allocate funds effectively during college, as well as
                  Penn-specific strategies to make your money go further.
                </p>
              </li>
              <li className="body-text">
                <p>
                  {" "}
                  <b>Credit Card Rewards:</b> Sharing experiences on selecting
                  the right credit card, understanding its benefits, and
                  optimizing points/miles.
                </p>
              </li>
              <li className="body-text">
                <p>
                  {" "}
                  <b>Starting to Invest:</b> Learning the fundamentals of
                  investing, best practices for long-term growth, and common
                  pitfalls and their behavioral finance explanations.
                </p>
              </li>
              <li className="body-text">
                <p>
                  {" "}
                  <b>Traveling on a Budget:</b> Sharing our tips and experiences
                  on how to travel frugally while maximizing value.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="row justify-content-center pb-4"
          style={{ textAlign: "left" }}
        >
          <div className="col-10">
            <h4 className="body-text-bold-heavy py-2">Ready to Begin?</h4>
            <p className="body-text">
              CC Coffee Chats is on hiatus until Spring 24.
            </p>
            <p className="body-text">
              Questions? Email us at {<CopyEmail email={coffeeChatEmail} />}
            </p>
          </div>
        </div>

        <div
          className="row justify-content-center py-2"
          style={{ textAlign: "left" }}
        >
          <div className="col-10">
            <h4 className="body-text-bold-heavy py-2">Disclaimer</h4>
            <p>
              While we are passionate about personal finance, Common Cents
              Collaborative ("Common Cents") is not a financial advisor,
              investment advisor, legal advisor, accountant, or other certified
              financial professional. Our primary goal is to provide valuable
              information and insights based on our own experiences as college
              students. We have encountered numerous challenges and triumphs
              throughout our financial journeys, both inside and outside of
              school. By sharing what we have learned, we hope to empower others
              to navigate their own financial futures successfully. We are not
              compensated for our efforts, and our knowledge is gained through
              personal experiences rather than professional certifications.
            </p>

            <p>
              From time to time, we might recommend products or services that we
              have personally used and believe to be appropriate for you. While
              we may receive personal referral bonuses for some of these
              recommendations, we commit to the following:
            </p>
            <ul>
              <li>
                <p>
                  {" "}
                  <b>Full Disclosure:</b> Any potential bonuses/rewards we might
                  receive will be clearly disclosed to you.
                </p>
              </li>
              <li>
                <p>
                  {" "}
                  <b>Choice:</b> Alongside any referral links, we will provide
                  non-referral links, giving you the freedom to choose how you
                  proceed.
                </p>
              </li>
              <li>
                <p>
                  {" "}
                  <b>Integrity:</b> Our recommendations are based on our genuine
                  belief in the product or service, not the potential
                  compensation.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
