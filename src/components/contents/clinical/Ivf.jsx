import React, { useEffect } from 'react'
import Footer from '../../Homepage/Footer';
import Navbar from '../../Homepage/Navbar';
import { useMediaQuery } from '@react-hook/media-query';
function Ivf() {
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
                        <h1 className=' uppercase text-3xl text-center text-orange-500 font-medium'> IVF (In Vitro Fertilization)</h1>
                    </div>
                    <div>
                        <h1 className=' mt-10 font-medium'>
                            Among all out populace around 10-14 percent of couples are right now influenced with
                            barrenness. India is eminent for its Infertility Medicine/IVF emergency clinics and is had
                            some expertise in a wide range of Infertility Medicine/IVF medicines. The focuses are
                            included with moderate Costs, ensured results. IVF, ICSI, IUI. Profoundly Qualified
                            Doctors, Most Advanced Technologies, Result Orientation IVF Treatment is a helped
                            regenerative method where eggs are gathered from your ovaries and prepared with
                            the sperm in a particular lab. The prepared egg (incipient organism) is permitted to
                            develop in a secured domain for certain days before being moved into the lady's uterus
                            expanding the opportunity that a pregnancy will happen.
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
                <h1 className=' uppercase text-center font-medium text-orange-500'> IVF (In Vitro Fertilization) </h1>
            </div>
            <div className=' px-5 mt-10 text-sm my-10 font-medium'>
                <h1>
                    Among all out populace around 10-14 percent of couples are right now influenced with
                    barrenness. India is eminent for its Infertility Medicine/IVF emergency clinics and is had
                    some expertise in a wide range of Infertility Medicine/IVF medicines. The focuses are
                    included with moderate Costs, ensured results. IVF, ICSI, IUI. Profoundly Qualified
                    Doctors, Most Advanced Technologies, Result Orientation IVF Treatment is a helped
                    regenerative method where eggs are gathered from your ovaries and prepared with
                    the sperm in a particular lab. The prepared egg (incipient organism) is permitted to
                    develop in a secured domain for certain days before being moved into the lady's uterus
                    expanding the opportunity that a pregnancy will happen.



                </h1>
            </div>
            <Footer />
        </div>
    )
}

export default Ivf