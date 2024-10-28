import React from 'react'

const Container = () => {
    return (
        <div data-framer-name="Container" name="Container" class="box-border [-webkit-font-smoothing:inherit] items-start bg-[rgb(255,_255,_255)] flex flex-[0_0_auto] [flex-flow:column] gap-[10px] h-min overflow-visible pt-[10px] px-[10px] pb-0 relative w-full">
            <a data-framer-name="Video" name="Video" href="https://www.youtube.com/watch?v=LRIQWGYabUA" target="_blank" rel="noopener" class="box-border [-webkit-font-smoothing:inherit] flex place-content-center items-center rounded-[24px] flex-[0_0_auto] [flex-flow:row] gap-[10px] h-min overflow-hidden p-0 relative no-underline w-full">
                <div class="box-border [-webkit-font-smoothing:inherit] [aspect-ratio:1.775_/_1] flex-[1_0_0px] h-[var(--framer-aspect-ratio-supported, 665px)] relative w-px">
                    <video src="https://framerusercontent.com/assets/NIBB2JZF76HndxD4tQEWQ9x2iQ.mp4" loop poster="https://framerusercontent.com/images/lKlsdzowAH26Uucwz2lIzGfda2o.jpg" playsinline autoPlay style={{ cursor: "auto", width: "100%", height: "100%", borderRadius: "24px", display: "block", objectFit: "cover", backgroundColor: "rgba(0, 0, 0, 0)", objectPosition: "50% 50%" }}></video>
                </div>
            </a>
        </div>
    )
}

export default Container
