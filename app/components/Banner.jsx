'use client'
import { usePathname } from 'next/navigation'
import React from 'react'

const Banner = () => {

    const pathname = usePathname()

    const cards = [
        {
            question: 'Inside Mysten Labs',
            mainfirst: 'Start over. ',
            mainsec: 'Build better.',
            desc: 'The future of the internet is still unknown.  Let’s write its next chapter together.',
            buttondesc: 'View Research & Development',
        },
        {
            question: 'Web3 Enthusiast?',
            mainfirst: 'Check our  ',
            mainsec: 'products',
            desc: 'Our products are made for builders, web3 enthusiasts, and explorers of new interactive models',
            buttondesc: 'View Products',
        },
        {
            question: 'Web3 Enthusiast?',
            mainfirst: 'Check our  ',
            mainsec: 'products',
            desc: 'Our products are made for builders, web3 enthusiasts, and explorers of new interactive models',
            buttondesc: 'View Products',
        },

    ]

    const cardnum = pathname === '/' ? 1 : pathname === '/platforms-and-protocols' ? 2 : pathname === '/careers' ? 3 : 1

    return (
        <div data-framer-name="banner top" class="  place-content-center items-start flex flex-[0_0_auto] [flex-flow:row] gap-0 h-min overflow-visible t1199:flex-col t1199:items-center p-0 relative w-full content-start bg-[rgba(0,_0,_0,_0)] rounded-tl-[24px] rounded-br-none rounded-tr-[24px] rounded-bl-none [box-shadow:none] z-[3] opacity-100">
            <div data-framer-name="Text" class="bg-black items-center flex t1199:flex-[0_0_auto] b81t1199:h-[340px] t1199:order-[1] t1199:w-full flex-[1.2_0_0px] [flex-flow:column] gap-0 h-[370px] overflow-visible p-0 relative w-px rounded-bl-none rounded-br-none rounded-tl-[24px] [box-shadow:0px_1px_0px_0px_var(--token-e658dadb-c36b-4228-b164-5be3ef929375,_rgb(0,_0,_0))] opacity-100">
                <div data-framer-name="Frame 1197134325" class=" items-start flex t809:flex-none t809:h-min t809:gap-8 flex-[1_0_0px] [flex-flow:column] gap-[50px]  overflow-visible t809:p-[20px] b81t1199:pt-[40px] b81t1199:pr-0 b81t1199:pb-0 b81t1199:pl-[40px] pt-[80px] pr-0 pb-0 pl-[40px] relative w-full bg-[rgba(0,_0,_0,_0)] rounded-bl-none rounded-br-none [box-shadow:0px_1px_0px_0px_rgb(0,0,0))]  opacity-100">
                    <div class=" place-content-center items-center flex flex-none [flex-flow:column] gap-[32px] h-min max-w-[710px] overflow-hidden p-0 relative w-full opacity-100">
                        <div data-framer-component-type="RichTextContainer" class="  flex-[0_0_auto] h-auto whitespace-pre-wrap w-full break-words outline-[none] flex flex-col justify-start flex-shrink-0 opacity-100 transform-none">
                            <p class="t809:text-[20px]  font-mystenWalteralteregular text-[32px] font-normal text-[#f50032] tracking-[-.03em] leading-[110%] text-start">{cards[cardnum - 1].question}</p>
                        </div>
                        <div data-framer-component-type="RichTextContainer" class="  flex-[0_0_auto] h-auto whitespace-pre-wrap w-full break-words outline-[none] flex flex-col justify-start flex-shrink-0 opacity-100 transform-none">
                            <p class=" t809:text-[40px] font-mystenwalteraltebold b81t1199:text-[85px] text-[90px] font-normal text-white tracking-[-.03em] leading-[90%] text-start">{cards[cardnum - 1].mainfirst}</p>
                        </div>
                        <div data-framer-component-type="RichTextContainer" class="  flex-[0_0_auto] h-auto whitespace-pre-wrap w-full break-words outline-[none] flex flex-col justify-start flex-shrink-0 opacity-100 transform-none">
                            <p class="t809:text-[40px] font-mystenwalteraltebold b81t1199:text-[85px] text-[90px] font-normal text-white tracking-[-.03em] leading-[90%] text-start">{cards[cardnum - 1].mainsec}</p>
                        </div>
                        <div data-framer-component-type="RichTextContainer" class="  flex-[0_0_auto] h-auto whitespace-pre-wrap w-full break-words outline-[none] flex flex-col justify-start flex-shrink-0 opacity-100 transform-none">
                            <p class="text-white font-mystenWalteralteregular text-[18px] leading-[120%] tracking-[-.03em] ">{cards[cardnum - 1].desc}</p>
                        </div>
                    </div>
                    <div class=" flex-[0_0_auto] h-auto relative w-auto opacity-100 transform-none">
                        <a data-border="true" data-framer-name="Dark" data-highlight="true" href="./research-and-development" tabindex="0" class=" animtextparent">
                            <div data-framer-component-type="RichTextContainer" class="  flex-[0_0_auto] h-auto whitespace-pre w-auto outline-[none] flex flex-col justify-end flex-shrink-0 transform-none opacity-100">
                                <p class="animtext ">{cards[cardnum - 1].buttondesc}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div data-framer-name="Image" class=" items-start flex flex-[1_0_0px] [flex-flow:row] gap-[10px] h-[370px] overflow-visible p-0 t1199:flex-[0_0_auto] t1199:order-[0] t1199:w-full relative w-px rounded-tl-none rounded-tr-none [box-shadow:-1px_0px_0px_0px_var(--token-e658dadb-c36b-4228-b164-5be3ef929375,_rgb(0,_0,_0))] opacity-100">
                <div class=" items-center flex flex-[1_0_0px] [flex-flow:column] gap-[10px] h-[406px] overflow-hidden p-0 relative w-px rounded-br-[24px] rounded-tl-none rounded-tr-[24px] opacity-100">
                    <div data-framer-background-image-wrapper="true" class=" absolute [border-radius:inherit] top-[0] right-[0] bottom-[0] left-[0]">
                        <img decoding="async" loading="lazy" sizes="max(max(100vw - 20px, 1px) / 2.2, 1px)" srcset="https://framerusercontent.com/images/WWxbjJo30uevc4Ey5GRd6t6MLs.png?scale-down-to=512 512w,https://framerusercontent.com/images/WWxbjJo30uevc4Ey5GRd6t6MLs.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/WWxbjJo30uevc4Ey5GRd6t6MLs.png 1420w" src="https://framerusercontent.com/images/WWxbjJo30uevc4Ey5GRd6t6MLs.png" alt="" class=" block w-full h-full [border-radius:inherit] object-center object-cover t809:hidden b81t1199:hidden"></img>
                        <img decoding="async" loading="lazy" sizes="max(max(100vw - 20px, 1px), 1px)" srcset="https://framerusercontent.com/images/WWxbjJo30uevc4Ey5GRd6t6MLs.png?scale-down-to=512 512w,https://framerusercontent.com/images/WWxbjJo30uevc4Ey5GRd6t6MLs.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/WWxbjJo30uevc4Ey5GRd6t6MLs.png 1420w" src="https://framerusercontent.com/images/WWxbjJo30uevc4Ey5GRd6t6MLs.png" alt="" class="  w-full h-full [border-radius:inherit] object-center object-cover t809:block b81t1199:block hidden"></img>

                    </div>
                    <div class=" -bottom-[301px] flex-[0_0_auto] h-auto -left-[445px] absolute w-auto scale-[0.6] opacity-100">
                        <div data-framer-name="Dark" class=" h-[1004px] overflow-hidden relative w-[1420px] opacity-100">
                            <div data-framer-name="scatter_grid_white" class=" [aspect-ratio:0.758745_/_1] -bottom-[745px] flex-[0_0_auto] h-[var(--framer-aspect-ratio-supported, 1872px)] left-0 overflow-visible absolute right-0 opacity-100">
                                <div data-framer-background-image-wrapper="true" class=" absolute [border-radius:inherit] top-[0] right-[0] bottom-[0] left-[0]">
                                    <img decoding="async" loading="lazy" sizes="100vw" srcset="https://framerusercontent.com/images/BC4MvLDlgwBPinLtc80JYCtJKAw.png?scale-down-to=1024 776w,https://framerusercontent.com/images/BC4MvLDlgwBPinLtc80JYCtJKAw.png?scale-down-to=2048 1553w,https://framerusercontent.com/images/BC4MvLDlgwBPinLtc80JYCtJKAw.png?scale-down-to=4096 3107w,https://framerusercontent.com/images/BC4MvLDlgwBPinLtc80JYCtJKAw.png 4208w" src="https://framerusercontent.com/images/BC4MvLDlgwBPinLtc80JYCtJKAw.png?scale-down-to=4096" alt="" class=" block w-full h-full [border-radius:inherit] object-center object-cover"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
