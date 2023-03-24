import React, { useEffect } from 'react'
import Footer from '../../Homepage/Footer';
import Navbar from '../../Homepage/Navbar';
import { useMediaQuery } from '@react-hook/media-query';
function Kidney() {
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
                        <h1 className=' uppercase text-3xl text-center text-orange-500 font-medium'>kidney transplant</h1>
                    </div>
                    <div>
                        <h1 className=' mt-10 font-medium'>
                            The living kidney transplantation program in India has developed in the previous 45
                            years and is as of now the second biggest program in numbers after the USA. It is
                            assessed that all around, constant kidney sickness is related to roughly 735,000
                            passings yearly. A kidney transplant is a medical procedure done to supplant an infected
                            or broken kidney in an individual with a solid kidney from a living or expired benefactor.
                            The kidneys play out the errand of waste expulsion from your body. Kidneys additionally
                            assume a significant job in the support of the body's electrolyte and liquid parity. At
                            the point when the kidneys don't carry out their responsibility, poisonous waste
                            develops in the body and can make you extremely sick. Notwithstanding expelling
                            squanders and overabundance liquid from the body, kidneys likewise control the
                            digestion of electrolytes in the body, for example, calcium, potassium, sodium, and then
                            some.

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
                <h1 className=' uppercase text-center font-medium text-orange-500'>kidney transplant</h1>
            </div>
            <div className=' px-5 mt-10 text-sm my-10 font-medium'>
                <h1>
                    The living kidney transplantation program in India has developed in the previous 45
                    years and is as of now the second biggest program in numbers after the USA. It is
                    assessed that all around, constant kidney sickness is related to roughly 735,000
                    passings yearly. A kidney transplant is a medical procedure done to supplant an infected
                    or broken kidney in an individual with a solid kidney from a living or expired benefactor.
                    The kidneys play out the errand of waste expulsion from your body. Kidneys additionally
                    assume a significant job in the support of the body's electrolyte and liquid parity. At
                    the point when the kidneys don't carry out their responsibility, poisonous waste
                    develops in the body and can make you extremely sick. Notwithstanding expelling
                    squanders and overabundance liquid from the body, kidneys likewise control the
                    digestion of electrolytes in the body, for example, calcium, potassium, sodium, and then
                    some.




                </h1>
            </div>
            <Footer />
        </div>
    )
}

export default Kidney