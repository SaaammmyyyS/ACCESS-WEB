import PrimaryButton from "@/Components/ui/PrimaryButton";

export default function BlogSection() {
    return (
        <>
            <section className="flex flex-col items-center bg-lighter-purple p-12">
                <div className="flex-auto m-2 text-purple font-black text-2xl sm:text-3xl lg:text-4xl">
                    <p>BLOGS AND ARTICLES</p>
                </div>

                <div className="flex-auto m-2">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-black">Knowledge Hub</h1>
                </div>

                <div className="flex-auto m-4 text-center text-xs sm:text-sm lg:text-2xl">
                    <p>
                        Get insightful content on latest technology trends and
                        tips from professionals!
                    </p>
                </div>
                <PrimaryButton className="text-xs lg:text-base">READ MORE STORIES</PrimaryButton>
            </section>
        </>
    );
}
