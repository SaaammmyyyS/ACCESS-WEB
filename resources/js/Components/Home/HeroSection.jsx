import PrimaryButton from "@/Components/ui/PrimaryButton";

export default function HeroSection() {
    return (
        <div className="min-h-screen bg-[url('/public/assets/images/Hero-Image.png')] bg-cover">
            <div className="flex h-full">
                <div className="text-white my-44 w-4/12 mx-80">
                    <h1 className="text-9xl font-bold text-purple">ACCESS</h1>
                    <h2 className="text-6xl py-4 inline-block">
                        THE TECH ECOSYSTEM
                    </h2>
                    <p className="text-justify text-xl font-thin mb-8">
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
                    <PrimaryButton className="bg-purple" arrow={false}>
                        Get Started
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );
}
