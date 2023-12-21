import { Link, Head } from "@inertiajs/react";
import Blogs from "@/Components/Blogs";
import Events from "@/Components/Events";
import HeroSection from "@/Components/Home/HeroSection";
import ContactSection from "@/Components/Home/ContactSection";
import Guest from "@/Layouts/GuestLayout";

export default function Welcome() {
    return (
        <>
            <Guest>
                <Head title="Welcome" />
                <HeroSection />
                <Events></Events>
                <Blogs></Blogs>
            </Guest>
        </>
    );
}
