import React from "react"
import PresetGallery from "./components/featured"
import ContactSection from "./components/contact"
import HeroSection from "./components/hero"
import Achievements from "./components/achievement"

export default function Home (props) {
  return (
    <div className="w-full h-auto flex flex-col gap-8">
        <HeroSection/>
        <Achievements/>
       <PresetGallery/> 
      <ContactSection/>
    </div>
  )
};