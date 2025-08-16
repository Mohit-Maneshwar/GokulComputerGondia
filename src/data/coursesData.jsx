const courses = [
  {
    id: "dfa",
    title: "DFA (Diploma in Financial Accounting)",
    description: "GTech Diploma Course covering manufacturing, trading, and service industries.",
    contents: [
      "Basic Accounting", "Manufacturing Accounting", "Windows 7 - Advanced Excel",
      "Bank Reconciliation", "Taxation: Offline & E-taxation", "VAT, Sales Tax, Central Excise",
      "TDS, PT, ST, Education Cess, Higher Education Cess", "Payroll (Advance)",
      "Export All Kind of Report & Form Printing", "Features & Configuration of Tally 9.0",
      "Internet Banking, Share Market", "Personality Development Training (1 week)", "Project"
    ],
    duration: "6 Months",
    fees: "Rs.6000/-",
    job_opportunity: ["Account Faculty", "Senior Account", "Own Business", "Assistant of CA"],
    image: "https://images.unsplash.com/photo-1659080908120-ee0a52629e86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fERGQSUyMChEaXBsb21hJTIwaW4lMjBGaW5hbmNpYWwlMjBBY2NvdW50aW5nKXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: "dchn",
    title: "DCHN (Computer Hardware & Networking)",
    description: "GTech Diploma Course focusing on computer hardware, networking, and peripheral devices.",
    contents: [
      "Operating System: Windows, DOS, Linux", "Peripheral Devices Installation & Maintenance",
      "PC Architecture", "Power Supply (SMPS, UPS)", "Network Planning & Detection Techniques",
      "Network Security", "Laptop & Internet Installation", "Wireless Technology (Bluetooth, Wi-Fi, Mobile, I-PAD)",
      "Application Installation, Disk Management"
    ],
    duration: "6 Months",
    fees: "Rs.8000/-",
    job_opportunity: ["Hardware Technician", "Own Business"],
    image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fERDSE58ZW58MHx8MHx8fDA%3D"
  },
  {
    id: "dwt",
    title: "DWT (Diploma in Web Technology)",
    description: "GTech Diploma Course to become an advanced web site designer.",
    contents: [
      "HTML", "DHTML", "Flash", "JavaScript", "Basic C Language", "Photoshop", "Dreamweaver", "CSS", "Project"
    ],
    duration: "8 Months",
    fees: "Rs.8000/-",
    job_opportunity: ["Web Designer", "IT Teacher"],
    image: "https://plus.unsplash.com/premium_photo-1685086785423-435c02d5c321?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RFdUJTIwKERpcGxvbWElMjBpbiUyMFdlYiUyMFRlY2hub2xvZ3kpfGVufDB8fDB8fHww"
  },
  {
    id: "klic",
    title: "KLiC Diploma Module",
    description: "Course in core programming and web design.",
    contents: ["C Programming", "C++ Programming", "Web Designing"],
    duration: "6 Months",
    fees: "Rs.12500/-",
    job_opportunity: [],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEtMSUMlMjBEaXBsb21hJTIwTW9kdWxlfGVufDB8fDB8fHw%3D"
  },
  {
    id: "dsl",
    title: "DSL (Diploma in Software Language)",
    description: "GTec Diploma Course for programming & software development.",
    contents: [
      "Basics", "MS-Office", "C Programming", "C++ Programming", "Visual Basic", "Oracle",
      "Internet", "Project"
    ],
    duration: "6 Months",
    fees: "Rs.6000/-",
    job_opportunity: ["Software Installation", "Account Handling", "Data Entry Operator", "Own Business", "Hardware Technician"],
    image: "https://images.unsplash.com/photo-1621036579842-9080c7119f67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RFNMJTIwKERpcGxvbWElMjBpbiUyMFNvZnR3YXJlJTIwTGFuZ3VhZ2UpfGVufDB8fDB8fHww"
  },
  {
    id: "dca",
    title: "DCA (Diploma in Computer Application)",
    description: "GTec Diploma Course covering 18 core computer programs.",
    contents: [
      "Windows 7, MS-Office 2013", "Tally 9.0 ERP", "Net Banking, E-Banking", "Photoshop, CorelDraw", 
      "Project Work", "Hardware & Networking", "Internet, Project"
    ],
    duration: "6 Months",
    fees: "Rs.7000/-",
    job_opportunity: [],
    image: "https://plus.unsplash.com/premium_photo-1661416307260-5013ab7adc3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RENBJTIwKERpcGxvbWElMjBpbiUyMENvbXB1dGVyJTIwQXBwbGljYXRpb24pfGVufDB8fDB8fHww"
  },
  {
    id: "dpt",
    title: "DTP (Desktop Publishing)",
    description: "Graphic designer course.",
    contents: ["Photoshop", "CorelDraw", "PageMaker"],
    duration: "3 Months",
    fees: "Rs.3000/-",
    job_opportunity: [],
    image: "https://images.unsplash.com/photo-1688582139492-734f3d3746d9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RGVza3RvcCUyMFB1Ymxpc2hpbmd8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: "ccc",
    title: "CCC (Course on Computer Concepts)",
    description: "Basic course covering computer concepts, installation, and hard disk formatting.",
    contents: [],
    duration: "3 Months",
    fees: "Rs.2800/- (Rs.2800/- with installment, Rs.2800/- without installment)",
    job_opportunity: [],
    image: "https://images.unsplash.com/photo-1634464660153-468d44306ac4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q291cnNlJTIwb24lMjBDb21wdXRlciUyMENvbmNlcHRzfGVufDB8fDB8fHww"
  },
  {
    id: "tally",
    title: "Tally ERP 9 (Computerized Accounting)",
    description: "Certification course in Tally ERP 9.",
    contents: [],
    duration: "3 Months",
    fees: "Rs.3000/-",
    job_opportunity: [],
    image: "https://plus.unsplash.com/premium_photo-1715107535123-d09cea74d9fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGFsbHklMjBFUlAlMjA5JTIwKENvbXB1dGVyaXplZCUyMEFjY291bnRpbmcpfGVufDB8fDB8fHww"
  },
  {
    id: "general_courses",
    title: "General Courses",
    description: "Individual modules for specific software or topics.",
    contents: [
      "Windows 7 - Rs.1000/-", "MS-Office - Rs.2000/-", "Advanced Excel - Rs.2000/-", 
      "Tally ERP 9 - Rs.3000/-", "Internet - Rs.500/-", "Photoshop - Rs.2000/-", "CorelDraw - Rs.2000/-", 
      "PageMaker - Rs.2000/-", "Project - Rs.3000/-"
    ],
    duration: "Varies",
    fees: "As listed",
    job_opportunity: [],
    image: "https://plus.unsplash.com/premium_photo-1681248156502-745ab87474d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R2VuZXJhbCUyMENvdXJzZXN8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: "tuition_classes",
    title: "Tuition Classes",
    description: "Coaching for school & college subjects.",
    contents: [
      "Std 11th & 12th (CS, IT)", "BCCA, BCA, BSc, MSc, MCA", "BCom, MCom, BBA, MBA", "Polytechnic & Engineering subjects"
    ],
    duration: "Varies",
    fees: "Varies",
    job_opportunity: [],
    image: "https://plus.unsplash.com/premium_photo-1750859860252-6d23c5598f7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8VHVpdGlvbiUyMENsYXNzZXN8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: "aptitude",
    title: "Technical Aptitude",
    description: "Classes for any graduates or engineering students covering C language and data structures.",
    contents: [],
    duration: "3 Months",
    fees: "Rs.3500/-",
    job_opportunity: [],
    image: "https://coignite.instacks.co/uploads/learning_path/lz3muy3x.png"
  }
];

export default courses;
