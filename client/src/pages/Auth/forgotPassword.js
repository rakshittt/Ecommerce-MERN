import React, { useState } from "react";
import Layout from "../../components/layout/layout";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    newPassword: "",
    secret_key: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, newPassword, secret_key } = formData;
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
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
    // Add logic to handle form submission here
    console.log(formData);
    // Reset form fields
    setFormData({
      email: "",
      newPassword: "",
      secret_key,
    });
  };
  return (
    <>
      <Layout title={"forgot-password"}>
        <div className="flex items-center justify-center h-auto bg-gray-200">
          <div className="bg-white p-8 shadow-md rounded-lg w-6/12">
            <h1 className="text-4xl font-bold text-center mb-8">
              Forgot Password
            </h1>
            <form onSubmit={handleSubmit}>
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
                  htmlFor="newPassword"
                >
                  New Password
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="newPassword"
                  type="password"
                  placeholder="Enter new password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Secret Key
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="secret_key"
                  type="text"
                  placeholder="Enter your Secret Key"
                  name="secret_key"
                  value={formData.secret_key}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex items-center justify-center">
                <div>
                  <button
                    className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ForgotPassword;
