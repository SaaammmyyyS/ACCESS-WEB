import AccessibleGridComponent from "./AccessibleGridComponent";
import PrimaryButton from "@/Components/ui/PrimaryButton";

export default function AccessibleSection(){
    return(
        <div className=" w-full min-h-screen bg-[url('/public/assets/images/AccessiblesBg.png')] bg-contain">
            {/* container */}
            <div className="flex flex-col justify-between items-center pt-32"> 
                <h3 className="font-extrabold text-2xl mb-5 text-purple">What can you find here?</h3>
                <h1 className="text-8xl font-bold text-dark-purple mb-10"> 
                    <span className=" text-purple">ACCESS</span>ibles Offered
                </h1>
                <div className="grid grid-cols-3 gap-4">
                    <AccessibleGridComponent
                        title= {"Resources"}
                        content={
                        <>
                            Lorem ipsum dolor sit amet consectetur. 
                            Quam id nunc mauris cras lorem sed suspendisse sagittis. 
                            Tincidunt sit pulvinar mattis gravida. Blandit iaculis eu vulputate nullam sed senectus.
                        </>
                        }
                     />
                    <AccessibleGridComponent
                        title= {"Tutorial Services"}
                        content={
                        <>
                            Lorem ipsum dolor sit amet consectetur. 
                            Quam id nunc mauris cras lorem sed suspendisse sagittis. 
                            Tincidunt sit pulvinar mattis gravida. Blandit iaculis eu vulputate nullam sed senectus.
                        </>
                        }
                    />
                    <AccessibleGridComponent
                        title= {"AdDU Student Perks"}
                        content={
                        <>
                            Lorem ipsum dolor sit amet consectetur. 
                            Quam id nunc mauris cras lorem sed suspendisse sagittis. 
                            Tincidunt sit pulvinar mattis gravida. Blandit iaculis eu vulputate nullam sed senectus.
                        </>
                        }
                    />
                    <AccessibleGridComponent
                        title= {"Merch"}
                        content={
                        <>
                            Lorem ipsum dolor sit amet consectetur. 
                            Quam id nunc mauris cras lorem sed suspendisse sagittis. 
                            Tincidunt sit pulvinar mattis gravida. Blandit iaculis eu vulputate nullam sed senectus.
                        </>
                        }
                    />
                    <AccessibleGridComponent
                        title= {"Events"}
                        content={
                        <>
                            Lorem ipsum dolor sit amet consectetur. 
                            Quam id nunc mauris cras lorem sed suspendisse sagittis. 
                            Tincidunt sit pulvinar mattis gravida. Blandit iaculis eu vulputate nullam sed senectus.
                        </>
                        }
                    />
                    <AccessibleGridComponent
                        title= {"Sudent & Tech Blog"}
                        content={
                        <>
                            Lorem ipsum dolor sit amet consectetur. 
                            Quam id nunc mauris cras lorem sed suspendisse sagittis. 
                            Tincidunt sit pulvinar mattis gravida. Blandit iaculis eu vulputate nullam sed senectus.
                        </>
                        }
                    />
                </div>
                <div className="flex justify-center pt-5 items-center">
                    <AccessibleGridComponent 
                        isGrid="w-2/5"
                        title ={"Lorem Ipsum Dolor Sit Amet!"}
                        content={
                            <>
                            Whether you’re someone looking to participate in future events or a technology enthusiast, we got you covered. Get the latest news, tech events, and hottest deals before they go live on the site. 
                            </>
                        }
                    />
                    <div className="p-10">
                        <PrimaryButton className="bg-purple px-36" arrow={false}>SUBSCRIBE TO NEWS LETTER</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
}