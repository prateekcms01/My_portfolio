// ============================================================
// SOURCE OF TRUTH — All data is from Prateek Kumar Nigam's resume
// Do NOT edit contact info, experience, or projects without
// corresponding resume evidence.
// ============================================================

export const personal = {
  name: "Prateek Kumar Nigam",
  title: "Software Developer",
  subtitle: "Backend Engineer with Generative AI / RAG experience",
  tagline:
    "Software Developer building scalable backend systems and AI-powered applications.",
  email: "officialnigam.prateekcms@gmail.com",
  phone: "+91 8009461123",
  linkedin: "https://www.linkedin.com/in/prateek-kumar-nigam-p281/",
  // TODO: Add GitHub URL once confirmed from resume
  github: "https://github.com/prateekcms01",
  location: "India",
};

export const stats = [
  {
    value: "500+",
    label: "DSA Problems Solved",
    description: "Across LeetCode, HackerRank & GeeksforGeeks",
  },
  {
    value: "90→20",
    suffix: "min",
    label: "API Processing Time",
    description:
      "Reduced API processing time from 90 to 20 minutes using BullMQ",
  },
  {
    value: "2+",
    label: "Years of Experience",
    description: "Across 2 professional roles",
  },
  {
    value: "3",
    label: "Featured Projects",
    description: "Backend, REST API, and AI-powered apps",
  },
];

export const experience = [
  {
    id: "mahindra",
    company: "Mahindra First Choice Wheels Limited",
    role: "Software Engineer",
    location: "Bengaluru, India",
    period: "Jul 2026 – Present",
    current: true,
    highlights: [
      {
        text: "Build backend modules and services using Node.js, Express.js, and PostgreSQL for enterprise applications.",
        tags: ["Node.js", "Express.js", "PostgreSQL"],
      },
      {
        text: "Develop secure and efficient REST APIs supporting application workflows, data processing, and service integrations.",
        tags: ["REST APIs"],
      },
      {
        text: "Implement database schemas, queries, and business logic with focus on performance, scalability, and reliability.",
        tags: ["PostgreSQL", "Performance"],
      },
      {
        text: "Debug backend issues, analyze application failures, and deliver enhancements aligned with business requirements.",
        tags: ["Debugging"],
      },
      {
        text: "Integrated BullMQ for background job/queue processing, reducing API processing time from 90 minutes to 20 minutes.",
        tags: ["BullMQ"],
        impact: true,
        impactLabel: "90 min → 20 min",
      },
    ],
  },
  {
    id: "flutterflirt",
    company: "Flutterflirt",
    role: "Backend Developer",
    location: "Remote",
    period: "Jan 2025 – Feb 2026",
    current: false,
    highlights: [
      {
        text: "Developed and optimized backend systems using Node.js, Express.js, and MySQL.",
        tags: ["Node.js", "Express.js", "MySQL"],
      },
      {
        text: "Designed and implemented scalable RESTful APIs.",
        tags: ["REST APIs"],
      },
      {
        text: "Managed database operations and improved query efficiency.",
        tags: ["MySQL", "Query Optimization"],
      },
      {
        text: "Collaborated with cross-functional teams on product features and delivery.",
        tags: ["Collaboration"],
      },
    ],
  },
];

