import React, { useEffect } from 'react'
import Footer from '../../Homepage/Footer';
import Navbar from '../../Homepage/Navbar';
import { useMediaQuery } from '@react-hook/media-query';
function Paint() {
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
                        <h1 className=' uppercase text-3xl text-center text-orange-500 font-medium'>PAINTBALL</h1>
                    </div>
                    <div>
                        <h1 className=' mt-10 font-medium'>
                            Aim your enemies. Learn to defend yourself and your team. Compete, and
                            conquer in teams or individually, to eliminate opponents by tagging them with
                            paintballs using the terrain and surroundings for tactical cover. Game Tactics
                            includes paintball vary including elimination, capturing the flag and defending or
                            attacking a particular point or area.

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
                <h1 className=' uppercase text-center font-medium text-orange-500'>PAINTBALL</h1>
            </div>
            <div className=' px-5 mt-10 text-sm my-10 font-medium'>
                <h1>
                    Aim your enemies. Learn to defend yourself and your team. Compete, and
                    conquer in teams or individually, to eliminate opponents by tagging them with
                    paintballs using the terrain and surroundings for tactical cover. Game Tactics
                    includes paintball vary including elimination, capturing the flag and defending or
                    attacking a particular point or area.




                </h1>
            </div>
            <Footer />
        </div>
    )
}

export default Paint