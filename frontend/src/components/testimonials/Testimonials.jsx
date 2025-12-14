import React from "react";
import "./testimonials.css";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Rohan Mehta",
      position: "Computer Science Student",
      message:
        "This platform helped me crack my placement interviews. The full-stack course covers everything needed for a fresher in India.",
      image:
        "https://images.pexels.com/photos/7752893/pexels-photo-7752893.jpeg",
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Web Developer",
      message:
        "I switched from a non-tech background to IT thanks to these courses. The Hindi explanations made complex logic very easy to understand.",
      image:
        "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg",
    },
    {
      id: 3,
      name: "Amit Verma",
      position: "Software Engineer",
      message:
        "The best platform for affordable education. The projects we built in the MERN stack course were very practical and industry-ready.",
      image:
        "https://images.pexels.com/photos/6476365/pexels-photo-6476365.jpeg",
    },
    {
      id: 4,
      name: "Sneha Gupta",
      position: "Data Analyst",
      message:
        "Highly recommended! The instructors clear doubts instantly, and the roadmap provided is perfect for Indian students targeting MNCs.",
      image:
        "https://images.pexels.com/photos/14596539/pexels-photo-14596539.jpeg",
    },
  ];
  return (
    <section className="testimonials">
      <h2>What our students say</h2>
      <div className="testmonials-cards">
        {testimonialsData.map((e) => (
          <div className="testimonial-card" key={e.id}>
            <div className="student-image">
              <img src={e.image} alt="" />
            </div>
            <p className="message">{e.message}</p>
            <div className="info">
              <p className="name">{e.name}</p>
              <p className="position">{e.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
