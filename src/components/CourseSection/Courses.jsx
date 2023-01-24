import React, { useEffect } from "react";
import "./Courses.css";
import course1 from "../../images/course1.jpg";
import course2 from "../../images/course2.jpg";
import course3 from "../../images/course3.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const courseData = [
  {
    img: course1,
    name: "Toledo",
  },
  {
    img: course2,
    name: "Pembroke Pines",
  },
  {
    img: course3,
    name: "Naperville",
  },
];

const Courses = () => {
  useEffect(() => {
    const courseCard = document.querySelectorAll(".co-card");

    const observer = new IntersectionObserver((entries) =>
      entries.forEach(
        (entry, idx) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
          if (entry.isIntersecting) observer.unobserve(entry.target);
        },
        {
          threshold: 1,
        }
      )
    );

    courseCard.forEach((card) => {
      observer.observe(card);
    });
  }, []);
  return (
    <>
      <div className="course-title">Checkout my courses</div>
      <div className="courses-main">
        {courseData.map((i) => {
          return (
            <div key={i.name} className="co-card">
              <img className="card-img" src={i.img} alt={i.name} />
              <p className="card-heading">{i.name}</p>
              <button className="blue-contained-button">
                Join Now
                <ArrowForwardIcon />
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Courses;
