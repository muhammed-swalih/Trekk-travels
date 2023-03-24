import React, { useEffect } from 'react'
import Footer from '../../Homepage/Footer';
import Navbar from '../../Homepage/Navbar';
import { useMediaQuery } from '@react-hook/media-query';
function Allopathic() {
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
                        <h1 className=' uppercase text-3xl text-center text-orange-500 font-medium'>allopathic</h1>
                    </div>
                    <div>
                        <h1 className=' mt-10 font-medium'>
                            Allopathic medication or Allopathy is a framework wherein clinical specialists and other
                            social insurance experts, (for example, attendants, drug specialists, and advisor) treat
                            manifestations and sicknesses utilizing medications, radiation, or medical procedure.
                            Likewise called biomedicines, regular drugs, standard medication, conventional
                            medication, and western medication. Customary allopathic medication is the sort of
                            medication rehearsed by most medicinal services suppliers. It depends on standards of
                            fighting - utilization of blades and toxic substances. Evacuate tumours, diseases, and
                            different masses carefully and eliminate microbes and malignancy cells with harms, with
                            the expectation that don't kill the patient simultaneously


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
                <h1 className=' uppercase text-center font-medium text-orange-500'>allopathic</h1>
            </div>
            <div className=' px-5 mt-10 text-sm my-10 font-medium'>
                <h1>
                    Allopathic medication or Allopathy is a framework wherein clinical specialists and other
                    social insurance experts, (for example, attendants, drug specialists, and advisor) treat
                    manifestations and sicknesses utilizing medications, radiation, or medical procedure.
                    Likewise called biomedicines, regular drugs, standard medication, conventional
                    medication, and western medication. Customary allopathic medication is the sort of
                    medication rehearsed by most medicinal services suppliers. It depends on standards of
                    fighting - utilization of blades and toxic substances. Evacuate tumours, diseases, and
                    different masses carefully and eliminate microbes and malignancy cells with harms, with
                    the expectation that don't kill the patient simultaneously

                </h1>
            </div>
            <Footer />
        </div>
    )
}

export default Allopathic