import React, { useEffect } from 'react'
import Footer from '../../Homepage/Footer';
import Navbar from '../../Homepage/Navbar';
import { useMediaQuery } from '@react-hook/media-query';
function Nature() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const isMediumScreen = useMediaQuery("(min-width : 1024px)")
    if (isMediumScreen) {
        return (
            <div className=' w-full h-auto min-h-screen '>
                <Navbar />
                <div className=' w-[800px] min-h-screen h-auto mx-auto py-14 pt-32
                 '>
                    <div>
                        <h1 className=' uppercase text-3xl text-center text-orange-500 font-medium'>NATUROPATHY</h1>
                    </div>
                    <div>
                        <h1 className=' mt-10 font-medium'>
                            Naturopathic medication is a framework that utilizes normal solutions to help the body
                            recuperate itself. It grasps numerous treatments, including herbs, kneads, needle
                            therapy, works out, and healthful directing. Naturopathy was brought to the United
                            States from Germany during the 1800s, yet a portion of its medicines are hundreds of
                            years old. Today, it joins conventional medicines with current science. The objective of
                            naturopathic medication is to treat the entire individual - that implies psyche, body, and
                            soul. It likewise intends to recuperate the main drivers of a disease - not simply stop
                            the indications.
                        </h1>
                    </div>

                </div>
                <Footer />
            </div>
        )
    }
    return (
        <div className=' w-full h-full min-h-screen   '>
<Navbar />
            <div className=' text-2xl mt-10'>
                <h1 className=' uppercase text-center font-medium text-orange-500'>Naturopathy</h1>
            </div>
            <div className=' px-5 mt-10 text-sm my-10 font-medium'>
                <h1>
                    Naturopathic medication is a framework that utilizes normal solutions to help the body
                    recuperate itself. It grasps numerous treatments, including herbs, kneads, needle
                    therapy, works out, and healthful directing. Naturopathy was brought to the United
                    States from Germany during the 1800s, yet a portion of its medicines are hundreds of
                    years old. Today, it joins conventional medicines with current science. The objective of
                    naturopathic medication is to treat the entire individual - that implies psyche, body, and
                    soul. It likewise intends to recuperate the main drivers of a disease - not simply stop
                    the indications.



                </h1>
            </div>
            <Footer />
        </div>
    )
}

export default Nature