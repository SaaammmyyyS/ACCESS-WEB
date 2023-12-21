export default function Footer({}) {
    return (
        <footer className="h-[720px] w-full bg-footer">
            <div className="flex w-3/5 h-full mx-auto py-16">
                <div className="w-1/2 px-8 py-8">
                    <div className="bg-access-wizard bg-contain bg-no-repeat w-full h-full" />
                </div>
                <div className="w-1/2 px-8 py-8 text-white text-lg space-y-8">
                    <div className="flex w-full justify-between space-x-16">
                        <div className="flex flex-col text-right w-full space-y-4">
                            <a href="#" className="text-2xl font-bold">
                                About
                            </a>
                            <a href="#" className="font-light hover:underline">
                                Contact
                            </a>
                            <a href="#" className="font-light hover:underline">
                                Join the Community
                            </a>
                            <a href="#" className="font-light hover:underline">
                                How to AdDU
                            </a>
                            <a href="#" className="font-light hover:underline">
                                Archive
                            </a>
                        </div>
                        <div className="flex flex-col w-full space-y-4">
                            <a href="#" className="text-2xl font-bold">
                                ACCESS Elsewhere
                            </a>
                            <a href="#" className="font-light hover:underline">
                                Facebook
                            </a>
                            <a href="#" className="font-light hover:underline">
                                Twitter
                            </a>
                            <a href="#" className="font-light hover:underline">
                                LinkedIn
                            </a>
                            <a href="#" className="font-light hover:underline">
                                Discord
                            </a>
                        </div>
                    </div>
                    <div className="flex w-full justify-between space-x-16">
                        <div className="flex flex-col text-right w-full space-y-4">
                            <a href="#" className="text-2xl font-bold">
                                Connect with us
                            </a>
                            <a href="#" className="font-light hover:underline">
                                Study with Acers
                            </a>
                            <a href="#" className="font-light hover:underline">
                                Study with Acers
                            </a>
                            <a href="#" className="font-light hover:underline">
                                Ask for help
                            </a>
                        </div>
                        <div className="flex flex-col w-full space-y-4">
                            <a href="#" className="text-2xl font-bold">
                                Boring Legal Junk
                            </a>
                            <a href="#" className="font-light hover:underline">
                                Code of Conduct
                            </a>
                            <a href="#" className="font-light hover:underline">
                                Affiliate Disclaimer & Terms of Use
                            </a>
                            <a href="#" className="font-light hover:underline">
                                Privacy Policy
                            </a>
                        </div>
                    </div>
                    <div className="w-full flex justify-center">
                        <span className="text-[#8c8c8c]">
                            © 2023 ACCESS. Stay awesome!
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
