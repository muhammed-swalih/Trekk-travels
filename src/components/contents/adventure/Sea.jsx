import React, { useEffect } from 'react'
import Footer from '../../Homepage/Footer';
import Navbar from '../../Homepage/Navbar';
import { useMediaQuery } from '@react-hook/media-query';
function Sea() {
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
                        <h1 className=' uppercase text-3xl text-center text-orange-500 font-medium'>sea kayaking</h1>
                    </div>
                    <div>
                        <h1 className=' mt-10 font-medium'>
                            Take some time off for a calm, fun and wild activity. Sea kayaking always been a
                            experience. Keep a firm grip on your paddle though and keep paddling.

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
                <h1 className=' uppercase text-center font-medium text-orange-500'>sea kayaking</h1>
            </div>
            <div className=' px-5 mt-10 text-sm my-10 font-medium'>
                <h1>
                    Take some time off for a calm, fun and wild activity. Sea kayaking always been a
                    experience. Keep a firm grip on your paddle though and keep paddling.



                </h1>
            </div>
            <Footer />
        </div>
    )
}

export default Sea