import React, { useEffect } from 'react'
import Footer from '../../Homepage/Footer';
import Navbar from '../../Homepage/Navbar';
import { useMediaQuery } from '@react-hook/media-query';
function Dental() {
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
                        <h1 className=' uppercase text-3xl text-center text-orange-500 font-medium'>Dental Care</h1>
                    </div>
                    <div>
                        <h1 className=' mt-10 font-medium'>
                            A sound arrangement of magnificent whites makes your grin look great! Indian Hospitals
                            are notable for their dental administrations. The specialists from the field of dentistry
                            are very much experienced in their general vicinity of work and give the best of
                            medicines to you. The focuses have a specialist group of dental specialists likewise
                            oblige dental inserts, facial cracks, and injury-related cases. The Department likewise
                            has some expertise as a rule of dental consideration, root trench treatment, and
                            treatment for gums and supporting tissues. The Dental Care communities are
                            exceptionally particular and their devotion and duty towards their work have brought
                            extraordinary outcomes. Indian emergency clinics are offering the best dental treatment,
                            dental medical procedure, and care for all dental and maxillofacial conditions. Helmed
                            by the best dental specialists and specialists in India.
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
                <h1 className=' uppercase text-center font-medium text-orange-500'>Dental care</h1>
            </div>
            <div className=' px-5 mt-10 text-sm my-10 font-medium'>
                <h1>
                A sound arrangement of magnificent whites makes your grin look great! Indian Hospitals
are notable for their dental administrations. The specialists from the field of dentistry
are very much experienced in their general vicinity of work and give the best of
medicines to you. The focuses have a specialist group of dental specialists likewise
oblige dental inserts, facial cracks, and injury-related cases. The Department likewise
has some expertise as a rule of dental consideration, root trench treatment, and
treatment for gums and supporting tissues. The Dental Care communities are
exceptionally particular and their devotion and duty towards their work have brought
extraordinary outcomes. Indian emergency clinics are offering the best dental treatment,
dental medical procedure, and care for all dental and maxillofacial conditions. Helmed
by the best dental specialists and specialists in India. 



                </h1>
            </div>
            <Footer />
        </div>
    )
}

export default Dental