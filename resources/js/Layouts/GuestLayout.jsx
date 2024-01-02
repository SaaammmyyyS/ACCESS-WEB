import { Head } from "@inertiajs/react";
import MainNavBar from "@/Components/ui/MainNavBar";
import Footer from "@/Components/ui/Footer";

export default function Guest({ children, title ,isNav = false}) {
    return (
        <div>
            <Head title={title} />
            {isNav ? <MainNavBar main={true}/> : <MainNavBar /> }
            <main>{children}</main>
            <Footer />
        </div>
    );
}
