
import PrimaryButton from "@/Components/ui/PrimaryButton";

export default function AboutUsSection(
    {content1Order,
        underline = false, 
        content2Order, 
        imgSrc, 
        title1,
        title2, 
        content,
        hasTitle1,
        hasButton,
        sectionBg,
        }) {
    return(
        <div className={` w-full min-h-screen py-10 flex justify-between items-center ${sectionBg}`}>
            {/* container */}
            <div className='xl:flex lg:justify-between items-center w-full h-full' >
                {/* box2 */}
                <div className={"flex bg-[url('/public/assets/images/aboutBg.png')] bg-cover m-10 " + content2Order} >
                    {/* picture box */}
                    <div className='p-20 w-full '>
                        {/*Img*/}
                        <div className='h-[30rem] w-[30rem] xl:h-[45rem] xl:w-[45rem]'> 
                            <img src={imgSrc} alt="Events1" className='h-full w-full bg-cover'/>
                        </div>
                    </div>
                </div>
                {/* box1 */}
                <div className={` pl-40 w-full h-5/12 flex flex-col justify-center p-10 ` + content1Order}>
                    {hasTitle1 
                    ? <p className=' font-extrabold text-2xl mb-10'>{title1}</p>
                    : null}
                    <h1 className='text-8xl font-bold text-dark-purple mb-10'>
                        {title2}
                        {underline ? <div className=' w-52 h-1 bg-dark-purple '></div> : null}
                    </h1>
                    <p className=' text-xl font-thin mb-8'>
                        {content}    
                    </p> 
                    {hasButton 
                        ?<div className='p-2 w-full'>
                            <PrimaryButton className="bg-purple px-36" arrow={false}>
                                Get Started
                            </PrimaryButton>
                        </div> 
                        : null
                    }
                </div>
            </div>
        </div>
        
    );
}