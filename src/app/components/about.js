'use client';
import '../globals.css';
import GlowingSpores from "./GlowingSpores";
import Smoke from "./Smoke";

const About = () => {
    return (
        <section id="about">
            {/* Desktop */}
            <div className="hidden md:block">
                <DesktopAbout />
            </div>

            {/* Mobile */}
            <div className="block md:hidden overflow-x-hidden">
                <MobileAbout />
            </div>
            </section>
    );
};

const DesktopAbout = () => (
    
        <div className="w-full h-screen bg-[url('/about.svg')] select-none bg-center bg-cover flex items-center justify-center relative">

            {/* ✨ Glowing Spores */}
            <div className="absolute inset-0 z-[1]">
                <GlowingSpores />
            </div>

            {/* Main box */}
            <div className="relative w-[47vw] h-[72vh] rounded-[22px] bg-[url('/about-box-bg.svg')] bg-center bg-[length:100%_auto]">

                {/* Background box with text */}
                <div className="absolute inset-0 p-8 text-[#faf6da] text-center font-['Press_Start_2P'] text-[1.1rem] leading-[1.6] z-[1] rounded-[22px] box-border">
                </div>

                {/* Overlay Box */}
                <img
                    src="/about-box-overlay.svg"
                    alt="Overlay Box"
                    className="absolute top-[3.4vh] left-0 w-[594vw] h-[65vh] z-[2] rounded-[18px] pointer-events-none"
                />

                {/* Text panel */}
                <div className="absolute inset-0 flex items-center justify-center z-[2] pointer-events-none">
                    <div className="max-w-[520px] px-5 py-4 text-center text-[#FAF6DA] font-['Press_Start_2P']">
                        <h2 className="-mt-[1vh] mb-[2vw] text-[2.2rem]  font-bold text-[#f2e5a6] [text-shadow:3px_3px_#3a1d0c] animate-glow-pulse">
                            ABOUT
                        </h2>
                        <p className="text-[1 rem] leading-[1.6] text-shadow-lg text-shadow-black/80">
                            Join the adrenaline-pumping 36-hour HackBattle by IEEE CS VIT, where tech innovators gather for
                            groundbreaking challenges, keynote sessions, and engaging activities that ignite creativity and
                            drive innovation.
                        </p>
                    </div>
                </div>
            </div>

            
            {/* Torch */}
            <div className="absolute left-[3vw] bottom-[8vh] z-[4]">
                <Smoke />
            </div>

            {/* Campfire */}
            <div className="absolute right-[4vw] bottom-[3vh] z-[4]">
                <img
                    src="/campfire.webp"
                    alt="Campfire"
                    className="w-[20vw] pointer-events-none"
                />
                <Smoke />
            </div>
        </div>
);

const MobileAbout = () => (
    <div className="h-[100vh] overflow-x-hidden bg-[url('/mobile-about-bg.svg')] bg-no-repeat bg-cover flex flex-col items-center relative text-[#FAF6DA] font-['Press_Start_2P']">
        <div className="relative w-full mt-[25vh]">
            {/* Back glass (bigger) */}
            <img
                src="/glass-back.svg"
                alt=""
                className="absolute z-0 pointer-events-none
                   left-1/2 -translate-x-1/2
                   top-1/2 -translate-y-1/2
                   scale-110 opacity-90 -rotate-[7deg]"
            />
            {/* Front glass (smaller) */}
            <img
                src="/glass-front.svg"
                alt=""
                className="absolute z-[1] pointer-events-none
                   w-[90%]
                   left-1/2 -translate-x-1/2
                   top-1/2 -translate-y-1/2
                   scale-100"
            />
            <h1
                className="
          absolute left-1/2 -translate-x-1/2
          -top-[42vw]
          z-[2]
          text-[2.5rem] sm:text-[3rem] md:text-[4rem]
         font-bold text-[#f2e5a6] [text-shadow:3px_3px_#3a1d0c] animate-glow-pulse
        "
            >
                ABOUT
            </h1>
            {/* Text overlay ON TOP of front glass */}
            <div className="absolute inset-0 z-[2] flex items-center justify-center pointer-events-none">
                <div className="w-[84%] text-center text-[#EFE7A1]">
                    <p className="text-[0.75rem] leading-[1.95] opacity-95">
                        Join the adrenaline-pumping 36-hour HackBattle by IEEE CS VIT, where tech innovators gather
                        for groundbreaking challenges, keynote sessions, and engaging activities that ignite creativity
                        and drive innovation.
                    </p>
                </div>
            </div>
            {/* container spacer to give the absolutely-positioned images height */}
            <div className="invisible w-full pt-[100%]" />
        </div>
        {/* Axolotl */}
        
        {/* Campfire */}
        <div className="absolute left-[32vw] bottom-[3vw] z-[4]">
            <img
                src="/campfire.webp"
                alt="Campfire"
                className="w-[50vw] h-auto pointer-events-none"
            />
            <Smoke />
        </div>
    </div>
);

export default About;
