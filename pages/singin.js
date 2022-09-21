import Link from "next/link";
import React from "react";
import Scroll from "../components/Scroll/Scroll";
import Footer from "../components/share/Footer";
import Navbar from "../components/share/Navbar";

const singup = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-3xl text-orange-500 text-center font-bold mt-5">
        Sing Up
      </h1>
      <section class="h-screen">
        <div class="container px-6 py-12 h-full">
          <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div class="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
              <img
                src="https://avatars.mds.yandex.net/i?id=7b4343ab7c4f910af97dde582110c2f9-5280212-images-thumbs&n=13&exp=1"
                class="w-full"
                alt="Phone image"
              />
            </div>
            
            <div class="md:w-8/12 lg:w-5/12 lg:ml-20">
              <form>
                {/* <!-- Email input --> */}
                <div class="mb-6">
                  <input
                    type="text"
                    name="name"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    placeholder="Your Name"
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="text"
                    name="email"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                    placeholder="Email address"
                  />
                </div>

                {/* <!-- Password input --> */}
                <div class="mb-6">
                  <input
                    type="password"
                    name="password"
                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                  />
                </div>

                {/* <!-- Submit button --> */}
                <button
                  type="submit"
                  class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sing Up
                </button>

                <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p class="text-center font-semibold mx-4 mb-0">OR</p>
                </div>
                <Link href="/login">
                  <button className="btn btn-secondary mb-5 w-full">
                    Login
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
      <Scroll></Scroll>
    </div>
  );
};

export default singup;
