import React, { useEffect } from 'react'
import Footer from '../../Homepage/Footer';
import Navbar from '../../Homepage/Navbar';
import { useMediaQuery } from '@react-hook/media-query';
function Acupuncture() {
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
                        <h1 className=' uppercase text-3xl text-center text-orange-500 font-medium'>Acupuncture</h1>
                    </div>
                    <div>
                        <h1 className=' mt-10 font-medium'>
                            Needle treatment incorporates the consideration of pitiful needles through your skin at
                            key spotlights on your body. A key piece of traditional Chinese drug, needle treatment
                            is most consistently used to treat torment. Dynamically, it is being used for all-around
                            prosperity, inclusive pressure on board. Conventional Chinese medication clarifies
                            needle therapy as a method for adjusting the progression of vitality or life power. By
                            embedding needles into explicit focuses along these meridians, needle therapy
                            specialists accept that your vitality stream will re-balance.
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
                <h1 className=' uppercase text-center font-medium text-orange-500'>Acupuncture</h1>
            </div>
            <div className=' px-5 mt-10 text-sm my-10 font-medium'>
                <h1>
                    Needle treatment incorporates the consideration of pitiful needles through your skin at
                    key spotlights on your body. A key piece of traditional Chinese drug, needle treatment
                    is most consistently used to treat torment. Dynamically, it is being used for all-around
                    prosperity, inclusive pressure on board. Conventional Chinese medication clarifies
                    needle therapy as a method for adjusting the progression of vitality or life power. By
                    embedding needles into explicit focuses along these meridians, needle therapy
                    specialists accept that your vitality stream will re-balance.



                </h1>
            </div>
            <Footer />
        </div>
    )
}

export default Acupuncture