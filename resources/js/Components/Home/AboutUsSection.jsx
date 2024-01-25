import PrimaryButton from "@/Components/ui/PrimaryButton";

export default function AboutUsSection() {
    return (
    <>
        <section>
            <div className="flex flex-col items-center bg-dark-purple p-12">
                <div className="flex-auto m-2 text-2xl sm:text-3xl lg:text-4xl text-white font-extrabold">
                    <span>ABOUT US</span>
                </div>

                <div className="flex-auto m-2 text-xl sm:text-2xl lg:text-3xl font-extrabold text-light-purple">
                    <h1>Who are we?</h1>
                </div>

                <div className=" text-white text-sm sm:text-lg lg:text-2xl lg:mx-20 2xl:mx-40 text-justify lg:text-center font-thin flex justify-center m-4 mb-12">
                    <p>
                        Our goal is to create a supportive community that promotes academic excellence, personal growth, and community development.
                        We create workshops, networking events, and collaboration opportunities with industry professionals to help us connect with other students and achieve our goals.
                        <br/>
                        <br/>
                        Discover what’s been happening behind the scenes at ACCSS! Whether you’re interested in programming, design, or community development,
                        you’ll find something to inspire you on our soon-to-be released blog.
                    </p>
                </div>
                <div className="flex-auto m-2">
                    <h1 className="text-center text-xl sm:text-2xl lg:text-3xl font-bold text-light-purple p-6 ">Want to keep up with ACCSS?</h1>
                    <p className="text-purple text-center text-xs sm:text-sm lg:text-lg pb-5 font-bold">Subscribe now to receive all the latest news and event invites</p>
                    <div className="flex justify-center items-center">
                        <PrimaryButton className="bg-pink text-xs lg:text-base">SUBSCRIBE TO THE NEWSLETTER</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
}