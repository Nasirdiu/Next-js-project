import React from "react";
import CountUp from "react-countup";
const Client = () => {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-2 uppercase text-orange-500">
        Our Busniess <span className="text-white">Summery</span>
      </h1>
      <div className="flex justify-center">
        <progress className="progress  w-64 mt-2 bg-orange-700"></progress>
      </div>
      <div> 
      <div data-aos="zoom-in"
            data-aos-duration="3000"
             className="bg-black text-white mt-5 md:px-32 ">
        <div className="grid grid-cols-1 md:grid-cols-3 py-3 ">
          <div className="count-title text-center bg-orange-500 p-5 w-2/4 rounded-md">
            <div className="flex justify-center text-4xl font-bold">
              <CountUp start={0} end={500} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <p className="pl-2">+</p>
            </div>
            <h2 className="count-para">Happy Clients</h2>
          </div>
          <div className="count-title text-center bg-orange-500 p-5 w-2/4 rounded-md">
            <div className="flex justify-center text-4xl font-bold">
              <CountUp start={0} end={150} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <p className="pl-2">+</p>
            </div>
            <h2 className="count-para">Current Clients</h2>
          </div>
          <div className="count-title text-center bg-orange-500 p-5 w-2/4 rounded-md">
            <div className="flex justify-center text-4xl font-bold">
              <CountUp start={0} end={1000} delay={0}>
                {({ countUpRef }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
              <p className="pl-2">+</p>
            </div>
            <h2 className="count-para">All Clients</h2>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Client;
