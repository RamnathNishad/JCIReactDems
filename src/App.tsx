import React from 'react';

import './App.css';

import AppHeader from './mycomponents/AppHeader';
import AppContent from './mycomponents/AppContent';
import AppFooter from './mycomponents/AppFooter';
import AppCounter from './mycomponents/AppCounter';
import Employee from './mycomponents/Employee';
import ContactForm from './mycomponents/ContactForm';



function App() {
  const footerProps={
    website:'https:/abc.co',
    company:'RNishad Inc',
    year:2023
  }
   return (
    <div className="container">
      {/* <AppHeader title="Addressbook App - v1.0" subheading="Created by Ramnath"/>
      <AppContent/>
      {/* <AppFooter  website={footerProps.website} company={footerProps.company} year={footerProps.year}/> */}
      {/* <AppFooter {...footerProps}/> */} 

      {/* <AppCounter/> */}
      {/* <Employee /> */}
      <ContactForm />
    </div>
  );
}

export default App;
