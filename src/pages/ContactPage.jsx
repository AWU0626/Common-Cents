import { React } from "react";
import { Link } from 'react-router-dom';
import PageHeader from "../components/PageHeader";
import CopyEmail from "../components/CopyEmail";
import '../css/ContactPage.css'

export default function ContactPage() {
    const titleText = "Contact";
    const subTitleText = "";

    return (
        <div>
            <PageHeader title={ titleText } subtitle={ subTitleText }/>

            <div className="contact-body container">
                <div className="row contact-body py-4 justify-content-center">
                    <div className="col-12">
                        <ul className="contact-list" style={{ listStyleType: 'none', textAlign: 'left' }}>
                            <li className="contact-item py-3">
                                <h4 className="contact-body-text">National Nonprofit: { <CopyEmail email="hello@commoncents.org"/>} </h4>
                                <h5><i>Common Cents Collaborative, 501(c)(3)</i></h5>
                            </li>
                            <li className="contact-item py-3">
                                <h4 className="contact-body-text">Penn Chapter: { <CopyEmail email="penn@commoncents.org"/> }</h4>
                                <h5><i>General Inquiries</i></h5>
                            </li>
                            <li className="contact-item py-3">
                                <h4 className="contact-body-text">Penn Chapter Executive Board: { <CopyEmail email="penn-exec@commoncents.org"/>}</h4>
                            </li>
                            <li className="contact-item py-3">
                                <h4 className="contact-body-text">Penn Chapter Committee Contacts</h4>
                                <ul className="committee-contacts" style={{ textAlign: 'left' }}>
                                    <li className="committee-item py-2">
                                        <h5 className="contact-body-text">Content: { <CopyEmail email="penn-content@commoncents.org"/>} </h5>
                                    </li>
                                    <li className="committee-item py-2">
                                        <h5 className="contact-body-text">Event Planning: { <CopyEmail email="penn-events@commoncents.org"/>} </h5>
                                    </li>
                                    <li className="committee-item py-2">
                                        <h5 className="contact-body-text">Marketing & Design: { <CopyEmail email="penn-mktg@commoncents.org"/>} </h5>
                                    </li>
                                    <li className="committee-item py-2">
                                        <h5 className="contact-body-text">Finance: { <CopyEmail email="penn-finance@commoncents.org"/>}</h5>
                                    </li>
                                    <li className="committee-item py-2">
                                        <h5 className="contact-body-text">Growth: { <CopyEmail email="penn-growth@commoncents.org"/>}</h5>
                                    </li>
                                    <li className="committee-item py-2">
                                        <h5 className="contact-body-text">Affairs: { <CopyEmail email="penn-affairs@commoncents.org"/>}</h5>
                                    </li>
                                    <li className="committee-item py-2">
                                        <h5 className="contact-body-text">Web/Tech & Analytics: { <CopyEmail email="penn-wta@commoncents.org"/>}</h5>
                                    </li>
                                </ul>
                            </li>
                            <li className="contact-item py-3">
                                <h5 className="contact-body-text">You can also reach out individually to a member of our chapter's leadership {' '} 
                                    <Link to="/leadership" style={{color: '#2b87ba'}}>here</Link>
                                </h5>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}