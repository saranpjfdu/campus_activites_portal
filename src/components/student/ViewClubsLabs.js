import React, { useState } from 'react';
import './ViewClubsLabs.css';


const clubsData = [
  {
    id: 1,
    name: 'Bureau Of Overseas Education',
    logo: '/club/1-clubs.jpg',
    description: 'We dedicate ourselves to providing you with the best guidance for overseas education.',
    vision: 'To create awareness among students about global education opportunities.',
    mission: 'To motivate the students to pursue their dreams abroad.',
    objectives: [
      'To act as a springboard for students seeking overseas education.',
      'To create awareness about the benefits of studying abroad.',
    ],
    inCharge: 'Dr. Anitha Kumar',
    activities: [
      { name: 'Overseas Education Seminar', date: '2024-02-12' },
      { name: 'University Admission Guidance', date: '2024-03-22' },
    ],
  },
  {
    id: 2,
    name: 'Code Circle',
    logo: '/club/2-clubs.jpg',
    description: 'The Code Circle club focuses on enhancing coding skills and project development.',
    vision: 'To inspire coding among students and create innovative solutions.',
    mission: 'To foster a coding culture through collaboration and learning.',
    objectives: [
      'To create opportunities for learning coding languages and frameworks.',
      'To build projects and participate in national and international competitions.',
    ],
    inCharge: 'Mr. Ravi Shankar',
    activities: [
      { name: 'Hackathon 2024', date: '2024-01-15' },
      { name: 'AI Workshop', date: '2024-05-10' },
    ],
  },
  {
    id: 3,
    name: 'Fine Arts Club',
    logo: '/club/3-clubs.jpg',
    description: 'This club promotes creativity through various art forms.',
    vision: 'To nurture artistic talents and promote art awareness.',
    mission: 'To provide a platform for students to express themselves artistically.',
    objectives: [
      'To conduct workshops in various art forms including painting and sculpture.',
      'To organize exhibitions showcasing student artwork.',
    ],
    inCharge: 'Ms. Priya Sharma',
    activities: [
      { name: 'Art Exhibition 2024', date: '2024-04-20' },
      { name: 'Painting Workshop', date: '2024-03-05' },
    ],
  },
  {
    id: 4,
    name: 'Photo Hub',
    logo: '/club/4-clubs.jpg',
    description: 'A platform for photography enthusiasts to share and improve their skills.',
    vision: 'To capture and celebrate moments through photography.',
    mission: 'To provide resources and workshops for aspiring photographers.',
    objectives: [
      'To organize photo walks and contests.',
      'To collaborate with professionals for skill development.',
    ],
    inCharge: 'Mr. Aman Singh',
    activities: [
      { name: 'Annual Photo Contest', date: '2024-03-10' },
      { name: 'Photography Workshop', date: '2024-04-15' },
    ],
  },
  {
    id: 5,
    name: 'Muthamizh Mandram',
    logo: '/club/5-clubs.jpg',
    description: 'Muthamil Mandram is exclusively meant for our mother Tamil. In this drastic and developing world, we aim to take Tamil culture and heritage to future generations and develop skills like speaking, poem writing, and debate. Our members work together with great interest and love for Tamil, conducting music concerts and plays to promote Tamil arts. The "Pongal festival" at our Bannari Amman Institute of Technology showcases our commitment to preserving Tamil culture through various activities.',
    vision: 'To create growth, impact and opportunity around the community.',
    mission: ['To bring out the talents of the students in the tamil language and showcase it out to the world thus enhancing the progress of the society.',
      'To provide the enlightenment of the Tamil to all minds.',],
    objectives: [
      'To bring out the talents of the students in the tamil language and showcase it out to the world thus enhancing the progress of the society.',
      'To provide the enlightenment of the Tamil to all minds.',
      'To improve the social integrity among students.',
    ],
    inCharge: 'Ms. Neha Jain',
    activities: [
      { name: 'Annual Debate Competition', date: '2024-02-25' },
      { name: 'Debate Workshops', date: '2024-05-20' },
    ],
  },
  {
    id: 6,
    name: 'Music Club',
    logo: '/club/6-clubs.jpg',
    description: 'A club for music lovers to explore and create music together.',
    vision: 'To celebrate and promote musical talents within the campus.',
    mission: 'To provide a platform for musical expression and collaboration.',
    objectives: [
      'To organize music events and performances.',
      'To facilitate workshops with experienced musicians.',
    ],
    inCharge: 'Mr. Rohan Mehta',
    activities: [
      { name: 'Annual Music Fest', date: '2024-03-30' },
      { name: 'Guitar Workshop', date: '2024-05-15' },
    ],
  },
  {
    id: 7,
    name: 'Geo Club',
    logo: '/club/7-clubs.jpg',
    description: 'Dedicated to promoting sustainability and environmental awareness.',
    vision: 'To create a greener and cleaner campus environment.',
    mission: 'To engage students in environmental conservation activities.',
    objectives: [
      'To organize clean-up drives and tree plantation events.',
      'To raise awareness about environmental issues.',
    ],
    inCharge: 'Dr. Suman Rao',
    activities: [
      { name: 'Campus Clean-Up Day', date: '2024-04-01' },
      { name: 'Tree Plantation Drive', date: '2024-03-15' },
    ],
  },
  {
    id: 8,
    name: 'Kani Tamil Peravai',
    logo: '/club/8-clubs.jpg',
       vision: 'தமிழ் இணையக் கல்விக்கழகத்தின் பரப்புரை அலகே கணித்தமிழ்ப் பேரவை ஆகும். கல்லூரிகள்தோறும் கணித்தமிழ்ப் பேரவை என்பது தமிழக அரசின் கொள்கை முடிவு ஆகும். பண்ணாரி அம்மன் கணித்தமிழ்ப் பேரவையானது 2016 இல் இருந்து உருவாக்கப்பட்டது.',
    mission: 'கணித்தமிழ்ப் பேரவையானது, இணையத்தில் தமிழின் பங்களிப்பை வளப்படுத்துதல், வலுப்படுத்துதல் கணித் தமிழ் மற்றும் தமிழ் பயன்பாட்டு மென்பொருள்களை உருவாக்கம் செய்ய ஊக்குவித்தல்.',
    
    objectives: [
      'மாணவர்களுக்கு அகநிலை பயிற்சி அளித்தல்.',
      'கணிப்பொறியில் தமிழ் உள்ளீட்டு பயிற்சியினை ஆசிரியர்கள், மாணவர்கள், கணிப்பொறி ஆர்வலர்களுக்கு வழங்குதல் கட்டற்ற மென்பொருள் பயன்பாட்டை முன்னெடுத்தல்.',
    ],
    inCharge: 'Ms. Lata Singh',
    activities: [
      { name: 'Cultural Fest 2024', date: '2024-02-15' },
      { name: 'International Day Celebration', date: '2024-04-25' },
    ],
  },
  {
    id: 9,
    name: 'Sports Club',
    logo: '/club/9-clubs.jpg',
    description: 'To explore the future of food and their design which is going to be planetary.',
    vision: 'To create awareness among students related to food safety, standards and food waste management.',
    mission: 'To explain the students about the importance of recycling process based on food waste by making the product edible to use.',
    objectives: [
      'To motivate the students towards Maintenance of hygiene in food.',
      'To creating awareness on food safety and standards',
    ],
    inCharge: 'Mr. Vikram Sharma',
    activities: [
      { name: 'Inter-College Sports Meet', date: '2024-03-18' },
      { name: 'Yoga Workshop', date: '2024-05-05' },
    ],
  },
  {
    id: 10,
    name: 'Great Minds Club',
    logo: '/club/10-clubs.jpg',
    description: 'In an endeavor to create an organization that helps students recognize and nourish their talents to bring the best out of them,',
    vision: 'To nurture acting skills and promote theatrical performances.',
    mission: 'To provide a platform for students to showcase their talent.',
    objectives: [
      'To organize plays and drama workshops.',
      'To participate in drama festivals and competitions.',
    ],
    inCharge: 'Ms. Anjali Desai',
    activities: [
      { name: 'Annual Drama Festival', date: '2024-03-22' },
      { name: 'Acting Workshop', date: '2024-04-10' },
    ],
  },
  {
    id: 11,
    name: 'Language Excellence And Performance club',
    logo: '/club/11-clubs.jpg',
    description: 'A haven for book lovers and aspiring writers.',
    vision: 'To foster a love for literature and creative writing.',
    mission: 'To conduct book discussions and writing workshops.',
    objectives: [
      'To organize literary events and contests.',
      'To provide resources for budding writers.',
    ],
    inCharge: 'Mr. Ashish Patel',
    activities: [
      { name: 'Book Fair 2024', date: '2024-02-28' },
      { name: 'Writing Workshop', date: '2024-04-20' },
    ],
  },
  {
    id: 12,
    name: 'Makkal Sindhanai Peravai',
    logo: '/club/12-clubs.jpg',
    description: 'Makkal Sinthani Peravai (MSP) of Bannari Amman Institute of Technology, Sathyamangalam, Erode is a service club under Stalin Gunasekaran founder of a non-profitable organization ‘Makkal Sindhani Peravai-Erode’. Makkal Sinthanai Peravai has introduced G.D. Naidu Award for the best scientific research. It aims at developing student’s personality through service. Students show their excellent display of skill at various events being held in both inter and intra states.',
    vision: 'To provide the sustainability environment to motivate the youth.',
    mission: 'Aside from our academic goals, we seek to create a comfortable social atmosphere for our members to surround themselves with others in their majors.',
    objectives: [
      'To encourage the enthusiasm of students to develop the leadership qualities.',
      'To develop art of speaking among students.',
      'To identify the innovative young minds and energize them.',
      'To learn to respect people and how to fulfill their responsibilities to serve the community.',
    ],
    inCharge: 'Ms. Rhea Kapoor',
    activities: [
      { name: 'Annual Dance Competition', date: '2024-05-30' },
      { name: 'Dance Workshop', date: '2024-06-10' },
    ],
  },
  {
    id: 13,
    name: 'Math Club',
    logo: '/club/13-clubs.jpg',
    description: 'Math club in Bannari Amman Institute of Technology commenced in the year of 2013. The MATH CLUB of BIT is always instrumental in organizing events for the goodness and betterment of the student community. Math club of BIT has also organized a hands-on training on Solving RUBIK CUBE. Testing identifies gaps in knowledge, so that Quiz competitions will be conducted.',
    vision: 'To be an innovative, sustainable model of academic excellence that creates well-rounded and lifelong learners.To empower students with technological skills and knowledge.',
    mission: 'The purpose of the Math Club is to organize people who like Math, allow for its members to interact, promote mathematics as a tool for learning.',
    objectives: [
      'Learn and apply knowledge of mathematics that relate to engineering fields.',
      'Foster an interest in learning both traditional and modern concepts of mathematics and apply them appropriately in providing technological solutions.',
    ],
    inCharge: 'Mr. Sameer Joshi',
    activities: [
      { name: 'Tech Expo 2024', date: '2024-04-30' },
      { name: 'Robotics Workshop', date: '2024-06-15' },
    ],
  },
];

