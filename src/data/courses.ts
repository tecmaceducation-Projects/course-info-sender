export interface Course {
  code: string;
  name: string;
  tagline: string;
  subjects: string;
  highlights: string[];
}

export const courses: Course[] = [
  {
    code: "ADBP",
    name: "Advanced Diploma in Basic Programming",
    tagline: "Start your programming journey from scratch!",
    subjects: "C, C++",
    highlights: ["Beginner Friendly", "Strong Programming Foundation", "Practical Training", "Placement Support"],
  },
  {
    code: "ADJP",
    name: "Advanced Diploma in Java Programming",
    tagline: "Become a professional Java developer!",
    subjects: "C, C++, Java, SQL",
    highlights: ["Industry-Relevant Skills", "Real-time Projects", "Expert Trainers", "Placement Support"],
  },
  {
    code: "ADPP",
    name: "Advanced Diploma in Python Programming",
    tagline: "Master Python for software and data careers!",
    subjects: "C, C++, Python, SQL",
    highlights: ["High-Demand Skill", "Hands-on Practice", "Expert Guidance", "Placement Support"],
  },
  {
    code: "ADDE",
    name: "Advanced Diploma in Data Engineering",
    tagline: "Build a career in Big Data & Data Engineering!",
    subjects: "Python, SQL, Big Data, Hadoop, Spark",
    highlights: ["Industry-Focused Curriculum", "Real-time Projects", "Expert Trainers", "Placement Support"],
  },
  {
    code: "ADDA",
    name: "Advanced Diploma in Data Analytics",
    tagline: "Become a Data Analyst with in-demand tools!",
    subjects: "Python, SQL, Big Data, Advanced Excel, Power BI / Tableau",
    highlights: ["Job-Oriented Training", "Hands-on Projects", "Industry Tools", "Placement Support"],
  },
  {
    code: "ADBA",
    name: "Advanced Diploma in Business Analytics",
    tagline: "Upgrade your skills for business & analytics roles!",
    subjects: "Advanced Excel, Power BI / Tableau",
    highlights: ["Practical Business Skills", "Real-time Case Studies", "Expert Trainers", "Placement Support"],
  },
];

export function generateMessage(course: Course): string {
  const checks = course.highlights.map((h) => `✔ ${h}`).join("\n");
  return `🎓 TecMac Computer Education – Coimbatore

🚀 ${course.name} (${course.code})

${course.tagline}

📚 Course Covers:
${course.subjects}

💡 Why Join Us?
${checks}

📍 Address:
Sow-Ma Complex, 243, 1st Floor,
Sathy Road, Main Signal,
Near Cross Cut Road,
Gandhipuram, Coimbatore – 641012

📞 Call/WhatsApp: 99947 79308

📌 Location:
https://maps.app.goo.gl/JYgaiGuz8gwX7r7N7

👉 Limited Seats – Enroll Now!`;
}
