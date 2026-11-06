export type Project = {
  slug: string
  title: string
  year: string
  category: string
  summary: string
  image: string
  alt: string
  role: string
  duration: string
  team: string
  stack: string[]
  links?: { label: string; href: string }[]
  overview: string
  challenge?: string
  approach: { title: string; detail: string }[]
  architecture: { layer: string; detail: string }[]
  snippet?: { filename: string; code: string }
  outcomes?: { value: string; label: string }[]
  gallery?: { src: string; caption: string }[]
}

export const projects: Project[] = [
  {
    slug: 'thesis-project',
    title: 'Urban Waste Segregation System',
    year: '2025 — 2026',
    category: 'Deep Learning · Mobile & Web System',
    summary:
      'Developed an end-to-end intelligent waste classification system featuring a React Native mobile app, deep learning inference, and an administrative dashboard for monitoring and analytics.',
    image: '/images/projects/thesis-app-home.png',
    alt: 'Urban waste segregation mobile application home screen displaying recycling statistics and real-time scanner',
    role: 'Full-stack Developer & ML Researcher',
    duration: 'July 2025 — Apr 2026',
    team: 'Graduation Thesis · KMITL',
    stack: ['React Native', 'Express.js', 'Python', 'PostgreSQL', 'Docker', 'Tailwind CSS'],
    links: [],
    overview:
      'This project presents an integrated solution for urban waste sorting composed of a high-precision React Native mobile client for citizens and a full administrative dashboard for municipal managers. Evaluated state-of-the-art vision models (MobileNetV3, GhostNetV2, ResNet101, MobileViT-S, EfficientNetV2) with fine-tuning and data augmentation to automate classification, cultivate proper disposal habits, and eliminate sorting errors in recycling pipelines. Accepted for publication at ITC-CSCC 2026.',
    challenge:
      'Consumer devices face varying network conditions and limited hardware compute, while real-world waste items exhibit severe visual diversity, occlusions, and packaging degradation. The system required near real-time mobile classification accuracy while feeding centralized analytics to an administrative operations center.',
    approach: [
      {
        title: 'Optimized Vision Backbone',
        detail:
          'Evaluated lightweight CNN and Vision Transformer architectures (MobileNetV3, GhostNetV2, MobileViT-S), achieving high classification accuracy with low inference latency suitable for edge deployment.',
      },
      {
        title: 'Decoupled Mobile & API Architecture',
        detail:
          'Engineered a React Native camera interface communicating with a resilient Express.js API, handling image preprocessing, asynchronous batch logging, and immediate user guidance.',
      },
      {
        title: 'Centralized Admin Dashboard',
        detail:
          'Built an administrative web application for real-time tracking of waste distribution, model confidence distribution, categorization statistics, and audit verification.',
      },
    ],
    architecture: [
      { layer: 'Mobile Client', detail: 'React Native (iOS & Android) with interactive camera scanning and recycling tips' },
      { layer: 'Admin Portal', detail: 'React & Tailwind CSS web dashboard for waste telemetry and dataset management' },
      { layer: 'API Gateway', detail: 'Express.js REST API with multipart upload streaming and token authentication' },
      { layer: 'ML Pipeline', detail: 'Python (PyTorch / TensorFlow) fine-tuning pipeline with augmented datasets' },
      { layer: 'Data Storage', detail: 'PostgreSQL relational database for user logs, location stamps, and stats' },
      { layer: 'Deployment', detail: 'Docker containerized backend services with automated CI/CD' },
    ],
    snippet: {
      filename: 'services/wasteClassifier.ts',
      code: `export async function classifyWasteStream(
  imageBuffer: Buffer,
  metadata: { userId: string; location?: { lat: number; lng: number } }
): Promise<ClassificationResult> {
  const preprocessed = await preprocessImageTensor(imageBuffer, {
    targetWidth: 224,
    targetHeight: 224,
    normalize: true,
  })

  // Evaluated across GhostNetV2 and MobileNetV3 backbones
  const inference = await visionInferenceModel.predict(preprocessed)
  const category = mapLabelToCategory(inference.topClassId)

  await db.classificationLog.create({
    data: {
      userId: metadata.userId,
      predictedClass: category.name,
      confidenceScore: inference.confidence,
      isRecyclable: category.isRecyclable,
      coordinates: metadata.location,
      createdAt: new Date(),
    },
  })

  return {
    category: category.name,
    confidence: inference.confidence,
    guidelines: category.disposalInstruction,
    recyclable: category.isRecyclable,
  }
}`,
    },
    outcomes: [
      { value: 'ITC-CSCC 2026', label: 'Accepted for publication at international conference' },
      { value: '5 Backbones', label: 'Benchmarked (MobileNet, GhostNet, EfficientNet, MobileViT)' },
      { value: '98%+', label: 'Sorting accuracy on benchmarked urban waste streams' },
    ],
    gallery: [
      { src: '/images/projects/Screenshot 2026-03-25 130549.png', caption: 'Administrative portal: Overview analytics & system telemetry' },
      { src: '/images/projects/Screenshot 2026-03-25 130643.png', caption: 'Waste category classification rules & dataset metrics' },
      { src: '/images/projects/Screenshot 2026-03-25 130712.png', caption: 'Model evaluation performance & confusion matrix insights' },
      { src: '/images/projects/Screenshot 2026-03-25 130738.png', caption: 'User submission audit log & validation panel' },
      { src: '/images/projects/Screenshot_20260325_131427.png', caption: 'Mobile application: Welcome screen & user onboarding' },
      { src: '/images/projects/Screenshot_20260325_131505.png', caption: 'Mobile application: Real-time camera scanner & item recognition' },
      { src: '/images/projects/Screenshot_20260325_131741.png', caption: 'Mobile application: Educational sorting guide & item breakdown' },
      { src: '/images/projects/Screenshot_20260325_131849.png', caption: 'Mobile application: User recycling history & impact statistics' },
    ],
  },
  {
    slug: 'aerocast',
    title: 'Aerocast',
    year: '2024',
    category: 'Environmental Tech · Web Platform',
    summary:
      'A comprehensive weather and PM2.5 forecasting web application built with Next.js and MongoDB, integrating OpenWeather API and OpenStreetMap for interactive global telemetry.',
    image: '/images/projects/aerocast.png',
    alt: 'Aerocast weather forecast interface showing live temperature, PM2.5 levels, and global map',
    role: 'Full-stack Developer',
    duration: 'Dec 2024 — Dec 2024',
    team: 'Independent Project',
    stack: ['Next.js', 'MongoDB', 'JavaScript', 'Tailwind CSS', 'OpenWeather API'],
    links: [],
    overview:
      'Aerocast is a modern meteorological web application delivering real-time weather analytics and PM2.5 particulate monitoring. Combining data from the OpenWeather API with OpenStreetMap spatial coordinates, it empowers users to explore global climate patterns, monitor local atmospheric health conditions, and bookmark favorite cities for personalized environmental tracking.',
    approach: [
      {
        title: 'Geospatial Map Integration',
        detail:
          'Utilized OpenStreetMap with customized vector overlays to display environmental metrics across global coordinates smoothly on both mobile and desktop screens.',
      },
      {
        title: 'Air Quality Translation Algorithm',
        detail:
          'Engineered a health recommendation engine that converts raw PM2.5 micrograms per cubic meter into actionable health advisories for children, seniors, and active individuals.',
      },
      {
        title: 'Persistent Personalization',
        detail:
          'Configured MongoDB storage for saved cities, enabling users to toggle between home cities and travel destinations with instant cached updates.',
      },
    ],
    architecture: [
      { layer: 'Frontend UI', detail: 'Next.js App Router, React Server Components, Tailwind CSS design system' },
      { layer: 'Mapping Engine', detail: 'OpenStreetMap integration with interactive city markers and coordinate lookup' },
      { layer: 'Data Layer', detail: 'MongoDB database storing saved cities, search history, and cached forecast responses' },
      { layer: 'External APIs', detail: 'OpenWeather Map API & Air Pollution API with geocoding integration' },
      { layer: 'Hosting', detail: 'Deployed on Vercel with serverless edge caching for API responses' },
    ],
    gallery: [
      { src: '/images/projects/aerocast.png', caption: 'Aerocast weather overview: Real-time telemetry, map, and daily breakdown' },
    ],
  },
  {
    slug: 'offlearn',
    title: 'OFFlearn',
    year: '2024',
    category: 'EdTech · Learning Management System',
    summary:
      'A full-featured learning management system built with Django and Tailwind CSS, allowing instructors to manage courses, upload lessons, and conduct dynamic multi-format quizzes.',
    image: '/images/projects/offlearn.png',
    alt: 'OFFlearn learning management dashboard showing courses, syllabus, and quiz modules',
    role: 'Full-stack Developer',
    duration: 'Sep 2024 — Oct 2024',
    team: 'Full-stack Project',
    stack: ['Django', 'Python', 'Tailwind CSS', 'JavaScript', 'HTML', 'PostgreSQL'],
    links: [],
    overview:
      'OFFlearn is a comprehensive Learning Management System (LMS) developed using Django, HTML, Tailwind CSS, and JavaScript. The platform bridges educators and learners through structured course authoring, hierarchical lesson topics, multimedia courseware uploads, and an automated assessment engine featuring multiple-choice and essay quizzes.',
    approach: [
      {
        title: 'Role-Based Access Control',
        detail:
          'Structured strict Django permission middleware separating administrator, instructor, and student capabilities across all endpoints and views.',
      },
      {
        title: 'Dynamic Assessment Engine',
        detail:
          'Constructed interactive quiz components supporting automated multiple-choice scoring and manual instructor grading workflows for open-ended essay questions.',
      },
      {
        title: 'Modern Accessible UI',
        detail:
          'Designed a clear, modern course layout using Tailwind CSS with responsive navigation for seamless viewing across smartphones, tablets, and desktop workstations.',
      },
    ],
    architecture: [
      { layer: 'Backend Framework', detail: 'Django MVC architecture with optimized querysets and session authentication' },
      { layer: 'Frontend Layer', detail: 'Django Templates styled with Tailwind CSS and modular JavaScript' },
      { layer: 'Database', detail: 'Relational database schema managing users, courses, topics, questions, and grades' },
      { layer: 'Asset Management', detail: 'Secure file upload and media distribution pipelines for course documents' },
      { layer: 'Security', detail: 'CSRF protection, role authorization, and input sanitization' },
    ],
    gallery: [
      { src: '/images/projects/offlearn.png', caption: 'Course overview and interactive curriculum browser' },
      { src: '/images/projects/2.png', caption: 'Instructor course management panel and lesson structure' },
      { src: '/images/projects/3.png', caption: 'Interactive quiz module with multiple-choice questions' },
      { src: '/images/projects/4.png', caption: 'Student learning portal with enrolled courses' },
      { src: '/images/projects/5.png', caption: 'Quiz evaluation and performance review summary' },
    ],
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug)
  return projects[(index + 1) % projects.length]
}
