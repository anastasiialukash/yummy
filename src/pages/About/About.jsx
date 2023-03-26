import React from 'react';
import styled from "styled-components";

const About = () => {
    return (
        <div>
            <Heading>
                <h1>About</h1>
                <p>Some text here</p>
                <br />
                <a href="#" target="_blank">
                    Read the article here
                </a>
                <br />
            </Heading>
        </div>
    );
};

const Heading = styled.div`
  margin-top: 8rem;
  text-align: center;
  display: block;

  a:nth-of-type(1) {
    border-bottom: violet solid 2px;
  }
`;

export default About;