
export const project = [
  {
    "essentialSeniorDeveloperProjects": [
      {
        "id": 1,
        "name": "Scalable SaaS Application",
        "whyItMatters": "Demonstrates system design, scalability, security, and business awareness",
        "coreFeatures": [
          "Authentication & Authorization (JWT / OAuth)",
          "Role-Based Access Control (Admin, User, Manager)",
          "Multi-tenant architecture",
          "Subscription & billing integration",
          "Audit logs and activity tracking"
        ],
        "techExpectations": {
          "frontend": ["React", "Next.js", "Tailwind CSS"],
          "backend": ["Node.js", "NestJS or Express"],
          "database": ["PostgreSQL", "Redis"],
          "infrastructure": ["Docker", "CI/CD", "Cloud deployment"]
        },
        "seniorSignals": [
          "Clean architecture (Domain-driven design)",
          "API versioning",
          "Scalable folder structure",
          "Error handling & observability"
        ]
      },
      {
        "id": 2,
        "name": "Enterprise Workflow & Automation System",
        "whyItMatters": "Shows ability to solve complex business logic and orchestration problems",
        "coreFeatures": [
          "Visual workflow builder",
          "Event-driven processing",
          "Background jobs and queues",
          "Approval chains and notifications",
          "State machine implementation"
        ],
        "techExpectations": {
          "backend": ["Node.js", "RabbitMQ or BullMQ"],
          "frontend": ["React", "Drag-and-drop UI"],
          "database": ["MongoDB or PostgreSQL"],
          "integration": ["Webhooks", "Third-party APIs"]
        },
        "seniorSignals": [
          "Decoupled services",
          "Asynchronous processing",
          "Resilient failure handling",
          "Well-documented APIs"
        ]
      },
      {
        "id": 3,
        "name": "High-Performance Data Dashboard",
        "whyItMatters": "Proves data handling, performance optimization, and decision-driven UI skills",
        "coreFeatures": [
          "Real-time data updates",
          "Advanced filtering and aggregation",
          "Custom data visualizations",
          "Exportable reports",
          "User personalization"
        ],
        "techExpectations": {
          "frontend": ["React", "Charting libraries"],
          "backend": ["Node.js", "GraphQL or REST"],
          "database": ["PostgreSQL", "Time-series data"],
          "performance": ["Caching", "Pagination", "Lazy loading"]
        },
        "seniorSignals": [
          "Optimized queries",
          "Frontend performance tuning",
          "Data-driven UX decisions",
          "Clear separation of concerns"
        ]
      }
    ]
  }
  
]

export const blog = [
  {
    topic: "Building a Full-Stack Hotel Management System from Scratch",
    projectArchitecture: ["React + Node.js/Express + MongoDB/PostgreSQL", "Role-based authentication (admin, staff, user)", "Room booking system with availability logic", "REST API endpoints with proper error handling", "Deployment (Vercel/Netlify + Heroku/Render)"],
    extras: ["Screenshots or GIFs of the app", "Code snippets of complex logic", "Link to GitHub repo"],
    titleExample: "How I Built a Full-Stack Hotel Booking System Using React, Node.js & MongoDB",
    date: "12-Jan-2025"
  },
  {
    topic: "Optimizing React Performance: 10 Real-Life Techniques",
    projectArchitecture: ["React memoization (React.memo, useMemo, useCallback)", "Lazy loading components and images", "Code splitting and dynamic imports", "Proper key usage in lists", "Reducing unnecessary re-renders"],
    extras: ["Benchmarks before/after optimization", "Demo links for live performance testing"],
    titleExample: "Boosting Your React App Performance: 10 Techniques I Use in Production",
    date: "22-April-2025"
  },
  {
    topic: "Full-Stack Authentication & Authorization Explained with JWT & Role-Based Access",
    projectArchitecture: ["JWT generation and verification", "Protecting API routes with middleware", "Role-based access in React (ProtectedRoute, Context API)", "Refresh tokens, logout, token expiration handling", "Best practices and common pitfalls"],
    extras: ["Diagram showing token flow", "Code snippets for both frontend and backend", "Tips for real-world deployment"],
    titleExample: "Mastering Full-Stack Authentication: JWT, Role-Based Access & Security Best Practices",
    date: "10-Dec-2025"
  }
]
