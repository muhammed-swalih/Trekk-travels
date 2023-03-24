import React, { useEffect } from 'react'
import Footer from '../../Homepage/Footer';
import Navbar from '../../Homepage/Navbar';
import { useMediaQuery } from '@react-hook/media-query';
function Contemplation() {
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
                        <h1 className=' uppercase text-3xl text-center text-orange-500 font-medium'>Contemplation</h1>
                    </div>
                    <div>
                        <h1 className=' mt-10 font-medium'>
                            Contemplation is where an individual uses a strategy –, for example, care, or
                            concentrating the brain on a specific article, thought, or movement – to prepare
                            consideration and mindfulness, and accomplish an intellectually clear and genuinely
                            quiet and stable state. Contemplation might be utilized with the point of diminishing
                            pressure, uneasiness, misery, and torment, and expanding harmony, recognition, selfidea, and prosperity. Reflection is under research to characterize its conceivable
                            wellbeing (mental, neurological, and cardiovascular) and different impacts
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
                <h1 className=' uppercase text-center font-medium text-orange-500'>Contemplation</h1>
            </div>
            <div className=' px-5 mt-10 text-sm my-10 font-medium'>
                <h1>
                    Contemplation is where an individual uses a strategy –, for example, care, or
                    concentrating the brain on a specific article, thought, or movement – to prepare
                    consideration and mindfulness, and accomplish an intellectually clear and genuinely
                    quiet and stable state. Contemplation might be utilized with the point of diminishing
                    pressure, uneasiness, misery, and torment, and expanding harmony, recognition, selfidea, and prosperity. Reflection is under research to characterize its conceivable
                    wellbeing (mental, neurological, and cardiovascular) and different impacts



                </h1>
            </div>
            <Footer />
        </div>
    )
}

export default Contemplation