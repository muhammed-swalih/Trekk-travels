import React, { useEffect } from 'react'
import Footer from '../../Homepage/Footer';
import Navbar from '../../Homepage/Navbar';
import { useMediaQuery } from '@react-hook/media-query';
function Homeo() {
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
                        <h1 className=' uppercase text-3xl text-center text-orange-500 font-medium'>homeopathic</h1>
                    </div>
                    <div>
                        <h1 className=' mt-10 font-medium'>
                            Homeopathy is a clinical framework dependent on the conviction that the body can fix
                            itself. The individuals who practice it utilize little measures of characteristic substances,
                            like plants and minerals. They accept these invigorate the recuperating procedure. It
                            was created in the late 1700s in Germany. It's normal in numerous European nations, yet
                            it's not exactly as famous in the United States. An essential conviction behind
                            homeopathy is "like fixes like." at the end of the day, something that welcomes on side
                            effects in a solid individual can - in a little portion - treat a disease with comparable
                            indications. This is intended to trigger the body's common barriers.


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
                <h1 className=' uppercase text-center font-medium text-orange-500'>homeopathic</h1>
            </div>
            <div className=' px-5 mt-10 text-sm my-10 font-medium'>
                <h1>
                    Homeopathy is a clinical framework dependent on the conviction that the body can fix
                    itself. The individuals who practice it utilize little measures of characteristic substances,
                    like plants and minerals. They accept these invigorate the recuperating procedure. It
                    was created in the late 1700s in Germany. It's normal in numerous European nations, yet
                    it's not exactly as famous in the United States. An essential conviction behind
                    homeopathy is "like fixes like." at the end of the day, something that welcomes on side
                    effects in a solid individual can - in a little portion - treat a disease with comparable
                    indications. This is intended to trigger the body's common barriers.

                </h1>
            </div>
            <Footer />
        </div>
    )
}

export default Homeo