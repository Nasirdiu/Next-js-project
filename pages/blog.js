import React from "react";
import Scroll from "../components/Scroll/Scroll";
import Footer from "../components/share/Footer";
import Navbar from "../components/share/Navbar";

const Blog = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 ">
        <h1 className=" text-5xl text-center f-m-w text-indigo-700 font-bold pt-0">
          Our Blogs
        </h1>
        <div className="pt-14 xl:px-0 px-4">
          <div className="w-full lg:flex">
            <div className="lg:w-1/2">
              <img
                src="https://avatars.mds.yandex.net/i?id=d264636c346046aeb190c27b0aba0d30-5233038-images-thumbs&n=13&exp=1"
                className="w-full"
              />
              <div className="mt-8 lg:mb-0 mb-8">
                <h1 className="f-m-m text-2xl font-semibold leading-7">
                  Beautiful Italy, Travel Blog
                </h1>
                <p className="text-base f-m-m leading-loose mt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. It has survived not only five centuries.
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <div className="mt-6">
                  <a href>
                    <p className="text-indigo-700 underline text-base font-semibold f-m-m">
                      Read More
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 lg:ml-8">
              <div className="lg:flex items-start mb-8">
                <img
                  src="https://cdn.tuk.dev/assets/components/111220/blg-17/blog2.png"
                  className="w-full"
                />
                <div className="lg:ml-6">
                  <h1 className="f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">
                    A Broken Backpack
                  </h1>
                  <p className="text-base f-m-m leading-loose mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. It has survived not only five
                    centuries. Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry.
                  </p>
                  <div className="mt-4">
                    <a href>
                      <p className="text-indigo-700 underline text-base font-semibold f-m-m">
                        Read More
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:flex items-start mb-8">
                <img
                  src="https://avatars.mds.yandex.net/i?id=64ae3c665eafa923bd1c0e0cbe3de6d1-5171136-images-thumbs&n=13&exp=1"
                  className="w-full"
                />
                <div className="lg:ml-6">
                  <h1 className="f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">
                    My life’s a Movie
                  </h1>
                  <p className="text-base f-m-m leading-loose mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. It has survived not only five
                    centuries. Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry.
                  </p>
                  <div className="mt-4">
                    <a href>
                      <p className="text-indigo-700 underline text-base font-semibold f-m-m">
                        Read More
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:flex items-start mb-8">
                <img
                  src="https://cdn.tuk.dev/assets/components/111220/blg-17/blog4.png"
                  className="w-full"
                />
                <div className="lg:ml-6">
                  <h1 className="f-m-m text-2xl font-semibold leading-7 lg:mt-0 mt-8">
                    Lilii’s Travel Plans
                  </h1>
                  <p className="text-base f-m-m leading-loose mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. It has survived not only five
                    centuries. Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry.
                  </p>
                  <div className="mt-4">
                    <a href>
                      <p className="text-indigo-700 underline text-base font-semibold f-m-m">
                        Read More
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center my-16 w-full">
          <button className=" hover:bg-gray-200 border border-indigo-700 border-2 lg:text-2xl md:text-lg text-sm rounded f-m-m font-semibold text-indigo-700 focus:outline-none lg:px-12 px-6 lg:py-6 py-3 xl:leading-4">
            Browse More
          </button>
        </div>
        <div />
      </div>
      <Footer></Footer>
      <Scroll/>
    </div>
  );
};

export default Blog;
