'use client'
import React, { useState } from 'react'
import m from '@/public/m.svg'
import mystenlabs from '@/public/mystenlabs.svg'
import Image from 'next/image'
import x from '@/public/x.svg'
import linkedin from '@/public/linkedin.svg'
import youtube from '@/public/youtube.svg'
import github from '@/public/github.svg'
import whitelogo from '@/public/whitelogo.svg'
import whitelgoname from '@/public/whitelgoname.svg'


import { usePathname } from 'next/navigation'
// import { fragmentmono } from '../fonts/font'



const Navbar = () => {

    const [navopen, setNavopen] = useState(false)

    const pathname = usePathname()
    const handleClick = () => {
        setNavopen(!navopen)
    }
    // console.log(pathname);

    return (


        <div className={`flex-none h-[65px] sticky top-0 w-full  z-[10] font-fragmentmono`}>
            <div className={`${navopen && "t809:flex-none  t809:min-h-screen t809:overflow-auto t809:justify-start t809:h-full t809:items-start t809:w-full bg-[#f50032]"} items-center flex justify-center relative h-full w-full `}>

                <div className={`flex  flex-[1_0_0]  h-min ${navopen && 'flex-none flex-col justify-start overflow-auto w-full z-10'}  justify-center items-center relative`}>

                    <div style={{ display: navopen && 'flex' }} data-framer-appear-id="1ga5kf0" data-framer-name="Links" data-hide-scrollbars="true" class="box-border [-webkit-font-smoothing:inherit] items-start justify-start z-[9] hidden flex-[0_0_auto] [flex-flow:column] gap-[10px] h-min overflow-auto pt-0 px-[20px] pb-[20px] relative w-full order-1 bg-[#f50032] rounded-bl-none rounded-br-none [box-shadow:0px_-1px_0px_0px_var(--token-f932157a-f1bb-4ce8-82a0-0f692fa5c2c3,_rgb(245,_0,_50))] opacity-100 transform-none origin-[50%_50%_0px]">
                        <div data-framer-name="New Menu" class="box-border [-webkit-font-smoothing:inherit] items-start flex flex-[0_0_auto] [flex-flow:column] gap-[32px] h-min overflow-auto px-0 py-[20px] relative w-full order-[13] opacity-100">
                            <div data-framer-name="Nav Links" class=" items-start justify-start flex flex-[0_0_auto] [flex-flow:column] gap-[24px] font-mystenWalteralteregular h-min overflow-visible pt-0 px-0 pb-[10px] relative w-full order-none  opacity-100">
                                <div data-framer-component-type="RichTextContainer" class="box-border [-webkit-font-smoothing:inherit]  flex-[0_0_auto] h-auto whitespace-pre-wrap w-full break-words order-3 outline-[none] flex flex-col justify-start flex-shrink-0 opacity-100 transform-none">
                                    <p class="links">
                                        <a data-styles-preset="d6jiotwqd" href="./careers" class="box-border [-webkit-font-smoothing:inherit] font-[var(--framer-blockquote-font-family,_var(--framer-link-font-family,_var(--framer-font-family,_Inter,_Inter_Placeholder,_sans-serif)))] font-[var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))] text-[calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1))] [transition:color_0.3s_cubic-bezier(0.44,_0,_0.56,_1)]">Careers</a>
                                    </p>
                                </div>
                                <div data-framer-component-type="RichTextContainer" class="box-border [-webkit-font-smoothing:inherit]  flex-[0_0_auto] h-auto whitespace-pre-wrap w-full break-words order-1 outline-[none] flex flex-col justify-start flex-shrink-0 opacity-100 transform-none">
                                    <p class="links">
                                        <a data-styles-preset="d6jiotwqd" href="./products" class="box-border [-webkit-font-smoothing:inherit] font-[var(--framer-blockquote-font-family,_var(--framer-link-font-family,_var(--framer-font-family,_Inter,_Inter_Placeholder,_sans-serif)))] font-[var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))] text-[calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1))] [transition:color_0.3s_cubic-bezier(0.44,_0,_0.56,_1)]">Products</a>
                                    </p>
                                </div>
                                <div data-framer-component-type="RichTextContainer" class="box-border [-webkit-font-smoothing:inherit]  flex-[0_0_auto] h-auto whitespace-pre-wrap w-full break-words order-none outline-[none] flex flex-col justify-start flex-shrink-0 opacity-100 transform-none">
                                    <p class="links">
                                        <a data-styles-preset="d6jiotwqd" href="./platforms-and-protocols" class="box-border [-webkit-font-smoothing:inherit] font-[var(--framer-blockquote-font-family,_var(--framer-link-font-family,_var(--framer-font-family,_Inter,_Inter_Placeholder,_sans-serif)))] font-[var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))] text-[calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1))] [transition:color_0.3s_cubic-bezier(0.44,_0,_0.56,_1)]">Platforms & Protocols</a>
                                    </p>
                                </div>
                                <div data-framer-component-type="RichTextContainer" class="box-border [-webkit-font-smoothing:inherit]  flex-[0_0_auto] h-auto whitespace-pre-wrap w-full break-words order-2 outline-[none] flex flex-col justify-start flex-shrink-0 opacity-100 transform-none">
                                    <p class="links">
                                        <a data-styles-preset="d6jiotwqd" href="./research-and-development" class="box-border [-webkit-font-smoothing:inherit] font-[var(--framer-blockquote-font-family,_var(--framer-link-font-family,_var(--framer-font-family,_Inter,_Inter_Placeholder,_sans-serif)))] font-[var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))] text-[calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1))] [transition:color_0.3s_cubic-bezier(0.44,_0,_0.56,_1)]">Research & Development</a>
                                    </p>
                                </div>
                                <div data-framer-component-type="RichTextContainer" class="box-border [-webkit-font-smoothing:inherit]  flex-[0_0_auto] h-auto whitespace-pre-wrap w-full break-words order-4 outline-[none] flex flex-col justify-start flex-shrink-0 opacity-100 transform-none">
                                    <p class="links">
                                        <a data-styles-preset="d6jiotwqd" href="./about" data-framer-page-link-current="true" class="box-border [-webkit-font-smoothing:inherit] font-[var(--framer-link-current-font-family,_var(--framer-link-font-family,_var(--framer-font-family,_Inter,_Inter_Placeholder,_sans-serif)))] font-[var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))] text-[var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))] [transition:color_0.3s_cubic-bezier(0.44,_0,_0.56,_1)]">About</a>
                                    </p>
                                </div>
                                <div data-framer-component-type="RichTextContainer" class="box-border [-webkit-font-smoothing:inherit]  flex-[0_0_auto] h-auto whitespace-pre-wrap w-full break-words order-5 outline-[none] flex flex-col justify-start flex-shrink-0 opacity-100 transform-none">
                                    <p class="links">
                                        <a data-styles-preset="d6jiotwqd" href="./blog" class="box-border [-webkit-font-smoothing:inherit] font-[var(--framer-blockquote-font-family,_var(--framer-link-font-family,_var(--framer-font-family,_Inter,_Inter_Placeholder,_sans-serif)))] font-[var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))] text-[calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1))] [transition:color_0.3s_cubic-bezier(0.44,_0,_0.56,_1)]">Blog</a>
                                    </p>
                                </div>
                                <div data-framer-component-type="RichTextContainer" class="box-border [-webkit-font-smoothing:inherit]  flex-[0_0_auto] h-auto whitespace-pre-wrap w-full break-words order-6 outline-[none] flex flex-col justify-start flex-shrink-0 opacity-100 transform-none">
                                    <p class="links">
                                        <a data-styles-preset="d6jiotwqd" href="./news" class="box-border [-webkit-font-smoothing:inherit] font-[var(--framer-blockquote-font-family,_var(--framer-link-font-family,_var(--framer-font-family,_Inter,_Inter_Placeholder,_sans-serif)))] font-[var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))] text-[calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1))] [transition:color_0.3s_cubic-bezier(0.44,_0,_0.56,_1)]">News</a>
                                    </p>
                                </div>
                            </div>
                            <div data-framer-name="Socials" class="box-border [-webkit-font-smoothing:inherit] items-start flex flex-[0_0_auto] [flex-flow:column] gap-[32px] h-min overflow-visible p-0 relative w-full order-3 opacity-100">
                                <div data-framer-name="Social Links" class="box-border [-webkit-font-smoothing:inherit] items-center flex flex-[0_0_auto] [flex-flow:row] gap-[34px] h-min overflow-visible p-0 relative w-min opacity-100">
                                    <div class="box-border [-webkit-font-smoothing:inherit] flex-[0_0_auto] h-[24px] relative w-[24px]  -translate-y-[5px]">
                                        <a data-framer-name="x black to white" href="https://x.com/Mysten_Labs" target="_blank" rel="noopener" class="box-border [-webkit-font-smoothing:inherit] block cursor-pointer h-full relative no-underline w-full opacity-100">
                                            <div data-framer-name="Social Icons" class="box-border [-webkit-font-smoothing:inherit] [aspect-ratio:1_/_1] flex-[0_0_auto] h-[var(--framer-aspect-ratio-supported, 24px)] left-0 overflow-visible absolute top-0 w-[24px] opacity-100">
                                                <div data-framer-component-type="SVG" data-framer-name="Social Icons" aria-hidden="true" class="box-border [-webkit-font-smoothing:inherit] absolute inset-0 flex-[0_0_auto] flex-shrink-0 fill-[rgb(0,_0,_0)] text-[rgb(0,_0,_0)] opacity-100">
                                                    <div class="box-border [-webkit-font-smoothing:inherit] w-full h-full [aspect-ratio:inherit]">
                                                        <Image src={x} fill />
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="box-border [-webkit-font-smoothing:inherit] flex-[0_0_auto] h-[24px] relative w-[24px]  -translate-y-[5px]">
                                        <a data-framer-name="in black to white" href="https://www.linkedin.com/company/mysten-labs/" target="_blank" rel="noopener" class="box-border [-webkit-font-smoothing:inherit] block cursor-pointer h-full relative no-underline w-full opacity-100">
                                            <div data-framer-name="Social Icons" class="box-border [-webkit-font-smoothing:inherit] [aspect-ratio:1_/_1] flex-[0_0_auto] h-[var(--framer-aspect-ratio-supported, 24px)] left-0 overflow-visible absolute top-0 w-[24px] opacity-100">
                                                <div data-framer-component-type="SVG" data-framer-name="Social Icons" aria-hidden="true" class="box-border [-webkit-font-smoothing:inherit] absolute inset-0 flex-[0_0_auto] flex-shrink-0 fill-[rgb(0,_0,_0)] text-[rgb(0,_0,_0)] opacity-100">
                                                    <div class="box-border [-webkit-font-smoothing:inherit] w-full h-full [aspect-ratio:inherit]">
                                                        <Image src={linkedin} fill />
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="box-border [-webkit-font-smoothing:inherit] flex-[0_0_auto] h-[24px] relative w-[24px]  -translate-y-[5px]">
                                        <a data-framer-name="yt black to white" href="https://www.youtube.com/channel/UCI7pCUVxSLcndVhPpZOwZgg" target="_blank" rel="noopener" class="box-border [-webkit-font-smoothing:inherit] block cursor-pointer h-full relative no-underline w-full opacity-100">
                                            <div data-framer-name="Social Icons" class="box-border [-webkit-font-smoothing:inherit] [aspect-ratio:1_/_1] flex-[0_0_auto] h-[var(--framer-aspect-ratio-supported, 30px)] -left-[3px] overflow-visible absolute -right-[3px] -top-[3px] opacity-100">
                                                <div data-framer-component-type="SVG" data-framer-name="Social Icons" aria-hidden="true" class="box-border [-webkit-font-smoothing:inherit] absolute inset-0 flex-[0_0_auto] flex-shrink-0 fill-[rgb(0,_0,_0)] text-[rgb(0,_0,_0)] opacity-100">
                                                    <div class="box-border [-webkit-font-smoothing:inherit] w-full h-full [aspect-ratio:inherit]">
                                                        <Image src={youtube} fill />
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="box-border [-webkit-font-smoothing:inherit] flex-[0_0_auto] h-[24px] relative w-[24px]  -translate-y-[5px] scale-110">
                                        <a data-framer-name="gh black to white" href="https://github.com/MystenLabs" target="_blank" rel="noopener" class="box-border [-webkit-font-smoothing:inherit] block cursor-pointer h-full relative no-underline w-full opacity-100">
                                            <div data-framer-name="Social Icons" class="box-border [-webkit-font-smoothing:inherit] [aspect-ratio:1_/_1] flex-[0_0_auto] h-[var(--framer-aspect-ratio-supported, 28px)] -left-[2px] overflow-visible absolute -top-[2px] w-[unset] -right-[2px] opacity-100">
                                                <div data-framer-component-type="SVG" data-framer-name="Social Icons" aria-hidden="true" class="box-border [-webkit-font-smoothing:inherit] absolute inset-0 flex-[0_0_auto] flex-shrink-0 fill-[rgb(0,_0,_0)] text-[rgb(0,_0,_0)] opacity-100">
                                                    <div class="box-border [-webkit-font-smoothing:inherit] w-full h-full [aspect-ratio:inherit]">
                                                        <Image src={github} fill />
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="box-border [-webkit-font-smoothing:inherit] flex-[0_0_auto] h-[24px] relative w-[24px]  -translate-y-[5px] scale-[1.2]">
                                        <a data-framer-name="dis black to white" href="https://discord.com/invite/sui" target="_blank" rel="noopener" class="box-border [-webkit-font-smoothing:inherit] block cursor-pointer h-full relative no-underline w-full opacity-100">
                                            <div data-framer-name="Discord" name="Discord" class="box-border [-webkit-font-smoothing:inherit] flex-[0_0_auto] h-[24px] left-[calc(50% - 12px)] absolute top-[calc(50% - 12px)] w-[24px] opacity-100">
                                                <div class="box-border [-webkit-font-smoothing:inherit] contents">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-e658dadb-c36b-4228-b164-5be3ef929375, rgb(0, 0, 0))" class="box-border [-webkit-font-smoothing:inherit] select-none w-full h-full inline-block flex-shrink-0">
                                                        <g color="var(--token-e658dadb-c36b-4228-b164-5be3ef929375, rgb(0, 0, 0))" weight="fill" class="box-border [-webkit-font-smoothing:inherit]">
                                                            <path d="M247.51,174.39,218,58a16.08,16.08,0,0,0-13-11.88l-36.06-5.92a16.22,16.22,0,0,0-18.26,11.88l-.21.85a4,4,0,0,0,3.27,4.93,155.62,155.62,0,0,1,24.41,5.62,8.2,8.2,0,0,1,5.62,9.7,8,8,0,0,1-10.19,5.64,155.4,155.4,0,0,0-90.8-.1,8.22,8.22,0,0,1-10.28-4.81,8,8,0,0,1,5.08-10.33,156.85,156.85,0,0,1,24.72-5.72,4,4,0,0,0,3.27-4.93l-.21-.85A16.21,16.21,0,0,0,87.08,40.21L51,46.13A16.08,16.08,0,0,0,38,58L8.49,174.39a15.94,15.94,0,0,0,9.06,18.51l67,29.71a16.17,16.17,0,0,0,21.71-9.1l3.49-9.45a4,4,0,0,0-3.27-5.35,158.13,158.13,0,0,1-28.63-6.2,8.2,8.2,0,0,1-5.61-9.67,8,8,0,0,1,10.2-5.66,155.59,155.59,0,0,0,91.12,0,8,8,0,0,1,10.19,5.65,8.19,8.19,0,0,1-5.61,9.68,157.84,157.84,0,0,1-28.62,6.2,4,4,0,0,0-3.27,5.35l3.49,9.45a16.18,16.18,0,0,0,21.71,9.1l67-29.71A15.94,15.94,0,0,0,247.51,174.39ZM92,152a12,12,0,1,1,12-12A12,12,0,0,1,92,152Zm72,0a12,12,0,1,1,12-12A12,12,0,0,1,164,152Z" class="box-border [-webkit-font-smoothing:inherit]"></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <form data-framer-name="News Letter" class="box-border [-webkit-font-smoothing:inherit] items-start flex flex-[0_0_auto] [flex-flow:column] gap-[12px] h-min overflow-hidden p-0 relative w-full order-2 opacity-100">
                                <label class="box-border [-webkit-font-smoothing:inherit] items-start flex justify-start flex-[0_0_auto] [flex-flow:column] gap-[10px] h-min p-0 relative w-full  -translate-y-[0px]">
                                    <div class=" flex-[0_0_auto] h-[55px] relative w-full overflow-hidden border-[2px] border-black  !text-black rounded-[10px] font-mystenWalteralteregular [transition-property:background,_box-shadow]  ">
                                        <input type="email" name="Email" placeholder="Sign up to receieve updates" value="" fdprocessedid="j1j6i" class="box-border [-webkit-font-smoothing:inherit] text-[18px] font-mystenWalteralteregular text-black py-[12px] px-[24px] placeholder:text-black bg-transparent  border-[none] overflow-ellipsis whitespace-nowrap overflow-hidden w-full h-full  leading-[1.2em]"></input>
                                    </div>
                                </label>
                                <div class="box-border [-webkit-font-smoothing:inherit] flex-[0_0_auto] h-[55px] relative w-full  -translate-y-[5px]">
                                    <button type="submit" data-border="true" data-framer-name="Default" data-reset="button" tabindex="0" fdprocessedid="xcudmn" class="box-border [-webkit-font-smoothing:inherit] text-[12px] border-black border-2 font-[sans-serif]  p-0 bg-none place-content-center items-center cursor-pointer flex [flex-flow:row] gap-0 h-full overflow-visible relative w-full bg-[rgba(0,_0,_0,_0)] rounded-[8px] opacity-100">
                                        <div data-framer-component-type="RichTextContainer" class="box-border [-webkit-font-smoothing:inherit] absolute flex-[0_0_auto] h-auto select-none whitespace-pre w-auto outline-[none] flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                                            <p class="text-black font-mystenwalteraltebold leading-[2em] text-[18px] ">Subscribe</p>
                                        </div>
                                    </button>
                                </div>
                            </form>
                            <div data-framer-name="Privacy Terms" class="box-border [-webkit-font-smoothing:inherit] items-start flex flex-[0_0_auto] [flex-flow:column] gap-[32px] h-min overflow-visible p-0 relative w-full order-1 opacity-100">
                                <div data-framer-appear-id="k6pwsy" data-framer-name="divider" class="box-border [-webkit-font-smoothing:inherit] bg-black flex-[0_0_auto]  h-px relative w-full order-2 opacity-100 transform-none"></div>
                                <div data-framer-component-type="RichTextContainer" class="box-border [-webkit-font-smoothing:inherit]  flex-[0_0_auto] h-auto whitespace-pre-wrap w-full break-words order-none outline-[none] flex flex-col justify-start flex-shrink-0 opacity-100 transform-none">
                                    <p class=" text-black text-[18px] text-start leading-[1.2em] font-mystenWalteralteregular">
                                        <a data-styles-preset="d6jiotwqd" href="./privacy-policy" class="box-border [-webkit-font-smoothing:inherit] font-[var(--framer-blockquote-font-family,_var(--framer-link-font-family,_var(--framer-font-family,_Inter,_Inter_Placeholder,_sans-serif)))] font-[var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))] text-[calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1))] [transition:color_0.3s_cubic-bezier(0.44,_0,_0.56,_1)]">Privacy Policy</a>
                                    </p>
                                </div>
                                <div data-framer-component-type="RichTextContainer" class="box-border [-webkit-font-smoothing:inherit]  flex-[0_0_auto] h-auto whitespace-pre-wrap w-full break-words order-1 outline-[none] flex flex-col justify-start flex-shrink-0 opacity-100 transform-none">
                                    <p class=" text-black text-[18px] text-start leading-[1.2em] font-mystenWalteralteregular">
                                        <a data-styles-preset="d6jiotwqd" href="./terms-of-service/mysten" class="box-border [-webkit-font-smoothing:inherit] font-[var(--framer-blockquote-font-family,_var(--framer-link-font-family,_var(--framer-font-family,_Inter,_Inter_Placeholder,_sans-serif)))] font-[var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))] text-[calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1))] [transition:color_0.3s_cubic-bezier(0.44,_0,_0.56,_1)]">Terms of Service</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div style={{ backgroundColor: navopen && '#f50032' }} className={` ${navopen && 't809:flex-none t809:order-[0] t809:sticky t809:top-0 t809:w-full t809:z-[10] [will-change:transform'} items-center flex flex-[1_0_0px]  h-[65px] overflow-visible t809:pt-[4px] t809:px-5 t809:pb-0 pt-[4px] pr-[10px] pb-0 pl-[20px] relative w-full backdrop-filter backdrop-blur-[15px]  ${pathname === '/platforms-and-protocols' ? ' bg-[rgba(255,_255,_255,_0.95)]' : 'bg-[rgba(0,_0,_0,_0.85)]'} opacity-100 transform-none rounded-tl-none rounded-tr-none`}>
                        <div className=" items-center flex flex-[1_0_0px] justify-between  h-min overflow-visible p-0 relative w-px opacity-100">
                            <div className=" flex-none h-[25px] z-[1] relative w-[209px] opacity-100">
                                <a data-framer-name="Desktop Red" data-highlight="true" href="./" tabindex="0" className=" flex items-center cursor-pointer  gap-[10px] h-full overflow-visible p-0 relative no-underline w-full opacity-100">
                                    <div className=" justify-center items-center flex   gap-[10px] flex-none relative ">
                                        <div data-framer-name="Logomark" className="h-[20px] w-[34px]   box-border relative">
                                            <div data-framer-component-type="SVG" data-framer-name="logomark" aria-hidden="true" className=" absolute b81t1199:w-[27px] b81t1199:h-auto b81t1199:aspect-[1.7/1]  h-[20px] w-[34px] flex-shrink-0 fill-[rgb(0,_0,_0)] text-[rgb(0,_0,_0)] opacity-100">
                                                <div className=" w-full h-full [aspect-ratio:inherit]">
                                                    {
                                                        !navopen ?
                                                            <Image src={m} alt="mysten logo" fill /> :
                                                            <Image src={whitelogo} alt="mysten logo" fill />
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                        <div data-framer-name="Wordmark" className=" h-[25px] w-[165px]  relative ">
                                            <div data-framer-component-type="SVG" data-framer-name="workdmark" aria-hidden="true" className=" absolute b81t1199:h-[20px] b81t1199:w-[129px]  h-[25px] w-[165px] flex-shrink-0 fill-[rgb(0,_0,_0)] text-[rgb(0,_0,_0)] opacity-100">
                                                <div className=" w-full h-full [aspect-ratio:inherit]">

                                                    {
                                                        !navopen ?
                                                            <Image src={mystenlabs} alt="mystenlabs" fill /> :
                                                            <Image src={whitelgoname} alt="mystenlabs" fill />
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div data-framer-name="Links" className={`  ${pathname === '/platforms-and-protocols' ? 'text-black' : 'text-white'}    items-center flex  flex-none justify-start z-[1] gap-0 h-min t809:hidden overflow-visible p-0 relative w-min opacity-100`}>
                                <div className="flex-none  h-auto relative w-auto ">
                                    <a href="./platforms-and-protocols" data-framer-name=" Variant 1" className=" group flex justify-center items-center cursor-pointer  gap-[6px] w-min   px-[14px] py-[20px] relative no-underline  ">
                                        <div data-framer-component-type="RichTextContainer" className="   h-auto whitespace-pre w-auto outline-[none] flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                                            <p className={` m-0 p-0 ${pathname === '/platforms-and-protocols' && 'text-[#f50032]'} group-hover:text-[#f50032] b81t1199:text-[15px] text-[16px] leading-[80%] tracking-[-.03em]  `}>Platforms & Protocols</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="  h-auto relative w-auto opacity-100">
                                    <a href="./products" data-framer-name="Variant 1" className="group flex place-content-center items-center cursor-pointer  gap-[6px] h-min overflow-visible px-[14px] py-[20px] relative no-underline w-min opacity-100">
                                        <div data-framer-component-type="RichTextContainer" className="   h-auto whitespace-pre w-auto outline-[none] flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                                            <p style={{ color: pathname === '/products' ? '#f50032' : '' }} className=" m-0 p-0 group-hover:text-[#f50032]  b81t1199:text-[15px] text-[16px] leading-[80%] tracking-[-.03em]">Products</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="  h-auto relative w-auto opacity-100">
                                    <a href="./research-and-development" data-framer-name="Variant 1" className="group flex place-content-center items-center cursor-pointer  gap-[6px] h-min overflow-visible px-[14px] py-[20px] relative no-underline w-min opacity-100">
                                        <div data-framer-component-type="RichTextContainer" className="   h-auto whitespace-pre w-auto outline-[none] flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                                            <p className=" m-0 p-0 group-hover:text-[#f50032]  b81t1199:text-[15px] text-[16px] leading-[80%] tracking-[-.03em]">R&D</p>
                                        </div>
                                    </a>
                                </div>
                                <div className="  h-auto relative w-auto opacity-100">
                                    <a href="./careers" data-framer-name="Variant 1" className="group flex place-content-center items-center cursor-pointer  gap-[6px] h-min overflow-visible px-[14px] py-[20px] relative no-underline w-min opacity-100">
                                        <div data-framer-component-type="RichTextContainer" className="   h-auto whitespace-pre w-auto outline-[none] flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                                            <p style={{ color: pathname === '/careers' ? '#f50032' : '' }} className=" m-0 p-0 group-hover:text-[#f50032]  b81t1199:text-[15px] text-[16px] leading-[80%] tracking-[-.03em]">Careers</p>
                                        </div>
                                    </a>
                                </div>
                                <div id="undefined-nmeqne" className="  h-auto relative w-auto opacity-100">
                                    <div data-highlight="true" data-framer-name="Variant 1" className=" group place-content-center items-center cursor-pointer flex  gap-[6px] h-min overflow-visible px-[14px] py-[20px] relative w-min opacity-100">
                                        <div data-framer-component-type="RichTextContainer" className="   h-auto whitespace-pre w-auto outline-[none] flex flex-col justify-start flex-shrink-0 transform-none opacity-100">
                                            <p style={{ color: pathname === '/about' ? '#f50032' : '' }} className=" m-0 p-0 group-hover:text-[#f50032]  b81t1199:text-[15px] text-[16px] leading-[80%] tracking-[-.03em]">About</p>
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

                            <div data-framer-name="Links" class="box-border [-webkit-font-smoothing:inherit] items-center  flex-[0_0_auto] [flex-flow:row] gap-[24px] hidden t809:flex h-min overflow-visible p-0 relative w-min opacity-100">
                                <div onClick={handleClick} data-framer-name="Combined Menu" name="Combined Menu" class="box-border [-webkit-font-smoothing:inherit] flex-[0_0_auto] h-[33px] relative w-[30px] opacity-100">
                                    <div class="box-border [-webkit-font-smoothing:inherit] contents">

                                        {
                                            navopen ?
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--token-b264393e-36b1-4cf9-905c-2f0a4ec7fbc1, rgb(255, 255, 255))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="box-border [-webkit-font-smoothing:inherit] w-full h-full">
                                                    <line x1="18" y1="6" x2="6" y2="18" class="box-border [-webkit-font-smoothing:inherit]"></line>
                                                    <line x1="6" y1="6" x2="18" y2="18" class="box-border [-webkit-font-smoothing:inherit]"></line>
                                                </svg> :

                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--token-b264393e-36b1-4cf9-905c-2f0a4ec7fbc1, rgb(255, 255, 255))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="box-border [-webkit-font-smoothing:inherit] w-full h-full">
                                                    <line x1="3" y1="12" x2="21" y2="12" class="box-border [-webkit-font-smoothing:inherit]"></line>
                                                    <line x1="3" y1="6" x2="21" y2="6" class="box-border [-webkit-font-smoothing:inherit]"></line>
                                                    <line x1="3" y1="18" x2="21" y2="18" class="box-border [-webkit-font-smoothing:inherit]"></line>
                                                </svg>
                                        }
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
