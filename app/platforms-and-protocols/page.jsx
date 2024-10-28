import React from 'react'
import Hero from '../components/platform/Hero'
import Card from '../components/platform/Card'

const page = () => {
    return (
        <>
            <Hero />
            <div className='flex items-center bg-white place-content-center content-start flex-col gap-[50px] h-min p-[50px] w-full'>

                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>



        </>
    )
}

export default page