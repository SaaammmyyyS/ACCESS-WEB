import { Events1, Events2, Events3 } from "/public/assets/images/";
import { Link } from "@inertiajs/react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
export default function CardArticle() {
    return (
        <Link>
            <div class="max-w-xs bg-white border border-gray-200 rounded-lg">
                <div className="m-4">
                    <div className="flex items-center justify-center w-full h-full">
                        <img
                            class="rounded-t-lg object-fill"
                            src={Events1}
                            alt=""
                        />
                    </div>

                    <div class="flex flex-row gap-x-2 m-2">
                        <div className="rounded-full bg-black">
                            <span className="font-bold text-white px-3 py-1 text-xs">
                                Events
                            </span>
                        </div>
                        <span className="font-bold text-slate-600 text-sm">
                            March 1 2023
                        </span>
                    </div>
                    <div className="text-center m-2">
                        <h1 className="text-2xl">
                            The Official Release of the Website
                        </h1>
                    </div>

                    <div className="flex items-center text-justify m-2">
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Ornare
                            aliquam enim enim maecenas metus dui sem sagittis
                            facilisis. In vitae adipiscing ac in mi urna fusce.
                        </p>
                    </div>

                    <div className="flex flex-row gap-2 items-center">
                        <FaRegArrowAltCircleRight className="w-4 h-4" />
                        <span>Find out more</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}
