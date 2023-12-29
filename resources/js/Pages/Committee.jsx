import {
    HeroSection,
    ExecutiveOfficersSection,
    CommitteeHeadsSection,
    JoinSection,
} from "@/Components/Committee";
import { ContactSection } from "@/Components/Home";
import Guest from "@/Layouts/GuestLayout";

export default function Home() {
    return (
        <>
            <Guest title="ACCESS Committee">
                <HeroSection />
                <ExecutiveOfficersSection />
                <CommitteeHeadsSection />
                <JoinSection />
                <ContactSection />
            </Guest>
        </>
    );
}
