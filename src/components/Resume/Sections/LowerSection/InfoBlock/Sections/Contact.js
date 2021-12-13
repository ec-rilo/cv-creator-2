import React from 'react';
import CategoryTitleRight from './CategoryTitleRight';
import phoneIcon from '../../../../../../images/resume/contact-icons/phone-icon.png';
import emailIcon from '../../../../../../images/resume/contact-icons/email-icon.png';
import houseIcon from '../../../../../../images/resume/contact-icons/house-icon.png';
import linkedinIcon from '../../../../../../images/resume/contact-icons/linkedin-icon.png';
import ContactSection from './ContactSection';

const Contact = (props) => {
  const { data } = props;
  const isNotValidData = (propName) => {
    if (data[0] === '' || data[0][0][propName] === '') {
      return true;
    }
    return false;
  };

  const city = isNotValidData('city') ? 'City, ' : data[0][0]['city'] + ', ';

  const state = isNotValidData('state') ? 'State' : data[0][0]['state'];

  return (
    <div className="resume-section-container">
      <CategoryTitleRight text="Contact" />
      <div className="contact-sections-container">
        <ContactSection
          imgIcon={phoneIcon}
          textContent={
            isNotValidData('phone') ? '000-000-0000' : data[0][0]['phone']
          }
          altText={'Phone-icon'}
        />
        <ContactSection
          imgIcon={emailIcon}
          textContent={
            isNotValidData('email')
              ? 'placeholderemail@gmail.com'
              : data[0][0]['email']
          }
          altText={'Email-icon'}
        />
        <ContactSection
          imgIcon={houseIcon}
          textContent={city + state}
          altText={'House-icon'}
        />
        <ContactSection
          imgIcon={linkedinIcon}
          textContent={
            isNotValidData('linkedin-link')
              ? 'www.linkedin.com/in/account/'
              : data[0][0]['linkedin-link']
          }
          altText={'Linkedin-icon'}
        />
      </div>
    </div>
  );
};

export default Contact;
