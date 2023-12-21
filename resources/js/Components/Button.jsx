export default function Button({ className = '', children, ...props }) {
    return (
        <div className='flex-auto mx-auto text-center p-12'>
            <div className='bg-pink text-white font-bold py-4 px-5 rounded-full text-l hover:bg-pink hover:px-7 hover:tracking-widest transition-all duration-500'>
                <a href="" className='flex flex-row'>
                    {children}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </a>
            </div>
        </div>
    );
}
