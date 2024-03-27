import React from "react";
import { Link } from 'react-router-dom';
import PageHeader from "../../components/PageHeader";
import '../../css/global.css';

export default function GeneralBodyPage() {
    const titleText = "General Body Membership";
    const subTitleText = "";

    // links
    const whcouncilLink = "https://groups.wharton.upenn.edu/whcouncil/home/";
    const listservLink = "https://commoncents.us4.list-manage.com/subscribe?u=5a230065c3fcf65e1fed46fad&id=9b1766b78f";

    return (
        <div>
            <PageHeader title={ titleText } subTitleText={ subTitleText }/>
            <div className="gbm-body container">
                <div className="row py-4 justify-content-center">
                    <div id="overview" className="col-10 pb-5" style={{textAlign: 'left'}}>
                        <h4 className="body-text-bold-heavy py-2">Overview</h4>
                        <p className="body-text py-2">Common Cents is dedicated to promoting inclusivity and empowering students to achieve
                            financial wellness. We believe that everyone deserves access to valuable resources 
                            and knowledge to make informed decisions about their financial future. We hope you'll 
                            join us as a General Body Member (GBM).</p>

                            <p className="body-text py-2">Learn more about our GBM Engagement Plan in the Wharton Council Club Booklet {' '}
                                <a href={ whcouncilLink } className="body-text-blue">here</a>
                            </p>
                    </div>

                    <div id="benefits" className="col-10 pb-5" style={{textAlign: 'left' }}>
                        <h4 className="body-text-bold-heavy py-2">Benefits of General Body Membership</h4>
                        <h5 className="body-text-bold-heavy py-2" style={{color:'#64AF60'}}>Advanced Personal Finance Learning Opportunities</h5>
                        <p className="body-text py-2"> GBMers can attend GBM-exclusive workshops and social events which 
                            focus on advanced knowledge building that go beyond the basics of the five domains of personal 
                            finance: budgeting, credit/debt, investing, insurance and risk management, and retirement/estate planning.
                        </p>

                        <p className="body-text py-2"> Workshop topics will include (but are not limited to) award travel, comparison shopping, 
                            and credit score optimization techniques.
                        </p>

                        <h5 className="body-text-bold-heavy py-2" style={{color:'#64AF60'}}>Mentorship and Volunteering</h5>
                        <p className="body-text py-2">GBM-ers will be given priority in our {<Link to="/coffee_chat" className="body-text-blue">CC Coffee Chats</Link>} program.</p>
                        <p className="body-text py-2">For GBM-ers who wish to get more involved, avenues for more intensive training and shadow 
                            mentorship will be offered, as well as a pathway to Content committee membership in a subsequent semester.
                        </p>
                    </div>

                    
                    <div id="benefits" className="col-10 pb-5" style={{textAlign: 'left' }}>
                        <h4 className="body-text-bold-heavy py-2">Ready to Join?</h4>
                        <p className="body-text"> Subscribe to our listserv {<a href={ listservLink } className="body-text-blue">here </a>} to join as a GBMer. Welcome to CC! </p>
                    </div>

                </div>
            </div>
        </div>
    );
}