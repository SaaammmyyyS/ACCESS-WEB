import PrimaryButton from "../ui/PrimaryButton";

export default function QuestionSection() {
    return (
        <>
            <section className="flex flex-col items-center mx-auto">
                <div className="">
                    <h1 className="text-darker-purple font-black mt-5 text-2xl md:text-5xl">Got a Question?</h1>
                </div>

                <form action="" className="m-4 w-full">
                    <div className="flex flex-col m-6">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex flex-col grow w-full">
                                <label htmlFor="" className="font-black text-sm md:text-base">First Name</label>
                                <input type="text" className="w-full rounded-lg" />
                            </div>

                            <div className="flex flex-col grow w-full">
                                <label htmlFor="" className="font-black text-sm md:text-base">Last Name</label>
                                <input type="text" className="w-full rounded-lg" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col m-6">
                        <label htmlFor="" className="font-black text-sm md:text-base">Organization</label>
                        <div className="flex flex-row gap-4">
                            <input type="text" className="w-full rounded-lg" />
                        </div>
                    </div>

                    <div className="flex flex-col m-6">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex flex-col grow w-full">
                                <label htmlFor="" className="font-black text-sm md:text-base">Email Address</label>
                                <input type="text" className="w-full rounded-lg" />
                            </div>

                            <div className="flex flex-col grow w-full">
                                <label htmlFor="" className="font-black text-sm md:text-base">Mobile Number (optional)</label>
                                <input type="text" className="w-full rounded-lg" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col m-6">
                        <label htmlFor="" className="font-black text-sm md:text-base">Organization</label>
                        <div className="flex flex-row gap-4">
                            <select name="" id="" className="w-full rounded-lg"></select>
                        </div>
                    </div>

                    <div className="flex flex-col m-6">
                        <label htmlFor="" className="font-black text-sm md:text-base">Message</label>
                        <div className="flex flex-row gap-4">
                            <textarea name="" id="" className="w-full h-56 rounded-lg" ></textarea>
                        </div>
                    </div>
                    <div className="flex flex-col items-center m-6">
                        <PrimaryButton>Submit</PrimaryButton>
                    </div>
                </form>
            </section>
        </>
    );
}
