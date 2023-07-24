import { Button, Card } from "react-bootstrap";
import websiteName from "../../data/websiteName";
import { pillButtonSolid } from "../../data/Bootstrap/pillButton";
import CommentsBtn from "./Blog/Comments/CommentsBtn";
import center from "../../data/Bootstrap/center";
import ButtonLink from "../ButtonLink";
import { links } from "../../data/URLpaths";

export default function TermsAndConditions({ setShowSignUp, loggedIn }) {
    const country_or_state = "the United States of America";
    return (
        <div className="p-3 opacity-75">
            <Card><Card.Body>
                <Card.Title><h1 className="text-uppercase">TERMS AND CONDITIONS OF USE FOR {websiteName}</h1></Card.Title>
                <p>Welcome to our blog website! By accessing or using this website, you agree to be bound by the following terms and conditions of use ("Terms and Conditions"). Please read these Terms and Conditions carefully before using this website. By using this website, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions.</p>
                <h2>1. Intellectual Property Rights</h2>
                <p>All content, trademarks, logos, and graphics on this website are the property of {websiteName} and are protected by applicable copyright laws. You may not reproduce, distribute, or use any content from this website without our express written permission.</p>
                <h2>2. Disclaimer</h2>
                <p>This website is for entertainment purposes only. The content on this website is not intended to be taken seriously, and we do not guarantee the accuracy, completeness, or reliability of any information or content provided on this website.</p>
                <h2>3. User Conduct</h2>
                <p>By accessing or using this website, you agree to use it only for lawful purposes and in accordance with these Terms and Conditions. You may not use this website for any illegal or unauthorized purpose, nor may you, in the use of this website, violate any laws in your jurisdiction.</p>
                <h2>4. Limitation of Liability</h2>
                <p>{websiteName} shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of this website or with the delay or inability to use this website. You are responsible for your own words on our website.</p>
                <h2>5. Indemnification</h2>
                <p>You agree to indemnify and hold {websiteName}, its affiliates, officers, agents, and other partners and employees, harmless from any loss, liability, claim, or demand, including reasonable attorneys' fees, made by any third party due to or arising out of your use of this website.</p>
                <h2>6. Modifications</h2>
                <p>We reserve the right to modify these Terms and Conditions at any time. Your continued use of this website following any such modifications shall be deemed acceptance of those modifications.</p>
                <h2>7. Data & Privacy</h2>
                <p>We reserve the rights to your data, to use as we see fit. We are not entitled to do anything about hacked or missing data. Sign up at your own risk. </p>
                <h2>8. Governing Law</h2>
                <p>These Terms and Conditions shall be governed and construed in accordance with the laws of {country_or_state}. Any dispute arising out of or in connection with these Terms and Conditions shall be submitted to the exclusive jurisdiction of the courts of {country_or_state}.</p>
                <p>By using this website, you acknowledge that you have read, understood, and agreed to be bound by these Terms and Conditions. And if you made it this far, congratulations! You have officially read the terms and conditions of use for our website.</p>
                {!loggedIn && <div className={`${center}`}><Button className={pillButtonSolid} onClick={() => setShowSignUp(true)}>Reopen Sign Up Form</Button></div>}  
            </Card.Body></Card>
            <ButtonLink text='Return Home' link={links.home} large={true} />
        </div>
    );
}