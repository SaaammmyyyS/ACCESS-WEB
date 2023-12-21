import { Link, Head } from "@inertiajs/react";
import {
    HeroSection,
    EventSection,
    BlogSection,
    ContactSection,
} from "@/Components/Home";
import Guest from "@/Layouts/GuestLayout";

export default function Home() {
    return (
        <>
            <Guest title="Home">
                <HeroSection />
                <EventSection />
                <BlogSection />
                <ContactSection />
            </Guest>
        </>
    );
}
