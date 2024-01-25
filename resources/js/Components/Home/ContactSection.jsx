import PrimaryButton from "@/Components/ui/PrimaryButton";

export default function ContactSection() {
    return (
        <section className="bg-darker-purple p-20">
            <div className="flex justify-center items-center h-full mx-auto gap-10">
                <div className="flex flex-col justify-center items-center h-full">
                    <span className="lg:text-6xl text-xl text-light-purple text-center">
                        Would you like to
                        <br />
                        collaborate with us?
                    </span>
                </div>
                <div className="flex justify-center items-center">
                    <PrimaryButton className="px-10 text-[8px] sm:text-xs lg:text-base sm:px-16">Connect With Us</PrimaryButton>
                </div>
            </div>
        </section>
    );
}
