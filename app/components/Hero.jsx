import Image from 'next/image'
import React from 'react'
import herobg from '@/public/herobg.svg'
import suferons from '@/public/suferons.svg'
import suiplay from '@/public/suiplay.svg'

import heroDivider from '@/public/hero-divider.svg'
const Hero = () => {
    return (
        <div data-framer-name="Hero" name="Hero" className="flex items-start place-content-start overflow-hidden px-[10px] pb-[10px] relative w-full">
            <div id="hero" className="flex-grow flex-shrink-0 basis-0 relative w-full h-[854px]">
                <div data-framer-name="Desktop Narrow" className=" h-full w-full  opacity-100 flex flex-col relative overflow-hidden">
                    <div data-framer-name="Top" className=" rounded-bl-[24px] flex place-content-end flex-grow flex-shrink-0 basis-0 flex-col relative w-full bg-white pt-[60px] px-[40px] pb-[40px] rounded-tl-[24px] rounded-tr-[24px] opacity-100">
                        <div className=" opacity-100">
                            <div data-framer-name="Headline" className=" opacity-100 transform-none">
                                <div className=" opacity-100">
                                    <div data-framer-name="Dark Desktop" className=" items-center flex pt-[12px] px-[20px] pb-[10px]  bg-black gap-[10px] h-min overflow-visible relative w-min opacity-100">
                                        <div data-framer-component-type="RichTextContainer" className="  flex-[0_0_auto] h-auto whitespace-pre w-auto outline-[none] flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                                            <h1 data-styles-preset="axPtEQYyj" className=" b12t14:font-normal b12t14:text-[122px] tracking-[-.04em] leading-[.9em] text-start">We're</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className=" opacity-100">
                                    <div data-framer-name="Dark Desktop" className=" items-center flex pt-[12px] px-[20px] pb-[10px]  bg-black gap-[10px] h-min overflow-visible relative w-min opacity-100">
                                        <div data-framer-component-type="RichTextContainer" className="  flex-[0_0_auto] h-auto whitespace-pre w-auto outline-[none] flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                                            <h1 data-styles-preset="axPtEQYyj" className=" b12t14:font-normal b12t14:text-[122px] tracking-[-.04em] leading-[.9em] text-start">shaping the</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className=" opacity-100">
                                    <div data-framer-name="Dark Desktop" className=" items-center flex pt-[12px] px-[20px] pb-[10px]  bg-black gap-[10px] h-min overflow-visible relative w-min opacity-100">
                                        <div data-framer-component-type="RichTextContainer" className="  flex-[0_0_auto] h-auto whitespace-pre w-auto outline-[none] flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                                            <h1 data-styles-preset="axPtEQYyj" className=" b12t14:font-normal b12t14:text-[122px] tracking-[-.04em] leading-[.9em] text-start">future of</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className=" opacity-100">
                                    <div data-framer-name="Dark Desktop" className=" items-center flex pt-[12px] px-[20px] pb-[10px]  bg-black gap-[10px] h-min overflow-visible relative w-min opacity-100">
                                        <div data-framer-component-type="RichTextContainer" className="  flex-[0_0_auto] h-auto whitespace-pre w-auto outline-[none] flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                                            <h1 data-styles-preset="axPtEQYyj" className=" b12t14:font-normal b12t14:text-[122px] tracking-[-.04em] leading-[.9em] text-start">the internet</h1>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div data-framer-component-type="SVG" data-framer-name="Vector" aria-hidden="true" className=" absolute bottom-[40px] h-[847px] w-[1649px] basis-auto flex-grow-0 z-[0] right-[-22px] flex-shrink-0 fill-[rgb(0,_0,_0)] text-[rgb(0,_0,_0)] opacity-100">
                            <div className=" w-full h-full [aspect-ratio:inherit]">
                                <Image src={herobg} alt='herobg' fill className='w-full h-full' />
                            </div>
                        </div>
                    </div>
                    <div data-framer-name="Bottom" className="  rounded-bl-none rounded-br-none opacity-100 flex items-center flex-shrink-0 h-[137px] relative w-full z-[1] ">
                        <div data-framer-name="Description" className=" flex items-center flex-grow flex-shrink-0 basis-0 h-min relative  opacity-100">
                            <div className="flex-grow flex-shrink-0 basis-0 relative h-min  opacity-100">
                                <div data-framer-name="Logos" name="Logos" className=" flex-grow flex-shrink-0 basis-0 h-[36px] relative opacity-100">
                                    <section className=" flex w-full h-full max-w-full max-h-full place-items-center m-0 p-0 list-none opacity-100 [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0)_0%,_rgb(0,_0,_0)_12.5%,_rgb(0,_0,_0)_87.5%,_rgba(0,_0,_0,_0)_100%)] overflow-hidden">
                                        <ul className=" flex w-full h-full max-w-full max-h-full place-items-center m-0 p-0 list-none gap-[50px] relative flex-row translate-x-0">
                                            <li className="">
                                                <div data-framer-name="suifrens" className=" flex-shrink-0 opacity-100">
                                                    <div data-framer-name="suifrens" className=" opacity-100">
                                                        <div data-framer-name="header-logo" className=" opacity-100">
                                                            <div data-framer-component-type="SVG" data-framer-name="background" aria-hidden="true" className="  filter grayscale flex-shrink-0 fill-[rgb(255,_255,_255)] text-[rgb(255,_255,_255)] opacity-100">
                                                                <div className=" w-full h-full [aspect-ratio:inherit]">
                                                                    <Image src={suferons} alt='suferons' className='w-full h-full' />
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="">
                                                <div data-framer-name="suiplay" className=" flex-shrink-0 opacity-100">
                                                    <div data-framer-component-type="SVG" data-framer-name="suiplay" aria-hidden="true" className="  flex-shrink-0 fill-[rgb(0,_0,_0)] text-[rgb(0,_0,_0)] opacity-100">
                                                        <div className=" w-full h-full [aspect-ratio:inherit]">
                                                            <Image src={suiplay} alt='suferons' className='w-full h-full' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="">
                                                <div data-framer-name="suifrens" className=" flex-shrink-0 opacity-100">
                                                    <div data-framer-name="suifrens" className=" opacity-100">
                                                        <div data-framer-name="header-logo" className=" opacity-100">
                                                            <div data-framer-component-type="SVG" data-framer-name="background" aria-hidden="true" className="  filter grayscale flex-shrink-0 fill-[rgb(255,_255,_255)] text-[rgb(255,_255,_255)] opacity-100">
                                                                <div className=" w-full h-full [aspect-ratio:inherit]">
                                                                    <Image src={suferons} alt='suferons' className='w-full h-full' />
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="">
                                                <div data-framer-name="suiplay" className=" flex-shrink-0 opacity-100">
                                                    <div data-framer-component-type="SVG" data-framer-name="suiplay" aria-hidden="true" className="  flex-shrink-0 fill-[rgb(0,_0,_0)] text-[rgb(0,_0,_0)] opacity-100">
                                                        <div className=" w-full h-full [aspect-ratio:inherit]">
                                                            <Image src={suiplay} alt='suferons' className='w-full h-full' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="">
                                                <div data-framer-name="suifrens" className=" flex-shrink-0 opacity-100">
                                                    <div data-framer-name="suifrens" className=" opacity-100">
                                                        <div data-framer-name="header-logo" className=" opacity-100">
                                                            <div data-framer-component-type="SVG" data-framer-name="background" aria-hidden="true" className="  filter grayscale flex-shrink-0 fill-[rgb(255,_255,_255)] text-[rgb(255,_255,_255)] opacity-100">
                                                                <div className=" w-full h-full [aspect-ratio:inherit]">
                                                                    <Image src={suferons} alt='suferons' className='w-full h-full' />
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="">
                                                <div data-framer-name="suiplay" className=" flex-shrink-0 opacity-100">
                                                    <div data-framer-component-type="SVG" data-framer-name="suiplay" aria-hidden="true" className="  flex-shrink-0 fill-[rgb(0,_0,_0)] text-[rgb(0,_0,_0)] opacity-100">
                                                        <div className=" w-full h-full [aspect-ratio:inherit]">
                                                            <Image src={suiplay} alt='suferons' className='w-full h-full' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="">
                                                <div data-framer-name="suifrens" className=" flex-shrink-0 opacity-100">
                                                    <div data-framer-name="suifrens" className=" opacity-100">
                                                        <div data-framer-name="header-logo" className=" opacity-100">
                                                            <div data-framer-component-type="SVG" data-framer-name="background" aria-hidden="true" className="  filter grayscale flex-shrink-0 fill-[rgb(255,_255,_255)] text-[rgb(255,_255,_255)] opacity-100">
                                                                <div className=" w-full h-full [aspect-ratio:inherit]">
                                                                    <Image src={suferons} alt='suferons' className='w-full h-full' />
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="">
                                                <div data-framer-name="suiplay" className=" flex-shrink-0 opacity-100">
                                                    <div data-framer-component-type="SVG" data-framer-name="suiplay" aria-hidden="true" className="  flex-shrink-0 fill-[rgb(0,_0,_0)] text-[rgb(0,_0,_0)] opacity-100">
                                                        <div className=" w-full h-full [aspect-ratio:inherit]">
                                                            <Image src={suiplay} alt='suferons' className='w-full h-full' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>





                                        </ul>
                                    </section>
                                </div>
                            </div>
                            <div className=" opacity-100">
                                <div data-framer-component-type="SVG" data-framer-name="right" aria-hidden="true" className="  [filter:drop-shadow(rgb(255,_255,_255)_0px_-1px_0px)] flex-shrink-0 fill-[rgb(0,_0,_0)] text-[rgb(0,_0,_0)] opacity-100">
                                    <div className=" w-full h-full [aspect-ratio:inherit]">
                                        <Image src={heroDivider} alt='heroDivider' className='w-full h-full' />
                                    </div>
                                </div>
                            </div>
                            <div className=" place-content-center bg-white flex items-center flex-grow flex-shrink-0 basis-0 gap-[10px] h-[137px] pt-0 pr-[40px] pb-[70px] pl-0 z-[1] relative rounded-bl-none rounded-br-[24px] [box-shadow:rgb(255,_255,_255)_0px_-1px_0px_0px] opacity-100">
                                <div data-framer-component-type="RichTextContainer" className=" flex-grow-0 h-auto relative w-[500px] break-words outline-[none] flex flex-col justify-start flex-shrink-0 opacity-100 transform-none">
                                    <p className=" m-0 p-0 text-[32px] tracking-[-.04em] leading-[120%] text-black">At Mysten Labs, we are building critical infrastructure to enable a more decentralized internet</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
