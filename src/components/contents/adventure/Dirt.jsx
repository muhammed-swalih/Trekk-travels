import React, { useEffect } from 'react'
import Footer from '../../Homepage/Footer';
import Navbar from '../../Homepage/Navbar';
import { useMediaQuery } from '@react-hook/media-query';
function Dirt() {
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
                        <h1 className=' uppercase text-3xl text-center text-orange-500 font-medium'>dirt biking</h1>
                    </div>
                    <div>
                        <h1 className=' mt-10 font-medium'>
                            A dirt bike is a lightweight motorcycle designed to be used on unpaved trails of
                            Mud and Dirt. With a dirt bike you can Corner, jump and burnout with your heart’s
                            content. After a safety briefing and lecture, and getting geared up with helmets,
                            knee and elbow pads and other safety equipment – it’s time for your team and
                            you to pump up the ignition and get ready to blast off.

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
                <h1 className=' uppercase text-center font-medium text-orange-500'>Dirt biking</h1>
            </div>
            <div className=' px-5 mt-10 text-sm my-10 font-medium'>
                <h1>
                    A dirt bike is a lightweight motorcycle designed to be used on unpaved trails of
                    Mud and Dirt. With a dirt bike you can Corner, jump and burnout with your heart’s
                    content. After a safety briefing and lecture, and getting geared up with helmets,
                    knee and elbow pads and other safety equipment – it’s time for your team and
                    you to pump up the ignition and get ready to blast off.



                </h1>
            </div>
            <Footer />
        </div>
    )
}

export default Dirt