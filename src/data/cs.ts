import { Experience, Project, SkillCategory } from '@/types'

export const csExperience: Experience[] = [
  {
    role: 'Co-founder & Quantum Lead',
    organization: 'CarbonQapture',
    dateRange: 'Jul 2025 – Present',
    location: 'Blacksburg, VA',
    bullets: [
      'Co-founded and led a 7-member interdisciplinary team, applying agile practices to coordinate research, development, and R&D cycles, securing over $300 in university funding each semester.',
      'Designing and implementing a hybrid quantum-classical simulation pipeline integrating Qiskit and Cirq, demonstrating full-stack quantum software development from algorithm design to execution.',
    ],
    tags: ['Team Leadership', 'Qiskit', 'Cirq', 'Python', 'Software Architecture'],
    type: 'both',
  },
  {
    role: 'AI Developer',
    organization: 'Virginia Tech College of Engineering',
    dateRange: 'Jan 2025 – May 2025',
    location: 'Blacksburg, VA',
    bullets: [
      'Collaborated within an interdisciplinary team to design an AI-assisted navigation system enabling visually impaired individuals to explore tourist and museum spaces independently.',
      'Developed and deployed a prototype wearable device (Raspberry Pi–based necklace) integrating Microsoft Azure Computer Vision and a custom-trained Google Gemini model on museum artifacts for real-time environmental understanding.',
    ],
    tags: ['Azure Computer Vision', 'Google Gemini API', 'Raspberry Pi', 'Python', 'Embedded Systems'],
    type: 'cs',
  },
  {
    role: 'Research Assistant',
    organization: 'National Science Foundation',
    dateRange: 'Mar 2025 – Jul 2025',
    location: 'Blacksburg, VA',
    bullets: [
      'Advanced cryptographic research under a $247K NSF-funded grant by prototyping multivariate Goppa code integration into the McEliece cryptosystem.',
      'Reduced key size and improved decoding efficiency in post-quantum cryptographic implementations, contributing to NIST standardization efforts.',
    ],
    tags: ['Post-Quantum Cryptography', 'SageMath', 'Algorithm Design', 'Python', 'NIST'],
    type: 'both',
  },
]

export const csProjects: Project[] = [
  {
    name: 'Soteria',
    dateRange: 'Jan 2026',
    description: "Full-stack women's safety mobile application with real-time GPS tracking, SOS alerts, and AI-powered guidance, built with a modular service-layer architecture.",
    bullets: [
      'Developed a full-stack React Native (Expo + TypeScript) mobile app with modular service-layer architecture for authentication, location tracking, session management, and safety-circle coordination.',
      'Integrated Firebase, Google Places API, OSRM Routing, and OpenStreetMap for GPS tracking, route planning, and SOS alert notifications via EmailJS.',
      'Implemented an AI-powered chatbot using Google Gemini API to help users navigate app features through natural language.',
    ],
    techStack: ['React Native', 'Expo', 'TypeScript', 'Firebase', 'Google Places API', 'OSRM', 'EmailJS', 'Google Gemini API', 'Leaflet', 'Node.js'],
    type: 'cs',
  },
  {
    name: 'SilentVoice',
    dateRange: 'Dec 2025 – Present',
    description: 'Real-time ASL word and finger-spelling translation system framing sign language recognition as a sequence modeling problem under visual uncertainty.',
    bullets: [
      'Developing a computer vision and machine learning system to translate sign language gestures into natural language sentences.',
      'Developed a CNN-based finger-spelling recognition model to classify hand gesture images into alphabet characters, enabling real-time translation of sign language finger spelling into text.',
    ],
    techStack: ['Python', 'PyTorch', 'OpenCV', 'CNN', 'scikit-learn', 'NumPy', 'Computer Vision'],
    type: 'both',
  },
  {
    name: 'Qure AI',
    dateRange: 'Sept 2025',
    description: 'Hybrid quantum-classical drug discovery pipeline for meningitis, combining SVM classification with quantum molecular simulation to identify novel stable drug candidates.',
    bullets: [
      'Developed an SVM-based drug classification model achieving 90%+ prediction accuracy across four meningitis-causing bacterial datasets.',
      'Generated 22 novel drug candidates with ground-state energies 1.98× lower than existing drugs, indicating significantly higher molecular stability.',
    ],
    techStack: ['Python', 'scikit-learn', 'SVM', 'Qiskit', 'VQE', 'PySCF', 'NumPy', 'Pandas'],
    type: 'both',
  },
]

export const csSkills: SkillCategory[] = [
  {
    label: 'Languages & Frameworks',
    skills: ['Python', 'Java', 'C/C++', 'JavaScript', 'TypeScript', 'SQL', 'RISC-V Assembly'],
  },
  {
    label: 'Mobile & Frontend',
    skills: ['React Native', 'Expo', 'Firebase', 'Leaflet', 'OpenStreetMap'],
  },
  {
    label: 'Machine Learning & AI',
    skills: ['PyTorch', 'scikit-learn', 'OpenCV', 'CNN', 'SVM', 'Hugging Face', 'Google Gemini API'],
  },
  {
    label: 'Data & Scientific Computing',
    skills: ['NumPy', 'SciPy', 'Pandas', 'Matplotlib', 'PySCF', 'Jupyter'],
  },
  {
    label: 'Cloud & APIs',
    skills: ['Google Cloud Console', 'Firebase Console', 'Azure Computer Vision', 'Google Places API', 'EmailJS', 'OSRM Routing'],
  },
  {
    label: 'Developer Tools',
    skills: ['Git', 'Docker', 'Linux', 'Node.js', 'npm', 'VS Code'],
  },
]
