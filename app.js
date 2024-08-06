
import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => ReactEleemnt - JS Object => HTMLElement(render)
const heading = React.createElement("h1", {id: "heading"}, "JSK React");

//React Component
//Class Based Component - Old way
//Functional Components - New way

//React Functional Component
// const HeadingComponent = () => {
//     return <h1 className="heading">JSk React Functional Component</h1>;
// };

//const HeadingComponent = () => <h1 className="heading">JSk React Functional Component</h1>;

//React Element
const heading1 = ( 
    <h1 className="heading">J
        Jsk React Element
    </h1>
);

//Title Component
// const TitleComponent = () => ( 
//     <h1 className="title-component">
//          Title Component
//     </h1>
// );

// const TitleComponent = function() {
//     return ( 
//         <h1 className="title-component">
//              Title Component
//         </h1>
//     );
// };

const elem = <span>React element elem </span>



const number = 1000;

const HeadingComponent = () => (
    <div class="container">
        <h1 className="heading">JSk React Functional Component</h1>
    </div>
);

const title = (
    <h1 className="title-component">   
        {elem}     
        Title Element
        <HeadingComponent />
    </h1>
);


//What is component composition -> composing title component in heading component is component composition


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(title);
