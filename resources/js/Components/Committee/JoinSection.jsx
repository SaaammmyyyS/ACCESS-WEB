import PrimaryButton from "@/Components/ui/PrimaryButton";

export default function JoinSection() {
    return (
        <section className="bg-lighter-purple py-20">
            <div className="flex flex-col space-y-16 items-center w-4/5 container mx-auto">
                <div className="">
                    <span className="uppercase text-purple font-bold">
                        Join Us!
                    </span>
                </div>
                <div className="w-full flex flex-col items-center space-y-8">
                    <div className="w-2/5">
                        <h3 className="text-6xl text-dark-purple font-extrabold text-center">
                            Be a part of our awesome squad!
                        </h3>
                    </div>
                    <div className="w-3/5">
                        <p className="text-gray-500 text-center text-md">
                            We’re creating a community of people who want to
                            develop their tech skills, regardless of background.
                            So if you’re looking for a study group, a mentor, or
                            simply a group of like-minded individuals to engage
                            with, you’ve come to the right place!
                        </p>
                    </div>
                </div>
                <div className="flex justify-around w-full">
                    <div className="w-96 flex justify-center">
                        <PrimaryButton className="bg-purple">
                            Join as a member!
                        </PrimaryButton>
                    </div>
                    <div className="w-96 flex justify-center">
                        <PrimaryButton className="bg-purple">
                            Join as an officer!
                        </PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
}
