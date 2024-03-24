import React from "react";
import PageHeader from "../../components/PageHeader";
import "../../css/LeadershipPage.css";


export default function LeadershipPage() {
    //header props 
    const titleText = "Common Cents Leadership"
    const subTitleText = "Spring 2024";


    
    return (
        <div>
            <PageHeader title={ titleText }
                        subTitle={ subTitleText }
                        />
            <div className="history-body container">
                <div>
                    <h1>Executive Board</h1>
                    <p>If you are trying to reach the Executive Board, please email penn-exec@commoncents.org!</p>
                    <p className="list-names">
                        President: <a className="email" href="mailto:ethanbl@sas.upenn.edu">Ethan Blum</a> (CAS '25') <br/>
                        Vice President (Content and Web/Tech & Analytics): <a className="email" href="mailto:mehakkd@sas.upenn.edu">Mehak Dhaliwal</a> (CAS '26)<br/>
                        Vice President (Event Planning and Affairs): <a className="email" href="mailto:ginaryu@wharton.upenn.edu">Gina Ryu</a> (W '26)<br/>
                        Vice President (Finance and GBM): <a className="email" href="mailto:jloramos@wharton.upenn.edu">Juan Lopez Ramos</a> (W '25)<br/>
                        Vice President of Marketing & Design: <a className="email" href="mailto:ylsun@sas.upenn.edu">Elaine Sum</a> (CAS '25)<br/>
                        <li>Committee Email: <a className="email" href="mailto:penn-mktg@commoncents.org">penn-mktg@commoncents.org</a></li>
                    </p>
                    <h1>Committee Chairs</h1>
                    <p>
                        Content: Jacky Zang (CAS '25')
                        <li>Committee Email: <a className="email" href="mailto:penn-content@commoncents.org">penn-content@commoncents.org</a></li>
                        Event Planning: Justin Yip (CAS '26)
                        <li>Committee Email: <a className="email" href="mailto:penn-events@commoncents.org">penn-events@commoncents.org</a></li>
                        Finance: Melissa Domen (W '26)
                        <li>Committee Email: <a className="email" href="mailto:penn-finance@commoncents.org">penn-finance@commoncents.org</a></li>
                        Growth: Brody Pellegrino (W '25)
                        <li>Committee Email: <a className="email" href="mailto:penn-growth@commoncents.org">penn-growth@commoncents.org</a></li>
                        Affairs: Erin Hong (CAS '26)
                        <li>Committee Email: <a className="email" href="mailto:penn-affairs@commoncents.org">penn-affairs@commoncents.org</a></li>
                        Web/Tech & Analytics: Nikki Liu (CAS '27, SEAS '27)
                        <li>Committee Email: <a className="email" href="mailto:penn-wta@commoncents.org">penn-wta@commoncents.org</a></li>
                        </p>
                </div>
            </div>
        </div>
    );
}