import React, { useEffect } from 'react'
import Footer from '../../Homepage/Footer';
import Navbar from '../../Homepage/Navbar';
import { useMediaQuery } from '@react-hook/media-query';
function Vellore() {
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
                        <h1 className=' uppercase text-3xl text-center text-orange-500 font-medium'>vellore</h1>
                    </div>
                    <div>
                        <h1 className=' mt-10 font-medium'>
                            Vellore! A pleasant town settled close to banks of Palar stream in the north-eastern
                            piece of Tamil Nadu. This town is frequently alluded to as a 'focal point of clinical the
                            travel industry' as it is the bases of India's best 2 clinical schools, in particular, dedicate
                            clinical school and VIT. <br /><br />
                            The clinical travel industry or wellbeing travel industry is a term at first alludes to the
                            demonstration of the patient going to the various nations for either critical or clinical
                            system or patient making a trip starting with one spot then onto the next for specific
                            careful and different types of a particular treatment. It is seen as one of the quickest
                            developing and rose as the most encouraging industry in the greater part of the nations
                            including India. Tamilnadu is one such state which is well known for the Medical Tourism,
                            There are a few world-class offices outfitted with the most recent testing offices
                            accessible. One can come to Tamilnadu for a particular treatment or even go for
                            psychological wellness check-up while on vacation. Tamilnadu is well known for the
                            treatment of cardiovascular consideration, Transplant, Eyecare, and restorative medical
                            procedures. Aside from allopathic treatment, Tamilnadu is acclaimed for Ayurveda,
                            Siddha, Unani, Homeopathy, Acupuncture, mending, and Reiki.




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
                <h1 className=' uppercase text-center font-medium text-orange-500'>vellore</h1>
            </div>
            <div className=' px-5 mt-10 text-sm my-10 font-medium'>
                <h1>
                    Vellore! A pleasant town settled close to banks of Palar stream in the north-eastern
                    piece of Tamil Nadu. This town is frequently alluded to as a 'focal point of clinical the
                    travel industry' as it is the bases of India's best 2 clinical schools, in particular, dedicate
                    clinical school and VIT. <br /><br />

                    The clinical travel industry or wellbeing travel industry is a term at first alludes to the
                    demonstration of the patient going to the various nations for either critical or clinical
                    system or patient making a trip starting with one spot then onto the next for specific
                    careful and different types of a particular treatment. It is seen as one of the quickest
                    developing and rose as the most encouraging industry in the greater part of the nations
                    including India. Tamilnadu is one such state which is well known for the Medical Tourism,
                    There are a few world-class offices outfitted with the most recent testing offices
                    accessible. One can come to Tamilnadu for a particular treatment or even go for
                    psychological wellness check-up while on vacation. Tamilnadu is well known for the
                    treatment of cardiovascular consideration, Transplant, Eyecare, and restorative medical
                    procedures. Aside from allopathic treatment, Tamilnadu is acclaimed for Ayurveda,
                    Siddha, Unani, Homeopathy, Acupuncture, mending, and Reiki.


                </h1>
            </div>
            <Footer />
        </div>
    )
}

export default Vellore