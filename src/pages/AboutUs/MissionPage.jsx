import React from "react";
import PageHeader from "../../components/PageHeader";
import "../../css/MissionPage.css";


export default function MissionPage() {
  // header props
  const titleText = "Mission";

  // body images


  return (
    <div>
      <PageHeader title={ titleText } />

      <div >
        <div >
          <div >
            <h1 >
                Common Cents empowers students with the knowledge to manage their money and reach financial independence.
            </h1>
            <h2>We strive to make personal finance</h2>
            <div>
                <h2>Innovative</h2>
                <p>
                    We find innovative ways to make learning about personal finance 
                    appealing to a wide audience, ranging from high school students 
                    to undergraduates.
                </p>
            </div>
            <div>
                <h2>Interesting</h2>
                <p>
                    We believe learning about personal finance should be fun, 
                    interactive, and engaging. 
                </p>
            </div>
            <div>
                <h2>Inclusive</h2>
                    <p>
                    We seek to break the stigma and fear of personal finance. 
                    Regardless of age, major, career, or income level, personal 
                    finance is important for everyone.
                    </p>
            </div>
          </div>
        </div>
        <div>
            <h3>Penn Common Cents Constitution</h3>
            <p>
            The Constitution of Penn Common Cents defines the organization's 
            purpose, structure, and responsibilities. It outlines procedures 
            by which members can join/leave, Executive Board and Committee 
            Chair members are elected, and the powers delegated to their 
            respective positions.
            </p>
            <iframe src="https://drive.google.com/file/d/1GcFtpyH7iADEozkDBSM8NsnFQBbFmKeG/view?usp=sharing" width="600" height="400" type="application/pdf">
                This browser does not support PDFs. Please download the PDF to view it: <a href="https://drive.google.com/file/d/1GcFtpyH7iADEozkDBSM8NsnFQBbFmKeG/view?usp=sharing">Download PDF</a>.
            </iframe>
        </div>
      </div>
    </div>
  );
}
