import React from "react";
import Layout from "../components/layout/layout";

const About = () => {
  return (
    <>
      <Layout title={'About us' }>
        <div className="container mx-auto py-8">
          <h1 className="text-4xl font-bold mb-8 p-2 m-2">About Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-2 m-2">
            <div className="flex items-center">
              <img
                className="w-96 rounded-lg"
                src="/images/about-us-image.jpg"
                alt="About Us"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                faucibus aliquet sem a pharetra. Cras tristique nunc risus, at
                maximus dui rutrum a. Sed vitae luctus quam, nec ullamcorper
                nunc.
              </p>
              <p className="mb-4">
                Vivamus nec lobortis ipsum. Nam euismod massa ut ex eleifend
                facilisis. In varius turpis at tellus tristique, eget lacinia
                tortor consectetur. Curabitur quis fermentum sapien, at
                hendrerit orci.
              </p>
              <p className="mb-4">
                Nulla facilisi. Duis gravida tellus sit amet felis euismod
                eleifend. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia Curae; Cras feugiat purus ligula,
                vitae rhoncus arcu interdum sit amet. Mauris consectetur felis
                eu mauris venenatis venenatis. Ut eu dui et nunc gravida
                consectetur.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
