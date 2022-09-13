import React from 'react';
import  ReactDOM  from 'react-dom';
//css
import "./index.css";

// const title = "AWS Devops";
// const author = "Nishanth";

function BookList() {
  return (
    <>
      <Book title='AWS Devops' author='Nishanth' age={3} />
      <Book title='Python DataScience' author='Big Data' />
    </>
  );
}

// function add(a,b){
//   return a+b;
// }
// add(3,5)

function Book(props) {
  console.log(props.title)
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.author}</p>
      <h4>{props.age}</h4>
    </>
  )
}
// function Greeting() {
//   return (
//     <>
//       <Helloworld />
//       <Message />
//     </>
//   );
// }

// function Helloworld() {
//   return <h1 className='heading'>Hello World!!!!</h1>;
// }

// function Message() {
//   return <p style={{ color:"red",fontsize: "4rem"}}>Yes i am react developer</p>;
// }
//   function Greeting() {
//    return (
//    <>
//    <div>
//     <div>
//       <h1 onClick>
//         Welcome to bengaluru
//         </h1>
//         </div>
//     <div>
//       <h2>
//         Namaskara bengaluru
//       </h2>
//       <input type="text"/>
//     </div>
//     </div>
//    </>
//    );
//  }

//  function Greeting() {
//    return React.createElement("h2",{},
//    React.createElement('h1', {},"Dadagiri Aa Dinagalu"));
//  }

ReactDOM.render(<BookList />,
  document.getElementById('root')
  )