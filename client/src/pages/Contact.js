import React, { useState } from "react";
import Layout from "../components/layout/layout";

import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { HiOutlineChatAlt2 } from "react-icons/hi";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission here
    console.log(formData);
    // Reset form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <Layout title={'Contact us'}>
      <div className="flex flex-col items-center justify-center h-screen bg-transparent">
      <div className="max-w-lg bg-white bg-opacity-75 rounded-lg p-8 shadow-lg border-2">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Us</h1>
        <p className="text-gray-600 text-center mb-8">
          Welcome to our business! If you have any questions or inquiries, feel free to reach out to us by
          filling out the form below. We'll get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex items-center">
            <AiOutlineUser className="mr-2 text-gray-700" />
            <input
              className="appearance-none bg-gray-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4 flex items-center">
            <AiOutlineMail className="mr-2 text-gray-700" />
            <input
              className="appearance-none bg-gray-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              <HiOutlineChatAlt2 className="mr-2 text-gray-700" />
              Message
            </label>
            <textarea
              className="appearance-none bg-gray-100 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="5"
              placeholder="Enter your message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-gray-900 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
      </Layout>
    </>
  );
};

export default Contactus;
