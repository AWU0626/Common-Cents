import { React } from "react";
import { Link } from 'react-router-dom';
import PageHeader from "../components/PageHeader";
import CopyEmail from "../components/CopyEmail";
import '../css/global.css'

export default function ContactPage() {
    const titleText = "Contact";
    const subTitleText = "";

    return (
        <div>
            <PageHeader title={ titleText } subtitle={ subTitleText }/>

            <div className="contact-body container">
                <div className="row contact-body py-4 justify-content-center">
                    <div className="col-10">
                        <div className="py-3" style={{ listStyleType: 'none', textAlign: 'left' }}>
                            <h4 className="body-text-bold-heavy">National Nonprofit: { <CopyEmail email="hello@commoncents.org"/>} </h4>
                            <h5><i>Common Cents Collaborative, 501(c)(3)</i></h5>
                        </div>

                        <div className="py-3" style={{ listStyleType: 'none', textAlign: 'left' }}>
                            <h4 className="body-text-bold-heavy">Penn Chapter: { <CopyEmail email="penn@commoncents.org"/> }</h4>
                            <h5><i>General Inquiries</i></h5>
                        </div>

                        <div className="py-3" style={{ listStyleType: 'none', textAlign: 'left' }}>
                            <h4 className="body-text-bold-heavy">Penn Chapter Executive Board: { <CopyEmail email="penn-exec@commoncents.org"/>}</h4>
                        </div>

                        <div className="py-3" style={{ listStyleType: 'none', textAlign: 'left' }}>
                            <h4 className="body-text-bold-heavy">Penn Chapter Committee Contacts</h4>
                            <ul className="committee-contacts" style={{ textAlign: 'left' }}>
                                <li className="committee-item py-2">
                                    <h5 className="body-text-bold-heavy">Content: { <CopyEmail email="penn-content@commoncents.org"/>} </h5>
                                </li>
                                <li className="committee-item py-2">
                                    <h5 className="body-text-bold-heavy">Event Planning: { <CopyEmail email="penn-events@commoncents.org"/>} </h5>
                                </li>
                                <li className="committee-item py-2">
                                    <h5 className="body-text-bold-heavy">Marketing & Design: { <CopyEmail email="penn-mktg@commoncents.org"/>} </h5>
                                </li>
                                <li className="committee-item py-2">
                                    <h5 className="body-text-bold-heavy">Finance: { <CopyEmail email="penn-finance@commoncents.org"/>}</h5>
                                </li>
                                <li className="committee-item py-2">
                                    <h5 className="body-text-bold-heavy">Growth: { <CopyEmail email="penn-growth@commoncents.org"/>}</h5>
                                </li>
                                <li className="committee-item py-2">
                                    <h5 className="body-text-bold-heavy">Affairs: { <CopyEmail email="penn-affairs@commoncents.org"/>}</h5>
                                </li>
                                <li className="committee-item py-2">
                                    <h5 className="body-text-bold-heavy">Web/Tech & Analytics: { <CopyEmail email="penn-wta@commoncents.org"/>}</h5>
                                </li>
                            </ul>
                        </div>

                        <div className="py-3" style={{ listStyleType: 'none', textAlign: 'left' }}>
                            <h5 className="body-text-bold-heavy">You can also reach out individually to a member of our chapter's leadership {' '} 
                                <Link to="/leadership" style={{color: '#2b87ba'}}>here</Link>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}