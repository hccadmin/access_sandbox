import React from 'react';
import Obfuscate from 'react-obfuscate';
import Image from 'react-bootstrap/Image';
import dfciLogo from "../images/dfci.svg";
import sickKidsLogo from "../images/sick_kids.svg";

const About = () => {
  return (
    <>
      <h1>About</h1>
      <p>The Forecast Model is part of the larger ACCESS (Access to Childhood Cancer Essentials) initiative, which strives to create and implement innovative solutions to childhood cancer drug and radiotherapy access in low- and middle-income countries.</p>	
      <p>For additional information on the ACCESS initiative, please visit our website.</p>	

      <h2>Model feedback</h2>	
      <p>The goal of the Forecast Model is to be as user-friendly, pragmatic, and impactful as possible. We strive to help users organize their data, while filling in the blanks with the best publicly available sources where there are gaps. Our included regimens draw on international expert recommendations for resource-adapted care and seek to be as reflective of real-world use as possible.</p>
      <p>See something that we could do better? Please let us know by filling out the feedback google form or contacting one of our team members below.</p>

      <h2>Contact us!</h2>
      <p>We welcome all feedback—please complete this short feedback google form or reach out to us via email, and we will get back to you as soon as possible:</p>

      <p><strong>Terence M. Hughes, BA</strong><br />
      <Obfuscate email="terence.m.hughes.17@gmail.com" /><br />
      or<br />
      <Obfuscate email="terence.hughes@icahn.mssm.edu" /></p>

      <p><strong>Brianna Empringham, MD</strong><br />
      <Obfuscate email="brianna.empringham@medportal.ca" /></p>

      <p><strong>Avram Denburg, MD PhD</strong><br />
      <Obfuscate email="avram.denburg@sickkids.ca" /></p>

      <p><strong>A. Lindsay Frazier, MD</strong><br />
      <Obfuscate email="Lindsay_Frazier@dfci.harvard.edu" /></p>

      <h2>Funding and acknowledgements</h2>
      <p>Thank you to the following funding sources for making the Forecast Model possible:</p>
      <a href="https://dana-farber.org" target="_blank" className="mr-5"><Image src={ dfciLogo } fluid /></a>
      <a href="https://www.sickkids.ca" target="_blank"><Image src={ sickKidsLogo } fluid /></a>
    </>
  );
}

export default About;
