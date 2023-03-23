import React, { useEffect } from 'react'
import Footer from '../Homepage/Footer'
import { useMediaQuery } from '@react-hook/media-query'
import Navbar from '../Homepage/Navbar'
function Cancellation() {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    const isMediumScreen = useMediaQuery("(min-width : 1024px)")
    if (isMediumScreen) {
        return (
            <div className=' w-full h-auto min-h-screen '>
                <Navbar/>
                <div className=' w-[800px] mb-10 h-auto mx-auto pt-32 '>
                    <div>
                        <h1 className=' uppercase text-3xl text-center font-medium'>CANCELLATIONS, REFUNDS AND RELATED POLICIES</h1>
                    </div>
                    <div>
                        <h1 className=' mt-10 font-medium'>
                            The website of Trekk & Travel Holidays requests you to read and understand the Cancellation, Refund, and other Policies applicable before availing an online service through the retail platform. Kindly note, Trekk & Travel Holidays has policies to protect the beneficiary of this online services. In case a Guest has booked online on the website without any assistance from the direct contact booking at our office, he/ she is entitled to a 24 hours FREE Cancellation policy from time of booking. Refunds into your bank accounts usually take 7 working days. This does not apply to a booking where the Check-in date is 7 days from the date of confirmation of booking of Resort / hotel / home rental etc.
                            A Guest is entitled to a refund of 70% if he/she cancels the confirmed booking upto 25 days before the Date of Check-In (before 12:00 PM).
                            A Guest is entitled to a refund of 40% if he/she cancels the confirmed booking upto 14 days before the Date of Check-In (before 12:00 PM)
                            If the Guest cancels within 10 days of the Date of Check-In, he/she is entitled to no refund. <br /><br />
                            If the Guest has made a partial payment, he/she is entitled to no refund.
                            GST at applicable rates will be charged on this cancellation fee.
                            If the guest checks-in and decides to leave early, any refund of the accommodation fees will be decided and settled as considered appropriate by Trekk & Travel Holidays only.
                        </h1>
                    </div>

                </div>
                <Footer />
            </div>
        )
    }
    return (
        <div className=' w-full h-full min-h-screen   '>
            <Navbar/>
            <div className=' text-2xl mt-10'>
                <h1 className=' uppercase text-center px-5 font-medium'>CANCELLATIONS, REFUNDS AND RELATED POLICIES</h1>
            </div>
            <div className=' px-5 mt-10 text-sm my-10 font-medium'>
                The website of Trekk & Travel Holidays requests you to read and understand the Cancellation, Refund, and other Policies applicable before availing an online service through the retail platform. Kindly note, Trekk & Travel Holidays has policies to protect the beneficiary of this online services. In case a Guest has booked online on the website without any assistance from the direct contact booking at our office, he/ she is entitled to a 24 hours FREE Cancellation policy from time of booking. Refunds into your bank accounts usually take 7 working days. This does not apply to a booking where the Check-in date is 7 days from the date of confirmation of booking of Resort / hotel / home rental etc.
                A Guest is entitled to a refund of 70% if he/she cancels the confirmed booking upto 25 days before the Date of Check-In (before 12:00 PM).
                A Guest is entitled to a refund of 40% if he/she cancels the confirmed booking upto 14 days before the Date of Check-In (before 12:00 PM)
                If the Guest cancels within 10 days of the Date of Check-In, he/she is entitled to no refund. <br /><br />
                If the Guest has made a partial payment, he/she is entitled to no refund.
                GST at applicable rates will be charged on this cancellation fee.
                If the guest checks-in and decides to leave early, any refund of the accommodation fees will be decided and settled as considered appropriate by Trekk & Travel Holidays only.
            </div>
            <Footer />
        </div>
    )
}

export default Cancellation