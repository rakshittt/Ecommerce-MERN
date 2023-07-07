import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/layout";

const PageNotFound = () => {
  return (
    <>
      <Layout title={'Page not Found'}>
        <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
          <h1 className="text-6xl font-bold mb-8">404</h1>
          <p className="text-2xl text-gray-600 mb-4">Oops! Page not found.</p>
          <p className="text-lg text-gray-600 mb-8">
            The requested page could not be found.
          </p>
          <Link
            to="/"
            className="bg-gray-900 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Go to Home
          </Link>
        </div>
      </Layout>
    </>
  );
};

export default PageNotFound;
