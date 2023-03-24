import React, { useEffect } from 'react'
import Footer from '../../Homepage/Footer';
import Navbar from '../../Homepage/Navbar';
import { useMediaQuery } from '@react-hook/media-query';
function Gala() {
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
                        <h1 className=' uppercase text-3xl text-center text-orange-500 font-medium'>GALA DINING </h1>
                    </div>
                    <div>
                        <h1 className=' mt-10 font-medium'>
                            And party-harder for us means. Multi course seated dinner, well stocked bar, a glitzy
                            venue and a spectacular show <br /><br />

                            We do not take gala dinners lightly; they are an affair to remember. It begins with your
                            choice of venue from the wide selection of the most luxurious ball rooms and halls
                            scouted by our team. <br /><br />

                            Then comes the theme; Open beach set-up, pool side barbecues, bush dinners in the
                            jungle, dinner at the pyramids, cocktail on-board while river cruising, dinners at
                            mountain tops - our thematic gala set-ups have been the talk amongst the corporate. <br /><br />

                            Of course, no gala evening is a success without food. We partner with local culinary
                            experts to set-up lip-smacking feast that would make the most disciplined eater break
                            their diet regime for these couple of days. <br /><br />

                            And after the scrumptious meal, we get the people ready for a mind blowing
                            entertainment with the best dancers, musicians, comic acts and performance that just
                            dazzle act after act. <br /><br />

                            Mixing all of the above ingredients in a right quantity we ensure an unforgettable
                            evening that’s leave you and your travellers with a boxful of memories to take back
                            home. <br /><br />





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
                <h1 className=' uppercase text-center font-medium text-orange-500'>GALA DINING </h1>
            </div>
            <div className=' px-5 mt-10 text-sm my-10 font-medium'>
                <h1>
                    And party-harder for us means. Multi course seated dinner, well stocked bar, a glitzy
                    venue and a spectacular show <br /><br />

                    We do not take gala dinners lightly; they are an affair to remember. It begins with your
                    choice of venue from the wide selection of the most luxurious ball rooms and halls
                    scouted by our team. <br /><br />

                    Then comes the theme; Open beach set-up, pool side barbecues, bush dinners in the
                    jungle, dinner at the pyramids, cocktail on-board while river cruising, dinners at
                    mountain tops - our thematic gala set-ups have been the talk amongst the corporate. <br /><br />

                    Of course, no gala evening is a success without food. We partner with local culinary
                    experts to set-up lip-smacking feast that would make the most disciplined eater break
                    their diet regime for these couple of days. <br /><br />

                    And after the scrumptious meal, we get the people ready for a mind blowing
                    entertainment with the best dancers, musicians, comic acts and performance that just
                    dazzle act after act. <br /><br />

                    Mixing all of the above ingredients in a right quantity we ensure an unforgettable
                    evening that’s leave you and your travellers with a boxful of memories to take back
                    home. <br /><br />

                </h1>
            </div>
            <Footer />
        </div>
    )
}

export default Gala