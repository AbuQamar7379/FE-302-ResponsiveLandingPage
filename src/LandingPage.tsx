import { useState } from "react";
import { GithubIcon, TwitterIcon, LinkedInIcon } from "./SocialIcons";
import { MenuIcon } from "./MenuIcon";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const heroImageUrl =
    "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
  const profileImageUrl =
    "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200&w=200";

  return (
    <div>
      {/* Navbar */}
      <nav>
        <div className=" flex justify-center">
          <div className="flex justify-between items-center w-[80%] h-20">
            <div className="text-2xl text-[#4338ca] font-bold">
              <span>Logo</span>
            </div>
            <div className="hidden lg:flex justify-between lg:w-[25%] xl:w-[20%] text-slate-500">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <MenuIcon isOpen={isMenuOpen} />
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div>
            <div className="flex flex-col bg-[#f3f4f6] gap-y-5 pl-5">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="lg:flex">
        <div>
          <div>
            <main>
              <div className="flex flex-col items-center justify-center lg:items-start lg:pl-12 gap-y-7 h-[45vh] bg-[#4338ca]">
                <h1 className="flex flex-col items-center lg:items-start">
                  <span className="text-white text-5xl font-bold">
                    Welcome to Our
                  </span>
                  <span className="text-[#a5b4fc] text-5xl font-bold">
                    Amazing Landing Page
                  </span>
                </h1>
                <p className="w-[80%] text-center text-slate-400 text-xl lg:text-start">
                  Discover the power of Tailwind CSS with this beautifully
                  crafted landing page. Responsive, modern, and easy to
                  customize.
                </p>
                <div>
                  <div className="bg-white w-40 text-center py-3 rounded-lg text-[#4338ca] text-lg font-semibold">
                    <a href="#">Get started</a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="w-full h-[40vh] lg:h-[45vh] ">
          <img
            src={heroImageUrl}
            alt="Hero image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Profile Card */}
      <div>
        <div>
          <div className="bg-[#f3f4f6] flex justify-center items-center h-[50vh]">
            <div className="bg-white w-[90%] lg:w-[70%] flex flex-col items-center rounded-lg shadow-lg gap-y-3.5 text-slate-500">
              <img
                src={profileImageUrl}
                alt="Profile picture"
                className="w-24 h-24 rounded-full mt-5"
              />
              <h3 className="text-black font-semibold text-lg">John Doe</h3>
              <p>Web Developer & Designer</p>
              <p className="w-[70%] md:w-[50%] text-center">
                Passionate about creating beautiful and functional web
                experiences using the latest technologies.
              </p>
              <div className="flex gap-x-4 mb-5">
                <a href="#">
                  <GithubIcon />
                </a>
                <a href="#">
                  <TwitterIcon />
                </a>
                <a href="#">
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
