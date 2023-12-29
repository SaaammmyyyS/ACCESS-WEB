import CommitteeSection from "./CommitteeSection";

export default function CommitteeHeadsSection() {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col py-28 items-center">
                <h2 className="text-6xl font-bold text-dark-purple">
                    Committee Heads
                </h2>
                <div className="w-full">
                    <CommitteeSection
                        head={{
                            fullname: "Joei Raqui R. Jose",
                            position: "Committee Head",
                            socials: "@jorjdgr8",
                            image: "sample.jpeg",
                        }}
                        committee="Academics"
                        committee_desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. At facilis dolorem excepturi adipisci sapiente, quam ex error nesciunt minima facere odio ea quae, assumenda recusandae vel, aliquam perspiciatis. Officiis quod illo molestiae odit fuga officia nobis! Commodi explicabo fugiat nam!"
                        left={true}
                    />
                    <CommitteeSection
                        head={{
                            fullname: "Joei Raqui R. Jose",
                            position: "Committee Head",
                            socials: "@jorjdgr8",
                            image: "sample.jpeg",
                        }}
                        committee="Academics"
                        committee_desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. At facilis dolorem excepturi adipisci sapiente, quam ex error nesciunt minima facere odio ea quae, assumenda recusandae vel, aliquam perspiciatis. Officiis quod illo molestiae odit fuga officia nobis! Commodi explicabo fugiat nam!"
                        left={false}
                    />
                    <CommitteeSection
                        head={{
                            fullname: "Joei Raqui R. Jose",
                            position: "Committee Head",
                            socials: "@jorjdgr8",
                            image: "sample.jpeg",
                        }}
                        committee="Academics"
                        committee_desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. At facilis dolorem excepturi adipisci sapiente, quam ex error nesciunt minima facere odio ea quae, assumenda recusandae vel, aliquam perspiciatis. Officiis quod illo molestiae odit fuga officia nobis! Commodi explicabo fugiat nam!"
                        left={true}
                    />
                    <CommitteeSection
                        head={{
                            fullname: "Joei Raqui R. Jose",
                            position: "Committee Head",
                            socials: "@jorjdgr8",
                            image: "sample.jpeg",
                        }}
                        committee="Academics"
                        committee_desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. At facilis dolorem excepturi adipisci sapiente, quam ex error nesciunt minima facere odio ea quae, assumenda recusandae vel, aliquam perspiciatis. Officiis quod illo molestiae odit fuga officia nobis! Commodi explicabo fugiat nam!"
                        left={false}
                    />
                </div>
            </div>
        </div>
    );
}
