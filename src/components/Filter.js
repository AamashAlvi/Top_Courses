import React from "react";
import Navbar from "./Navbar";


// using props we have fetched the filterData from the App.js
const Filter = (props) => {

    // we have stored the fetched filterData to a variable
    let filterData = props.filterData;

    let category = props.category;

    let setCategory = props.setCategory;

    function filterHandler(title) {
        // it will set the title of the data to the category.
        // example if you will click on development then it will set the category to development.
        setCategory(title);

    }
    return(

        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
        {
                // the filterData has 5 obejcts and by using map we are iteration on each one of them and named them data.
                // ALWAYS REMEMBER WHENEVER YOU ARE USING A MAP FUNCTION PLZ DO USE A KEY
                filterData.map( (data) => (

                    // this onClick event will call a function filterHandler with the title of the data parameterized in it.
                    <button onClick={() =>filterHandler(data.title)}
                    className={`text-lg px-2 py-1 rounded-md font-medium 
                    text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300

                    ${category === data.title ? 
                     "bg-opacity-60 border-white" :
                     "bg-opacity-40 border-transparent"}
                    `}


                     key={data.id} >{data.title}</button>
                ))
            }
        </div>
    )
}

export default Filter