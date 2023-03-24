import React, { useEffect } from 'react'
import Footer from '../../Homepage/Footer';
import Navbar from '../../Homepage/Navbar';
import { useMediaQuery } from '@react-hook/media-query';
function Liver() {
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
                        <h1 className=' uppercase text-3xl text-center text-orange-500 font-medium'>LIVER TRANSPLANT
                        </h1>
                    </div>
                    <div>
                        <h1 className=' mt-10 font-medium'>
                            There are different liver transplant medical clinics in India that give the world-class liver
                            transplant medical procedure offices and after consideration administrations. Liver
                            transplant is held for those whose liver malady has advanced so much that their general
                            condition is basic. Over the globe, most potential beneficiaries are interested to know
                            how life will be after transplant. To sum things up the life is equivalent to before with
                            minor limitations such as eating cleanly arranged food, live in clean environmental
                            factors and do ordinary tests as prompted by the specialist and consent to
                            immunosuppressive drugs Numerous patients from abroad decided to come to India for
                            their treatment as the results have been incredibly effective. This has been conceivable
                            because the focuses have encountered specialists and the whole group has built up in
                            liver transplantation in India.

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
                <h1 className=' uppercase text-center font-medium text-orange-500'>liver transplant</h1>
            </div>
            <div className=' px-5 mt-10 text-sm my-10 font-medium'>
                <h1>
                    There are different liver transplant medical clinics in India that give the world-class liver
                    transplant medical procedure offices and after consideration administrations. Liver
                    transplant is held for those whose liver malady has advanced so much that their general
                    condition is basic. Over the globe, most potential beneficiaries are interested to know
                    how life will be after transplant. To sum things up the life is equivalent to before with
                    minor limitations such as eating cleanly arranged food, live in clean environmental
                    factors and do ordinary tests as prompted by the specialist and consent to
                    immunosuppressive drugs Numerous patients from abroad decided to come to India for
                    their treatment as the results have been incredibly effective. This has been conceivable
                    because the focuses have encountered specialists and the whole group has built up in
                    liver transplantation in India.




                </h1>
            </div>
            <Footer />
        </div>
    )
}

export default Liver