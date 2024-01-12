import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import course1Img from '../images/course1.png';
import course2Img from '../images/course2.png';
import course3Img from '../images/course3.png';

const courses = [
    {
      imgSrc: course1Img ,
      title: "Basic Computer Skills",
      description:
        "Get started and learn how to use a computer and additonal skills",
      url: "https://www.youtube.com/watch?v=8vqBUYA7ZLk&list=PLKXxT8ltBxOfZC-V7GYIUHbnxlsdapPpa",
    },
    {
      imgSrc: course2Img ,
      title: "Microsoft Word Traning",
      description: "Learn to use Microsoft word effectively and take your skills to the next level",
      url: "https://www.youtube.com/watch?v=0JhP12KRPBk&list=PLKXxT8ltBxOdHyjRVXRmxPDp4RKlnQ3ky",
    },
    {
      imgSrc: course3Img ,
      title: "ICT COC Training",
      description:
        "This playlist aims to prepare you for the COC exam",
      url: "https://www.youtube.com/watch?v=hxEmLrGa7Fc&list=PLKXxT8ltBxOdvyTcNppifrd3--hnDojnp",
    },
  ];

const Cards = () => {
  return (
    <div className="cards-container">
        {courses.map(({imgSrc, title, description, url}) => (
            <div className="card">
                <img src={imgSrc} alt="Course image" />
                <div className="card-title">
                  <h3>{title}</h3>
                </div>
                <div className="card-description">
                  <p className="description">{description}</p>
                </div>
                <a href={url} className='card-bottom'>Go to Course  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </a>
            </div>
        ))}
    </div>
  );
};

export default Cards;