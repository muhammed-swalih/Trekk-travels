import React, { useEffect } from 'react'
import Footer from '../../Homepage/Footer';
import Navbar from '../../Homepage/Navbar';
import { useMediaQuery } from '@react-hook/media-query';
function Banglore() {
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
                        <h1 className=' uppercase text-3xl text-center text-orange-500 font-medium'>bangalore</h1>
                    </div>
                    <div>
                        <h1 className=' mt-10 font-medium'>
                            Bangalore is one of the greatest and most happening urban communities in India. This
                            city is a well-known vacationer goal and pulls in a great many travellers from around
                            the globe. Bangalore is additionally a significant spot of enthusiasm for clinical
                            vacationers as well. The umpteen quantities of world-class clinical organizations and
                            many experienced specialists can be considered as the features of Bangalore Medical
                            Tourism. You can arrive at Bangalore effectively, as it is very much associated via air to
                            Bangalore, with its cosmopolitan way of life and fast mechanical progressions, has
                            become a safe house for adventurers. The city has a charming and pleasant climate
                            consistently. Clinical voyagers who are on a visit to the city can get excellent
                            administrations from social insurance proficient, who are prepared in the top-class
                            clinical schools of the world. Bangalore clinical the travel industry likewise pontoons
                            different emergency clinics that have worldwide accreditation. The medical clinics
                            likewise have many rumored specialists from abroad who offer consultancy
                            administrations. A remote traveler will never feel strange here, owing to the many
                            modified administrations and offices that are accessible for them. The city with its quick
                            moving life and well-disposed individuals makes certain to make your stay here an
                            important and pleasant.


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
                <h1 className=' uppercase text-center font-medium text-orange-500'>bangalore</h1>
            </div>
            <div className=' px-5 mt-10 text-sm my-10 font-medium'>
                <h1>
                    Bangalore is one of the greatest and most happening urban communities in India. This
                    city is a well-known vacationer goal and pulls in a great many travellers from around
                    the globe. Bangalore is additionally a significant spot of enthusiasm for clinical
                    vacationers as well. The umpteen quantities of world-class clinical organizations and
                    many experienced specialists can be considered as the features of Bangalore Medical
                    Tourism. You can arrive at Bangalore effectively, as it is very much associated via air to
                    Bangalore, with its cosmopolitan way of life and fast mechanical progressions, has
                    become a safe house for adventurers. The city has a charming and pleasant climate
                    consistently. Clinical voyagers who are on a visit to the city can get excellent
                    administrations from social insurance proficient, who are prepared in the top-class
                    clinical schools of the world. Bangalore clinical the travel industry likewise pontoons
                    different emergency clinics that have worldwide accreditation. The medical clinics
                    likewise have many rumored specialists from abroad who offer consultancy
                    administrations. A remote traveler will never feel strange here, owing to the many
                    modified administrations and offices that are accessible for them. The city with its quick
                    moving life and well-disposed individuals makes certain to make your stay here an
                    important and pleasant.

                </h1>
            </div>
            <Footer />
        </div>
    )
}

export default Banglore