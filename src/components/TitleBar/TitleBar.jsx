

import React from "react";
import { useLocation } from "react-router-dom";

const TitleBar = () => {
  const location = useLocation();

  const { pathname } = location;

  // console.log(pathname.slice(1));

  const paths = pathname.split("/").filter((path) => path !== "");



  const pathsWithCapitalizedLetter = []

/**
 * @description - for capitalized each path first letter
 */
    paths.map((path) => {
      const concatenate= path.charAt(0).toUpperCase() + path.slice(1)
      pathsWithCapitalizedLetter.push(concatenate);
    })


/**
 * @description - joined all paths with "|" and set in the browser title
 */
  const title  = pathsWithCapitalizedLetter.join(" | ")
console.log(title);

  window.document.title = title 

  return (
    <div className=" bg-primary">
      <div className="wrapper flex items-center mb-4">
       
        {pathsWithCapitalizedLetter.map((path, index) => (
          <React.Fragment key={index}>
            {/* added "/" */}
            {index !== 0 && <span className="text-white/50">/</span>}
            <span
              className={`py-2 text-white text-sm font-normal ${
                index < paths.length - 1 ? "text-white/50" : "text-white"
              }`}
            >
              {path}
            </span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default TitleBar;
