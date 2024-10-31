import React from "react";
import ServiceCard from "../component/ServiceCard";
import {Services} from "../../lib/Services"

const page = () => {
    // console.log(Services);


  return (
    <div className="my-10 flex flex-wrap gap-5 justify-center w-4/5 mx-auto">
      {/* <h4>Total Services: {services.length}</h4> */} 
      {Services.map((service) => (
        <ServiceCard key={service._id} service={service}  /> 
      ))}
    </div>
  );
};

export default page;
