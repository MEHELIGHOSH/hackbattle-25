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
            <h1 className="absolute inset-x-0 top-0 z-50 px-6 pt-6 text-center text-2xl md:text-xl font-['Press_Start_2P'] text-[#433625] drop-shadow-md">
                <span className="uppercase">Timeline</span>
            </h1>

            {/* ============ DESKTOP VIEW ============ */}
            <div className="hidden md:block">
                {/* Foreground row with 10 boxes */}
                <div className="absolute inset-x-0 bottom-28 -left-32 z-50 pointer-events-auto">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="relative translate-y-2">
                            <div
                                className={[
                                    "flex flex-nowrap justify-between gap-x-8 relative",
                                    "[&>*]:transition-transform [&>*]:duration-200",
                                    "[&>*:nth-child(1)]:translate-y-0",
                                    "[&>*:nth-child(2)]:-translate-y-6",
                                    "[&>*:nth-child(3)]:-translate-y-12",
                                    "[&>*:nth-child(4)]:-translate-y-18",
                                    "[&>*:nth-child(5)]:-translate-y-24",
                                    "[&>*:nth-child(6)]:-translate-y-24",
                                    "[&>*:nth-child(7)]:-translate-y-18",
                                    "[&>*:nth-child(8)]:-translate-y-12",
                                    "[&>*:nth-child(9)]:-translate-y-6",
                                    "[&>*:nth-child(10)]:translate-y-0",
                                ].join(" ")}
                            >
                                {Array.from({ length: 10 }).map((_, i) => (
                                    <div key={i} className="relative w-[96px] h-[96px]">
                                        <Image
                                            src="/signboard.svg"
                                            alt={`Step ${i + 1}`}
                                            width={96}
                                            height={96}
                                        />
                                        {i === 0 && (
                                            <span
                                                className="absolute left-[6%] top-[25%] flex flex-col items-center
                                                text-[0.51rem] font-['Press_Start_2P'] text-white space-y-2 leading-tight">
                                                <span className="whitespace-nowrap">Gate Opens</span>
                                                <span>8:00 am</span>
                                            </span>
                                        )}
                                    </div>
                                ))}
                                {/* chicken jockey */}
                                <div className="absolute inset-x-0 flex justify-center -translate-x-24 -translate-y-24 z-40">
                                    <Image
                                        src="/zombie-chicken.svg"
                                        alt="Zombie"
                                        width={120}
                                        height={120}
                                        className="drop-shadow-lg translate-y-32 animate-bounce"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Camel walk animation */}
                <div className="camel -translate-y-24 drop-shadow-2xl">
                    <Image
                        src="/Camel_Walk.gif"
                        alt="Camel Walk"
                        width={150}
                        height={150}
                        unoptimized
                    />
                </div>

                {/* End Flag */}
                <Image
                    src="/flag.svg"
                    alt="End Flag Desktop"
                    width={140}
                    height={140}
                    className="absolute right-0 top-1/2 translate-y-28 -translate-x-4 pointer-events-none z-40"
                    priority
                />
            </div>

            {/* ============ MOBILE VIEW ============ */}
            <div className="md:hidden relative w-full h-screen bg-[url('/timeline-bg-mobile.svg')] bg-cover">
                {mobileSignboards.map((board, i) => (
                    <div
                        key={i}
                        className="absolute"
                        style={{
                            left: board.x,
                            top: board.y,
                            transform: `translate(-50%, -50%) scale(${activeIndex === i ? 1.2 : 1})`,
                        }}
                        onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                    >
                        <div className="relative w-[56px] h-[56px] transition-transform duration-300 cursor-pointer">
                            <Image
                                src="/signboard.svg"
                                alt={board.label}
                                width={56}
                                height={56}
                            />

                            {/* Text on the signboard */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-1 text-[0.4rem] font-['Press_Start_2P'] text-center">
                                <span className="whitespace-nowrap">{board.label}</span>
                                <span>{board.time}</span>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Chicken Jockey */}
                <div className="absolute left-1/2 bottom-28 -translate-x-1/2 z-40 chicken-jockey">
                    <Image
                        src="/zombie-chicken.svg"
                        alt="Zombie"
                        width={90}
                        height={90}
                        className="drop-shadow-lg animate-bounce"
                    />
                </div>

                {/* End Flag */}
                <Image
                    src="/flag.svg"
                    alt="End Flag"
                    width={80}
                    height={80}
                    className="absolute right-2 top-160 pointer-events-none"
                    priority
                />
            </div>
        </div>
    );
}