const labsData = [
  {
    id: 1,
    name: 'AI Industrial Lab',
    logo: '/labs/lab-3.png',
    description: 'Focused on applying AI to industrial problems...',
    vision: 'To lead the AI revolution...',
    mission: 'To develop industrial solutions with AI...',
    objectives: [
      'To provide hands-on experience with AI...',
      'To foster industry collaboration...',
    ],
    inCharge: 'Dr. Kumaravel',
    activities: [
      { name: 'AI Research Symposium', date: '2024-04-12' },
      { name: 'Industrial AI Workshop', date: '2024-06-05' },
    ],
  },
  {
    id: 2,
    name: 'Robotics Lab',
    logo: '/labs/lab-1.png',
    description: 'This lab works on robotics projects...',
    vision: 'To innovate in the field of robotics...',
    mission: 'To build advanced robotic systems...',
    objectives: [
      'To provide a platform for robotics enthusiasts...',
      'To organize workshops and competitions...',
    ],
    inCharge: 'Dr. Nithin',
    activities: [
      { name: 'Robotics Expo', date: '2024-03-15' },
      { name: 'Automation Workshop', date: '2024-07-20' },
    ],
  },
  {
    id: 3,
    name: 'Sensors and Tamil Computing',
    logo: '/labs/lab-2.jpg',
    description: 'Dedicated to building embedded system solutions...',
    vision: 'To design and innovate in the field of embedded systems...',
    mission: 'To provide hands-on learning on embedded system technologies...',
    objectives: [
      'To foster collaboration in designing real-time embedded systems...',
      'To organize workshops and projects in embedded development...',
    ],
    inCharge: 'Dr. Prakash Kumar',
    activities: [
      { name: 'Embedded Systems Hackathon', date: '2024-02-22' },
      { name: 'IoT & Embedded Systems Workshop', date: '2024-06-10' },
    ],
  },
  {
    id: 4,
    name: 'Hackathon Lab',
    logo: '/labs/lab-4.png',
    description: 'Dedicated to building embedded system solutions...',
    vision: 'To design and innovate in the field of embedded systems...',
    mission: 'To provide hands-on learning on embedded system technologies...',
    objectives: [
      'To foster collaboration in designing real-time embedded systems...',
      'To organize workshops and projects in embedded development...',
    ],
    inCharge: 'Dr. Prakash Kumar',
    activities: [
      { name: 'Embedded Systems Hackathon', date: '2024-02-22' },
      { name: 'IoT & Embedded Systems Workshop', date: '2024-06-10' },
    ],
  },
  {
    id: 5,
    name: 'Printed Circuit Board(PCB) Lab',
    logo: '/labs/lab-5.png',
    description: 'Dedicated to building embedded system solutions...',
    vision: 'To design and innovate in the field of embedded systems...',
    mission: 'To provide hands-on learning on embedded system technologies...',
    objectives: [
      'To foster collaboration in designing real-time embedded systems...',
      'To organize workshops and projects in embedded development...',
    ],
    inCharge: 'Dr. Prakash Kumar',
    activities: [
      { name: 'Embedded Systems Hackathon', date: '2024-02-22' },
      { name: 'IoT & Embedded Systems Workshop', date: '2024-06-10' },
    ],
  },
  {
    id: 6,
    name: 'Embedded Technology Lab',
    logo: '/labs/lab-6.png',
    description: 'Dedicated to building embedded system solutions...',
    vision: 'To design and innovate in the field of embedded systems...',
    mission: 'To provide hands-on learning on embedded system technologies...',
    objectives: [
      'To foster collaboration in designing real-time embedded systems...',
      'To organize workshops and projects in embedded development...',
    ],
    inCharge: 'Dr. Prakash Kumar',
    activities: [
      { name: 'Embedded Systems Hackathon', date: '2024-02-22' },
      { name: 'IoT & Embedded Systems Workshop', date: '2024-06-10' },
    ],
  },
  {
    id: 7,
    name: 'Internet Of Things Lab',
    logo: '/labs/lab-7.png',
    description: 'Dedicated to building embedded system solutions...',
    vision: 'To design and innovate in the field of embedded systems...',
    mission: 'To provide hands-on learning on embedded system technologies...',
    objectives: [
      'To foster collaboration in designing real-time embedded systems...',
      'To organize workshops and projects in embedded development...',
    ],
    inCharge: 'Dr. Prakash Kumar',
    activities: [
      { name: 'Embedded Systems Hackathon', date: '2024-02-22' },
      { name: 'IoT & Embedded Systems Workshop', date: '2024-06-10' },
    ],
  },
  {
    id: 8,
    name: 'Electrical Drives',
    logo: '/labs/lab-8.jpg',
    description: 'Dedicated to building embedded system solutions...',
    vision: 'To design and innovate in the field of embedded systems...',
    mission: 'To provide hands-on learning on embedded system technologies...',
    objectives: [
      'To foster collaboration in designing real-time embedded systems...',
      'To organize workshops and projects in embedded development...',
    ],
    inCharge: 'Dr. Prakash Kumar',
    activities: [
      { name: 'Embedded Systems Hackathon', date: '2024-02-22' },
      { name: 'IoT & Embedded Systems Workshop', date: '2024-06-10' },
    ],
  },
  {
    id: 9,
    name: 'Artificial Intelligence',
    logo: '/labs/lab-9.png',
    description: 'Dedicated to building embedded system solutions...',
    vision: 'To design and innovate in the field of embedded systems...',
    mission: 'To provide hands-on learning on embedded system technologies...',
    objectives: [
      'To foster collaboration in designing real-time embedded systems...',
      'To organize workshops and projects in embedded development...',
    ],
    inCharge: 'Dr. Prakash Kumar',
    activities: [
      { name: 'Embedded Systems Hackathon', date: '2024-02-22' },
      { name: 'IoT & Embedded Systems Workshop', date: '2024-06-10' },
    ],
  },
  {
    id: 10,
    name: 'Data Science Lab',
    logo: '/labs/lab-10.jpg',
    description: 'Dedicated to building embedded system solutions...',
    vision: 'To design and innovate in the field of embedded systems...',
    mission: 'To provide hands-on learning on embedded system technologies...',
    objectives: [
      'To foster collaboration in designing real-time embedded systems...',
      'To organize workshops and projects in embedded development...',
    ],
    inCharge: 'Dr. Prakash Kumar',
    activities: [
      { name: 'Embedded Systems Hackathon', date: '2024-02-22' },
      { name: 'IoT & Embedded Systems Workshop', date: '2024-06-10' },
    ],
  },
  {
    id: 11,
    name: 'Full Stack',
    logo: '/labs/lab-11.jpg',
    description: 'Dedicated to building embedded system solutions...',
    vision: 'To design and innovate in the field of embedded systems...',
    mission: 'To provide hands-on learning on embedded system technologies...',
    objectives: [
      'To foster collaboration in designing real-time embedded systems...',
      'To organize workshops and projects in embedded development...',
    ],
    inCharge: 'Dr. Prakash Kumar',
    activities: [
      { name: 'Embedded Systems Hackathon', date: '2024-02-22' },
      { name: 'IoT & Embedded Systems Workshop', date: '2024-06-10' },
    ],
  },
  {
    id: 12,
    name: 'Cloud&Cyber Security Lab',
    logo: '/labs/lab-12.png',
    description: 'Dedicated to building embedded system solutions...',
    vision: 'To design and innovate in the field of embedded systems...',
    mission: 'To provide hands-on learning on embedded system technologies...',
    objectives: [
      'To foster collaboration in designing real-time embedded systems...',
      'To organize workshops and projects in embedded development...',
    ],
    inCharge: 'Dr. Prakash Kumar',
    activities: [
      { name: 'Embedded Systems Hackathon', date: '2024-02-22' },
      { name: 'IoT & Embedded Systems Workshop', date: '2024-06-10' },
    ],
  },
  {
    id: 13,
    name: 'XR Lab',
    logo: '/labs/lab-13.png',
    description: 'Dedicated to building embedded system solutions...',
    vision: 'To design and innovate in the field of embedded systems...',
    mission: 'To provide hands-on learning on embedded system technologies...',
    objectives: [
      'To foster collaboration in designing real-time embedded systems...',
      'To organize workshops and projects in embedded development...',
    ],
    inCharge: 'Dr. Prakash Kumar',
    activities: [
      { name: 'Embedded Systems Hackathon', date: '2024-02-22' },
      { name: 'IoT & Embedded Systems Workshop', date: '2024-06-10' },
    ],
  },
  {
    id: 14,
    name: 'Blockchain Technology Lab',
    logo: '/labs/lab-14.png',
    description: 'Dedicated to building embedded system solutions...',
    vision: 'To design and innovate in the field of embedded systems...',
    mission: 'To provide hands-on learning on embedded system technologies...',
    objectives: [
      'To foster collaboration in designing real-time embedded systems...',
      'To organize workshops and projects in embedded development...',
    ],
    inCharge: 'Dr. Prakash Kumar',
    activities: [
      { name: 'Embedded Systems Hackathon', date: '2024-02-22' },
      { name: 'IoT & Embedded Systems Workshop', date: '2024-06-10' },
    ],
  },
  {
    id: 15,
    name: 'Bioprospecting Cell',
    logo: '/labs/lab-15.png',
    description: 'Dedicated to building embedded system solutions...',
    vision: 'To design and innovate in the field of embedded systems...',
    mission: 'To provide hands-on learning on embedded system technologies...',
    objectives: [
      'To foster collaboration in designing real-time embedded systems...',
      'To organize workshops and projects in embedded development...',
    ],
    inCharge: 'Dr. Prakash Kumar',
    activities: [
      { name: 'Embedded Systems Hackathon', date: '2024-02-22' },
      { name: 'IoT & Embedded Systems Workshop', date: '2024-06-10' },
    ],
  },
  {
    id: 16,
    name: 'Bioproduct Innovation Cell',
    logo: '/labs/lab-16.png',
    description: 'Dedicated to building embedded system solutions...',
    vision: 'To design and innovate in the field of embedded systems...',
    mission: 'To provide hands-on learning on embedded system technologies...',
    objectives: [
      'To foster collaboration in designing real-time embedded systems...',
      'To organize workshops and projects in embedded development...',
    ],
    inCharge: 'Dr. Prakash Kumar',
    activities: [
      { name: 'Embedded Systems Hackathon', date: '2024-02-22' },
      { name: 'IoT & Embedded Systems Workshop', date: '2024-06-10' },
    ],
  },
  {
    id: 17,
    name: 'Smart Agriculture Lab',
    logo: '/labs/lab-17.jpg',
    description: 'Dedicated to building embedded system solutions...',
    vision: 'To design and innovate in the field of embedded systems...',
    mission: 'To provide hands-on learning on embedded system technologies...',
    objectives: [
      'To foster collaboration in designing real-time embedded systems...',
      'To organize workshops and projects in embedded development...',
    ],
    inCharge: 'Dr. Prakash Kumar',
    activities: [
      { name: 'Embedded Systems Hackathon', date: '2024-02-22' },
      { name: 'IoT & Embedded Systems Workshop', date: '2024-06-10' },
    ],
  },
  {
    id: 18,
    name: 'Machine Buiding',
    logo: '/labs/lab-18.jpg',
    description: 'Dedicated to building embedded system solutions...',
    vision: 'To design and innovate in the field of embedded systems...',
    mission: 'To provide hands-on learning on embedded system technologies...',
    objectives: [
      'To foster collaboration in designing real-time embedded systems...',
      'To organize workshops and projects in embedded development...',
    ],
    inCharge: 'Dr. Prakash Kumar',
    activities: [
      { name: 'Embedded Systems Hackathon', date: '2024-02-22' },
      { name: 'IoT & Embedded Systems Workshop', date: '2024-06-10' },
    ],
  },
  {
    id: 19,
    name: 'Sustainable Civil',
    logo: '/labs/lab-19.png',
    description: 'Dedicated to building embedded system solutions...',
    vision: 'To design and innovate in the field of embedded systems...',
    mission: 'To provide hands-on learning on embedded system technologies...',
    objectives: [
      'To foster collaboration in designing real-time embedded systems...',
      'To organize workshops and projects in embedded development...',
    ],
    inCharge: 'Dr. Prakash Kumar',
    activities: [
      { name: 'Embedded Systems Hackathon', date: '2024-02-22' },
      { name: 'IoT & Embedded Systems Workshop', date: '2024-06-10' },
    ],
  },
  {
    id: 20,
    name: 'Fiber To Fashion',
    logo: '/labs/lab-20.jpg',
    description: 'Dedicated to building embedded system solutions...',
    vision: 'To design and innovate in the field of embedded systems...',
    mission: 'To provide hands-on learning on embedded system technologies...',
    objectives: [
      'To foster collaboration in designing real-time embedded systems...',
      'To organize workshops and projects in embedded development...',
    ],
    inCharge: 'Dr. Prakash Kumar',
    activities: [
      { name: 'Embedded Systems Hackathon', date: '2024-02-22' },
      { name: 'IoT & Embedded Systems Workshop', date: '2024-06-10' },
    ],
  },
];


