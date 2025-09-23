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
            <div className="hidden md:flex justify-center items-center w-full h-screen">
                <div className="relative w-full max-w-4xl aspect-[1400/900]">
                    {/* Snake (with scaling) */}
                    <div className="absolute inset-0 scale-x-[1.4] scale-y-[0.95] origin-top-left translate-x-[-27%] translate-y-[1%]">
                        <Image
                            src="/snake.svg"
                            alt="Snake"
                            fill
                            className="object-contain"
                            sizes="100vw"
                        />
                    </div>

                    {/* Signboards (aligned to scaled snake) */}
                    {[
                        { left: "12%", top: "13%", label: "Gate Opens", time: "8:00 am" },
                        { left: "40%", top: "13%" },
                        { left: "64%", top: "13%" },
                        { left: "35%", top: "102%" },
                        { left: "52%", top: "35%" },
                        { left: "35%", top: "57%" },
                        { left: "68%", top: "57%" },
                        { left: "57%", top: "79%" },
                        { left: "16%", top: "79%" },
                        { left: "84%", top: "102%" },
                    ].map((p, i) => (
                        <div
                            key={i}
                            style={{ left: p.left, top: p.top }}
                            className="absolute -translate-x-1/2 -translate-y-1/2 w-[15%] h-auto aspect-[140/90] drop-shadow-[0_8px_12px_rgba(0,0,0,0.45)]"
                        >
                            <Image
                                src="/signboard.svg"
                                alt="Signboard"
                                fill
                                className="object-contain"
                            />
                            {i === 0 && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center md:text-[8px] font-['Press_Start_2P'] text-[#000000] translate-y-[10%]">
                                    <span>{p.label}</span>
                                    <span>{p.time}</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* ============ MOBILE VIEW ============ */}
            <div className="flex md:hidden justify-center items-center w-full h-screen">
                <div className="relative w-full max-w-md aspect-[800/1000]">
                    {/* Snake (with scaling) */}
                    <div className="absolute inset-0 scale-x-[1.4] scale-y-[2.2] origin-top-left translate-x-[-21%] translate-y-[-64%]">
                        <Image
                            src="/snake.svg"
                            alt="Snake"
                            fill
                            className="object-contain"
                            sizes="100vw"
                        />
                    </div>

                    {/* Signboards */}
                    {[
                        { left: "17%", top: "2%", label: "Gate Opens", time: "8:00 am" },
                        { left: "68%", top: "2%" },
                        { left: "80%", top: "30%" },
                        { left: "38%", top: "30%" },
                        { left: "69%", top: "56%" },
                        { left: "26%", top: "56%" },
                        { left: "80%", top: "85%" },
                        { left: "36%", top: "85%" },
                        { left: "23%", top: "110%" },
                        { left: "70%", top: "110%" },
                    ].map((p, i) => (
                        <div
                            key={i}
                            style={{ left: p.left, top: p.top }}
                            className="absolute -translate-x-1/2 -translate-y-1/2 w-[30%] h-auto aspect-[120/84] drop-shadow-[0_6px_10px_rgba(0,0,0,0.45)]"
                        >
                            <Image
                                src="/signboard.svg"
                                alt="Signboard"
                                fill
                                className="object-contain"
                            />
                            {i === 0 && (
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[10px] md:text-[10px] font-['Press_Start_2P'] text-[#000000] translate-y-[10%]">
                                    <span>{p.label}</span>
                                    <span>{p.time}</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
