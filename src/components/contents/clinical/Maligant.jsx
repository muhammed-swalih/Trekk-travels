import React, { useEffect } from 'react'
import Footer from '../../Homepage/Footer';
import Navbar from '../../Homepage/Navbar';
import { useMediaQuery } from '@react-hook/media-query';
function Maligant() {
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
                        <h1 className=' uppercase text-3xl text-center text-orange-500 font-medium'>Malignant growth CARE</h1>
                    </div>
                    <div>
                        <h1 className=' mt-10 font-medium'>
                            Innovation and logical advances have upset disease care of the new thousand years,
                            no uncertainty about that. There is best driving disease care focuses in the nation which
                            offers the best rate for the medicines and leads the nation to turn into a clinical centre
                            point. With the most recent clinical innovation and a group of profoundly talented
                            advisors with unrivalled ability and mastery, it receives a multidisciplinary way to deal
                            with offer administrations of worldwide measures over the whole range of oncology
                            care running from screening, assessment, analysis and treatment, palliative
                            consideration, and restoration. In India profoundly propelled emergency clinics.
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
                <h1 className=' uppercase text-center font-medium text-orange-500'>Malignant growth CARE</h1>
            </div>
            <div className=' px-5 mt-10 text-sm my-10 font-medium'>
                <h1>
                    Innovation and logical advances have upset disease care of the new thousand years,
                    no uncertainty about that. There is best driving disease care focuses in the nation which
                    offers the best rate for the medicines and leads the nation to turn into a clinical centre
                    point. With the most recent clinical innovation and a group of profoundly talented
                    advisors with unrivalled ability and mastery, it receives a multidisciplinary way to deal
                    with offer administrations of worldwide measures over the whole range of oncology
                    care running from screening, assessment, analysis and treatment, palliative
                    consideration, and restoration. In India profoundly propelled emergency clinics.




                </h1>
            </div>
            <Footer />
        </div>
    )
}

export default Maligant