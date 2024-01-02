import Guest from "@/Layouts/GuestLayout";
import {
    AboutUsSection,
    AccessibleSection,
    ContactUsSection
} from "@/Components/AboutUs";
import {
    Events1,
    Events2,
    Events3
} from "/public/assets/images";

export default function AboutUs() {
    return (
        <Guest title="About Us">
            <AboutUsSection title1={"Our Mission"} 
                title2={"About Us"}
                underline={true}
                content={
                    <>
                        We are a college-level academic organization dedicated to providing a supportive community 
                        for computer studies students at the Ateneo de Davao University. 
                        <br/>
                        <br/>
                        We aim to promote academic excellence, personal growth, 
                        and community development through providing opportunities for education and networking.
                        <br/>
                        <br/>
                        Our organization is made up of passionate and driven individuals who are committed to 
                        helping our members reach their full potential. Whether you're interested in programming, 
                        design, or any other aspect of computer studies, you'll find a welcoming and supportive community at ACCSS.
                    </>
                }
                content1Order={"order-1"}
                content2Order={"order-2"}
                imgSrc={Events1}
                hasButton={true}
                onBg={"bg-white"}
                sectionBg={"bg-white pt-32"}
            />
            <AboutUsSection
                title2={"What we do"}
                underline={true}
                content={
                    <>
                        We believe that collaboration and knowledge-sharing are essential to success in the field of computer studies. 
                        <br/>
                        <br/>
                        That's why we offer a range of events, workshops, and networking opportunities to help our members connect with each other and with industry professionals. 
                        By working together and learning from each other, we can all achieve our goals and make a positive impact in the world.
                    </>
                }
                imgSrc={Events2}
                hasTitle1={false} 
                sectionBg={"bg-[#d4d3f8]"}
                content1Order={"order-2"}
                content2Order={"order-1"}
            /> 
            <AboutUsSection 
                hasTitle1={true}
                title1={"OUR VISION"}
                title2={"How do we see ACCESS in 10 years?"}
                imgSrc={Events2}
                content={
                    <>
                        Our vision is to create a community of computer studies students 
                        who support and learn from each other.  
                        <br/>
                        <br/>
                        We believe that a strong community is key to promoting academic excellence, personal growth, 
                        and community development. Through our events and opportunities, we strive to create
                        a welcoming and inclusive environment where members can connect with each other, 
                        build lasting friendships, and develop valuable skills. 
                        <br/>
                        <br/>
                        Whether you're looking for a study group, a mentor, or simply a group of 
                        like-minded individuals to share your interests with, we invite you to join
                        our community at ACCSS.
                    </>
                }
                content1Order={"order-1"}
                content2Order={"order-2"}
                hasButton={false}
            />
            <AboutUsSection 
                hasTitle1={true}
                title1={"OUR MISSION"}
                title2={"How do we get there?"}
                imgSrc={Events3}
                content={
                    <>
                        We believe that everyone should have access to opportunities in the field of 
                        computer studies, regardless of their background. 
                        That's why we're committed to promoting diversity and inclusivity 
                        within our organization and beyond. 
                        <br/>
                        <br/>
                        We strive to make tech opportunities accessible to all by offering a range of 
                        events and activities that cater to different interests and skill levels. 
                        Whether you're a seasoned professional or just starting out, we welcome you to 
                        join us on our mission to make the tech industry a more accessible and welcoming 
                        place for everyone.
                    </>
                }
                content1Order={"order-2"}
                content2Order={"order-1"}
                sectionBg={"bg-[#d4d3f8]"}
                hasButton={false}
            />
            <AccessibleSection />
            <ContactUsSection />
        </Guest>
    );
}