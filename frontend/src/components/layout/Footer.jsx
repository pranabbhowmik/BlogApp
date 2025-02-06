import React from "react";
import { Youtube, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  const socials = [<Youtube />, <Facebook />, <Instagram />, <Linkedin />];
  const socialLinks = ["youtube", "facebook", "instagram", "linkedin"];
  return (
    <>
      {/* Footer */}
      <footer className="bg-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2">
              <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.88945 38.9723C1.09221 35.2276 -0.689229 29.5324 0.381427 24.2982C1.44056 18.4198 6.00621 13.2958 11.7719 11.6808C14.5945 14.5445 17.453 17.3696 20.2885 20.2179C20.8725 20.7814 21.4078 21.3949 22.0379 21.9084C20.0285 21.9289 18.0152 21.8546 16.0084 21.9327C13.2357 22.1082 10.8869 24.7234 11.0419 27.5037C11.0163 30.3097 13.5328 32.8455 16.3401 32.8288C21.8624 32.8417 27.3835 32.8276 32.9033 32.8378C36.5314 36.4698 40.1532 40.1096 43.8006 43.7237C43.2371 43.8312 42.6647 43.8018 42.096 43.7967C33.5807 43.798 25.068 43.7967 16.5553 43.798C12.238 43.8095 7.92469 42.0575 4.88945 38.9723Z"
                  fill="#7C4EE4"
                />
                <path
                  d="M10.7578 10.7129C7.16802 7.14747 3.63331 3.52312 -1.40422e-06 -4.95911e-05C8.49865 0.0332485 16.996 0.00506899 25.4947 0.0153149C26.9214 0.0345256 28.3621 -0.0653661 29.7722 0.2023C33.3863 0.700488 36.8096 2.46912 39.3108 5.1227C42.0911 8.00554 43.7176 11.9475 43.8444 15.9458C43.9392 19.241 43.0068 22.5618 41.2228 25.3333C39.1238 28.5568 35.8798 31.1053 32.1479 32.1248C29.3611 29.2932 26.5308 26.5012 23.726 23.685C23.1613 23.1612 22.6874 22.5337 22.0394 22.1008C22.1495 22.0099 22.2686 21.933 22.3993 21.8716C24.1807 21.9087 25.966 21.9036 27.7487 21.8805C30.515 21.8037 32.9432 19.2756 32.8881 16.5055C32.9688 14.2553 31.446 12.0935 29.347 11.3212C28.5466 10.9755 27.6629 10.9703 26.8061 10.978C21.6347 10.9831 16.4645 10.9767 11.2944 10.9819C11.078 10.9831 10.8987 10.8935 10.7578 10.7129Z"
                  fill="#7C4EE4"
                />
              </svg>
              <span className="text-xl font-bold">Zarrin</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex justify-center gap-8 mb-8">
            <Link to={"/"} className="text-gray-600 hover:text-purple-600">
              Home
            </Link>
            <Link to={"/blog"} className="text-gray-600 hover:text-purple-600">
              Blog
            </Link>
            <Link to={"/about"} className="text-gray-600 hover:text-purple-600">
              About
            </Link>
            <Link
              to={"/contact"}
              className="text-gray-600 hover:text-purple-600"
            >
              Contact Us
            </Link>
          </nav>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            {socials.map((social) => (
              <Link
                key={social}
                to={`/${socialLinks[socials.indexOf(social)]}`}
                className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-sm hover:bg-purple-200 transition-colors duration-200"
              >
                {social}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-sm">
            Copyright Ideapeel Inc © 2023. All Right Reserved
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
