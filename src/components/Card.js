import React from "react";
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from "react-toastify";

const Card = (props) => {

    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    // this function is to add and remove a toast while clicking the like heart button.
    function clickHandler(){

        // this line checks if the likedCourses containes the course id 
        // that means it has been liked
        if(likedCourses.includes(course.id)) {

            //  agar pahle se like hua pardha hai then by this line we are going to unlike it and remove it from the likedCourses.
            setLikedCourses( (prev) => prev.filter( (cid) =>(cid !==course.id) )  );
            // this line will show a toast that the id is removed from the likedCourses.
            toast.warning("Like Removed")
        }
        else{

            // if this course is not liked from the starting
            // then we have to insert the cousr to the likedCourses.

            // if there is nothing in the likedCourses then insert the course in it.
            if(likedCourses.length === 0) {
                setLikedCourses([course.id])
            }

            else{

                // and if it is not empty from the begining or if it was filled then keeping the prev
                // course id add this cousr if also in the likedCourses.
                setLikedCourses((prev) => [...prev , course.id]);
            }
            // and if the course is liked then show a toast that you have liked successfully.
            toast.success("Liked Successfully");
        }

    }

    return(

    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
            <div className="relative">
                <img src={course.image.url}></img>
            
            <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center">        
                <button onClick={clickHandler}>
                    {
                        // this line tells is us that if the course id is already present in likedCourses 
                        // that means it was already liked then we have to place the FcLike icon.
                        likedCourses.includes(course.id) ?
                        (<FcLike fontSize="1.75rem"/>) :

                        // and if it is not liked pahle se then show the FcLikePlaceholder icon.
                        (<FcLikePlaceholder fontSize="1.75rem"/>)
                    }
                </button>
            </div>

            </div>

            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p  className='mt-2 text-white'>
                    {
                        // this lines says if the description length is greater than 100 then..
                        course.description.length > 100 ?                        
                         // print only 100 words , substring is function which fetches particular number of letters from the string.
                         (course.description.substr(0,100)) + "..." :
                         // and if the length is less than 100 then print the whole description.
                         (course.description)
                    }
                     {/* {course.description} */}

                </p>
            </div>
        
        </div>
    )
}

export default Card