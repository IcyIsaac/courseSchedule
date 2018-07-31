import { FETCH_COURSES } from './types';

function fetchCourses() {
    return {
        action: FETCH_COURSES,
        payload: [
            {
                title: "Up and Running with Redis",
                description: "In this course you will learn how to work with the different Redis database to manage key/value relationships."
            },
            
            {
                title: "HTML/CSS Bootcamp",
                description: "Learn HTML5 and CSS3 from scratch, starting with the basics adn finishing by building five projects from scratch."
            },
            
            {
                title: "UX for Developers",
                description: "The User Experience (UX) course examines how to develop a system for approaching application development and enhancing the experience for users."
            }
            
          ]
        }
    }
}