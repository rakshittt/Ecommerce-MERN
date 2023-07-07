import React from 'react'
import Layout from '../components/layout/layout'

const Policy = () => {
  return (
    <>
    <Layout title={'Policy '}>
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
      <div className="bg-white rounded-lg shadow-md p-8 border-2">
        <h2 className="text-2xl font-bold mb-4">Collection of Personal Information</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit mi vel odio fringilla, at cursus
          purus viverra. Proin volutpat eros auctor enim fringilla dapibus. Quisque congue hendrerit felis, non feugiat
          tortor accumsan sed.
        </p>
        <p className="mb-4">
          Suspendisse malesuada enim eu laoreet consectetur. Duis luctus ante et iaculis tincidunt. In vel diam sed
          nisl eleifend auctor a non turpis. Mauris feugiat tellus at convallis tempor.
        </p>
        <h2 className="text-2xl font-bold mb-4">Use of Personal Information</h2>
        <p className="mb-4">
          Donec sed massa in ligula euismod porta. Nulla sed massa lacinia, pretium est vitae, rhoncus justo. Aenean
          hendrerit quam et luctus placerat. Phasellus sed sem eu lectus tincidunt bibendum.
        </p>
        <p className="mb-4">
          Nullam vitae gravida dolor. Aliquam venenatis neque ac ante vulputate, et suscipit ipsum tincidunt. Fusce ut
          massa maximus, aliquet lacus vitae, aliquet velit.
        </p>
        <h2 className="text-2xl font-bold mb-4">Security of Personal Information</h2>
        <p className="mb-4">
          Fusce vitae feugiat tellus, vitae blandit turpis. Mauris semper ligula at turpis malesuada ullamcorper. Proin
          ullamcorper commodo dolor, nec rhoncus orci iaculis eu.
        </p>
        <p className="mb-4">
          Praesent aliquam eleifend massa, eget maximus risus mollis ac. Nulla sit amet neque non risus fringilla
          malesuada quis euismod nunc.
        </p>
      </div>
    </div>
    </Layout>
    </>
  )
}

export default Policy