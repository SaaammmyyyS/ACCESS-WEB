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
                    <h1 className="text-dark-purple text-6xl font-black">
                        Join the Experience
                    </h1>
                </div>

                <div className="flex-auto m-4">
                    <p>
                        Participate in the ACCESS events and engage with people
                        that share the same interests as you!
                    </p>
                </div>

                <div className="flex flex-row m-4 mx-auto">
                    <div className="m-4">
                        <img
                            src={Events1}
                            className="w-[230px] h-[230px] object-fill"
                        />
                    </div>

                    <div className="m-4">
                        <img
                            src={Events2}
                            className="w-[230px] h-[230px] object-fill"
                        />
                    </div>

                    <div className="m-4">
                        <img
                            src={Events3}
                            className="w-[230px] h-[230px] object-fill"
                        />
                    </div>
                </div>

                <div className="flex-auto m-4 mx-auto text-center p-12">
                    <PrimaryButton>Check OUT OUR EVENTS</PrimaryButton>
                </div>
            </section>
        </>
    );
}
