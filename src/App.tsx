import React from 'react';

import { useState,useEffect } from 'react';

import './App.css';

import AppHeader from './mycomponents/AppHeader';
import AppContent from './mycomponents/AppContent';
import AppFooter from './mycomponents/AppFooter';
import AppCounter from './mycomponents/AppCounter';
import Employee from './mycomponents/Employee';
//import ContactForm from './mycomponents/ContactForm'; //uncontrolled form component
import ContactForm from './mycomponents/ContactFormCtrld'; //controlled form component
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ContactList from './mycomponents/ContactList';

import ContactById from './mycomponents/ContactById';


const Home = () => {
  return (
    <div>
      <h3>Welcome to Addressbook Application</h3>
      <hr />
      <p>Powered by React</p>
    </div>
  )
}


function App() {

  let [contacts,setData]=useState([]);

  //this is called only once when the component is loaded
  useEffect(()=>{
   fetch("http://localhost:4000/contacts")
    .then((response)=>{
       response.json().then((data)=>{
        console.log(data);
        setData(data);
      });      
    });  
  },[]);  //dependency is needed else it will called infinitely 


  const footerProps = {
    website: 'https:/abc.co',
    company: 'RNishad Inc',
    year: 2023
  }

  return (
    <>
    {console.log("render is called")}
      <Router>

        <div className="container">

          {/* <AppHeader title="Addressbook App - v1.0" subheading="Created by Ramnath"/>
      <AppContent/>
      {/* <AppFooter  website={footerProps.website} company={footerProps.company} year={footerProps.year}/> */}
          {/* <AppFooter {...footerProps}/> */}

          {/* <AppCounter/> */}
          {/* <Employee /> */}
          {/* <ContactForm /> */}
          {/* <AppContent/> */}

          <h1 className="alert alert-info">React Demo</h1>
          <div className="row">
            <div className='col-md-4'>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/add-new-contact">  Add a new contact</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/view-all-contacts"> View all contacts</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-8">
              {/* Here routes navigation data is to be displayed */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-new-contact" element={<ContactForm />} />
                <Route path="/view-all-contacts" element={<ContactList contacts={contacts} />} />
                <Route path="/contact-by-id/:id" element={<ContactById />} />
              </Routes>
            </div>
          </div>

        </div>
      </Router>
    </>
  );
}

export default App;
