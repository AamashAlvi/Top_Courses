import React from "react";
import "./Spinner.css"

const Spinner = () => {

    return(
        <div className="flex flex-col items-center space-y-2">
        {/* this is a shortcut to add a spinner  */}
            {/* you have to on;y write className="spinner" it will show a spinner on the UI */}
            {/* you can style the loader from a site "css laoder generator" by coping the CSS configuration to your CSS files*/}
            <div className="spinner"></div>
            <p className="text-bgDark text-lg font-semibold">Loading....</p>
        </div>
    )
}

export default Spinner