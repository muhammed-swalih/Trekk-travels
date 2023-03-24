import React, { useEffect } from 'react'
import Footer from '../../Homepage/Footer';
import Navbar from '../../Homepage/Navbar';
import { useMediaQuery } from '@react-hook/media-query';
function Drumming() {
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
                        <h1 className=' uppercase text-3xl text-center text-orange-500 font-medium'>drumming</h1>
                    </div>
                    <div>
                        <h1 className=' mt-10 font-medium'>
                            Makes Some Noise…It’s the Time for Insane enjoyments. Go according to our
                            beats…Drumming is always the eminent way of showcasing the culture and
                            Personal Choices…Thus paves the way interactive Conversations…

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
                <h1 className=' uppercase text-center font-medium text-orange-500'>Drumming</h1>
            </div>
            <div className=' px-5 mt-10 text-sm my-10 font-medium'>
                <h1>
                    Makes Some Noise…It’s the Time for Insane enjoyments. Go according to our
                    beats…Drumming is always the eminent way of showcasing the culture and
                    Personal Choices…Thus paves the way interactive Conversations…




                </h1>
            </div>
            <Footer />
        </div>
    )
}

export default Drumming