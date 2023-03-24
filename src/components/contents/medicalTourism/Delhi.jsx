import React, { useEffect } from 'react'
import Footer from '../../Homepage/Footer';
import Navbar from '../../Homepage/Navbar';
import { useMediaQuery } from '@react-hook/media-query';
function Delhi() {
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
                        <h1 className=' uppercase text-3xl text-center text-orange-500 font-medium'>new delhi</h1>
                    </div>
                    <div>
                        <h1 className=' mt-10 font-medium'>
                            An image of the nation's rich past and flourishing present, Delhi is where antiquated
                            and current mix flawlessly together. It is a spot that contacts your heartbeat as well as
                            even secures it to a frantic speed. Home to a large number of dreams, the city takes
                            on phenomenal obligations of acknowledging dreams bringing individuals closer and
                            rousing their musings. <br /><br />

                            In New Delhi, there are shifts in world-class clinical medical clinics. Guests from western
                            and other propelled nations can profit a similar which they may not be accessible in
                            their nations of origin. Clinical Tourism in Delhi, India is increasing fast acknowledgment
                            empowering individuals from everywhere throughout the globe to visit India for their
                            clinical treatment. A remote vacationer will never feel strange here, owing to the many
                            altered administrations and offices that are accessible for them. The city with its quick
                            moving life and amicable individuals makes certain to make your stay here paramount
                            and charming.



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
                <h1 className=' uppercase text-center font-medium text-orange-500'>new delhi</h1>
            </div>
            <div className=' px-5 mt-10 text-sm my-10 font-medium'>
                <h1>
                    An image of the nation's rich past and flourishing present, Delhi is where antiquated
                    and current mix flawlessly together. It is a spot that contacts your heartbeat as well as
                    even secures it to a frantic speed. Home to a large number of dreams, the city takes
                    on phenomenal obligations of acknowledging dreams bringing individuals closer and
                    rousing their musings. <br /><br />

                    In New Delhi, there are shifts in world-class clinical medical clinics. Guests from western
                    and other propelled nations can profit a similar which they may not be accessible in
                    their nations of origin. Clinical Tourism in Delhi, India is increasing fast acknowledgment
                    empowering individuals from everywhere throughout the globe to visit India for their
                    clinical treatment. A remote vacationer will never feel strange here, owing to the many
                    altered administrations and offices that are accessible for them. The city with its quick
                    moving life and amicable individuals makes certain to make your stay here paramount
                    and charming.

                </h1>
            </div>
            <Footer />
        </div>
    )
}

export default Delhi