import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import Nabbar from "./Nabbar";
import Footer from "./Footer"

const card = [
  {
    img: "src/assets/Blog-jpg/01-1.png",
    topText:
      " Are Recruitment Agencies Helpful To Get A Job In Information Technology?",
  },
  {
    img: "src/assets/Blog-jpg/01.png",
    topText:
      " Are Recruitment Agencies Helpful To Get A Job In Information Technology?",
  },
  {
    img: "src/assets/Blog-jpg/10-Information-Technology-Audit-Report-Samples-Templates-PDF-Word.jpg",
    topText:
      " Are Recruitment Agencies Helpful To Get A Job In Information Technology?",
  },
  {
    img: "src/assets/Blog-jpg/about-1.jpg",
    topText:
      " Are Recruitment Agencies Helpful To Get A Job In Information Technology?",
  },
  {
    img: "src/assets/Blog-jpg/banner-finance.jpg",
    topText:
      " Are Recruitment Agencies Helpful To Get A Job In Information Technology?",
  },
  {
    img: "src/assets/Blog-jpg/banner2.jpg",
    topText:
      " Are Recruitment Agencies Helpful To Get A Job In Information Technology?",
  },
  {
    img: "src/assets/Blog-jpg/Recruitment-Agency-in-India.jpg",
    topText:
      " Are Recruitment Agencies Helpful To Get A Job In Information Technology?",
  },
  {
    img: "src/assets/Blog-jpg/Requirement.png",
    topText:
      " Are Recruitment Agencies Helpful To Get A Job In Information Technology?",
  },
  {
    img: "src/assets/Blog-jpg/service-detail.jpg",
    topText:
      " Are Recruitment Agencies Helpful To Get A Job In Information Technology?",
  },
];

const Blog = () => {
  return (
    <div>
      <div className="">
        <Nabbar />
      </div>

      <div>




      <div className=" h-80  flex relative ">
        <img
          src="src/assets/Blog-jpg/Our-Blog (2).jpg"
          className=" w-full object-cover"
        />
        <div className="absolute text-white text-2xl sm:text-5xl font-semibold flex flex-col h-full justify-center text-center items-center w-full">
          <p>Our Blog</p>
        </div>
      </div>








        

        <div className="flex px-14 gap-4 flex-wrap justify-center py-3 ">
          {card.map((d, i) => (
            <div
              key={i}
              className="w-96 p-3 rounded-lg hover:border-red-500 border-1 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]"
            >
              <div className="">
                <img
                  className="rounded-lg h-52 w-full object-cover "
                  src={d.img}
                  alt=""
                />
              </div>

              <p className="text-center text-lg py-3">{d.topText}</p>
              <div className="flex flex-row justify-start items-center gap-2 text-gray-400 text-sm  ">
                <SlCalender />
                <p>December 5, 2022</p>
              </div>
              <p className="py-4 text-center text-sm text-gray-500">
                The demand for new talent has grown due to the information
                technology (IT) sector's explosive growth. The IT industry is
                said to offer several chances .The demand for new talent has
                grown due to the information technology (IT) sector's explosive
                growth. The IT industry is said to offer several chances
              </p>
              <hr />
              <div className="flex justify-center text-red-500 text-center">
                <p>Read More</p>
                <IoIosArrowRoundForward size={25} />
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center text-center py-8 px-3 flex-col bg-indigo-900 text-white hover:bg-red-600 transition-all duration-700">
          <p className="text-2xl font-semibold ">Got A Question?</p>
          <p>We're here to help. Send us an email or call us at 9821548XXX</p>
        </div>
      </div>
      <Footer />
  
    </div>
  );
};

export default Blog;
