import PrimaryButton from "@/Components/PrimaryButton";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function ContactSection({}) {
    return (
        <section className="h-72 bg-contact-section bg-cover bg-center bg-no-repeat">
            <div className="flex justify-between items-center h-full w-3/5 mx-auto ">
                <div className="flex flex-col justify-center items-center w-1/2 h-full">
                    <span className="text-6xl font-bold text-light-purple">
                        Would you like to
                    </span>
                    <span className="text-6xl font-bold text-light-purple">
                        collaborate with us?
                    </span>
                </div>
                <div className="flex justify-center items-center w-1/2 h-full">
                    <PrimaryButton className="group">
                        Connect With Us
                        <FaLongArrowAltRight className="hidden ml-2 group-hover:inline" />
                    </PrimaryButton>
                </div>
            </div>
        </section>
    );
}
