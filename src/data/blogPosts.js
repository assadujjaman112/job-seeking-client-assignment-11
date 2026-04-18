const blogPosts = [
  {
    id: 1,
    category: "Tech",
    title: "Understanding JWT — Access Tokens & Refresh Tokens",
    excerpt:
      "Learn how access tokens and refresh tokens work together to keep your users securely authenticated without forcing them to log in every few minutes.",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
    author: "Assadujjaman Murad",
    date: "Apr 10, 2025",
    readTime: "5 min read",
    avatar: "M",
    content: [
      {
        type: "paragraph",
        text: "JSON Web Tokens (JWT) have become the de-facto standard for stateless authentication in modern web applications. But most tutorials only scratch the surface — they show you how to sign a token, never explaining why you need two of them.",
      },
      {
        type: "heading",
        text: "What is a JWT?",
      },
      {
        type: "paragraph",
        text: "A JWT is a compact, URL-safe token that encodes a JSON payload and signs it with a secret (HMAC) or a private key (RSA/ECDSA). Because the server signs the token, it can verify its authenticity without storing any session data — making the architecture truly stateless.",
      },
      {
        type: "heading",
        text: "The Problem with a Single Token",
      },
      {
        type: "paragraph",
        text: "If you issue one long-lived token, a stolen token gives an attacker permanent access. If you make it short-lived (e.g., 15 minutes), users are constantly logged out and forced to re-enter their credentials. Neither is a great experience.",
      },
      {
        type: "heading",
        text: "Access Tokens vs. Refresh Tokens",
      },
      {
        type: "paragraph",
        text: "The solution is two tokens working together. An access token is short-lived (5–15 minutes) and is sent with every API request in the Authorization header. A refresh token is long-lived (days or weeks), stored securely in an HttpOnly cookie, and is only ever sent to a dedicated /auth/refresh endpoint.",
      },
      {
        type: "paragraph",
        text: "When the access token expires, the client silently sends the refresh token to get a new access token — the user never notices. When the refresh token expires, the user is prompted to log in again.",
      },
      {
        type: "heading",
        text: "Security Best Practices",
      },
      {
        type: "list",
        items: [
          "Store the refresh token in an HttpOnly, Secure, SameSite=Strict cookie — never in localStorage.",
          "Keep access token expiry short (15 minutes or less).",
          "Implement token rotation: issue a new refresh token on every refresh request and invalidate the old one.",
          "Maintain a server-side blocklist for emergency revocation (e.g., after a password change).",
          "Use HTTPS everywhere — a token transmitted over plain HTTP is as good as stolen.",
        ],
      },
      {
        type: "heading",
        text: "Putting It All Together",
      },
      {
        type: "paragraph",
        text: "JWTs are powerful precisely because they remove the need for a session store on the server. But that power comes with responsibility. Pair short-lived access tokens with securely stored refresh tokens, implement rotation, and you'll have an authentication system that is both user-friendly and resilient to common attacks.",
      },
    ],
  },
  {
    id: 2,
    category: "Tech",
    title: "Express.js vs Nest.js — Which Should You Pick?",
    excerpt:
      "Both are powerful Node.js frameworks, but they serve different needs. Here's a practical breakdown to help you choose the right tool for your next project.",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=800&q=80",
    author: "Assadujjaman Murad",
    date: "Apr 3, 2025",
    readTime: "6 min read",
    avatar: "M",
    content: [
      {
        type: "paragraph",
        text: "Express.js has ruled the Node.js backend world for over a decade. Nest.js arrived in 2017 as a strongly-opinionated alternative. Both build on Node.js and both are production-proven — so which one belongs in your next project?",
      },
      {
        type: "heading",
        text: "Express.js — The Minimalist",
      },
      {
        type: "paragraph",
        text: "Express is essentially a thin routing and middleware layer over Node's HTTP module. You get routing, request/response helpers, and a middleware pipeline. Everything else — validation, ORM integration, config management, testing — is your problem to solve and wire together.",
      },
      {
        type: "paragraph",
        text: "This freedom is Express's biggest strength and its biggest weakness. Small APIs and microservices benefit enormously from the low overhead. Large teams building complex applications often end up reinventing the same boilerplate structure across projects.",
      },
      {
        type: "heading",
        text: "Nest.js — The Opinionated Architecture",
      },
      {
        type: "paragraph",
        text: "Nest borrows heavily from Angular's architecture — modules, providers, decorators, dependency injection. If you've worked with Angular or Spring Boot, Nest will feel immediately familiar. It enforces a clear project structure from day one.",
      },
      {
        type: "paragraph",
        text: "Under the hood, Nest defaults to Express (and can swap it for Fastify for better raw throughput). You get first-class TypeScript support, built-in pipes for validation, guards for auth, and interceptors for response transformation — all without reaching for extra packages.",
      },
      {
        type: "heading",
        text: "When to Choose Express",
      },
      {
        type: "list",
        items: [
          "Small-to-medium APIs where you want total flexibility.",
          "Prototyping or MVPs where speed-to-first-endpoint matters most.",
          "Teams already experienced with Express who have established conventions.",
          "Microservices where a tiny footprint is valuable.",
        ],
      },
      {
        type: "heading",
        text: "When to Choose Nest",
      },
      {
        type: "list",
        items: [
          "Large-scale applications with many developers — Nest enforces consistency.",
          "Projects where TypeScript is non-negotiable.",
          "Enterprise apps that need built-in support for testing, queues, WebSockets, and GraphQL.",
          "Teams coming from Angular or Java Spring who want familiar patterns.",
        ],
      },
      {
        type: "heading",
        text: "The Verdict",
      },
      {
        type: "paragraph",
        text: "Neither framework is universally better. Express wins on simplicity and performance per line of code. Nest wins on scalability and team coordination. Pick Express when you want freedom; pick Nest when you want guardrails.",
      },
    ],
  },
  {
    id: 3,
    category: "Tech",
    title: "SQL vs NoSQL — Choosing the Right Database",
    excerpt:
      "Picking the wrong database can cost you months of refactoring later. Understand the trade-offs between relational and non-relational databases before you commit.",
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80",
    author: "Assadujjaman Murad",
    date: "Mar 28, 2025",
    readTime: "7 min read",
    avatar: "M",
    content: [
      {
        type: "paragraph",
        text: "The database decision is one of the most consequential architectural choices you'll make — and one of the hardest to reverse. Understanding the fundamental differences between SQL and NoSQL databases will save you from expensive migrations down the road.",
      },
      {
        type: "heading",
        text: "SQL Databases",
      },
      {
        type: "paragraph",
        text: "Relational databases (PostgreSQL, MySQL, SQLite) store data in tables with predefined schemas. Relationships between tables are enforced via foreign keys. They guarantee ACID properties — Atomicity, Consistency, Isolation, and Durability — making them the gold standard for transactional data.",
      },
      {
        type: "paragraph",
        text: "SQL's strength is its expressiveness. A single JOIN can answer complex questions spanning multiple related tables. The schema enforces data integrity at the database level, catching bad data before it persists.",
      },
      {
        type: "heading",
        text: "NoSQL Databases",
      },
      {
        type: "paragraph",
        text: "NoSQL is an umbrella term covering document stores (MongoDB), key-value stores (Redis), wide-column stores (Cassandra), and graph databases (Neo4j). They trade schema rigidity and JOIN expressiveness for horizontal scalability and flexible data modeling.",
      },
      {
        type: "paragraph",
        text: "A document store like MongoDB lets you embed related data directly inside a document rather than normalizing it into separate tables. Reads are fast because all the data you need is in one place — but updates that touch many documents become expensive.",
      },
      {
        type: "heading",
        text: "Key Decision Factors",
      },
      {
        type: "list",
        items: [
          "Data relationships: Highly relational data (e.g., e-commerce orders, banking) fits SQL naturally.",
          "Schema flexibility: Rapidly changing data shapes (e.g., user-generated content) favor NoSQL.",
          "Scale: NoSQL databases typically scale horizontally more easily, but modern SQL (CockroachDB, PlanetScale) is closing this gap.",
          "Consistency requirements: Financial systems demand strong ACID guarantees — reach for SQL.",
          "Query complexity: If you need ad-hoc aggregations over many dimensions, SQL wins.",
        ],
      },
      {
        type: "heading",
        text: "The Hybrid Reality",
      },
      {
        type: "paragraph",
        text: "Most production systems use both. PostgreSQL handles user accounts and transactions; Redis caches hot data and manages sessions; Elasticsearch powers full-text search. The question is rarely SQL vs. NoSQL — it's which tool is right for which layer of your system.",
      },
    ],
  },
  {
    id: 4,
    category: "Tech",
    title: "What is CORS and How Do You Fix It?",
    excerpt:
      "That dreaded 'blocked by CORS policy' error in the browser console — here's exactly what it means, why browsers enforce it, and how to resolve it on your server.",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
    author: "Assadujjaman Murad",
    date: "Mar 20, 2025",
    readTime: "4 min read",
    avatar: "M",
    content: [
      {
        type: "paragraph",
        text: "If you've ever built a frontend that calls a separate backend API, you've almost certainly seen this in your browser console: \"Access to fetch at 'http://api.example.com' from origin 'http://localhost:3000' has been blocked by CORS policy.\" Let's demystify it.",
      },
      {
        type: "heading",
        text: "What is the Same-Origin Policy?",
      },
      {
        type: "paragraph",
        text: "Browsers enforce the Same-Origin Policy (SOP) — a security rule that prevents JavaScript on one origin (scheme + hostname + port) from reading responses from a different origin. Without this, a malicious script on evil.com could read your bank's API responses when you visit it.",
      },
      {
        type: "heading",
        text: "What is CORS?",
      },
      {
        type: "paragraph",
        text: "Cross-Origin Resource Sharing (CORS) is a standardized mechanism that lets a server tell the browser: \"It's okay, I trust requests from these other origins.\" It works through HTTP headers — specifically Access-Control-Allow-Origin.",
      },
      {
        type: "paragraph",
        text: "For simple requests (GET, POST with certain content types), the browser sends the request and checks the response headers. For complex requests (custom headers, DELETE, PUT), the browser first sends a preflight OPTIONS request to check permissions before sending the actual request.",
      },
      {
        type: "heading",
        text: "How to Fix It on Your Server",
      },
      {
        type: "list",
        items: [
          "Express.js: Install the cors package and add app.use(cors({ origin: 'https://yourfrontend.com' })).",
          "Be specific with origins — avoid Access-Control-Allow-Origin: * in production if your API uses cookies or auth headers.",
          "For credentials (cookies, auth headers), set credentials: true in your CORS config and withCredentials: true on your fetch/axios call.",
          "Don't set CORS headers in your frontend code — CORS is a server-side concern only.",
        ],
      },
      {
        type: "heading",
        text: "Common Gotchas",
      },
      {
        type: "paragraph",
        text: "A wildcard origin (*) cannot be combined with credentials. If your API needs cookies or an Authorization header, you must specify the exact allowed origin. Also remember that CORS is a browser security feature — it does not protect your API from server-to-server requests, curl, or Postman. For that, you need proper authentication.",
      },
    ],
  },
  {
    id: 5,
    category: "Career",
    title: "How to Write a CV That Gets Past ATS Filters",
    excerpt:
      "Most CVs never reach a human recruiter. Applicant Tracking Systems filter them out first. Here's how to format and keyword-optimize your CV to pass the initial screen.",
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
    author: "Assadujjaman Murad",
    date: "Mar 14, 2025",
    readTime: "8 min read",
    avatar: "M",
    content: [
      {
        type: "paragraph",
        text: "Here's a sobering statistic: up to 75% of CVs submitted online are rejected by an Applicant Tracking System (ATS) before a human ever reads them. Writing a great CV is only half the battle — it also needs to survive the algorithm.",
      },
      {
        type: "heading",
        text: "What is an ATS?",
      },
      {
        type: "paragraph",
        text: "An Applicant Tracking System is software that employers use to collect, filter, and rank job applications. It parses your CV into structured data — name, contact info, skills, experience — and scores it against the job description. Low scorers get auto-rejected.",
      },
      {
        type: "heading",
        text: "Format for Parsability",
      },
      {
        type: "list",
        items: [
          "Use a single-column layout. Multi-column layouts confuse many ATS parsers, mixing text from different columns.",
          "Avoid tables, text boxes, headers/footers, and images. Most ATS cannot read content inside these elements.",
          "Submit as a .docx or plain PDF. Avoid fancy PDF exports from design tools like Canva.",
          "Use standard section headings: Work Experience, Education, Skills. Creative headings like 'My Journey' may not be recognized.",
          "Use a standard, readable font (Calibri, Arial, Georgia) at 10–12pt.",
        ],
      },
      {
        type: "heading",
        text: "Keyword Optimization",
      },
      {
        type: "paragraph",
        text: "Read the job description carefully and mirror its exact language in your CV. If the JD says 'stakeholder management', use that phrase — not 'client communication'. ATS systems often match keywords exactly.",
      },
      {
        type: "paragraph",
        text: "Include both the spelled-out version and the acronym where applicable (e.g., 'Search Engine Optimization (SEO)'). Place the most important keywords in your professional summary and in your bullet points — not buried at the bottom in a skills list.",
      },
      {
        type: "heading",
        text: "Quantify Your Achievements",
      },
      {
        type: "paragraph",
        text: "ATS ranks candidates partly on relevance, but human reviewers who do see your CV respond to numbers. Replace vague descriptions ('improved performance') with quantified results ('reduced API response time by 40% through query optimization'). Both the ATS and the recruiter will reward you for it.",
      },
      {
        type: "heading",
        text: "Test Before You Submit",
      },
      {
        type: "paragraph",
        text: "Paste your CV text into a plain text editor. If it looks like a jumbled mess, an ATS will struggle to parse it too. Free tools like Jobscan let you compare your CV against a job description and highlight missing keywords.",
      },
    ],
  },
  {
    id: 6,
    category: "Career",
    title: "7 Tips to Ace Your Next Technical Interview",
    excerpt:
      "Technical interviews test more than just coding ability — they assess how you think. These seven strategies will help you stay calm, structured, and impressive under pressure.",
    image:
      "https://images.unsplash.com/photo-1573497491765-dccce02b29df?auto=format&fit=crop&w=800&q=80",
    author: "Assadujjaman Murad",
    date: "Mar 7, 2025",
    readTime: "6 min read",
    avatar: "M",
    content: [
      {
        type: "paragraph",
        text: "Technical interviews are uniquely stressful — you're expected to solve problems you've never seen before, out loud, while someone watches. The good news: like any skill, performance under this kind of pressure can be trained.",
      },
      {
        type: "heading",
        text: "1. Clarify Before You Code",
      },
      {
        type: "paragraph",
        text: "Never dive straight into writing code. Ask clarifying questions: What are the input constraints? Should I optimize for time or space? How should I handle edge cases? This demonstrates senior-level thinking and prevents you from building the wrong solution.",
      },
      {
        type: "heading",
        text: "2. Think Out Loud",
      },
      {
        type: "paragraph",
        text: "Interviewers aren't just evaluating your answer — they're evaluating your reasoning process. Narrate your thought process as you work. 'I'm thinking a hash map might help here because...' gives the interviewer something to engage with and shows you're not just guessing.",
      },
      {
        type: "heading",
        text: "3. Start with Brute Force",
      },
      {
        type: "paragraph",
        text: "Propose the naive O(n²) solution first, state its complexity, and then iteratively optimize. This shows you understand trade-offs and can improve incrementally — a much stronger signal than staring at the problem silently hoping the optimal solution appears.",
      },
      {
        type: "heading",
        text: "4. Know Your Data Structures",
      },
      {
        type: "paragraph",
        text: "The majority of interview problems reduce to a handful of patterns: sliding window, two pointers, BFS/DFS, dynamic programming, and hash maps. Mastering these patterns — not memorizing solutions — lets you recognize which tool to apply quickly.",
      },
      {
        type: "heading",
        text: "5. Test Your Code with Examples",
      },
      {
        type: "paragraph",
        text: "Once you have a solution, trace through a simple example by hand before declaring it complete. Then test edge cases: empty input, single element, negative numbers. Catching your own bugs impresses interviewers far more than getting it right on the first try.",
      },
      {
        type: "heading",
        text: "6. Research the Company",
      },
      {
        type: "paragraph",
        text: "System design and behavioral questions heavily favour candidates who've done their homework. Know the company's product, its scale, and recent engineering blog posts. Referencing these shows genuine interest and lets you tailor answers to the company's actual problems.",
      },
      {
        type: "heading",
        text: "7. Treat It as a Conversation",
      },
      {
        type: "paragraph",
        text: "The best interviews feel collaborative, not adversarial. Ask for hints if you're genuinely stuck — good interviewers want to see how you respond to guidance. When you receive feedback, engage with it rather than defending your initial approach. Coachability is a trait companies actively look for.",
      },
    ],
  },
  {
    id: 7,
    category: "Career",
    title: "Remote vs On-Site — Picking the Right Work Style for You",
    excerpt:
      "The flexibility of remote work sounds ideal, but it's not for everyone. Weigh the real pros and cons of both setups before accepting your next offer.",
    image:
      "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=800&q=80",
    author: "Assadujjaman Murad",
    date: "Feb 28, 2025",
    readTime: "5 min read",
    avatar: "M",
    content: [
      {
        type: "paragraph",
        text: "The pandemic forced an unplanned global experiment in remote work. Now that companies have settled into their post-pandemic policies, the choice between remote and on-site work is once again a real negotiation. Here's how to think through it honestly.",
      },
      {
        type: "heading",
        text: "The Case for Remote Work",
      },
      {
        type: "list",
        items: [
          "Zero commute: reclaiming 1–2 hours daily compounds into significant life quality gains.",
          "Geographic freedom: work for top companies without relocating to expensive tech hubs.",
          "Autonomy: structure your deep work blocks around your natural productivity peaks.",
          "Cost savings: lower spending on commuting, work attire, and lunches.",
        ],
      },
      {
        type: "heading",
        text: "The Hidden Costs of Remote Work",
      },
      {
        type: "paragraph",
        text: "Remote work demands self-discipline and a dedicated workspace. Without a clear boundary between work and home, many remote workers find themselves working longer hours, not fewer. Loneliness and isolation are real risks, especially for those who are extroverted or early in their careers.",
      },
      {
        type: "paragraph",
        text: "Visibility is another challenge. Promotions and high-impact projects often flow to the people who are top-of-mind. Remote workers must be more intentional about communicating their work, contributions, and ambitions.",
      },
      {
        type: "heading",
        text: "The Case for On-Site Work",
      },
      {
        type: "list",
        items: [
          "Faster onboarding: osmotic learning (overhearing conversations, watching experienced colleagues) is underrated.",
          "Clearer work/life boundary: leaving the office creates a natural off-switch.",
          "Spontaneous collaboration: hallway conversations often produce the best ideas.",
          "Mentorship: in-person relationships with senior colleagues accelerate growth, especially early in a career.",
        ],
      },
      {
        type: "heading",
        text: "Questions to Ask Yourself",
      },
      {
        type: "list",
        items: [
          "Do I have a quiet, dedicated workspace at home?",
          "Am I energized or drained by social interaction?",
          "Am I early in my career and still learning through observation?",
          "Does the role require real-time collaboration and quick feedback loops?",
          "How far is the office, and is the commute sustainable long-term?",
        ],
      },
      {
        type: "heading",
        text: "The Hybrid Middle Ground",
      },
      {
        type: "paragraph",
        text: "For many people, the answer is neither extreme. Hybrid setups — 2–3 days in office, the rest remote — capture most of the benefits of both. If you have the leverage, negotiating a hybrid arrangement on an otherwise on-site role is often more achievable than going fully remote.",
      },
    ],
  },
];

export default blogPosts;
