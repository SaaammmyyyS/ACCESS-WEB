import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
export default function MessageSection() {
    return (
        <>
            <section className="flex flex-col items-center bg-darker-purple py-20">
                <div className="flex flex-row gap-48 m-8">

                    <div className="flex flex-auto">
                        <div className="flex flex-col gap-4">
                            <div className="text-left">
                                <h1 className="text-purple font-black text-5xl">Want to know more?</h1>
                                <h1 className="text-pink font-black text-5xl">Message us</h1>
                            </div>

                            <div className="w-[420px] text-pink text-justify">
                                <p>
                                    We value your input and feedback. Whether you have a question,
                                    concern, or just want to say hello, we're here to help.
                                    You can reach us in a variety of ways:
                                </p>
                            </div>

                            <div className="flex flex-row gap-20 my-6">
                                <div className="flex flex-col gap-10">
                                    <div className="flex flex-row items-center gap-2">

                                        <div className="rounded-full bg-light-purple p-2">
                                            <CiFacebook color="white" size="25px" />
                                        </div>
                                        <span className="text-pink">@Facebook</span>
                                    </div>


                                    <div className="flex flex-row items-center gap-2">
                                        <div className="rounded-full bg-light-purple p-2">
                                            <CiTwitter color="white" size="25px" />
                                        </div>
                                        <span className="text-pink">@Twitter</span>
                                    </div>


                                    <div className="flex flex-row items-center gap-2">
                                        <div className="rounded-full bg-light-purple p-2">
                                            <CiLinkedin color="white" size="25px" />
                                        </div>
                                        <span className="text-pink">@Linkedin</span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-10">
                                    <div className="flex flex-row items-center gap-2">

                                        <div className="rounded-full bg-light-purple p-2">
                                            <CiYoutube color="white" size="25px" />
                                        </div>
                                        <span className="text-pink">@Youtube</span>
                                    </div>


                                    <div className="flex flex-row items-center gap-2">
                                        <div className="rounded-full bg-light-purple p-2">
                                            <CiTwitter color="white" size="25px" />
                                        </div>
                                        <span className="text-pink">@Instagram</span>
                                    </div>
                                </div>
                            </div>

                            <div className="w-[420px] text-pink text-justify">
                                <p>
                                    If you have a specific question or concern, you can shoot us an email
                                    by filling up the form below and we will respond to you as soon as possible.
                                </p>
                            </div>

                        </div>
                    </div>

                    <div>
                        <div>
                            <iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Ateneo%20de%20Davao+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population mapping</a></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
