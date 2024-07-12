const univData = [
  {
    key: "1",
    institute: "Mahindra University",
    course_duration: "2021 - 2022",
    institution_logo:
      "data:image/png;base64,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",
    degree: "PHD - Physics (Solar Cells)",
    grade: "-",
    description: [
      "Conducted research on solar cells and the magnetic properties of high-entropy alloys.",
      "Due to Mahindra University's initial development stage and lack of funding for Arc Melting and Bulk Melting machinery, transitioned from pursuing a Ph.D. to becoming a Software Engineer.",
    ],
  },
  {
    key: "1",
    institute: "Vellore Institute of Technology, Vellore",
    course_duration: "2019 - 2021",
    institution_logo:
      "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Vellore_Institute_of_Technology_seal_2017.svg/800px-Vellore_Institute_of_Technology_seal_2017.svg.png",
    degree: "Master(s) degree, Physics",
    grade: "7.2 CGPA",
    description: [
      "VIT provides ample opportunities and resources to enhance the learning.",
      " I focused on high-entropy alloys for dental and bone implants and completed a comprehensive review paper as my master's thesis project.",
    ],
  },
];

const orgData = [
  {
    key: "1",
    organization: "Providence Global Center LLP",
    role: "Data Analytics Engineer 1",
    joined_on: "Sep 2022 - Present",
    location: "Hyderabad, Telangana, India",
    role_type: "Full-Time",
    logo_src:
      "https://assets.bizclikmedia.net/576/61e99287ce77681c15671f3e7403be36:b1a7cb0efda675db77c7635c41563b64/providence-logo-color.png",
    description: [
      "Worked on two cross-platform projects: Power Dataset Automation & a web development project integrating Power BI, Tableau reports.",
      "Led the web development project from prototype to live deployment with added features within 9 months.",
    ],
  },
  {
    key: "2",
    organization: "Assetmonk Private Properties Limited",
    role: "Software Developer Intern",
    joined_on: "Jul 2022 - Sep 2022 | 2 mos",
    location: "Hyderabad, Telangana, India",
    role_type: "Internship",
    logo_src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO0cXTeHtkLttKhSRf9hndeA4oHvjiEZHk0_GWr5wK-9cj3TpJkoKMqtEXKcdzCwI3pWc&usqp=CAU",
    description: [
      "Have extensively worked on React Native development during my internship at Assetmonk Private Properties Limited.",
      " Primarily worked on a project which is responisble for session management of caregivers.",
    ],
  },
  {
    key: "3",
    organization: "Mahindra University",
    role: "Teaching Assistantship",
    joined_on: "Sep 2021 - Jul 2022 | 11 mos",
    location: "Hyderabad, Telangana, India",
    role_type: "Full-Time",
    logo_src:
      "data:image/png;base64,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",
    description: [
      "While pursuing my Ph.D. at Mahindra University, I conducted research on solar cells.(Magnetic properties of High-Entropy alloys.)",
      "I also guided and taught B.Tech students in sessions and laboratories as part of my responsibilities.",
    ],
  },
];

