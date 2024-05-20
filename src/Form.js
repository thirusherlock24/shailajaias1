// Form.js
import React, { useState } from 'react';
import './Navigation.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? '' : 'Name is required';
    tempErrors.mobile = formData.mobile ? '' : 'Mobile is required';
    tempErrors.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email) ? '' : 'Email is not valid';
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
        const mailtoLink = `mailto:gvg@shailajaias.com?subject=Form Submission&body=Shailajaias.com%0A%0A=== Form Submission Details ===%0AName: ${formData.name}%0AMobile: ${formData.mobile}%0AEmail: ${formData.email}`;
        window.location.href = mailtoLink;
      setFormData({
        name: '',
        mobile: '',
        email: ''
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formpage1">
      <h2>Two Sessions Free (Fill details below)</h2>
      <div className="form-group">
        <label>Name</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
        />
        {/* {errors.name && <p>{errors.name}</p>} */}
      </div>
      <div className="form-group">
        <label>Mobile</label>
        <input 
          type="text" 
          name="mobile" 
          value={formData.mobile} 
          onChange={handleChange} 
        />
        {/* {errors.mobile && <p>{errors.mobile}</p>} */}
      </div>
      <div className="form-group">
        <label>Email</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
        />
        {/* {errors.email && <p>{errors.email}</p>} */}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
