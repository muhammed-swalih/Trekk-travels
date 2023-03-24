import React, { useEffect } from 'react'
import Footer from '../../Homepage/Footer';
import Navbar from '../../Homepage/Navbar';
import { useMediaQuery } from '@react-hook/media-query';
function Weight() {
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
                        <h1 className=' uppercase text-3xl text-center text-orange-500 font-medium'>Weight Reducer</h1>
                    </div>
                    <div>
                        <h1 className=' mt-10 font-medium'>
                            The get-healthy plan is a procedure that adds to an individual's capacity to achieve and
                            keep up a specific weight. Most weight the board methods envelop long haul way of
                            life methodologies that advance smart dieting and every day physical action. In addition,
                            weight the executives include creating significant approaches to follow weight after
                            some time and to recognize perfect body loads for various people. Because of the
                            increasing stoutness rates in numerous pieces of the world, appropriate weight the
                            board methodologies regularly center around accomplishing sound loads through
                            moderate however consistent weight reduction, trailed by the support of perfect body
                            weight after some time
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
                <h1 className=' uppercase text-center font-medium text-orange-500'>Weight reducer</h1>
            </div>
            <div className=' px-5 mt-10 text-sm my-10 font-medium'>
                <h1>
                    The get-healthy plan is a procedure that adds to an individual's capacity to achieve and
                    keep up a specific weight. Most weight the board methods envelop long haul way of
                    life methodologies that advance smart dieting and every day physical action. In addition,
                    weight the executives include creating significant approaches to follow weight after
                    some time and to recognize perfect body loads for various people. Because of the
                    increasing stoutness rates in numerous pieces of the world, appropriate weight the
                    board methodologies regularly center around accomplishing sound loads through
                    moderate however consistent weight reduction, trailed by the support of perfect body
                    weight after some time



                </h1>
            </div>
            <Footer />
        </div>
    )
}

export default Weight