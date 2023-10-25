import React from "react"
import Input from "../Atoms/input"
import Button from "../Atoms/button"
import Fade from "react-reveal/Fade"

// Assets
import HeaderImage from "../../images/header-main.jpg"

const Header = () => {
  return (
    <div className=" border-t border-black/10 pt-24 pb-20 from-gray-600 via-slate-600 bg-gradient-to-r from-slate-500 to-gray-200">
      <div className="max-w-7xl mx-auto px-8 py-24 text-white">
        <div>
          <h1 className="text-slate-800 font-semibold text-8xl xxs:text-2xl xs:text-2xl sm:text-lg md:text-8xl lg:text-8xl xl:text-8xl 2xl:text-8xl">
            AI Transformation
          </h1>
          <h4 className="w-[500px] mr-24 text-slate-800 font-thin text-8xl xxs:text-2xl xs:text-2xl sm:text-lg md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-4xl mt-7">
            We help you radically transform the economics of your enterprise 
          </h4>
        </div>
        <button
          type="button"
          class="px-4 py-3 bg-white-400 rounded-md text-white font-thin text-xl outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform mx-0 my-10 flex"
        >
          <span class="ml-2">Learn More →</span>
        </button>
        <div className="max-w-7xl mx-auto mt-10">
          <div className="w-full h-auto overflow-hidden rounded-xl">

            {/* <img className="w-full h-full" src={HeaderImage} alt="Header"></img> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
