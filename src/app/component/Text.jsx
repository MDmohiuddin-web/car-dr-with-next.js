import React from "react";

const Text = ({ text1, text2, text3 }) => {
  return (
    <div className="md:w-[50%] text-center m-auto my-10 space-y-2">
      <h4 className="text-red-500 font-bold text-3xl">{text1}</h4>
      <h2 className="md:text-4xl font-bold">{text2}</h2>
      <p className="text-gray-400">{text3}</p>
    </div>
  );
};

export default Text;
