import PrimaryButton from "@/Components/ui/PrimaryButton";

export default function BlogSection() {
    return (
        <>
            <section className="flex flex-col items-center bg-lighter-purple p-12">
                <div className="flex-auto m-2">
                    <p className="text-purple font-black">BLOGS AND ARTICLES</p>
                </div>

                <div className="flex-auto m-2">
                    <h1 className="text-6xl font-black">Knowledge Hub</h1>
                </div>

                <div className="flex-auto m-4">
                    <p>
                        Get insightful content on latest technology trends and
                        tips from professionals!
                    </p>
                </div>
                <PrimaryButton>READ MORE STORIES</PrimaryButton>
            </section>
        </>
    );
}
