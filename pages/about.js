import React from "react";
import Scroll from "../components/Scroll/Scroll";
import Footer from "../components/share/Footer";
import Navbar from "../components/share/Navbar";

const about = () => {
  return (
    <div>
      <Navbar />
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              About Us
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              Hi, I am a Web developer. We are interested in learning new
              features of development. We try to learn new technologies very
              quickly. I am able to work as a developer of any champ. More than
              a year of efficient website and application coding using HTML,
              React Js, CSS,Next js,Typescript, React Router, Tailwind CSS,
              Bootstrap, JavaScript, Firebase Authentication, Node JS, Express
              JS, MongoDB, Netlify,Vercel, etc.<br /> Education: Complete Bsc In
              Computer Science Engineer <br /> Contact us:- ✉ nasircsediu@gmail.com <br />
              WhatsApp Number:+8801714771225 <br /> Stay connected and grow together!
            </p>
          </div>
          <div className="w-full lg:w-8/12 ">
            <img
              className="w-86 h-96"
              src="https://i.ibb.co/fM8387G/IMG-20200214-002912-487.jpg"
              alt="A group of People"
            />
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              Our Story
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum.In the first place we have granted to
              God, and by this our present charter confirmed for us and our
              heirs forever that the English Church shall be free, and shall
              have her rights entire, and her liberties inviolate; and we will
              that it be thus observed; which is apparent from
            </p>
          </div>
          <div className="w-full lg:w-8/12 lg:pt-8">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/fM8387G/IMG-20200214-002912-487.jpg"
                  alt="Alexa featured Img"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/zHjXqg4/Rectangle-118.png"
                  alt="Alexa featured Img"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Nasir
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/Pxw5CXg/252472775-3084787311780484-8384109391605813453-n.jpg"
                  alt="Olivia featured Img"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/Pxw5CXg/252472775-3084787311780484-8384109391605813453-n.jpg"
                  alt="Olivia featured Img"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Pallob
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/KrzJd9v/62105111-2343313505925264-5250655024677126144-n.jpg"
                  alt="Liam featued Img"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/C7yZ4Tr/267478125-3067999676789973-1399589421667066170-n.jpg"
                  alt="Liam featued Img"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Ridwan
                </p>
              </div>
              <div className="p-4 pb-6 flex justify-center flex-col items-center">
                <img
                  className="md:block hidden"
                  src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
                  alt="Elijah featured img"
                />
                <img
                  className="md:hidden block"
                  src="https://i.ibb.co/ThZBWxH/Rectangle-121.png"
                  alt="Elijah featured img"
                />
                <p className="font-medium text-xl leading-5 text-gray-800 mt-4">
                  Elijah
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
      <Scroll></Scroll>
    </div>
  );
};

export default about;
