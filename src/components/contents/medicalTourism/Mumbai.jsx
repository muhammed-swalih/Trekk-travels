import React, { useEffect } from 'react'
import Footer from '../../Homepage/Footer';
import Navbar from '../../Homepage/Navbar';
import { useMediaQuery } from '@react-hook/media-query';
function Mumbai() {
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
                        <h1 className=' uppercase text-3xl text-center text-orange-500 font-medium'>mumbai</h1>
                    </div>
                    <div>
                        <h1 className=' mt-10 font-medium'>
                            Mumbai is of the greatest urban communities in India and has an unmistakable spot on
                            the planet visitor map. The city is the focal point of all business and clinical exercises in
                            the nation thus can be considered as a huge number of exceptionally qualified clinical
                            experts and best in class clinical offices. The city, with its energetic life and cordial
                            individuals, will make your get-away there an agreeable one.  <br /><br />

                            Mumbai, which is the capital city of the province of Maharashtra, is one of the most
                            thickly populated and wealthiest urban communities in India. Known as the city that
                            never dozes, Mumbai has satisfied its depiction with its eateries, bars, and flawless
                            nightlife. Mumbai additionally has numerous emergency clinics in people in general and
                            private parts, which offer types of assistance that coordinate global norms. A remote
                            clinical visitor will never feel lost here, as the emergency clinics will consistently have
                            interpreters at administration. Mumbai clinical the travel industry offers amazing clinical
                            administrations at relatively less expensive rates. In the event that you wish to take a
                            break from clinical medicines and meander around, at that point you can visit visitor
                            goals like the Gateway of India, the Marine Drive seashore, and Prince of Wales Museum
                            and may different spots.


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
                <h1 className=' uppercase text-center font-medium text-orange-500'>mumbai</h1>
            </div>
            <div className=' px-5 mt-10 text-sm my-10 font-medium'>
                <h1>
                    Mumbai is of the greatest urban communities in India and has an unmistakable spot on
                    the planet visitor map. The city is the focal point of all business and clinical exercises in
                    the nation thus can be considered as a huge number of exceptionally qualified clinical
                    experts and best in class clinical offices. The city, with its energetic life and cordial
                    individuals, will make your get-away there an agreeable one.  <br /><br />

                    Mumbai, which is the capital city of the province of Maharashtra, is one of the most
                    thickly populated and wealthiest urban communities in India. Known as the city that
                    never dozes, Mumbai has satisfied its depiction with its eateries, bars, and flawless
                    nightlife. Mumbai additionally has numerous emergency clinics in people in general and
                    private parts, which offer types of assistance that coordinate global norms. A remote
                    clinical visitor will never feel lost here, as the emergency clinics will consistently have
                    interpreters at administration. Mumbai clinical the travel industry offers amazing clinical
                    administrations at relatively less expensive rates. In the event that you wish to take a
                    break from clinical medicines and meander around, at that point you can visit visitor
                    goals like the Gateway of India, the Marine Drive seashore, and Prince of Wales Museum
                    and may different spots.



                </h1>
            </div>
            <Footer />
        </div>
    )
}

export default Mumbai