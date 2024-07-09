"use client"
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Section1.css';

gsap.registerPlugin(ScrollTrigger);

export default function Section1() {
    useEffect(() => {
        if (window.matchMedia("(min-width: 992px)").matches) {
          // Code that should only execute for viewport width >= 992px
          let panels = gsap.utils.toArray(".ourpanel"); // Select all elements with class "ourpanel"
          
          let scrollTriggers = panels.map((panel, i) => {
            let start = panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom";
            
            return ScrollTrigger.create({
              trigger: panel,
              start: start,
              end: () => `+=${panel.offsetHeight}`, // Adjust end based on panel height
              pin: true, // Pin the panel when in view
              pinSpacing: false, // Disable pin spacing
              markers:true,
            });
          });
    
          let snapTrigger = ScrollTrigger.create({
            snap: {
              snapTo: (progress, self) => {
                let panelStarts = scrollTriggers.map(st => st.start),
                  snapScroll = gsap.utils.snap(panelStarts, self.scroll()); // Snap scrolling to each panel
                return gsap.utils.normalize(ScrollTrigger.maxScroll(window), snapScroll); // Normalize scrolling
              },
              // duration: 1 
            }
          });
    
          //Function to refresh specific ScrollTriggers
        //   function refreshScrollTriggers() {
        //     scrollTriggers.forEach(st => st.refresh());
        //     snapTrigger.refresh();
        //   }
    
        //   // Example of when to call the refresh function
        //   window.addEventListener('scrollend', refreshScrollTriggers);
    
        //   // Cleanup function to remove event listeners and ScrollTriggers on component unmount
        //   return () => {
        //     window.removeEventListener('scrollend', refreshScrollTriggers);
        //     scrollTriggers.forEach(st => st.kill());
        //     snapTrigger.kill();
        //   };
        }
      }, []);
    
    return (
        <div className='section2 pb-[300px]'>
            <div className="ourpanel">
            <video
                className=""
                src="./home image/video.mp4"
                autoPlay
                muted
                loop
            />
            </div>
            <div className=' bg'>
                <h2>the future <br></br> of electric <br></br>propulsion</h2>
            </div>
        </div>
    )
}
