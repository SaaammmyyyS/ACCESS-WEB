import PrimaryButton from "@/Components/ui/PrimaryButton";

export default function SubscribeSection() {
    return (
        <section className="bg-darker-purple">
            <div className="flex flex-col items-center gap-8 p-20">
                <span className="text-2xl font-bold text-light-purple lg:text-6xl text-center">
                    Want to keep up with ACCESS
                </span>
                <span className="text-[12px] text-light-purple">
                    Subscribe now to receive all the latest news and event invites
                </span>
                <div className="flex h-10">
                    <PrimaryButton className="px-10 text-[8px] sm:text-xs lg:text-base sm:px-16">SUBSCRIBE TO THE NEWSLETTER</PrimaryButton>
                </div>
            </div>
        </section>
    );
}
