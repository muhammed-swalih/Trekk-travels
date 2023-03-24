import React, { useEffect } from 'react'
import Footer from '../../Homepage/Footer';
import Navbar from '../../Homepage/Navbar';
import { useMediaQuery } from '@react-hook/media-query';
function Off() {
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
                        <h1 className=' uppercase text-3xl text-center text-orange-500 font-medium'>off road driving</h1>
                    </div>
                    <div>
                        <h1 className=' mt-10 font-medium'>
                            The thrill of an adventure to experience. Join the 4x4 journey and explore where
                            there are no paths, you must make the path under the guidance of trained
                            professionals.
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
                <h1 className=' uppercase text-center font-medium text-orange-500'>Off road driving</h1>
            </div>
            <div className=' px-5 mt-10 text-sm my-10 font-medium'>
                <h1>
                    The thrill of an adventure to experience. Join the 4x4 journey and explore where
                    there are no paths, you must make the path under the guidance of trained
                    professionals.



                </h1>
            </div>
            <Footer />
        </div>
    )
}

export default Off