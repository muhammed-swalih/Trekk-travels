import React, { useEffect } from 'react'
import Footer from '../../Homepage/Footer';
import Navbar from '../../Homepage/Navbar';
import { useMediaQuery } from '@react-hook/media-query';
function Fragrant() {
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
                        <h1 className=' uppercase text-3xl text-center text-orange-500 font-medium'>Fragrant healing</h1>
                    </div>
                    <div>
                        <h1 className=' mt-10 font-medium'>
                            Fragrant healing is a comprehensive mending treatment that utilizes normal plant
                            concentrates to advance wellbeing and prosperity. Now and then it's called fundamental
                            oil treatment. Fragrance based treatment utilizes sweet-smelling basic oils
                            therapeutically to improve the wellbeing of the body, psyche, and soul. It upgrades
                            both physical and passionate wellbeing. Fragrant healing is thought of as both a
                            craftsmanship and a science. As of late, fragrance-based treatment has increased more
                            acknowledgment in the fields of science and medication.

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
                <h1 className=' uppercase text-center font-medium text-orange-500'>fragrant healing</h1>
            </div>
            <div className=' px-5 mt-10 text-sm my-10 font-medium'>
                <h1>
                    Fragrant healing is a comprehensive mending treatment that utilizes normal plant
                    concentrates to advance wellbeing and prosperity. Now and then it's called fundamental
                    oil treatment. Fragrance based treatment utilizes sweet-smelling basic oils
                    therapeutically to improve the wellbeing of the body, psyche, and soul. It upgrades
                    both physical and passionate wellbeing. Fragrant healing is thought of as both a
                    craftsmanship and a science. As of late, fragrance-based treatment has increased more
                    acknowledgment in the fields of science and medication.




                </h1>
            </div>
            <Footer />
        </div>
    )
}

export default Fragrant