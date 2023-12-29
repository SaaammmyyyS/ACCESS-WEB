export default function MemberCard({ fullname, position, socials, image }) {
    return (
        <div className="flex flex-col">
            <div className="">
                <img
                    src={`/assets/images/committee/${image}`}
                    alt={fullname + "'s image"}
                    className="object-cover w-64 h-64 rounded-md"
                />
            </div>
            <div className="flex flex-col mt-2">
                <span className="font-bold text-2xl text-dark-purple">
                    {fullname}
                </span>
                <span className="font-bold text-xl">{position}</span>
                <span className="text-xl text-purple font-bold">
                    {socials[0] === "@" ? socials : "@" + socials}
                </span>
            </div>
        </div>
    );
}
