import { Link, Head } from "@inertiajs/react";
import {
    HeroSection,
    AboutUsSection,
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
                <AboutUsSection />
                <EventSection />
                <BlogSection />
                <ContactSection />
            </Guest>
        </>
    );
}
