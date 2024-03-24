import React from "react";
import PageHeader from "../../components/PageHeader";
import "../../css/HistoryPage.css";


export default function HistoryPage() {
    //header props 
    const titleText = "History"
    //const headerUrl = `url(${groupPictureUrl})`;

    
    return (
        <div>
            <PageHeader title={ titleText }
                        />
            <div className="history-body container">
                <div className="row justify-content-center py-3"> 
                    <h2>Beginning at Penn</h2>
                    <p>
                        Common Cents, Penn's first and only personal finance club, 
                        was <a href="https://www.thedp.com/article/2019/10/penn-finance-club-literacy-common-cents">founded in Fall 2019</a> by John Ta (MLS '22) and Vivek Olumbe (W '23, SEAS '23). 
                        John first conceived of the idea for the club when one of his friends asked him about 
                        applying for his first credit card, but didn't know what a credit score was. He realized 
                        that many students lacked the fundamental understanding of personal finance and that it was crucial to address 
                        this knowledge gap in a way that was tailored to the needs of undergraduates, whose 
                        decisions in college could affect their financial futures for years after graduation. 
                        Thus, Common Cents Collaborative was born.
                        </p>
                    <h2>Intercollegiate Expansion</h2>
                    <p>
                        Common Cents Collaborative opened its second collegiate chapter at Johns Hopkins in 
                        September 2020. We further expanded to Cornell in October 2021. Our newest chapter is at Florida 
                        State University, opening its doors to members in September 2022.
                    </p>
                    <h2>Past Leadership</h2>

                        <h2>Spring 2023</h2>
                        <ul>
                            <li>Co-Presidents: Ashleigh Huang (W '25) and Jovan Mann (CAS '24)</li>
                            <li>Vice President: Gloria Cheng (W '26, Nu '26)</li>
                            <li>Vice President: Juan Lopez Ramos (W '25)</li>
                            <li>Vice President: Michael Sun (W '24, SEAS '24)</li>
                            <li>Content Chair: Sierra Wei (CAS '25)</li>
                            <li>Event Planning Chair: Yoonseo Kim (W '25, CAS '25)</li>
                            <li>Marketing & Design Chair: Elaine Sun (CAS '25)</li>
                            <li>Finance Chair: Katie Oh (W '26)</li>
                            <li>Affairs Chair: Gina Ryu (CAS '26)</li>
                            <li>Growth Chair: Justin Chu (CAS '25)</li>
                            <li>Web/Tech & Analytics Chair: Ryan De Lopez (W '25, SEAS '25)</li>
                        </ul>

                        <h2>Fall 2022</h2>
                        <ul>
                            <li>President: Angie Zhou (W '23)</li>
                            <li>Vice President: Katherine Han (W '24)</li>
                            <li>Vice President: Ashleigh Huang (W '25)</li>
                            <li>Vice President: Jovan Mann (CAS '24)</li>
                            <li>Vice President: Michael Sun (W '24, SEAS '24)</li>
                            <li>Vice President: Isabelle Lee (CAS '24)</li>
                            <li>Content Chair: Michael Sun (W '24, SEAS '24)</li>
                            <li>Event Planning Chair: Gloria Cheng (W '26, Nu '26)</li>
                            <li>Marketing & Design Chair: Elaine Sun (CAS '25)</li>
                            <li>Internal Finance Chair: Juan Lopez Ramos (W '25)</li>
                            <li>External Finance Chair: Poojan Pansuriya (W '25)</li>
                            <li>Affairs Chair: Gloria Cheng (W '26, Nu '26)</li>
                            <li>Web/Tech & Analytics Chair: Ryan De Lopez (W '25, SEAS '25)</li>
                            <li>Growth Chair: Justin Chu (CAS '24)</li>
                        </ul>

                        <h2>Spring 2022</h2>
                        <ul>
                            <li>President: Angie Zhou (W '23)</li>
                            <li>Vice President: Katherine Han (W '24)</li>
                            <li>Vice President: Ashleigh Huang (W '25)</li>
                            <li>Vice President: Jovan Mann (CAS '24)</li>
                            <li>Vice President: Liz Sunga (CAS '24)</li>
                            <li>Vice President: Rikki Kong (W '24)</li>
                            <li>Content Chair: Benjamin Ai (CAS '24)</li>
                            <li>Event Planning Chair: Shivani Desai (W '25)</li>
                            <li>Marketing Chair: Isabelle Lee (CAS '24)</li>
                            <li>Design Chair: Maxine Fang (W '23)</li>
                            <li>Internal Finance Chair: Poojan Pansuriya (W '25)</li>
                            <li>External Finance Chair: Michelle Zhang (W '24)</li>
                            <li>Affairs Chair: Gloria Cheng (W '26, Nu '26)</li>
                            <li>Web/Tech & Analytics Chair: Ryan De Lopez (W '25, SEAS '25)</li>
                            <li>Growth Chair: Justin Chu (CAS '24)</li>
                        </ul>

                        <h2>Fall 2021</h2>
                        <ul>
                            <li>President: John Ta (MLS '22)</li>
                            <li>Senior Vice President: Vivek Olumbe (W '23, SEAS '23)</li>
                            <li>Vice President: Angie Zhou (W '23)</li>
                            <li>Vice President: Winni Zhang (W '23)</li>
                            <li>Vice President: Rikki Kong (W '23)</li>
                            <li>Content Chair: Benjamin Ai (CAS '24)</li>
                            <li>Event Planning Chair: Liz Sunga (CAS '24)</li>
                            <li>Marketing Chair: Matthew Friedman (W '24)</li>
                            <li>Design Chair: Maxine Fang (W '23)</li>
                            <li>Internal Finance Chair: Katherine Han (W '24)</li>
                            <li>External Finance Chair: Michelle Zhang (W '24)</li>
                            <li>Affairs Chair: Jovan Mann (CAS '24)</li>
                            <li>Technology/Analytics Chair: Aryan Singh (SEAS '24)</li>
                            <li>Growth/Business Development Chair: Hanna Tulchinsky (W '24)</li>
                        </ul>

                        <h2>Spring 2021</h2>
                        <ul>
                            <li>President: John Ta (MLS '22)</li>
                            <li>Senior Vice President: Vivek Olumbe (W '23, SEAS '23)</li>
                            <li>Vice President: Graham Branscom (W '23)</li>
                            <li>Vice President: Angie Zhou (W '23)</li>
                            <li>Vice President: Winni Zhang (W '23)</li>
                            <li>Vice President: Rikki Kong (W '23)</li>
                            <li>Content Chair: Hannah Xiao (CAS '23)</li>
                            <li>Marketing Chair: Matthew Friedman (W '24)</li>
                            <li>Design Chair: Winni Zhang (W '23)</li>
                            <li>Finance Chair: Michelle Zhang (W '24)</li>
                            <li>Media Chair: Katherine Han (W '24)</li>
                            <li>Affairs Chair: Jovan Mann (CAS '24)</li>
                            <li>Analytics Chair: Aryan Singh (SEAS '24)</li>
                            <li>Growth Chair: Hanna Tulchinsky (W '24)</li>
                        </ul>

                        <h2>Fall 2020</h2>
                        <ul>
                            <li>President: John Ta (MLS '22)</li>
                            <li>Vice President: Vivek Olumbe (W '23, SEAS '23)</li>
                            <li>Marketing Chair: Angie Zhou (W '23)</li>
                            <li>Content Chair: Hannah Xiao (CAS '23)</li>
                            <li>Strategic Finance Chair: Vivek Olumbe (W '23, SEAS '23)</li>
                            <li>Design Chair: Winni Zhang (W '23)</li>
                            <li>Social Chair: Rikki Kong (W '24)</li>
                        </ul>

                        <h2>Fall 2019 and Spring 2020</h2>
                        <ul>
                            <li>President: John Ta (MLS '22)</li>
                            <li>Vice President: Vivek Olumbe (W '23, SEAS '23)</li>
                            <li>Marketing Chair: Angie Zhou (W '23)</li>
                            <li>Finance Chair: Hannah Xiao (CAS '23)</li>
                            <li>Design Chair: Winni Zhang (W '23)</li>
                        </ul>

                </div>
            </div>
        </div>
    );
}