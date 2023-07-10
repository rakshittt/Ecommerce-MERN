import React, { useState } from "react";
import Layout from "../../components/layout/layout";
import {toast} from'react-toastify'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
    email: "",
    password: "",
    secret_key :""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // toast.success("Register Successfully");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phoneNo, email, password, secret_key} = formData;
    // Add logic to handle form submission here
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        phoneNo,
        email,
        password,
        secret_key,
        
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (err) {
      console.log(err);
      toast.error("Something is wrong");
    }
    // console.log(formData);
    // Reset form fields
    setFormData({
      name: "",
      phoneNo: "",
      email: "",
      password: "",
      secret_key:"",
    });
  };

  return (
    <Layout title={" Register Page"}>
      <div className="flex items-center justify-center h-screen bg-gray-200 ">
        <div className="bg-white p-8 shadow-md rounded-lg w-6/12 ">
          <h1 className="text-4xl font-bold text-center mb-8">Register</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                Phone No
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="secret_key"
              >
                Secret Key
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="secret_key"
                type="password"
                placeholder="Enter your Secret Key"
                name="secret_key"
                value={formData.secret_key}
                onChange={handleChange}
                required
              />
            </div>
          
            <div className="flex items-center justify-center">
              <button
                className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default RegisterPage;
