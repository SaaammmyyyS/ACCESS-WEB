import PrimaryButton from "@/Components/ui/PrimaryButton";
import { Events1, Events2, Events3 } from "/public/assets/images/";

export default function EventSection() {
    return (
        <>
            <section className="flex flex-col items-center p-12">
                <div className="flex-auto m-2">
                    <p className="text-purple font-black">EVENTS</p>
                </div>

                <div className="flex-auto m-2">
                    <h1 className="text-dark-purple text-2xl sm:text-3xl lg:text-4xl font-black">
                        Join the Experience
                    </h1>
                </div>

                <div className="flex-auto m-4 text-center text-xs sm:text-lg lg:text-2xl lg:mx-20 2xl:mx-40">
                    <p>
                        Participate in the ACCESS events and engage with people
                        that share the same interests as you!
                    </p>
                </div>

                <div className="flex flex-row mx-auto">
                    <div className="sm:m-4">
                        <img
                            src={Events1}
                            className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[230px] lg:h-[230px] object-fill"
                        />
                    </div>

                    <div className="sm:m-4">
                        <img
                            src={Events2}
                            className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[230px] lg:h-[230px] object-fill"
                        />
                    </div>

                    <div className="sm:m-4">
                        <img
                            src={Events3}
                            className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[230px] lg:h-[230px] object-fill"
                        />
                    </div>
                </div>

                <div className="flex-auto m-4 mx-auto text-center">
                    <PrimaryButton className="text-xs lg:text-base">Check OUT OUR EVENTS</PrimaryButton>
                </div>
            </section>
        </>
    );
}
