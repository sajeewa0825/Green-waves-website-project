import React from "react";
import styled from 'styled-components';
import Contactweinfo from "./contactweinfo";
import SectionTitle from './SectionTitle';

const ContactweSectionstyle = styled.div
 padding: "10rem 0";

export default function ContactweSection() {
    return (
        <ContactweSectionstyle>       
            <div className="container">
                <SectionTitle heading="Contact"
                subheading="Get in touch"/>
                <div className="ContactweSection_ _wrapper">
                    <div className="left">
                      < Contactweinfo />
                    </div>

                    <div className="right">contact form</div>

                </div>

            </div>
        
        </ContactweSectionstyle>
    );
}