import MemberCard from "./MemberCard";

export default function ExecutiveOfficersSection() {
    return (
        <section className="container mx-auto">
            <div className="flex flex-col py-28 items-center">
                <h2 className="text-6xl font-bold text-dark-purple">
                    Executive Officers
                </h2>
                <div className="grid grid-cols-3 mt-24 gap-32">
                    <MemberCard
                        fullname="Joei Raqui R. Jose"
                        position="President"
                        socials="@jorjdgr8"
                        image="sample.jpeg"
                    />
                    <MemberCard
                        fullname="Joei Raqui R. Jose"
                        position="President"
                        socials="@jorjdgr8"
                        image="sample.jpeg"
                    />
                    <MemberCard
                        fullname="Joei Raqui R. Jose"
                        position="President"
                        socials="@jorjdgr8"
                        image="sample.jpeg"
                    />
                    <MemberCard
                        fullname="Joei Raqui R. Jose"
                        position="President"
                        socials="@jorjdgr8"
                        image="sample.jpeg"
                    />
                    <MemberCard
                        fullname="Joei Raqui R. Jose"
                        position="President"
                        socials="@jorjdgr8"
                        image="sample.jpeg"
                    />
                    <MemberCard
                        fullname="Joei Raqui R. Jose"
                        position="President"
                        socials="@jorjdgr8"
                        image="sample.jpeg"
                    />
                </div>
            </div>
        </section>
    );
}
