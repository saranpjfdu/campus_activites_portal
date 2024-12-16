import React, { useState } from "react";
import Slider from "react-slick";
import './ViewAchievements.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const achievementsData = [
  {
    type: "club",
    title: "Robotics Club Achievement",
    images: [
      {
        url: "/images/robotics1.jpg",
        description: "Our Robotics Club secured first place in the National Robotics Championship with their innovative autonomous robot.",
      },
      {
        url: "/images/robotics2.jpg",
        description: "The team demonstrated exceptional teamwork and technical prowess during the competition.",
      },
      {
        url: "/images/robotics3.png",
        description: "The winning robot was equipped with advanced sensors and AI for obstacle detection and navigation.",
      },
    ],
    details: "Robotics Club focuses on building innovative robots and participating in international competitions.",
  },
  {
    type: "lab",
    title: "Manufacturing & Fabrication Cell",
    images: [
      {
        url: "/images/manufacturing1.jpg",
        description: "Students designed and manufactured a prototype vehicle using advanced machining techniques.",
      },
      {
        url: "/images/manufacturing2.jpg",
        description: "The cell focuses on enhancing technical skills in manufacturing and fabrication processes.",
      },
      {
        url: "/images/manufacturing3.jpg",
        description: "Interdisciplinary projects help students contribute to product development in various sectors.",
      },
    ],
    details: "To ultimately facilitate the needs and support the learners to assure they yearn to gain knowledge in their respective domains.",
  },
  {
    type: "club",
    title: "Bureau Of Overseas Education",
    images: [
      {
        url: "/images/bureau1.jpg",
        description: "Seminars conducted by the Bureau of Overseas Education provide guidance on studying abroad.",
      },
      {
        url: "/images/bureau2.jpg",
        description: "Seminars based on Overseas Education Fairs help students explore various opportunities for higher education.Online presentation on the topic of overseas education opportunities and preparation for GRE examination by Princeton Review",
      },
      {
        url: "/images/bureau3.jpg",
        description: "The Bureau motivates students to pursue education in their chosen field, both in India and abroad.",
      },
    ],
    details: "To motivate the students desirous of higher education in their chosen field.",
  },
  {
    type: "club",
    title: "Community Service Club",
    images: [
      {
        url: "/images/community1.jpg",
        description: "The club organizes social service events to engage students in community welfare activities.",
      },
      {
        url: "/images/community2.jpg",
        description: "Members focus on issues that bring positive changes to society.",
      },
      {
        url: "/images/community3.jpg",
        description: "Collaborations with NGOs help the club in conducting impactful community service projects.",
      },
    ],
    details: "To improve the art of competitive programming skills among the students and to train them ready for reputed competitions, events conducted at national and international levels.",
  },
  {
    type: "lab",
    title: "AI Lab Innovation",
    images: [
      {
        url: "/images/ai1.jpg",
        description: "The AI Lab developed a model that excels in natural language processing tasks.",
      },
      {
        url: "/images/ai2.jpg",
        description: "Projects in the AI Lab focus on cutting-edge research in machine learning and deep learning.",
      },
      {
        url: "/images/ai3.jpg",
        description: "Students actively participate in building AI solutions for real-world problems.",
      },
    ],
    details: "AI Lab specializes in artificial intelligence research and innovation, with a focus on machine learning, deep learning, and neural networks.",
  },
  {
    type: "lab",
    title: "Aquatech Innovation",
    images: [
      {
        url: "/images/aq1.jpg",
        description: "Aquatech members designed an underwater robot capable of autonomous navigation.",
      },
      {
        url: "/images/aq2.jpg",
        description: "The lab promotes underwater robotics as an educational and research interest.",
      },
      {
        url: "/images/aq3.jpg",
        description: "Projects aim to build robots that can perform underwater surveillance and object detection.",
      },
    ],
    details: "To promote underwater robotics as an educational interest and future research sector. To build a robot which can autonomously/remotely carry out underwater surveillance, detect, locate and grab objects.",
  },
  {
    type: "club",
    title: "GREEN ECO ORGANIZATION",
    images: [
      {
        url: "/images/eco1.jpg",
        description: "Eco Club launched a recycling initiative that reduced campus waste by 40%.",
      },
      {
        url: "/images/eco2.jpg",
        description: "Members regularly conduct awareness campaigns on sustainability and environmental conservation.",
      },
      {
        url: "/images/eco3.jpg",
        description: "The club collaborates with local organizations to promote eco-friendly practices.",
      },
    ],
    details: "Eco Club promotes sustainability through projects focused on environmental conservation and waste reduction.",
  },
];

const ViewAchievements = () => {
  const [selectedType, setSelectedType] = useState("club"); // Default is 'club'

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  // Filter data based on the selected type (club or lab)
  const filteredAchievements = achievementsData.filter(
    (achievement) => achievement.type === selectedType
  );

  return (
    <div className="achievements-page">
      <div className="button-container">
        <button
          className={`toggle-button ${selectedType === "club" ? "active" : ""}`}
          onClick={() => setSelectedType("club")}
        >
          Club Achievements
        </button>
        <button
          className={`toggle-button ${selectedType === "lab" ? "active" : ""}`}
          onClick={() => setSelectedType("lab")}
        >
          Lab Achievements
        </button>
      </div>

      {/* Achievements list */}
      <div className="achievements-container">
        {filteredAchievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <div className="achievement-title">{achievement.title}</div>
            <Slider {...sliderSettings}>
            {achievement.images.map((image, imgIndex) => (
  <div key={imgIndex} className="achievement-slide">
    <div className="achievement-image-container">
      <img src={image.url} alt={achievement.title} className="achievement-image" />
    </div>
    <div className="achievement-description">
      <div className="achievement-subtitle">Description</div>
      <p className="paragraph-text">{image.description}</p> {/* Use image description */}
    </div>
  </div>
))}
            </Slider>
            <div className="achievement-details">
              <div className="achievement-subtitle">Lab/Club Details</div>
              <div className="details-content paragraph-text">{achievement.details}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAchievements;
