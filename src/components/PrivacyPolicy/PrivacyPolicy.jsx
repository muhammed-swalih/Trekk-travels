import React, { useEffect } from 'react'
import Footer from '../Homepage/Footer'
import { useMediaQuery } from '@react-hook/media-query'
import Navbar from '../Homepage/Navbar'

function PrivacyPolicy() {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    const isMediumScreen = useMediaQuery("(min-width : 1024px)")
    if (isMediumScreen) {
        return (
            <div className=' w-full h-auto min-h-screen '>
                <Navbar/>
                <div className=' w-[800px] min-h-screen h-auto mx-auto py-14 pt-32
                 '>
                    <div>
                        <h1 className=' uppercase text-3xl text-center font-medium'>privacy policy</h1>
                    </div>
                    <div>
                        <h1 className=' mt-10 font-medium'>
                            If you choose not to provide, or object to us processing the information we collect, we may not be able to process your instructions or continue to provide some or all of our services to you (including our clients)Personal information of other customers/users/travelers
                            If you provide personal information to us regarding individuals other than yourself, you agree. <br /><br />

                            To inform the individual about the content of this privacy policy To obtain any legally-required consent, for the collection, use, disclosure, and transfer (including cross-border transfer) of individual's personal information, from the individual in accordance with the legal and regulatory requirements <br /><br />

                            This Privacy Policy was last updated on 06th March 2023 <br /><br />

                            Trekk and Travel Holidays respects your (customers - hereafter referred as "you" or "user") privacy and values our relationship with our business partners, clients, third parties having contractual relationship with us. <br /><br />

                            This Privacy Policy applies to Trekk & Travel Holidays company social pages / handles , communications and services ("Services"), including off-site Services, such as our email services, customer care and support services and the "Contact us" and "Share on" plugins on our digital / social properties. <br /><br />

                            By using or accessing the Website or other Sales Channels, the user hereby agrees with the terms of this Privacy Policy and the contents herein.
                            In case you book travel services on behalf of your family or a minor, you agree: To inform the individual about the content of this privacy policy
                            To obtain any legally-required consent, for the collection, use, disclosure, and transfer (including cross-border transfer) of individual's personal information, from the individual in accordance with the legal and regulatory requirements <br /><br />

                            In such a scenario, Trekk & Travel Holidays will be acting as data processors while your respective employer, contractor, business partner, affiliate shall be acting as the data controller. It will be the obligation of the data controller to seek consent of the end customer.
                            How to contact us, request access to your personal data or contact us with questions or feedback? <br /><br />

                            If  you have a question, comment, or complaint or wish to access a copy of your personal data or to correct it if you believe it is inaccurate, you may contact us at <br /><br /> info@trekkandtravel.com
                        </h1>
                    </div>
                    
                </div>
                <Footer/>
            </div>
        )
    }
    return (
        <div className=' w-full h-full min-h-screen   '>
            
            <div className=' text-2xl mt-10'>
                <h1 className=' uppercase text-center font-medium'>privacy and policy</h1>
            </div>
            <div className=' px-5 mt-10 text-sm my-10 font-medium'>If you choose not to provide, or object to us processing the information we collect, we may not be able to process your instructions or continue to provide some or all of our services to you (including our clients)Personal information of other customers/users/travelers
                If you provide personal information to us regarding individuals other than yourself, you agree. <br /><br />

                To inform the individual about the content of this privacy policy To obtain any legally-required consent, for the collection, use, disclosure, and transfer (including cross-border transfer) of individual's personal information, from the individual in accordance with the legal and regulatory requirements <br /><br />

                This Privacy Policy was last updated on 06th March 2023 <br /><br />

                Trekk and Travel Holidays respects your (customers - hereafter referred as "you" or "user") privacy and values our relationship with our business partners, clients, third parties having contractual relationship with us. <br /><br />

                This Privacy Policy applies to Trekk & Travel Holidays company social pages / handles , communications and services ("Services"), including off-site Services, such as our email services, customer care and support services and the "Contact us" and "Share on" plugins on our digital / social properties. <br /><br />

                By using or accessing the Website or other Sales Channels, the user hereby agrees with the terms of this Privacy Policy and the contents herein.
                In case you book travel services on behalf of your family or a minor, you agree: To inform the individual about the content of this privacy policy
                To obtain any legally-required consent, for the collection, use, disclosure, and transfer (including cross-border transfer) of individual's personal information, from the individual in accordance with the legal and regulatory requirements <br /><br />

                In such a scenario, Trekk & Travel Holidays will be acting as data processors while your respective employer, contractor, business partner, affiliate shall be acting as the data controller. It will be the obligation of the data controller to seek consent of the end customer.
                How to contact us, request access to your personal data or contact us with questions or feedback? <br /><br />

                If  you have a question, comment, or complaint or wish to access a copy of your personal data or to correct it if you believe it is inaccurate, you may contact us at <br /><br /> info@trekkandtravel.com</div>
            <Footer />
        </div>
    )
}

export default PrivacyPolicy