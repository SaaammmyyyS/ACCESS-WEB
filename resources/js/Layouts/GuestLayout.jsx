import MainNavBar from "@/Components/ui/MainNavBar";
import Footer from "@/Components/ui/Footer";

export default function Guest({ children }) {
    return (
        <div>
            <MainNavBar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
