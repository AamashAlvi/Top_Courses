import React, { useState } from "react";
import Card from "./Card";


const Cards = (props) => {

    let courses = props.courses;

    let category = props.category;

    // in the starting we have we have parameterized useState with empty[] 
    // it tells us that the likedCourses are empty in the begining
    const[likedCourses , setLikedCourses]= useState([]);

// it is a function to get all the coursrs seperately.
    function getCourses() {

        // if the category is all  then print all the courses.
        if(category === "All") {
        
            // this variabble is store all the courses seperately in it
        let allCourses = [];
        
        // object.value will iterate and get four arrays which will be stored in "arrays"
        Object.values(courses).forEach(array => {
        
            // and this  forEach will give us all the courseData which is present in the for arrays
            array.forEach(courseData => {
        
                // this line tells us that we have pushed all the courseData that we have got to allCourses Variable .
                allCourses.push(courseData);
            })
        })

        return allCourses;
        }

        else{
            // pass the data array of the specific category you want, or the cards linked to the category will be shown on the UI.
            // we had 4 arrays in courses , so we will render the UI according to the category.
            return courses[category];
        }


    }


    return(

        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                // this function is called so that we get the allCourses 
                // and then all the courses we have got is mapped so taht we get each courseData in a seperate Card
                getCourses().map((course) => (
                    <Card key={course.id} 
                    course={course}
                     likedCourses={likedCourses}
                     setLikedCourses={setLikedCourses}/>)
                )
            }
        </div>
    )
}

export default Cards