import PrimaryButton from "@/Components/ui/PrimaryButton";

export default function AboutUsSection() {
    return (
    <>
        <section>
            <div className="flex flex-col items-center bg-dark-purple p-12">
                <div className="flex-auto m-2 text-xl">
                    <p className="text-white font-extrabold">ABOUT US</p>
                </div>

                <div className="flex-auto m-2">
                    <h1 className="text-9xl font-extrabold text-light-purple">Who are we?</h1>
                </div>

                <div className=" text-white text-xl font-thin flex justify-center m-4 w-5/12 text-center mb-36">
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
                    <h1 className="text-7xl font-bold text-light-purple p-6 ">Want to keep up with ACCSS?</h1>
                    <p className="text-purple text-center pb-5 text-lg font-bold">Subscribe now to receive all the latest news and event invites</p>
                    <div className="flex justify-center items-center">
                        <PrimaryButton className="bg-pink">SUBSCRIBE TO THE NEWSLETTER</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
}