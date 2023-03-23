import React, { useEffect } from 'react'
import Footer from '../Homepage/Footer'
import { useMediaQuery } from '@react-hook/media-query'
import Navbar from '../Homepage/Navbar'
function TermsAndConditions() {
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
                        <h1 className=' uppercase text-3xl text-center font-medium'>Terms and conditions</h1>
                    </div>
                    <div>
                        <h1 className=' mt-10 font-medium'>
                            <span className=' text-lg font-semibold'>Customer's Responsibility:</span> <br />
                            Customer's Responsibility:
                            While we appreciate hearing from you, however, you are fully responsible for the content of your Submissions, (specifically including, but not limited to, reviews posted about this Website and/or about Trekk & Travel Holidays on any other website, Social Media Platform or any other mode as may be available to you from time to time). You will not post or continue to post or transmit or continue to transmit or publish/ continue to publish any content about Trekk & Travel Holidays and/ or any of its subsidiaries or affiliates which is unlawful, threatening, libellous, defamatory, untrue, obscene, pornographic or other material or content that you believe or have reasons to believe to be untrue and may have an adverse impact on the reputation of Trekk & Travel Holidays <br /> <br />
                            <span className=' text-lg font-semibold'> Marketing Promotions:</span><br />
                            Marketing promotions, research and programs help us to identify your preferences, develop programs and improve user experience. Trekk & Travel Holidays frequently sponsors promotions to give its Users the opportunity to win great travel and travel related prizes. Personal Information collected by us for such activities may include contact information and survey questions. We use such Personal Information to notify contest winners and survey information to develop promotions and product improvements.
                        </h1>
                    </div>

                </div>
                <Footer />
            </div>
        )
    }
    return (
        <div className=' w-full min-h-screen h-auto'>
            <Navbar/>
            <div className=' px-5 py-10'>
                <h1 className=' uppercase text-center text-2xl font-medium'>terms and conditions</h1>
                <div className=' my-5'>
                    <h1 className=' font-medium text-sm'>
                        <span className=' font-semibold text-md '>Customer's Responsibility :</span>  <br />
                        While we appreciate hearing from you, however, you are fully responsible for the content of your Submissions, (specifically including, but not limited to, reviews posted about this Website and/or about Trekk & Travel Holidays on any other website, Social Media Platform or any other mode as may be available to you from time to time). You will not post or continue to post or transmit or continue to transmit or publish/ continue to publish any content about Trekk & Travel Holidays and/ or any of its subsidiaries or affiliates which is unlawful, threatening, libellous, defamatory, untrue, obscene, pornographic or other material or content that you believe or have reasons to believe to be untrue and may have an adverse impact on the reputation of Trekk & Travel HolidaysWhile we appreciate hearing from you, however, you are fully responsible for the content of your Submissions, (specifically including, but not limited to, reviews posted about this Website and/or about Trekk & Travel Holidays on any other website, Social Media Platform or any other mode as may be available to you from time to time). You will not post or continue to post or transmit or continue to transmit or publish/ continue to publish any content about Trekk & Travel Holidays and/ or any of its subsidiaries or affiliates which is unlawful, threatening, libellous, defamatory, untrue, obscene, pornographic or other material or content that you believe or have reasons to believe to be untrue and may have an adverse impact on the reputation of Trekk & Travel Holidays <br /><br />
                        <span className=' font-semibold text-medium'>Marketing Promotions:</span>  <br />
                        Marketing promotions, research and programs help us to identify your preferences, develop programs and improve user experience. Trekk & Travel Holidays frequently sponsors promotions to give its Users the opportunity to win great travel and travel related prizes. Personal Information collected by us for such activities may include contact information and survey questions. We use such Personal Information to notify contest winners and survey information to develop promotions and product improvements.
                    </h1>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default TermsAndConditions