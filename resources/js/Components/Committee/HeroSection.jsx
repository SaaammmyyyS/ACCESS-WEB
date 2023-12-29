export default function HeroSection() {
    return (
        <div className="w-full bg-[url('/public/assets/images/meet-the-team.jpg')] bg-cover bg-no-repeat bg-center">
            <div className="container mx-auto py-48">
                <div className="flex flex-col space-y-12 text-white">
                    <h1 className="text-9xl font-extrabold text-center">
                        Meet the People
                        <br /> Behind the Mission
                    </h1>
                    <div className="flex items-center justify-center w-1/2 mx-auto">
                        <p className="text-xl text-center">
                            Meet our dedicated student leaders, united in their
                            passion for computer studies and committed to making
                            a positive impact.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
