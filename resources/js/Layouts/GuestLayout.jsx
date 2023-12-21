import MainNavBar from "@/Components/ui/MainNavBar";

export default function Guest({ children }) {
    return (
        <div>
            <MainNavBar/>
            <main>{children}</main>
            {/* Insert the footer here */}
        </div>
    );
}
