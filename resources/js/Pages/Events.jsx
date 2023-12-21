import { Link, Head } from '@inertiajs/react';
import { Events1, Events2, Events3 } from '/public/assets/images/'

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <section className='flex flex-col items-center'>
                <div className='flex-auto m-2'>
                    <p className='text-purple font-black'>EVENTS</p>
                </div>

                <div className='flex-auto m-2'>
                    <h1 className='text-dark-purple text-6xl font-black'>Join the Experience</h1>
                </div>

                <div className='flex-auto m-4'>
                    <p>
                        Participate in the ACCESS events and engage with people that share the same interests as you!
                    </p>
                </div>


                <div className='flex flex-row m-4 mx-auto'>

                    <div className='m-4'>
                        <img src={Events1} className='w-[230px] h-[230px] object-fill'/>
                    </div>

                    <div className='m-4'>
                        <img src={Events2} className='w-[230px] h-[230px] object-fill'/>
                    </div>

                    <div className='m-4'>
                        <img src={Events3} className='w-[230px] h-[230px] object-fill'/>
                    </div>

                </div>

                <div className='flex-auto m-4 mx-auto text-center p-12'>
                    <div className='bg-pink text-white font-bold py-4 px-5 rounded-full text-l hover:bg-pink hover:px-7 hover:tracking-widest transition-all duration-500'>
                        <a href="" className='flex flex-row'>
                            CHECK OUT OUR EVENTS
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
