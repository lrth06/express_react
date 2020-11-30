import React, { useState } from "react";
import axios from './useAxios'
import "../scss/contact.scss";
import { useForm } from './useform';

export const Contact = () => {
  const [values, handleChange] = useForm({ email: "", name:"", content:"" });


  
 



  
  const handleSubmit= (e: { preventDefault: () => void; }) =>{
    e.preventDefault();
    axios.post('/mail',values)
    .then(res=>{
      console.log(res)
    }).catch(err=>{
      console.error(err)
    })
  }
  return (
    <div>
      <>
      <form className="form" onSubmit={ handleSubmit}>
        <input name="email" placeholder="email" value={values.email} onChange={handleChange} />
        <input
          type="text"
          name="name"
          placeholder="name"
          value={values.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="content"
          placeholder="Your Message Here"
          value={values.content}
          onChange={handleChange}
        />
        <button type="submit" >Send</button>
        </form>
      </>
    </div>
  );
};

