import Image from 'next/image'
import React from 'react'
import herobg from '@/public/herobg.svg'
import suferons from '@/public/suferons.svg'
import suiplay from '@/public/suiplay.svg'

import heroDivider from '@/public/hero-divider.svg'
const Hero = () => {
    return (
        <div data-framer-name="Hero" name="Hero" className="flex items-start place-content-start overflow-hidden px-[10px] pb-[10px] relative w-full">
            <div id="hero" className="flex-grow flex-shrink-0 basis-0 relative w-full ">
                <div data-framer-name="Desktop Narrow" className=" h-full w-full  opacity-100 flex flex-col relative overflow-hidden">
                    <div data-framer-name="Top" className=" t809:rounded-bl-none rounded-bl-[24px]  flex-none items-end justify-end flex place-content-end  flex-col relative w-full bg-white t809:h-[400px] t809:px-[20px] t809:pb-[40px]  b81t1199:px-[40px] b81t1199:pb-[90px]  b12t14:px-[40px] b12t14:pb-[40px]  pt-[200px] pr-[40px] pb-[60px] pl-[60px] rounded-tl-[24px] rounded-tr-[24px] opacity-100">
                        <div className=" opacity-100 flex items-start flex-col gap-[40px] h-min justify-start relative w-full z-[2]">
                            <div data-framer-name="Headline" className=" opacity-100 flex items-start flex-none flex-col gap-0 h-min justify-start max-w-[1340px] p-0 w-full relative z-[3]  font-mystenwalteraltebold transform-none">
                                <div className=" opacity-100">
                                    <div data-framer-name="Dark Desktop" className=" items-center flex pt-[12px] px-[20px] pb-[10px]  bg-black gap-[10px] h-min overflow-visible relative w-min opacity-100">
                                        <div data-framer-component-type="RichTextContainer" className="  flex-[0_0_auto] h-auto whitespace-pre w-auto outline-[none] flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                                            <h1 data-styles-preset="axPtEQYyj" className=" font-normal t809:text-[52px] text-[115px] tracking-[-.04em] leading-[.9em] text-start">Join Us</h1>
                                        </div>
                                    </div>
                                </div>

                                <div className=" opacity-100">
                                    <div data-framer-name="Dark Desktop" className=" items-center flex pt-[12px] px-[20px] pb-[10px]  bg-black gap-[10px] h-min overflow-visible relative w-min opacity-100">
                                        <div data-framer-component-type="RichTextContainer" className="  flex-[0_0_auto] h-auto whitespace-pre w-auto outline-[none] flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                                            <h1 data-styles-preset="axPtEQYyj" className=" t809:text-[52px] font-normal text-[115px] tracking-[-.04em] leading-[.9em] text-start">At Mysten</h1>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div data-framer-component-type="SVG" data-framer-name="Vector" aria-hidden="true" className=" absolute   t809:h-[457px] t809:flex-none t809:right-[-12px]  t809:w-[862px] t809:bottom-[60px] b81t1199:bottom-[90px] b81t1199:h-[610px] b81t1199:right-[-72px] b81t1199:w-[1151px] b12t14:bottom-[40px] bottom-[60px] b12t14:h-[660px] b12t14:w-[1223px]  h-[765px] w-[1443px] basis-auto flex-grow-0 z-[0] right-[-12px] flex-none flex-shrink-0 fill-[rgb(0,_0,_0)] text-[rgb(0,_0,_0)] opacity-100">
                            <div className=" w-full h-full [aspect-ratio:inherit]">
                                <Image src={herobg} alt='herobg' fill objectFit='cover' className='w-full h-full bg-cover' />
                            </div>
                        </div>
                    </div>
                    <div data-framer-name="Bottom" className="  rounded-bl-none rounded-br-none t809:flex-col t809:gap-0 t809:h-min t809:justify-center opacity-100 flex items-center flex-shrink-0 h-[137px] relative w-full z-[1] ">
                        <div data-framer-name="Description" className="t809:flex-none t809:flex-col t809:gap-[10px] t809:w-full flex items-center flex-grow flex-shrink-0 basis-0 h-min relative  opacity-100">
                            <div className="flex-grow flex-shrink-0 t809:flex-none t809:order-3 t809:w-full basis-0 relative h-min t809:hidden  opacity-100">
                                <div data-framer-name="Logos" name="Logos" className=" flex-grow flex-shrink-0 basis-0 h-[36px] relative  opacity-100">
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
                            <div className=" t809:hidden t809:order-[0] opacity-100">
                                <div data-framer-component-type="SVG" data-framer-name="right" aria-hidden="true" className="  [filter:drop-shadow(rgb(255,_255,_255)_0px_-1px_0px)] flex-shrink-0 fill-[rgb(0,_0,_0)] text-[rgb(0,_0,_0)] opacity-100">
                                    <div className=" w-full h-full [aspect-ratio:inherit]">
                                        <Image src={heroDivider} alt='heroDivider' className='w-full h-full' />
                                    </div>
                                </div>
                            </div>
                            <div className=" place-content-center bg-white flex items-center flex-grow flex-shrink-0 basis-0 gap-[10px] h-[137px] t809:flex-none t809:justify-start t809:order-2 t809:pt-0 t809:px-5 t809:pb-10 pt-0 pr-[40px] pb-[70px] pl-0 z-[1] relative rounded-bl-none rounded-br-[24px] [box-shadow:rgb(255,_255,_255)_0px_-1px_0px_0px] opacity-100">
                                <div data-framer-component-type="RichTextContainer" className=" flex-grow-0 h-auto relative t809:flex-none  t809:w-full t809:h-[76px]  b81t1199:w-[500px] w-[590px] break-words outline-[none] flex flex-col justify-start flex-shrink-0 opacity-100 transform-none">
                                    <p className=" m-0 p-0 t809:text-[24px] text-[32px] font-mystenWalteralteregular tracking-[-.04em] leading-[120%] text-black">We are a stellar team of veteran innovators, storytellers, and developers, located across the globe.</p>
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
