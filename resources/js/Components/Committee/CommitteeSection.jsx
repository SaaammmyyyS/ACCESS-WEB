import MemberCard from "./MemberCard";

export default function CommitteeSection({
    head,
    committee,
    committee_desc,
    left = true,
}) {
    return (
        <div
            className={`flex justify-between w-full py-24 ${
                left ? "" : "flex-row-reverse"
            }`}
        >
            <div className="flex justify-center first-letter w-1/2">
                <MemberCard
                    fullname={head.fullname}
                    position={head.position}
                    socials={head.socials}
                    image={head.image}
                />
            </div>
            <div className="w-1/2 flex justify-center">
                <div className="w-4/5">
                    <h3 className="text-7xl font-bold text-dark-purple uppercase">
                        <span className="underline">
                            {committee.slice(0, 4)}
                        </span>
                        {committee.slice(4, committee.length)}
                    </h3>
                    <p className="text-lg text-gray-500 mt-6">
                        {committee_desc}
                    </p>
                </div>
            </div>
        </div>
    );
}
