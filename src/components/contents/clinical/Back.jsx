import React, { useEffect } from 'react'
import Footer from '../../Homepage/Footer';
import Navbar from '../../Homepage/Navbar';
import { useMediaQuery } from '@react-hook/media-query';
function Back() {
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
                        <h1 className=' uppercase text-3xl text-center text-orange-500 font-medium'>back pain</h1>
                    </div>
                    <div>
                        <h1 className=' mt-10 font-medium'>
                            India's spine care focuses are devoted to back and neck torment treatment. Around 80
                            percent of grown-ups experience low back agony sooner or later during their lives.
                            Influencing Men and Women similarly, it is the most widely recognized reason for workrelated inability and the main supporter of missed workdays. Ceaseless back torment
                            perseveres for 12 weeks or more, considerably after an underlying physical issue or
                            hidden reason for intense low back torment has been dealt with. Around 20 percent of
                            individuals influenced by intense low back torment create ceaseless low back agony
                            with determined side effects at one year. At times, the treatment effectively soothes
                            ceaseless low back agony, yet in different cases, torment continues despite clinical and
                            careful treatment
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
                <h1 className=' uppercase text-center font-medium text-orange-500'>back pain</h1>
            </div>
            <div className=' px-5 mt-10 text-sm my-10 font-medium'>
                <h1>
                    India's spine care focuses are devoted to back and neck torment treatment. Around 80
                    percent of grown-ups experience low back agony sooner or later during their lives.
                    Influencing Men and Women similarly, it is the most widely recognized reason for workrelated inability and the main supporter of missed workdays. Ceaseless back torment
                    perseveres for 12 weeks or more, considerably after an underlying physical issue or
                    hidden reason for intense low back torment has been dealt with. Around 20 percent of
                    individuals influenced by intense low back torment create ceaseless low back agony
                    with determined side effects at one year. At times, the treatment effectively soothes
                    ceaseless low back agony, yet in different cases, torment continues despite clinical and
                    careful treatment



                </h1>
            </div>
            <Footer />
        </div>
    )
}

export default Back