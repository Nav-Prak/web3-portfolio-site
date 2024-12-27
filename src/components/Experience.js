const Experience = () => {
    const videos = [
        {
            title: 'Navigation Mesh',
            url: 'https://www.youtube.com/embed/n5y9-PIml2k?si=nTpOBIYpPkxMZV3q', // Replace with actual URL
            description: 'Demonstrates the implementation of navigation meshes for improved NPC pathfinding.',
        },
        {
            title: 'Network Asset Loading',
            url: 'https://www.youtube.com/embed/bZBMt55dy-8?si=K1_sf3gpkEPRZo7h', // Replace with actual URL
            description: 'Showcases network-based asset loading to enhance scalability and real-time updates.',
        },
        {
            title: 'Physics',
            url: 'https://www.youtube.com/embed/HgAO1UkPKt8?si=zB5bngsC8WfMjyb7', // Replace with actual URL
            description: 'Highlights refined physics mechanics for realistic interactions and behavior.',
        },
        {
            title: 'Frustum Culling',
            url: 'https://www.youtube.com/embed/RtG9_lpDeEk?si=-Pf-PjzD4qq1-I45', // Replace with actual URL
            description: 'Demonstrates optimization techniques using frustum culling for efficient rendering.',
        },
    ];

    return (
        <div className="experience">
            
            <h2>Projects</h2>
            <ul>
                <li>
                    <strong>Enhanced Game Engine Development</strong>
                    <ul>
                        <li>Developed advanced features for the Prime Engine as part of the CSCI-522 Game Engine Development course.</li>
                        <li>Refined physics mechanics to improve object interaction and behavior in 3D environments.</li>
                        <li>Enabled network-based asset loading to enhance scalability and real-time updates.</li>
                        <li>Implemented navigation meshes to improve pathfinding for non-player characters (NPCs).</li>
                    </ul>
                    <div className="video-gallery">
                        {videos.map((video, index) => (
                            <div key={index} className="video-card">
                                <h4>{video.title}</h4>
                                <iframe
                                    width="560"
                                    height="315"
                                    src={video.url}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                <p>{video.description}</p>
                            </div>
                        ))}
                    </div>
                </li>
                <li>
                    <strong>Search and Information Retrieval</strong>
                    <ul>
                        <li>Designed multithreaded web crawlers capable of efficiently gathering and indexing web content.</li>
                        <li>Created search engine evaluators and inverted indices to optimize query performance and scalability.</li>
                        <li>Leveraged Large Language Models (LLMs) and retrieval-augmented generation (RAG) frameworks to improve search accuracy and relevance.</li>
                    </ul>
                </li>
                <li>
                    <strong>Precision Agriculture with Drone Imagery</strong>
                    <ul>
                        <li>Utilized drone-captured imagery to analyze and monitor crop and pasture health for precision agriculture.</li>
                        <li>Applied advanced imaging and data analysis techniques to provide actionable insights for farmers.</li>
                        <li>Contributed to sustainable agricultural practices by improving resource allocation and crop yield predictions.</li>
                    </ul>
                </li>
                <li>
                    <strong>A Computational Analysis of Mahabharata</strong>
                    <ul>
                        <li>Applied Natural Language Processing (NLP) techniques to analyze structural and thematic elements of the epic Mahabharata.</li>
                        <li>Extracted insights about character interactions, sentiment analysis, and narrative patterns.</li>
                        <li>Developed visualizations to present data-driven findings in an engaging and informative manner.</li>
                    </ul>
                </li>
            </ul>
            <h2>Experience</h2>
            <ul>
                <li>
                    <strong>Software Development Engineer - Intel</strong>
                    <ul>
                        <li>Modernized C# applications from .NET Framework to .NET 8, contributing to critical functionality development.</li>
                        <li>Achieved 300K+ man hours productivity savings by deploying Chatbot enhancements, refining training data, and monitoring unhandled scenarios, earning the Q4’23 IT EOG Award.</li>
                    </ul>
                </li>
                <li>
                    <strong>Undergraduate Technical Intern - Intel</strong>
                    <ul>
                        <li>Resolved a long-pending issue, reducing tickets generated for the application by 100%, significantly improving efficiency.</li>
                        <li>Delivered innovative solutions exceeding expectations, driving high-impact business outcomes and contributing to a culture of excellence at Intel.</li>
                    </ul>
                </li>
                <li>
                    <strong>Intern - Virtually Testing Foundation</strong>
                    <ul>
                        <li>Collaborated with a team of three interns on cybersecurity projects, enhancing system security and reliability.</li>
                        <li>Performed virtualization of resources using Kubernetes, improving application performance by 20% through optimized resource management.</li>
                    </ul>
                </li>
            </ul>

        </div>
    );
}

export default Experience;
