"use client";

import Image from "next/image";

import {useState} from "react";

export default function TimelineBackground() {
    const [activeIndex, setActiveIndex] = useState(null);
    const mobileSignboards = [
        { label: "Gate Opens", time: "8:00 am", x: "9%", y: "67%" },
        { label: "TBD", time: "TBD", x: "56%", y: "67%" },
        { label: "TBD", time: "TBD", x: "82%", y: "60%" },
        { label: "TBD", time: "TBD", x: "41%", y: "60%" },
        { label: "TBD", time: "TBD", x: "17%", y: "55%" },
        { label: "TBD", time: "TBD", x: "66%", y: "57%" },
        { label: "TBD", time: "TBD", x: "56%", y: "50%" },
        { label: "TBD", time: "TBD", x: "35%", y: "46%" },
        { label: "TBD", time: "TBD", x: "76%", y: "46%" },
        { label: "TBD", time: "TBD", x: "55%", y: "40%" },
    ];
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background */}
            <Image
                src="/background_timeline.svg"
                alt="Background"
                fill
                priority
                className="object-cover pointer-events-none"
                sizes="100vw"
            />



            {/* Title */}
            <h1 className="absolute inset-x-0 top-0 z-50 px-6 pt-6 text-center text-2xl md:text-xl font-['Press_Start_2P'] text-[#F0E79E] drop-shadow-md">
                <span className="uppercase">Timeline</span>
            </h1>

            {/* ============ DESKTOP VIEW ============ */}
            <div className="hidden md:block">
                {/* Snake path overlay */}
                <div className="absolute z-40 pointer-events-none"
                     style={{ width: 1400, height: 450, top: 100}}>
                    <Image src="/snake.svg"
                           alt="Snake" fill
                           className="object-contain scale-x-[1.8] scale-y-[1.2]"
                           sizes="1400px" />
                </div>

                {/* Signboard layer */}
                <div className="absolute inset-0 z-40">
                {[
                    { left: '12%',  top: '19%' },
                    { left: '40%', top: '19%' },
                    { left: '64%', top: '19%' },
                    { left: '46%', top: '93%' },
                    { left: '52%', top: '37%' },
                    { left: '42%', top: '56%' },
                    { left: '60%', top: '56%' },
                    { left: '52%', top: '74%' },
                    { left: '32%', top: '74%' },
                    { left: '80%', top: '93%' },
                ].map((p, i) => (
                    <div
                        key={i}
                        className="absolute -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_8px_12px_rgba(0,0,0,0.45)]"
                        style={{ left: p.left, top: p.top, width: 140, height: 90 }}
                    >
                        <Image
                            src="/signboard.svg"
                            alt=""
                            fill
                            className="object-contain"
                            sizes="140px"
                        />
                    </div>
                ))}
                </div>
            </div>
            {/* ============ MOBILE VIEW ============ */}
            <div className="block md:hidden relative h-[120vh] w-full">
                {/* Snake below */}
                <div className="absolute z-20 pointer-events-none -translate-x-32"
                     style={{ width: 800, height: 360, top: 240, left: -90 }}>
                    <Image
                        src="/snake.svg"
                        alt="Snake"
                        fill
                        className="object-contain scale-x-[1] scale-y-[1.7]"
                        sizes="900px"
                        priority={false}
                    />
                </div>

                {/* Signboards above with shadow */}
                <div className="absolute inset-0 z-30">
                    {[
                        { left: '13%', top: '17%' },
                        { left: '68%', top: '17%' },
                        { left: '80%', top: '30%' },
                        { left: '40%', top: '30%' },
                        { left: '62%', top: '44%' },
                        { left: '26%', top: '44%' },
                        { left: '70%', top: '56%' },
                        { left: '24%', top: '56%' },
                        { left: '43%', top: '69%' },
                        { left: '88%', top: '69%' },
                    ].map((p, i) => (
                        <div
                            key={i}
                            className="absolute -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_6px_10px_rgba(0,0,0,0.45)]"
                            style={{ left: p.left, top: p.top, width: 120, height: 84 }}
                        >
                            <Image
                                src="/signboard.svg"
                                alt=""
                                fill
                                className="object-contain"
                                sizes="120px"
                            />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
