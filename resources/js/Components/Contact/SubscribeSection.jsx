import PrimaryButton from "@/Components/ui/PrimaryButton";

export default function SubscribeSection() {
    return (
        <section className="h-72 bg-darker-purple bg-subscribe-section bg-cover bg-center bg-no-repeat">
            <div className="flex flex-col items-center gap-8 p-10">
                <span className="text-6xl font-bold text-light-purple">
                    Want to keep up with ACCESS
                </span>
                <span className="text-sm text-light-purple">
                    Subscribe now to receive all the latest news and event invites
                </span>
                <div className="flex h-10">
                    <PrimaryButton>SUBSCRIBE TO THE NEWSLETTER</PrimaryButton>
                </div>
            </div>
        </section>
    );
}
