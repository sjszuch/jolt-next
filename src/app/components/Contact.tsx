'use client'
import React from 'react'
import Style from './Contact.module.scss'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "48b66d50-25c1-47e5-8b17-7dd5a72d86b2");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
     <div className={Style.contact}>
      <form onSubmit={onSubmit}>
        <input type="hidden" name="access_key" value="48b66d50-25c1-47e5-8b17-7dd5a72d86b2">
        </input>
        <input type="text" name="name" placeholder='Your Name' required/>
        <input type="email" name="email" placeholder='Your Email' required/>
        <textarea name="message" placeholder='Message' required></textarea>

        <button type="submit" className={Style.submit}>Submit Form</button>

      </form>
      <span>{result}</span>

    </div>
  )
}

export default Contact