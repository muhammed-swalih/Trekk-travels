import React, { useEffect } from 'react'
import Footer from '../../Homepage/Footer';
import Navbar from '../../Homepage/Navbar';
import { useMediaQuery } from '@react-hook/media-query';
function Incentives() {
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
                        <h1 className=' uppercase text-3xl text-center text-orange-500 font-medium'>Incentives</h1>
                    </div>
                    <div>
                        <h1 className=' mt-10 font-medium'>
                            Loyalty Of Employees and Excellency of workmanship is appreciated by the company
                            By the means of Incentive as a Travel Rewards for Individual Employees as Group or as
                            Partners – It’s Fantastic to enjoy Holidays in Prime Resorts, or Hotel as well as Popular
                            Travel Destinations, In which Expense are met by the Company…We Just Make it happen
                            with lot of Joy, We are specialised in creating best experience throughout the tour.
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
                <h1 className=' uppercase text-center font-medium text-orange-500'>Incentives</h1>
            </div>
            <div className=' px-5 mt-10 text-sm my-10 font-medium'>
                <h1>
                    Loyalty Of Employees and Excellency of workmanship is appreciated by the company
                    By the means of Incentive as a Travel Rewards for Individual Employees as Group or as
                    Partners – It’s Fantastic to enjoy Holidays in Prime Resorts, or Hotel as well as Popular
                    Travel Destinations, In which Expense are met by the Company…We Just Make it happen
                    with lot of Joy, We are specialised in creating best experience throughout the tour.



                </h1>
            </div>
            <Footer />
        </div>
    )
}

export default Incentives