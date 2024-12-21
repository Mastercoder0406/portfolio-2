export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
];



//Change the Bento Grid, showing the Qualities and Educational background, inshort the CV
// images from the public folder   
export const gridItems = [
    {
        id: 1,
        title: " ",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] text-bold",
        imgClassName: "w-full h-10ox opacity-40 align-center flex",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 7,
        title: "Ready to collaborate, innovate, and deliver excellence.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1 text-white",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
    {
        id: 2,
        title: "I prioritize client collaboration, fostering open communication",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve  ",
        className: "lg:col-span-2 md:col-span-3 md:row-span-3",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "/grid.svg",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-3 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "About Myself",
        description: "I am Atharva Ashok Dhokte, an enthusiastic computer engineer with a CGPA of 9.30. I specialize in Java, MERN Stack, and SQL, with strong problem-solving skills and a passion for AI, ML, and Blockchain Development. My goal is to use technology to solve real-world problems and stay updated with IT trends.Technology excites me and I am keen to solve real-world problems by applying my coding knowledge. Certain skills which I am learning are Data Structure and Analysis(JAVA) and has 𝗡𝗣𝗧𝗘𝗟 𝗗𝗦𝗔 𝗖𝗲𝗿𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻, Web Development (𝗠𝗘𝗥𝗡 𝗦𝘁𝗮𝗰𝗸), Python Backend Development and applying these skills in my projects to upgrade my resume. My curiosity for emerging technologies and their potential to revolutionize industries fuels my constant desire to learn and stay up-to-date with the latest trends in the IT realm.",
        className: "md:col-span-3 md:row-span-4 px-5",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 8,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },


];

export const projects = [
    {
        id: 1,
        title: "Villa Verse",
        des: "Project to find Villas using Map accross India",
        img: "/p1.svg",
        iconLists: ["/express.png", "/mongo.png", "/js.png", "/re.svg", "/fm.svg"],
        link: "https://github.com/Mastercoder0406/Villa-on-map.git",
    },
    {
        id: 2,
        title: "Python Automation based Disaster Information retrieval",
        des: "Using the Python api and library to get information about disaster occured and get Emergency contact information",
        img: "/p2.svg",
        iconLists: ["/py.png", "/api.png", "/lib.png", "/stream.svg", "/c.svg"],
        link: "https://github.com/Mastercoder0406/project-news-app.git",
    },
    {
        id: 3,
        title: "Campground Verse",
        des: "To Find Wonderfull Locations for Camping across India using map. Various Technologies used ",
        img: "/p3.svg",
        iconLists: ["/js.png", "/mongo.png", "/express.png", "/re.svg", "/html.png"],
        link: "https://github.com/Mastercoder0406/YELPCAMP-final-.git",
    },
    {
        id: 4,
        title: "Stock Management Application",
        des: "Website using Java managing the stocks of person ",
        img: "/p4.svg",
        iconLists: ["/java.jpg"],
        link: "https://github.com/Mastercoder0406/YELPCAMP-final-.git",
    },
];


//Certifications
export const testimonials = [
    {
        quote:
            "Mastering the Web-Development to showcas my Designing and Development skill",
        name: "Web Development Certification",
        title: "Udemy ",
        image: "b1/svg",
        href:"asdf"
    },
    {
        quote: "Mastering Python to solve real-world problems and unlock the power of data.",
        name: "Python for Data Science and Machine Learning Bootcamp",
        title: "Udemy",
        image: "", 
        href: "https://www.udemy.com"
    },
    {
        quote: "Equipping myself with the skills to fight against cyber threats in the digital world.",
        name: "Certified Ethical Hacker (CEH)",
        title: "Acmagrade Cybersecurity",
        image: "", 
        href: "https://www.acmagrade.com"
    },
    
];


// add here services offered 
export const companies = [
    {
        id: 1,
        name: "Bharat Intern",
        img: "/cloud.svg",
        nameImg: "/cloudName.svg",
    },
    {
        id: 2,
        name: "Prodigy Infotecth",
        img: "/app.svg",
        nameImg: "/appName.svg",
    },
    {
        id: 3,
        name: "Acmagrade ",
        img: "/host.svg",
        nameImg: "/hostName.svg",
    }]


//internship
export const workExperience = [
    {
        id: 1,
        title: "Frontend Engineer Intern",
        desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Mobile App Dev - JSM Tech",
        desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Freelance App Dev Project",
        desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Lead Frontend Developer",
        desc: "Developed and maintained user-facing features using modern frontend technologies.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
    },
    {
        id: 2,
        img: "/twit.svg",
    },
    {
        id: 3,
        img: "/link.svg",
    },
];





/// statistics
const statistics = [
    {
        id: 1,
        name: "Projects Done",
        number: 50,
        image:
            "/exp1.svg",
    },
    {
        id: 2,
        name: "Clients",
        number: 2,
        image:
            "/exp4.svg",
    },
    {
        id: 3,
        name: "Ongoing Projects",
        number: 5,
        image:
            "/exp2.svg",
    },
    {
        id: 4,
        name: "Awards Won",
        number: 3,
        image:
            "/exp3.svg",
    }
    
    // {
    //     id: 5,
    //     name: "Team Members",
    //     number: 25,
    //     image:
    //         "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHRlYW18ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    // },
    // {
    //     id: 6,
    //     name: "Revenue Generated",
    //     number: "$1M+",
    //     image:
    //         "https://images.unsplash.com/photo-1567515004624-219c9fb2503c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    // },
];

export default statistics;

