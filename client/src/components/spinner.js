import React, {useState ,useEffect} from "react";
import { useNavigate , useLocation} from "react-router-dom";
import Layout from "./layout/layout";

const Spinner = ({path="login"}) => {
    const[count,setCount]= useState(3);
    const navigate =useNavigate();
    const location = useLocation()

    useEffect(()=>{
          const interval = setInterval(()=>{
                setCount((prevValue)=>--prevValue)
          },1000);
          count === 0 && navigate(`/${path}`,{
            state : location.pathname
          })
          return ()=> clearInterval(interval)
    },[count, navigate,location , path])
  return (
    <>
      <Layout>
        <div className="items-center h-screen ">
            <h1 className="text-center">Redirecting to you in {count} seconds </h1>
          <div
            class="inline-block h-8 w-8 animate-spin items-center rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Spinner;
