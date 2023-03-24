import React, { useEffect } from 'react'
import Footer from '../../Homepage/Footer';
import Navbar from '../../Homepage/Navbar';
import { useMediaQuery } from '@react-hook/media-query';
function Meetings() {
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
                        <h1 className=' uppercase text-3xl text-center text-orange-500 font-medium'>meetings</h1>
                    </div>
                    <div>
                        <h1 className=' mt-10 font-medium'>
                            The Convenient way to Indulge in the meeting…Just Don’t Make It’s a simple meeting
                            makes it an experience of shared thoughts and ideas. Professionalism makes the better
                            Pulling Power to a company, In Trekk and travel Holidays; we tailor everything
                            Professional Yet Casual…Only enough to make everything to be perfect
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
                <h1 className=' uppercase text-center font-medium text-orange-500'>meetings</h1>
            </div>
            <div className=' px-5 mt-10 text-sm my-10 font-medium'>
                <h1>
                    The Convenient way to Indulge in the meeting…Just Don’t Make It’s a simple meeting
                    makes it an experience of shared thoughts and ideas. Professionalism makes the better
                    Pulling Power to a company, In Trekk and travel Holidays; we tailor everything
                    Professional Yet Casual…Only enough to make everything to be perfect



                </h1>
            </div>
            <Footer />
        </div>
    )
}

export default Meetings