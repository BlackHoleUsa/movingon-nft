import React, { useState } from 'react';
import './ContactSection.css';
import { questions, teamMembers } from 'Assets/Data';
import CustomAccordian from 'components/Accordian/Accordian';

const ContactSection = (props) => {

    return(

        <div className="app-flex-column w-100 py-5 text-black text-center justify-content-center align-items-center contact-section">
            
            <h6 className="font-36px mb-2 heading-font">Frequently Asked Question</h6>
            <p className="font-16px paragraph-font">
                ICO seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver.
            </p>

            <div className="accordian-container">
                {
                    questions.map((ques, i) => (
                        <CustomAccordian key={i} heading={ques.question} text={ques.ans} />
                    ))
                }
            </div>
                    
        </div>

    );

}

export const ContentSectionQuestions = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    return <div className="app-flex-column w-100 py-5 text-black text-center justify-content-center align-items-center contact-section">
        <div className="info">
            <h6 className="font-36px mb-2 mt-5 heading-font">We Are Happy To Answer Any Question You Have For Us</h6>
            <p className="font-16px mb-4 paragraph-font">
                Simply fill up the Foam below we will Contact you.
            </p>

            <input placeholder="Name" value={name} className="info-field mt-4 heading-font" onChange={(e) => setName(e.target.value)} />
            <input placeholder="Email" value={email} className="info-field heading-font" onChange={(e) => setEmail(e.target.value)} />
            <textarea 
            placeholder="Message" value={msg} className="info-field heading-font" onChange={(e) => setMsg(e.target.value)}>
            </textarea>

            <button className="gradient-apply connect-wallet rounded font-weight-bold border-0 mt-3 mb-5 paragraph-font">
                Submit
            </button>
        </div>
    </div>;
}

export default ContactSection;