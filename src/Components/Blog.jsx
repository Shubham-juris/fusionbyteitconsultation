import React, { useEffect } from "react";
import Nabbar from "./Nabbar";
import Footer from "./Footer";

const card = [
  {
    img: "/Blog-jpg/01-1.png",
    topText: " Things That Will Boost Your Career",
    bottomText:
      "Today, life has become all about the struggle to have successful and promising careers. To achieve your goals of a successful career, you need",
  },
  {
    img: "/Blog-jpg/01.png",
    topText: " Benefits Of Working With A Good Recruitment Agency",
    bottomText:
      "As an organization looking for talented employees, you might be interested in working with a recruitment agency. After all, searching and connecting",
  },
  {
    img: "/Blog-jpg/10-Information-Technology-Audit-Report-Samples-Templates-PDF-Word.jpg",
    topText: " Make Your Recruitment Process Easy And Effective",
    bottomText:
      "Recruitment is one of the most difficult processes in any company. A lot of times the HR department is lost in recruiting people. It takes  ",
  },
  {
    img: "/Blog-jpg/about-1.jpg",
    topText:
      " Are Recruitment Agencies Helpful To Get A Job In Information Technology?",
    bottomText:
      "Recruitment is one of the most difficult processes in any company. A lot of times the HR department is lost in recruiting people. It takes",
  },
  {
    img: "/Blog-jpg/banner-finance.jpg",
    topText: " Acquire The Best Talents In The Market",
    bottomText:
      "Employing the right people is crucial for any business. Companies are constantly looking at ways to have the best manpower resources so that they can",
  },
  {
    img: "/Blog-jpg/banner2.jpg",
    topText: " Embark On The Most Rewarding Career",
    bottomText:
      "Embark On The Most Rewarding CareerJuly 25, 2020The dream of any person is to embark on a rewarding career with enough prospects for growth and development. But this is not always achieved.",
  },
  
  {
    img: "/Blog-jpg/Requirement.png",
    topText:
      " Are Recruitment Agencies Helpful To Get A Job In Information Technology?",
    bottomText:
      "The demand for new talent has grown due to the information technology (IT) sector's explosive growth. The IT industry is said to offer several chances",
  },
  {
    img: "/Blog-jpg/service-detail.jpg",
    topText: " A Good Agency Can Get You The Right Job",
    bottomText:
      "It is everyone's dream to land the right job. It is not just always about money and position. There is something that is much more",
  },
];

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Nabbar />
      <div>
        <div className="h-80 flex relative">
          <img
            src="/Blog-jpg/Our-Blog (2).jpg"
            className="w-full object-cover"
            alt="Blog Banner"
          />
          <div className="absolute text-white text-2xl sm:text-5xl font-semibold flex flex-col h-full justify-center text-center items-center w-full">
            <p>Our Blog</p>
          </div>
        </div>

        <div className="flex px-14 gap-4 flex-wrap justify-center py-20">
          {card.map((d, i) => (
            <div
              key={i}
              className="w-96 p-3 rounded-lg hover:border-red-500 border-1 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]"
            >
              <img
                className="rounded-lg h-52 w-full object-cover"
                src={d.img}
                alt={`Blog ${i + 1}`}
              />
              <p className="text-center text-lg py-3">{d.topText}</p>
              <p className="py-4 text-center text-sm text-gray-500">
                {d.bottomText}
              </p>
            </div>
          ))}
        </div>

      
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