const certificatesData = [
  {
    key: "8",
    certificate_name: "Prompt Engineering for ChatGPT",
    issues_on: "Dec 2023",
    credential_id: "C3FDTN6CX2E2",
    institution: "Varderbilt University",
    institution_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCjWvsfwEoj5Yc-0HH5LH1UoIhp0QDbJe8Be2w9TX8bw&s",
    certificate_link:
      "https://www.coursera.org/account/accomplishments/verify/C3FDTN6CX2E2",
    certificate_img: `/assets/certificates/Prompt Engineering Cert.png`,
  },
  {
    key: "9",
    certificate_name: "Introduction to Agile Development and Scrum",
    issues_on: "Dec 2023",
    credential_id: "5Q6GVCNM2CTU",
    institution: "IBM",
    institution_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCjWvsfwEoj5Yc-0HH5LH1UoIhp0QDbJe8Be2w9TX8bw&s",
    certificate_link:
      "https://www.coursera.org/account/accomplishments/verify/5Q6GVCNM2CTU",
    certificate_img: `/assets/certificates/Intro to Agile.png`,
  },
  {
    key: "10",
    certificate_name: "Build Dynamic User Interfaces (UI) for Websites",
    issues_on: "Dec 2023",
    credential_id: "GSS32RDGQ2FN",
    institution: "Google",
    institution_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCjWvsfwEoj5Yc-0HH5LH1UoIhp0QDbJe8Be2w9TX8bw&s",
    certificate_link:
      "https://www.coursera.org/account/accomplishments/verify/GSS32RDGQ2FN",
    certificate_img: `/assets/certificates/Dynamic UI cert.png`,
  },
  {
    key: "1",
    certificate_name: "Node JS",
    issues_on: "Jun 2022",
    credential_id: "QDFZRPPWTP",
    institution: "NxtWave",
    institution_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZfVoIWlwRxIBWsETpXYGKfEYnjA1_tx7dTVc-YqbMAg&s",
    certificate_link:
      "https://certificates.ccbp.in/intensive/node-js?id=QDFZRPPWTP",
    certificate_img: `/assets/certificates/Node Js cert.png`,
  },
  {
    key: "2",
    certificate_name: "Developer Foundations",
    issues_on: "May 2022",
    credential_id: "YHYRHFDZIX",
    institution: "NxtWave",
    institution_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZfVoIWlwRxIBWsETpXYGKfEYnjA1_tx7dTVc-YqbMAg&s",
    certificate_link:
      "https://certificates.ccbp.in/intensive/developer-foundations?id=YHYRHFDZIX",
    certificate_img: `/assets/certificates/Developer Foundations cert.png`,
  },
  {
    key: "3",
    certificate_name: "Build Your Own Static Website",
    issues_on: "May 2022",
    credential_id: "VLRHVLFFZK",
    institution: "NxtWave",
    institution_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZfVoIWlwRxIBWsETpXYGKfEYnjA1_tx7dTVc-YqbMAg&s",
    certificate_link:
      "https://certificates.ccbp.in/intensive/static-website?id=VLRHVLFFZK",
    certificate_img: `/assets/certificates/Static Website Dev cert.png`,
  },
  {
    key: "4",
    certificate_name: "Build Your Own Responsive Website",
    issues_on: "May 2022",
    credential_id: "SPHXUJUIHC",
    institution: "NxtWave",
    institution_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZfVoIWlwRxIBWsETpXYGKfEYnjA1_tx7dTVc-YqbMAg&s",
    certificate_link:
      "https://certificates.ccbp.in/intensive/responsive-website?id=SPHXUJUIHC",
    certificate_img: `/assets/certificates/Responsive Website cert.png`,
  },
  {
    key: "5",
    certificate_name: "JavaScript Essentials",
    issues_on: "May 2022",
    credential_id: "QUEJYXOPHQ",
    institution: "NxtWave",
    institution_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZfVoIWlwRxIBWsETpXYGKfEYnjA1_tx7dTVc-YqbMAg&s",
    certificate_link:
      "https://certificates.ccbp.in/intensive/javascript-essentials?id=QUEJYXOPHQ",
    certificate_img: `/assets/certificates/JS Essentials cert.png`,
  },
  {
    key: "6",
    certificate_name: "Introduction to Databases",
    issues_on: "May 2022",
    credential_id: "DKMZHJQPPV",
    institution: "NxtWave",
    institution_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZfVoIWlwRxIBWsETpXYGKfEYnjA1_tx7dTVc-YqbMAg&s",
    certificate_link:
      "https://certificates.ccbp.in/intensive/introduction-to-databases?id=DKMZHJQPPV",
    certificate_img: `/assets/certificates/Intro to Db.png`,
  },
  {
    key: "7",
    certificate_name: "Responsive Web Design using Felxbox",
    issues_on: "May 2022",
    credential_id: "JZQULPRPNN",
    institution: "NxtWave",
    institution_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZfVoIWlwRxIBWsETpXYGKfEYnjA1_tx7dTVc-YqbMAg&s",
    certificate_link:
      "https://certificates.ccbp.in/intensive/flexbox?id=JZQULPRPNN",
    certificate_img: `/assets/certificates/Responsive Web design using Flexbox.png`,
  },
];

export { certificatesData, orgData, univData };
