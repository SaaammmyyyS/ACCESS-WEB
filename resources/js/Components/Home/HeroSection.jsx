import PrimaryButton from "@/Components/ui/PrimaryButton";

export default function HeroSection() {
    return (
        <div className="bg-hero-section bg-cover">
            <div className="flex">
                <div className="text-white py-44 lg:w-4/12 sm:mx-32 md:mx-32 lg:mx-72 mx-10 text-center">
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-purple">ACCESS</h1>
                    <h2 className="text-xl md:text-2xl lg:text-3xl py-4 inline-block">
                        THE TECH ECOSYSTEM
                    </h2>
                    <p className="text-justify text-sm md:text-lg lg:text-xl font-thin mb-8">
                        Access the tech world and connect with your local tech
                        community to unlock endless possibilities and drive
                        innovation.
                        <br />
                        <br />
                        Collaborate with like-minded individuals, access
                        cutting-edge research, and stay ahead of the curve with
                        the latest advancements and breakthroughs in the
                        industry. Discover what's next in the world of
                        technology and access the tools and resources you need
                        to succeed.
                        <br />
                        <br />
                        The future is waiting for you to be a part of it.
                    </p>
                    <PrimaryButton className="bg-purple text-xs" arrow={false}>
                        Get Started
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );
}
