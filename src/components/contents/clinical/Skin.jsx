import React, { useEffect } from 'react'
import Footer from '../../Homepage/Footer';
import Navbar from '../../Homepage/Navbar';
import { useMediaQuery } from '@react-hook/media-query';
function Skin() {
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
                        <h1 className=' uppercase text-3xl text-center text-orange-500 font-medium'>Healthy skin </h1>
                    </div>
                    <div>
                        <h1 className=' mt-10 font-medium'>
                            The Dermatology Centres give far-reaching diagnostics and medicines to sound skincare
                            in India. The division offers a wide assortment of administrations in clinical, paediatric,
                            careful, and restorative dermatology. The dermatologists are specialists in effectively
                            rewarding all types of skin-related distortions including melanomas, skin tumours, skin
                            inflammation, and different issues like lupus, bullous pemphigoid, and pemphigus
                            Vulgaris. The group renders great judgments and the board of conditions influencing
                            hair and nails. The capable methodology of the dermatologists at Fortis guarantees that
                            the patients watch predominant results and experience the endowment of sparkling
                            skin. The focuses convey generally progressed and unrivalled dermatology treatments
                            and medicines alongside quality and merciful consideration to the patients. A portion of
                            the corrective methods performed by the dermatology group incorporates
                            blepharoplasty, liposuction, synthetic strips, and face-lifts. Some normal strategies which
                            are additionally performed incorporate skin biopsies, cryosurgery, traditionalist
                            extraction, wide nearby extraction, topical chemotherapy, and various others.

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
                <h1 className=' uppercase text-center font-medium text-orange-500'>healthy skin</h1>
            </div>
            <div className=' px-5 mt-10 text-sm my-10 font-medium'>
                <h1>
                    The Dermatology Centres give far-reaching diagnostics and medicines to sound skincare
                    in India. The division offers a wide assortment of administrations in clinical, paediatric,
                    careful, and restorative dermatology. The dermatologists are specialists in effectively
                    rewarding all types of skin-related distortions including melanomas, skin tumours, skin
                    inflammation, and different issues like lupus, bullous pemphigoid, and pemphigus
                    Vulgaris. The group renders great judgments and the board of conditions influencing
                    hair and nails. The capable methodology of the dermatologists at Fortis guarantees that
                    the patients watch predominant results and experience the endowment of sparkling
                    skin. The focuses convey generally progressed and unrivalled dermatology treatments
                    and medicines alongside quality and merciful consideration to the patients. A portion of
                    the corrective methods performed by the dermatology group incorporates
                    blepharoplasty, liposuction, synthetic strips, and face-lifts. Some normal strategies which
                    are additionally performed incorporate skin biopsies, cryosurgery, traditionalist
                    extraction, wide nearby extraction, topical chemotherapy, and various others.




                </h1>
            </div>
            <Footer />
        </div>
    )
}

export default Skin