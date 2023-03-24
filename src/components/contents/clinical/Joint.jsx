import React, { useEffect } from 'react'
import Footer from '../../Homepage/Footer';
import Navbar from '../../Homepage/Navbar';
import { useMediaQuery } from '@react-hook/media-query';
function Joint() {
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
                        <h1 className=' uppercase text-3xl text-center text-orange-500 font-medium'>joint care</h1>
                    </div>
                    <div>
                        <h1 className=' mt-10 font-medium'>
                            Indian Hospitals of Orthopaedics are having a whole range of care from avoidance to
                            recovery. Joint harms and degenerative joint issues are affecting the financial texture
                            of the nation. Like all maladies, anticipation is the best alternative. Normal exercise,
                            weight control, and limiting stressing of joints can help forestall joint sicknesses. Early
                            findings and the executives are the following best other option. People must look for
                            clinical assistance promptly at the beginning of side effects like joint agony and confined
                            development of the joint. At this stage, basic Physiotherapy and muscle reinforcing
                            activities may stop further advance. In Joint Care communities, joint substitution medical
                            procedure is performed where the joint infection has advanced to a propelled stage
                            especially in the older. This method lessens joint agony and re-establishes versatility.

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
                <h1 className=' uppercase text-center font-medium text-orange-500'>joint care</h1>
            </div>
            <div className=' px-5 mt-10 text-sm my-10 font-medium'>
                <h1>
                    Indian Hospitals of Orthopaedics are having a whole range of care from avoidance to
                    recovery. Joint harms and degenerative joint issues are affecting the financial texture
                    of the nation. Like all maladies, anticipation is the best alternative. Normal exercise,
                    weight control, and limiting stressing of joints can help forestall joint sicknesses. Early
                    findings and the executives are the following best other option. People must look for
                    clinical assistance promptly at the beginning of side effects like joint agony and confined
                    development of the joint. At this stage, basic Physiotherapy and muscle reinforcing
                    activities may stop further advance. In Joint Care communities, joint substitution medical
                    procedure is performed where the joint infection has advanced to a propelled stage
                    especially in the older. This method lessens joint agony and re-establishes versatility.




                </h1>
            </div>
            <Footer />
        </div>
    )
}

export default Joint