import React, { useEffect } from 'react'
import Footer from '../../Homepage/Footer';
import Navbar from '../../Homepage/Navbar';
import { useMediaQuery } from '@react-hook/media-query';
function Unani() {
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
                        <h1 className=' uppercase text-3xl text-center text-orange-500 font-medium'>unani</h1>
                    </div>
                    <div>
                        <h1 className=' mt-10 font-medium'>
                            The Unani drug, furthermore, called Unani Tibb, Arabian Medicine, or Islamic Medicine,
                            an ordinary game plan of repairing and prosperity upkeep found in South Asia. The
                            beginnings of Unani prescription are found in the fundamentals of the old-fashioned
                            Greek doctors Hippocrates and Galen. As a field, it was later advanced and refined
                            through purposeful preliminary by the Arabs, most unquestionably by Muslim specialist
                            Avicenna. With additional duties of clinical information from various bits of the Middle
                            East and South Asia, Unani medicine came to be alluded to similarly as Arabian, or
                            Islamic, drug.



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
                <h1 className=' uppercase text-center font-medium text-orange-500'>unani</h1>
            </div>
            <div className=' px-5 mt-10 text-sm my-10 font-medium'>
                <h1>
                    The Unani drug, furthermore, called Unani Tibb, Arabian Medicine, or Islamic Medicine,
                    an ordinary game plan of repairing and prosperity upkeep found in South Asia. The
                    beginnings of Unani prescription are found in the fundamentals of the old-fashioned
                    Greek doctors Hippocrates and Galen. As a field, it was later advanced and refined
                    through purposeful preliminary by the Arabs, most unquestionably by Muslim specialist
                    Avicenna. With additional duties of clinical information from various bits of the Middle
                    East and South Asia, Unani medicine came to be alluded to similarly as Arabian, or
                    Islamic, drug.


                </h1>
            </div>
            <Footer />
        </div>
    )
}

export default Unani