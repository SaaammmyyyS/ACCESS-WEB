import { Head } from '@inertiajs/react';
import HeroSection from '@/Components/Home/HeroSection';
import Guest from '@/Layouts/GuestLayout';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Guest>
                <Head title="Welcome" />
                <HeroSection />
            </Guest>
        </>
    );
}
