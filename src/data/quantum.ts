import { Experience, Project, SkillCategory } from '@/types'

export const quantumExperience: Experience[] = [
  {
    role: 'Co-founder & Quantum Lead',
    organization: 'CarbonQapture',
    dateRange: 'Jul 2025 – Present',
    location: 'Blacksburg, VA',
    bullets: [
      'Co-founded and led a 7-member interdisciplinary team focused on applying quantum computing and AI to carbon capture technologies, securing over $300 in university funding each semester to support R&D efforts.',
      'Designing and implementing a hybrid VQE-SQD algorithm for quantum chemistry simulations in Qiskit and Cirq to simulate Carbon Dioxide with Metal Organic Frameworks, enabling near-term quantum application testing.',
    ],
    tags: ['Qiskit', 'Cirq', 'VQE', 'SQD', 'Quantum Chemistry', 'Python'],
    type: 'quantum',
  },
  {
    role: 'Research Assistant',
    organization: 'National Science Foundation',
    dateRange: 'Mar 2025 – Jul 2025',
    location: 'Blacksburg, VA',
    bullets: [
      'Advanced cryptographic research under a $247K NSF-funded grant by analyzing multivariate Goppa code properties and prototyping their integration into the McEliece cryptosystem, strengthening resilience against quantum attacks.',
      'Integrated multivariate Goppa codes into the McEliece cryptosystem, improving decoding efficiency while validating resilience against quantum attacks, contributing to NIST standardization efforts.',
    ],
    tags: ['Post-Quantum Cryptography', 'McEliece', 'Goppa Codes', 'SageMath', 'NIST'],
    type: 'quantum',
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
    tags: ['Azure Computer Vision', 'Google Gemini', 'Raspberry Pi', 'Python', 'AI/ML'],
    type: 'both',
  },
  {
    role: 'Undergraduate Student Researcher',
    organization: 'Virginia Tech',
    dateRange: 'Dec 2024 – Mar 2025',
    location: 'Blacksburg, VA',
    bullets: [
      'Researched the McEliece cryptosystem for post-quantum encryption, focusing on security resilience against quantum algorithms, and implemented the cryptosystem in SageMath to validate performance and theoretical resistance.',
      "Verified Patterson's algorithm for decoding Goppa codes up to 4096-bit key lengths, demonstrating real-world applications of post-quantum cryptographic schemes.",
    ],
    tags: ["Patterson's Algorithm", 'McEliece', 'SageMath', 'Post-Quantum', 'Cryptography'],
    type: 'quantum',
  },
]

export const quantumProjects: Project[] = [
  {
    name: 'Q-Folio',
    dateRange: 'Jul 2025',
    description: 'Quantum algorithm-driven stock portfolio optimization demonstrating practical near-term quantum advantage on real-world financial datasets.',
    bullets: [
      'Implemented QAOA using IBM Qiskit to optimize stock portfolios using 100 days of market activity from Alpha Vantage API.',
      'Achieved ~20% reduction in portfolio variance compared to brute-force classical methods, demonstrating reduced risk in stock selection.',
    ],
    techStack: ['Qiskit', 'QAOA', 'Python', 'Alpha Vantage API', 'NumPy', 'Matplotlib'],
    type: 'quantum',
  },
  {
    name: 'Qure AI',
    dateRange: 'Sept 2025',
    description: 'Hybrid quantum-classical approach to drug discovery for meningitis, combining machine learning classification with VQE molecular simulation.',
    bullets: [
      'Developed an SVM-based drug classification model achieving 90%+ prediction accuracy across four meningitis-causing bacterial datasets.',
      'Applied Variational Quantum Eigensolver (VQE) algorithm to simulate ground-state energies of machine-learning-generated compounds.',
      'Generated 22 novel drug candidates with ground-state energies 1.98× lower than existing drugs, indicating significantly higher molecular stability.',
    ],
    techStack: ['Python', 'Qiskit', 'VQE', 'SVM', 'scikit-learn', 'PySCF', 'NumPy'],
    type: 'both',
  },
  {
    name: 'SilentVoice',
    dateRange: 'Dec 2025 – Present',
    description: 'Computer vision and machine learning system to translate sign language gestures into natural language sentences, framed as a sequence modeling problem under visual uncertainty.',
    bullets: [
      'Developing a CNN-based finger-spelling recognition model to classify hand gesture images into alphabet characters.',
      'Enabling real-time translation of ASL finger spelling into text through deep learning-based sequence modeling.',
    ],
    techStack: ['Python', 'PyTorch', 'CNN', 'OpenCV', 'Computer Vision', 'Deep Learning'],
    type: 'both',
  },
]

export const quantumSkills: SkillCategory[] = [
  {
    label: 'Quantum Frameworks',
    skills: ['Qiskit', 'Cirq', 'PennyLane', 'AWS Braket', 'IBM Quantum Cloud'],
  },
  {
    label: 'Quantum Algorithms',
    skills: ['VQE', 'QAOA', 'Hybrid VQE-SQD', 'Quantum Chemistry', 'Post-Quantum Cryptography', 'Quantum Finance'],
  },
  {
    label: 'Scientific Computing',
    skills: ['SageMath', 'PySCF', 'NumPy', 'SciPy', 'Matplotlib', 'Pandas'],
  },
  {
    label: 'Programming Languages',
    skills: ['Python', 'Java', 'C/C++', 'SQL', 'x86_64 Assembly'],
  },
  {
    label: 'Machine Learning',
    skills: ['PyTorch', 'SVM', 'scikit-learn', 'CNN', 'Deep Learning'],
  },
  {
    label: 'Developer Tools',
    skills: ['Git', 'Docker', 'Linux', 'Jupyter', 'Hugging Face', 'VS Code'],
  },
]