export const projects = [
  {
    id: "pdf-rag",
    name: "PDF RAG Application",
    badge: "Flagship AI Project",
    description:
      "A PDF question-answering application powered by Retrieval-Augmented Generation (RAG) that extracts, chunks, embeds, and semantically searches PDF content to generate context-grounded answers using a large language model.",
    problem:
      "Traditional keyword search fails to understand semantic meaning in documents, returning irrelevant results for complex questions.",
    solution:
      "Built a RAG pipeline that embeds document chunks into a vector store and retrieves semantically relevant context before sending it to an LLM for grounded answer generation.",
    tech: ["Node.js", "Express.js", "ChromaDB", "Gemini API", "RAG"],
    features: [
      "PDF content extraction and intelligent chunking",
      "Embedding generation and storage in ChromaDB",
      "Semantic / vector search for relevant context retrieval",
      "Context-grounded answer generation via Gemini LLM",
      "Deployed frontend and backend",
    ],
    pipeline: [
      "PDF Upload",
      "Text Extraction",
      "Chunking",
      "Embeddings",
      "ChromaDB",
      "Semantic Search",
      "Relevant Context",
      "Gemini LLM",
      "Grounded Answer",
    ],
    // TODO: Add GitHub URL
    github: null,
    // TODO: Add Live Demo URL
    demo: null,
    color: "violet",
  },
  {
    id: "quick-serve",
    name: "Quick Serve",
    badge: "Backend API Project",
    description:
      "A service-request backend platform supporting the full lifecycle: customer requests, admin approval, and vendor task fulfillment — secured with JWT and role-based access control.",
    problem:
      "Service businesses need a structured workflow to route customer requests through approval and fulfillment stages with proper authorization.",
    solution:
      "Designed a REST API backend with JWT authentication, RBAC, and a multi-role workflow engine.",
    tech: ["Node.js", "Express.js", "MySQL", "JWT", "RBAC"],
    features: [
      "REST API with JWT authentication",
      "Role-Based Access Control (RBAC)",
      "Customer → Admin Approval → Vendor workflow",
      "Secure service request lifecycle management",
    ],
    workflow: [
      "Customer",
      "Service Request",
      "Admin Approval",
      "Vendor Assignment",
      "Task Fulfillment",
    ],
    // TODO: Add GitHub URL
    github: null,
    demo: null,
    color: "cyan",
  },
  {
    id: "kaveri",
    name: "Kaveri Engineering — Employee Management System",
    badge: "Enterprise Project",
    description:
      "An enterprise-grade employee management system with attendance, leave management, and role-based access, built as a REST API backend with JWT authentication.",
    problem:
      "HR teams need a centralized, secure system for managing employee records, attendance, and leave requests across roles.",
    solution:
      "Built a structured REST API with JWT auth, RBAC, and full employee lifecycle management.",
    tech: ["Node.js", "Express.js", "MySQL", "JWT", "RBAC"],
    features: [
      "Employee record management",
      "Attendance tracking system",
      "Leave management module",
      "JWT authentication and RBAC",
      "REST API backend",
    ],
    // TODO: Add GitHub URL
    github: null,
    demo: null,
    color: "emerald",
  },
];

export const skills = {
  Languages: ["C++", "JavaScript", "Core Java", "SQL"],
  Backend: ["Node.js", "Express.js", "REST APIs", "API Development"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB"],
  "Generative AI": [
    "RAG",
    "LLMs",
    "Prompt Engineering",
    "Embeddings",
    "Vector Databases",
    "ChromaDB",
    "Gemini API",
  ],
  Tools: ["Git", "GitHub", "Docker", "RabbitMQ", "BullMQ"],
  Cloud: ["AWS S3", "AWS EC2", "AWS RDS", "AWS EMR"],
  "AI Tools": ["Hugging Face", "Ollama"],
  "CS Fundamentals": [
    "Data Structures & Algorithms",
    "OOP",
    "Operating Systems",
    "Computer Science Fundamentals",
  ],
};

export const dsa = {
  count: "500+",
  platforms: ["LeetCode", "HackerRank", "GeeksforGeeks"],
  certifications: [
    "C++ Programming Badge",
    "Certificate of Achievement in C++ Basics",
    "LeetCode 100 Days Badge",
    "SQL Basics Certification",
    "Problem Solving Certification",
  ],
};

export const education = {
  institution: "Ajay Kumar Garg Engineering College",
  location: "Ghaziabad, Uttar Pradesh",
  degree: "B.Tech in Computer Science and Engineering",
  year: "2024",
};
