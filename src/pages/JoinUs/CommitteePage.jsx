import React from "react";
import PageHeader from "../../components/PageHeader";
import '../../css/global.css'
import groupImgUrl from '../../assets/committee_groupshot.png'

export default function CommitteePage() {
    const titleText = "Committee Membership";
    const subTitleText = "";
    const application_date = <span className="body-text-bold-heavy">(August/September in the Fall and January in the Spring)</span>;

    // links
    const sacLink = "https://sacfunded.net/policies/club-recruitment-policies";
    const wcRecruitLink = "https://groups.wharton.upenn.edu/whcouncil/recruitment/";
    const pennClubLink = "https://pennclubs.com/club/pcc";

    // body image
    const groupImg = <img className="img-fluid mx-auto float-left" src={ groupImgUrl } alt="committee Group"/>;

    return (
        <div>
            <PageHeader title={ titleText } subtitle={ subTitleText }></PageHeader>
            <div className="committee-body container">
                <div className="row py-4 justify-content-center">
                    <div id="overview" className="col-10" style={{textAlign: 'left'}}>
                        <h4 className="body-text-bold-heavy py-2">Overview</h4>
                        <p className="body-text py-2">As the flagship chapter of the broader Common Cents Collaborative, 
                            501(c)(3) organization, Penn Common Cents is home to a strong, tight-knit community of students 
                            passionate about personal finance.
                        </p>

                        <p className="body-text py-2">For those looking to get involved beyond being a GBMer, we have 7 committees 
                            to which any undergraduate Penn student may apply. We accept applications each semester during the 
                            club recruitment periods { application_date }, and we follow <a href={ sacLink } className="body-text-blue">SAC</a> {' '}
                            and <a href={ wcRecruitLink } className="body-text-blue">Wharton Council</a> guidelines in our recruitment process.
                        </p>

                        <p className="body-text py-2"> For more information, and frequently asked questions, visit our Penn Clubs page {' '}
                            <a href={ pennClubLink } className="body-text-blue">here</a>.
                        </p>

                        <p className="body-text">The deadline to apply to join a CC committee for Fall '23 has passed. 
                            Check back in January for our Spring recruitment cycle!
                        </p>
                    </div>

                    <div id="image" className="col-10">
                        { groupImg }
                    </div>
                </div>

                <div className="row py-4 justify-content-center">
                    <div id="overview" className="col-10 pb-5" style={{textAlign: 'left'}}>
                        <h4 className="body-text-bold-heavy py-2">Ready to Apply?</h4>
                        <p className="body-text py-2">The deadline to apply to join a CC committee for Fall '23 has passed. 
                            Check back in January for our Spring recruitment cycle!
                        </p>
                    </div>
                </div>
            </div>

            
        </div>
    );
}