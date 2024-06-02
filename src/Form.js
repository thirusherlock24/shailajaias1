import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit} className="mt-2 flex flex-col bg-white p-6 border border-blue-600 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 rounded-lg mx-auto md:-translate-x-16 lg:-translate-x-24">
      <h2 className="text-lg font-bold mb-4 text-center">Two Sessions Free (Fill details below)</h2>
      <div className="form-group flex flex-col md:flex-row items-center mb-4">
        <label className="font-bold w-full md:w-1/3 mb-2 md:mb-0">Name</label>
        <div className="w-full md:flex-1">
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
        </div>
      </div>
      <div className="form-group flex flex-col md:flex-row items-center mb-4">
        <label className="font-bold w-full md:w-1/3 mb-2 md:mb-0">Mobile</label>
        <div className="w-full md:flex-1">
          <input 
            type="text" 
            name="mobile" 
            value={formData.mobile} 
            onChange={handleChange} 
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.mobile && <p className="text-red-500 text-sm mt-2">{errors.mobile}</p>}
        </div>
      </div>
      <div className="form-group flex flex-col md:flex-row items-center mb-4">
        <label className="font-bold w-full md:w-1/3 mb-2 md:mb-0">Email</label>
        <div className="w-full md:flex-1">
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
        </div>
      </div>
      <button type="submit" className="p-2 bg-blue-600 text-white border-none cursor-pointer self-center rounded-md hover:bg-blue-800 w-full md:w-auto">Submit</button>
    </form>
  );
};

export default Form;
