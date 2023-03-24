import React, { useEffect } from 'react'
import Footer from '../../Homepage/Footer';
import Navbar from '../../Homepage/Navbar';
import { useMediaQuery } from '@react-hook/media-query';
function Ayurveda() {
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
                        <h1 className=' uppercase text-3xl text-center text-orange-500 font-medium'>Ayurveda</h1>
                    </div>
                    <div>
                        <h1 className=' mt-10 font-medium'>
                            Ayurvedic medicine commonly known name Ayurveda is one of the world's most
                            prepared thorough whole-body recovering systems. It was evidently developed from
                            more than 3,000 years ago preceding India. It relies upon the conviction that prosperity
                            and wellbeing depend upon a delicate congruity between the cerebrum, body, and
                            soul. Its standard target is to progress satisfactory prosperity, not the fight ailment. In
                            any case, prescriptions may be proposed for unequivocal clinical issues. In the United
                            States, it's viewed as a type of integral and elective medication (CAM). The individuals
                            who practice Ayurveda accepts everyone is made of five essential components found
                            known to mankind: space, air, fire, water, and earth.


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
                <h1 className=' uppercase text-center font-medium text-orange-500'>Ayurveda</h1>
            </div>
            <div className=' px-5 mt-10 text-sm my-10 font-medium'>
                <h1>
                    Ayurvedic medicine commonly known name Ayurveda is one of the world's most
                    prepared thorough whole-body recovering systems. It was evidently developed from
                    more than 3,000 years ago preceding India. It relies upon the conviction that prosperity
                    and wellbeing depend upon a delicate congruity between the cerebrum, body, and
                    soul. Its standard target is to progress satisfactory prosperity, not the fight ailment. In
                    any case, prescriptions may be proposed for unequivocal clinical issues. In the United
                    States, it's viewed as a type of integral and elective medication (CAM). The individuals
                    who practice Ayurveda accepts everyone is made of five essential components found
                    known to mankind: space, air, fire, water, and earth.

                </h1>
            </div>
            <Footer />
        </div>
    )
}

export default Ayurveda