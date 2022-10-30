import React from 'react'
import classes from "./Welcome.module.css";
// import image
import Model from "../../src/assets/images/model.png";
// import icons
import AddressIcon from "../../src/assets/images/addressIcon.png"
import EmailIcon from "../../src/assets/images/emailicon.png";
import PhoneIcon from "../../src/assets/images/phoneIcon.png";


const ContactUs = () => {
  return (
    <div>
        <>
        <h1 className={classes.main_heading}>Contact US</h1>
        {/* start div here */}
        <div className={classes.card}>
        <div className={classes.first_card} >
            <div className={classes.inner_card}>
            <h1 className={classes.heading}>Get in</h1>
            <h1 className={classes.new_heading}>TOUCH</h1>
            <br/>
            <img className={classes.model} src={Model} alt="model-logo" />
            </div>

            <div className={classes.inner_card}>
                <main className={classes.inner_text}>
                <h3>
                <img className={classes.phone_logo} src={PhoneIcon} alt="phone-logo" />
                Phone</h3>
                <p>+91-999-999-9999</p>
                <p>+91-999-999-9999</p>
                </main>
                <main className={classes.email}>
                    <h3>
                    <img className={classes.email_logo} src={EmailIcon} alt="email-logo"/>
                    Email</h3>
                    <p>info@Servottam.com</p>
                    <p>contact@Servottam.com</p>
                </main>
                <main className={classes.address}>
                    <h3>
                    <img className={classes.address_logo} src={AddressIcon} alt="address-logo" />
                    Address</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed dam</p>
                </main>
            </div>
            </div>
            
            <div className={classes.second_card}>
            <main className={classes.outer_text}>
                <h1 className={classes.outer_heading}>We're</h1>
                <h2 className={classes.outer_heading}>here to Help !</h2>
                <p className={classes.details}>Please fill in the form below and</p>
                <p className={classes.description}>our executives will get back to you shortly.</p>
                <input type="text" placeholder="Name" /><br/>
                <input type="number" placeholder="Phone no" /><br/>
                <input type="email" placeholder="Email Address" /><br/>
                <textarea>Message</textarea><br/>
                <button className={classes.send_btn}>Send</button>
            </main>
            </div>
        </div>
        <div>
        <p>
         <footer></footer>
       </p>
        </div>   
    </>
    </div>
  )
}

export default ContactUs;