const ViewClubsLabs = () => {
  const [view, setView] = useState('clubs'); // Default view to clubs
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClubLabClick = (item) => {
    setSelectedItem(item); // Set the selected club/lab item
  };

  const handleRegisterClick = () => {
    // Registration logic (e.g., API call or form submission) goes here
    alert(`You have registered for ${selectedItem.name}`);
  };

  const renderItems = (data) => (
    <div className="grid-container">
      {data.map((item) => (
        <div
          key={item.id}
          className="grid-item"
          onClick={() => handleClubLabClick(item)}
        >
          <img src={item.logo} alt={`${item.name} logo`} />
          <h3>{item.name}</h3>
        </div>
      ))}
    </div>
  );

  return (
    <div className="view-clubs-labs">
      {/* Toggle buttons should only appear when no specific item is selected */}
      {!selectedItem && (
        <div className="toggle-buttons">
          <button
            className={`toggle-button ${view === 'clubs' ? 'active' : ''}`}
            onClick={() => setView('clubs')}
          >
            View Clubs
          </button>
          <button
            className={`toggle-button ${view === 'labs' ? 'active' : ''}`}
            onClick={() => setView('labs')}
          >
            View Labs
          </button>
        </div>
      )}

      {/* If no item is selected, show the grid of clubs/labs */}
      {!selectedItem ? (
        <div className="grid-wrapper">
          {view === 'clubs' ? renderItems(clubsData) : renderItems(labsData)}
        </div>
      ) : (
        // If an item is selected, show detailed view of the club/lab
        <div className="details-container">
          <h2>{selectedItem.name}</h2>
          <img src={selectedItem.logo} alt={`${selectedItem.name} logo`} />
          <p>{selectedItem.description}</p>
          <h3>Vision</h3>
          <p>{selectedItem.vision}</p>
          <h3>Mission</h3>
          <p>{selectedItem.mission}</p>
          <h3>Objectives</h3>
          <ul>
            {selectedItem.objectives.map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
          <h3>In-Charge: {selectedItem.inCharge}</h3>
          <h3>Activities</h3>
          <table className="activities-table">
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {selectedItem.activities.map((activity, index) => (
                <tr key={index}>
                  <td>{activity.name}</td>
                  <td>{activity.date}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Register Button */}
          <button className="register-button" onClick={handleRegisterClick}>
            Register
          </button>

          {/* Back Button */}
          <button className="Back-Button" onClick={() => setSelectedItem(null)}>Back</button>
        </div>
      )}
    </div>
  );
};

export default ViewClubsLabs;