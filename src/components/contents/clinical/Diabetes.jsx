import React, { useEffect } from 'react'
import Footer from '../../Homepage/Footer';
import Navbar from '../../Homepage/Navbar';
import { useMediaQuery } from '@react-hook/media-query';
function Diabetes() {
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
                        <h1 className=' uppercase text-3xl text-center text-orange-500 font-medium'>DIABETES CARE </h1>
                    </div>
                    <div>
                        <h1 className=' mt-10 font-medium'>
                            Indian Diabetes care has a significant job in the human services division in Asia. The
                            objective of social insurance specialists in India is to change into diabetes care capital
                            on the planet. Almost 50% of individuals with diabetes stay undetected, representing
                            difficulties at the hour of determination. Screening can separate an asymptomatic
                            individual at high hazard from one at okay for diabetes. Despite the huge number of
                            individuals, mindfulness is low and should be tended to. Different difficulties incorporate
                            adjusting the requirement for glycaemic control with chance decrease because of
                            excessively close control, particularly in high-hazard gatherings and considering human
                            services proficient ability, mentalities, and recognitions. Pharmacologic consideration
                            ought to be individualized with the early thought of mixed treatment. Standard exercise,
                            yoga, careful eating, and stress the executives structure a foundation in the
                            administration of diabetes.

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
                <h1 className=' uppercase text-center font-medium text-orange-500'>DIABETES CARE </h1>
            </div>
            <div className=' px-5 mt-10 text-sm my-10 font-medium'>
                <h1>
                    Indian Diabetes care has a significant job in the human services division in Asia. The
                    objective of social insurance specialists in India is to change into diabetes care capital
                    on the planet. Almost 50% of individuals with diabetes stay undetected, representing
                    difficulties at the hour of determination. Screening can separate an asymptomatic
                    individual at high hazard from one at okay for diabetes. Despite the huge number of
                    individuals, mindfulness is low and should be tended to. Different difficulties incorporate
                    adjusting the requirement for glycaemic control with chance decrease because of
                    excessively close control, particularly in high-hazard gatherings and considering human
                    services proficient ability, mentalities, and recognitions. Pharmacologic consideration
                    ought to be individualized with the early thought of mixed treatment. Standard exercise,
                    yoga, careful eating, and stress the executives structure a foundation in the
                    administration of diabetes.




                </h1>
            </div>
            <Footer />
        </div>
    )
}

export default Diabetes