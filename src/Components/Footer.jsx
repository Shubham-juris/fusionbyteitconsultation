import React from "react";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaSquarePinterest } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiGooglemaps } from "react-icons/si";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div class="bg-gray-900 py-8 ">
        <div className="sm:flex justify-evenly px-3   ">
          <div>
            <div className="">
              <img
                src="src/assets/658a88a7-2f6f-4320-98e4-d418800fd395-removebg-preview.png"
                alt=""
              />
            </div>
            <div className="text-white flex flex-col gap-8">
              <p>
              Address	:
                <br /> DRAYTON VALLEY, ALBERTA
                
              </p>


              <p>
                
                <br /> FUSIONBYTE@OUTLOOK.COM
                
                
              </p>


            </div>
          </div>

          <div className="text-white flex flex-col py-3  gap-2">
            <a href="#" class="text-2xl  ">
              Useful Links
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-gray-100 transition duration-300"
            >
              <Link to={"/"}>Home</Link>
            </a>

            <a
              href="#"
              class="text-gray-400 hover:text-gray-100 transition duration-300"
            >
              <Link to={"/about"}> About us </Link>
            </a>

            <a
              href="#"
              class="text-gray-400 hover:text-gray-100 transition duration-300"
            >
              <Link to={"/blog"}> Blog </Link>
            </a>

            <a
              href="#"
              class="text-gray-400 hover:text-gray-100 transition duration-300"
            >
              Services
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-gray-100 transition duration-300"
            >
              
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-gray-100 transition duration-300"
            >
              <Link to={"/privacy"}>Privacy policy</Link>
            </a>
          </div>
          <div className="text-white flex flex-col gap-2 py-3">
            <a href="#" class="text-2xl">
              
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-gray-100 transition duration-300"
            >
              Modernize Software
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-gray-100 transition duration-300"
            >
              Cloud Consulting Services
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-gray-100 transition duration-300"
            >
              AI/ML Development
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-gray-100 transition duration-300"
            >
              Cyber Security Solutions
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-gray-100 transition duration-300"
            >
              Digital Marketing
            </a>
            <a
              href="#"
              class=" text-gray-400 hover:text-gray-100 transition duration-300"
            >
              Political Campaign
            </a>
          </div>

          <div className="py-3 flex flex-col gap-2 ">
            <a href="#" class="text-2xl block text-gray-100 ">
              Support
            </a>
            <a
              href="#"
              class="block text-gray-400 hover:text-gray-100 transition duration-300"
            >
              <Link to={"/contactus"}> Contact Us </Link>
            </a>
            <a
              href="#"
              class="block text-gray-400 hover:text-gray-100 transition duration-300"
            >
              Item Support
            </a>
            <a
              href="#"
              class="block text-gray-400 hover:text-gray-100 transition duration-300"
            >
              <Link to={"/contactus"}>Get in Touch</Link>
            </a>
            <div className="text-white flex flex-wrap  gap-2 pt-3">
              <div>
                
              </div>

              <div>
               
              </div>



              <div>
                
              </div>


              



              <div>
                
              </div>


              



              <div>
                
              </div>


              



              <div>
                
              </div>




              <div>
                
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-evenly py-20">
          <div className="h-0 w-10/12 border"></div>
        </div>

        <div className="flex justify-center  text-center">
          <p className="text-gray-400 font font-thin">
          © Copyright  Fusion Byte IT Consultation Tech @2024 All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
