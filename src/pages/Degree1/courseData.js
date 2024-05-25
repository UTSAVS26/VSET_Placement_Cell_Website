const courseData = [
    {
        name: 'Artificial Intelligence & Machine Learning',
        description: 'Learn the fundamentals and advanced concepts of AI and ML, including neural networks, natural language processing, and computer vision.',
        alias: 'AIML',
        syllabus: [
            
            {
                section: 1,
                content: [
                    { title: 'Introduction to AI', topics: ['Definition', 'History', 'Applications'] },
                    { title: 'Machine Learning Basics', topics: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning'] },
                ],
            },
            {
                section: 2,
                content: [
                    { title: 'Neural Networks', topics: ['Perceptron', 'Multilayer Perceptron', 'Backpropagation'] },
                    { title: 'Natural Language Processing', topics: ['Text Processing', 'Sentiment Analysis', 'Language Models'] },
                ],
            },
            {
                section: 3,
                content: [
                    { title: 'Computer Vision', topics: ['Image Processing', 'Object Detection', 'Convolutional Neural Networks'] },
                ],
            },
        ],
    },
    {
        name: 'Artificial Intelligence & Data Science',
        description: 'Explore the intersection of AI and data science to analyze and interpret complex data, build predictive models, and make data-driven decisions.',
        alias: 'AIDS',
        syllabus: [
            {
                section: 1,
                content: [
                    { title: 'Introduction to Data Science', topics: ['Data Collection', 'Data Cleaning', 'Data Visualization'] },
                    { title: 'Statistical Methods', topics: ['Probability', 'Hypothesis Testing', 'Regression'] },
                ],
            },
            {
                section: 2,
                content: [
                    { title: 'Data Mining', topics: ['Association Rules', 'Clustering', 'Classification'] },
                    { title: 'Big Data Technologies', topics: ['Hadoop', 'Spark', 'NoSQL Databases'] },
                ],
            },
            {
                section: 3,
                content: [
                    { title: 'Machine Learning Applications', topics: ['Predictive Modeling', 'Recommendation Systems', 'Anomaly Detection'] },
                ],
            },
        ],
    },
    {
        name: 'Industrial Internet of Things',
        description: 'Delve into the Industrial IoT to understand how interconnected devices and systems improve efficiency and productivity in industrial settings.',
        alias: 'IIOT',
        syllabus: [
            {
                section: 1,
                content: [
                    { title: 'Introduction to IoT', topics: ['IoT Architecture', 'IoT Platforms', 'Use Cases'] },
                    { title: 'Sensors and Actuators', topics: ['Types of Sensors', 'Actuator Mechanisms', 'Interfacing'] },
                ],
            },
            {
                section: 2,
                content: [
                    { title: 'Network Protocols', topics: ['MQTT', 'CoAP', 'HTTP/2'] },
                    { title: 'IoT Security', topics: ['Threats', 'Encryption', 'Authentication'] },
                ],
            },
            {
                section: 3,
                content: [
                    { title: 'Industrial IoT Applications', topics: ['Smart Manufacturing', 'Predictive Maintenance', 'Asset Tracking'] },
                ],
            },
        ],
    },
    {
        name: 'Computer Science & Engineering',
        description: 'Gain a comprehensive understanding of computer science and engineering principles, including software development, algorithms, and system design.',
        alias: 'CSE',
        syllabus: [
            {
                section: 1,
                content: [
                    { title: 'Introduction to Programming', topics: ['Programming Languages', 'Integrated Development Environments', 'Debugging'] },
                    { title: 'Data Structures', topics: ['Arrays', 'Linked Lists', 'Trees'] },
                ],
            },
            {
                section: 2,
                content: [
                    { title: 'Algorithms', topics: ['Sorting Algorithms', 'Search Algorithms', 'Graph Algorithms'] },
                    { title: 'Operating Systems', topics: ['Processes', 'Memory Management', 'File Systems'] },
                ],
            },
            {
                section: 3,
                content: [
                    { title: 'Database Systems', topics: ['Relational Databases', 'SQL', 'Normalization'] },
                ],
            },
        ],
    },
    {
        name: 'VLSI',
        description: 'Study Very-Large-Scale Integration (VLSI) technology to design and develop integrated circuits and microchips for various applications.',
        alias: 'VLSI',
        syllabus: [
            {
                section: 1,
                content: [
                    { title: 'Introduction to VLSI', topics: ['Moore\'s Law', 'VLSI Design Flow', 'Fabrication Process'] },
                    { title: 'Digital Design', topics: ['Combinational Logic', 'Sequential Logic', 'Timing Analysis'] },
                ],
            },
            {
                section: 2,
                content: [
                    { title: 'Analog Design', topics: ['MOSFETs', 'Operational Amplifiers', 'Analog Filters'] },
                    { title: 'VLSI Testing', topics: ['Fault Models', 'Test Generation', 'Design for Testability'] },
                ],
            },
            {
                section: 3,
                content: [
                    { title: 'VLSI Fabrication', topics: ['Lithography', 'Etching', 'Chemical Vapor Deposition'] },
                ],
            },
        ],
    },
];

export default courseData;  