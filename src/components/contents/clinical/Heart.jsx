import React, { useEffect } from 'react'
import Footer from '../../Homepage/Footer';
import Navbar from '../../Homepage/Navbar';
import { useMediaQuery } from '@react-hook/media-query';
function Heart() {
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
                        <h1 className=' uppercase text-3xl text-center text-orange-500 font-medium'>HEART CARE</h1>
                    </div>
                    <div>
                        <h1 className=' mt-10 font-medium'>
                            Indian Heart Care emergency clinics are viewed as truly outstanding in Asia, playing out
                            a huge number of medicines and methods in cardiology and cardiothoracic medical
                            procedure. Cardiologists and cardiothoracic specialists are prepared at the top
                            organizations in India and abroad and are totally committed to the treatment for
                            coronary heart sicknesses. The focuses have tremendous involvement with the most
                            muddled coronary conduit sidestep medical procedure, a medical procedure for a wide
                            range of valvular heart ailments, paediatric heart medical procedure, grown-up, and
                            paediatric heart transplantation with progress rates practically identical to universal
                            norms.
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
                <h1 className=' uppercase text-center font-medium text-orange-500'>heart care</h1>
            </div>
            <div className=' px-5 mt-10 text-sm my-10 font-medium'>
                <h1>
                    Indian Heart Care emergency clinics are viewed as truly outstanding in Asia, playing out
                    a huge number of medicines and methods in cardiology and cardiothoracic medical
                    procedure. Cardiologists and cardiothoracic specialists are prepared at the top
                    organizations in India and abroad and are totally committed to the treatment for
                    coronary heart sicknesses. The focuses have tremendous involvement with the most
                    muddled coronary conduit sidestep medical procedure, a medical procedure for a wide
                    range of valvular heart ailments, paediatric heart medical procedure, grown-up, and
                    paediatric heart transplantation with progress rates practically identical to universal
                    norms.



                </h1>
            </div>
            <Footer />
        </div>
    )
}

export default Heart