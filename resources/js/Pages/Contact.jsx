import { Link, Head } from "@inertiajs/react";
import {
    MessageSection,
    QuestionSection,
    SubscribeSection,
} from "@/Components/Contact";
import Guest from "@/Layouts/GuestLayout";

export default function Contact() {
    return (
        <>
            <Guest title="Contact">
                <MessageSection />
                <QuestionSection />
                <SubscribeSection />
            </Guest>
        </>
    );
}
