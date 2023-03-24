import React, { useEffect } from 'react'
import Footer from '../../Homepage/Footer'
import Navbar from '../../Homepage/Navbar'
import { useMediaQuery } from '@react-hook/media-query'
function Kerala() {
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
                        <h1 className=' uppercase text-3xl text-center text-orange-500 font-medium'>kerala</h1>
                    </div>
                    <div>
                        <h1 className=' mt-10 font-medium'>
                            Kerala is acclaimed for its particular social, land qualities and medicinal services. The
                            practices and customs gave over from age to age. Kerala is now being renowned as
                            outstanding amongst other human services centre point in India for its well-known
                            clinical the travel industry. Significant clinics are holding hands with the Govt in
                            advancing clinical the travel industry. Globalization and financial progression have given
                            a lift to the clinical help segment, particularly in Kerala. The clinical treatment for different
                            bundles structures some portion of recuperative recreation bundles at world-class
                            visitor resorts. Air terminal pickup, lodging settlement, transportation, food, and so on
                            are offered alongside clinical treatment at the best emergency clinics. <br /><br />

                            Kerala is unmistakably appropriate for clinical the travel industry as a result of its
                            moderate climate consistently, propelled emergency clinics with world-class offices,
                            prestigious specialists worked in significant orders, prepared para-clinical staff and
                            professionals, and universal availability. Furthermore, Kerala additionally appreciates
                            clear preferences, for example, the exclusive expectation of cleanliness that is kept up,
                            the effect very much created the travel industry with its great retreats and inns, serious
                            expenses for bundles of clinical treatment, and perfect areas for a loosening up
                            occasion. <br /><br />

                            The business offers to appeal to clinical the travel industry bundles at sensible rates.
                            They are advertised effectively and are brought to the clients by the travel industry
                            through visit administrators as per the comfort of the patients. The travel industry office
                            has assumed a spearheading job in advancing Kerala as a significant goal in clinical the
                            travel industry in the global market. <br /><br />


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
                <h1 className=' uppercase text-center font-medium text-orange-500'>kerala</h1>
            </div>
            <div className=' px-5 mt-10 text-sm my-10 font-medium'>
            Kerala is acclaimed for its particular social, land qualities and medicinal services. The practices and customs gave over from age to age. Kerala is now being renowned as outstanding amongst other human services centre point in India for its well-known clinical the travel industry. Significant clinics are holding hands with the Govt in advancing clinical the travel industry. Globalization and financial progression have given a lift to the clinical help segment, particularly in Kerala. The clinical treatment for different bundles structures some portion of recuperative recreation bundles at world-class visitor resorts. Air terminal pickup, lodging settlement, transportation, food, and so on are offered alongside clinical treatment at the best emergency clinics. <br /><br />

            Kerala is unmistakably appropriate for clinical the travel industry as a result of its moderate climate consistently, propelled emergency clinics with world-class offices, prestigious specialists worked in significant orders, prepared para-clinical staff and professionals, and universal availability. Furthermore, Kerala additionally appreciates clear preferences, for example, the exclusive expectation of cleanliness that is kept up, the effect very much created the travel industry with its great retreats and inns, serious expenses for bundles of clinical treatment, and perfect areas for a loosening up occasion. <br /><br />

            The business offers to appeal to clinical the travel industry bundles at sensible rates. They are advertised effectively and are brought to the clients by the travel industry through visit administrators as per the comfort of the patients. The travel industry office has assumed a spearheading job in advancing Kerala as a significant goal in clinical the travel industry in the global market. <br /><br />
            </div>
            <Footer />
        </div>
    )
}

export default Kerala