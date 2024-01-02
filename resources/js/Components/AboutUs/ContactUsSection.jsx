import PrimaryButton from "@/Components/ui/PrimaryButton";

export default function ContactUsSection(){
    return(
        <div className=" min-h-[30vh] flex justify-center items-center bg-[url('/public/assets/images/CTA.png')] bg-cover">
            <h1 className="text-purple text-7xl font-extrabold text-center">Still Curious about <br/>something?</h1>
            <div className="p-10">
                <PrimaryButton className={"px-20"} arrow={true}>Contact us</PrimaryButton>
            </div>
        </div>
    );
}