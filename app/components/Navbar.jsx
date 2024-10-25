import React from 'react'
import m from '@/public/m.svg'
import mystenlabs from '@/public/mystenlabs.svg'
import Image from 'next/image'
import { Fragment_Mono } from 'next/font/google'

const fragmentmono = Fragment_Mono({ subsets: ['latin'], weight: ['400'] })

const Navbar = () => {
    return (


        <div className={`flex-none h-[65px] sticky top-0 w-full z-[10] ${fragmentmono.className}`}>
            <div className=" items-center flex flex-[1_0_0px]  h-[65px] overflow-visible pt-[4px] pr-[10px] pb-0 pl-[20px] relative w-full backdrop-filter backdrop-blur-[15px] bg-[rgba(0,_0,_0,_0.85)] opacity-100 transform-none rounded-tl-none rounded-tr-none">
                <div className=" items-center flex flex-[1_0_0px] justify-between  h-min overflow-visible p-0 relative w-px opacity-100">
                    <div className=" flex-none h-[25px] z-[1] relative w-[209px] opacity-100">
                        <a data-framer-name="Desktop Red" data-highlight="true" href="./" tabindex="0" className=" flex items-center cursor-pointer  gap-[10px] h-full overflow-visible p-0 relative no-underline w-full opacity-100">
                            <div className=" justify-center items-center flex   gap-[10px] flex-none relative ">
                                <div data-framer-name="Logomark" className="h-[20px] w-[34px]   box-border relative">
                                    <div data-framer-component-type="SVG" data-framer-name="logomark" aria-hidden="true" className=" absolute  h-[20px] w-[34px] flex-shrink-0 fill-[rgb(0,_0,_0)] text-[rgb(0,_0,_0)] opacity-100">
                                        <div className=" w-full h-full [aspect-ratio:inherit]">
                                            <Image src={m} alt="mysten logo" fill />
                                        </div>
                                    </div>
                                </div>
                                <div data-framer-name="Wordmark" className=" h-[25px] w-[165px]  relative ">
                                    <div data-framer-component-type="SVG" data-framer-name="workdmark" aria-hidden="true" className=" absolute  h-[25px] w-[165px] flex-shrink-0 fill-[rgb(0,_0,_0)] text-[rgb(0,_0,_0)] opacity-100">
                                        <div className=" w-full h-full [aspect-ratio:inherit]">
                                            <Image src={mystenlabs} alt="mystenlabs" fill />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div data-framer-name="Links" className=" items-center flex  flex-none justify-start z-[1] gap-0 h-min overflow-visible p-0 relative w-min opacity-100">
                        <div className="flex-none  h-auto relative w-auto ">
                            <a href="./platforms-and-protocols" data-framer-name=" Variant 1" className=" group flex justify-center items-center cursor-pointer  gap-[6px] w-min   px-[14px] py-[20px] relative no-underline  ">
                                <div data-framer-component-type="RichTextContainer" className="   h-auto whitespace-pre w-auto outline-[none] flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                                    <p className=" m-0 p-0 group-hover:text-[#f50032] ">Platforms & Protocols</p>
                                </div>
                            </a>
                        </div>
                        <div className="  h-auto relative w-auto opacity-100">
                            <a href="./products" data-framer-name="Variant 1" className="group flex place-content-center items-center cursor-pointer  gap-[6px] h-min overflow-visible px-[14px] py-[20px] relative no-underline w-min opacity-100">
                                <div data-framer-component-type="RichTextContainer" className="   h-auto whitespace-pre w-auto outline-[none] flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                                    <p className=" m-0 p-0 group-hover:text-[#f50032] ">Products</p>
                                </div>
                            </a>
                        </div>
                        <div className="  h-auto relative w-auto opacity-100">
                            <a href="./research-and-development" data-framer-name="Variant 1" className="group flex place-content-center items-center cursor-pointer  gap-[6px] h-min overflow-visible px-[14px] py-[20px] relative no-underline w-min opacity-100">
                                <div data-framer-component-type="RichTextContainer" className="   h-auto whitespace-pre w-auto outline-[none] flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                                    <p className=" m-0 p-0 group-hover:text-[#f50032] ">R&D</p>
                                </div>
                            </a>
                        </div>
                        <div className="  h-auto relative w-auto opacity-100">
                            <a href="./careers" data-framer-name="Variant 1" className="group flex place-content-center items-center cursor-pointer  gap-[6px] h-min overflow-visible px-[14px] py-[20px] relative no-underline w-min opacity-100">
                                <div data-framer-component-type="RichTextContainer" className="   h-auto whitespace-pre w-auto outline-[none] flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                                    <p className=" m-0 p-0 group-hover:text-[#f50032] ">Careers</p>
                                </div>
                            </a>
                        </div>
                        <div id="undefined-nmeqne" className="  h-auto relative w-auto opacity-100">
                            <div data-highlight="true" data-framer-name="Variant 1" className=" group place-content-center items-center cursor-pointer flex  gap-[6px] h-min overflow-visible px-[14px] py-[20px] relative w-min opacity-100">
                                <div data-framer-component-type="RichTextContainer" className="   h-auto whitespace-pre w-auto outline-[none] flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                                    <p className=" m-0 p-0 group-hover:text-[#f50032] ">About</p>
                                </div>
                                <div className="  h-[12px] relative w-[12px] opacity-100">
                                    <div className=" contents">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--token-b264393e-36b1-4cf9-905c-2f0a4ec7fbc1, rgb(255, 255, 255))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className=" w-full h-full">
                                            <polyline points="6 9 12 15 18 9" className=""></polyline>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
