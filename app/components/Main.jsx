var React = require('react');
var Navigation=require('Navigation');


// var Main = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <Nav/>
//         <h2>Main Component</h2>
//         {this.props.children}
//       </div>
//     );
//   }
// });

var Main =(props)=>{
  return (
       <div>
         <div>
           <Navigation/>
           <h1>Main page loaded</h1>
           <div>
             {props.children}
           </div>
         </div>
       </div>
     );
};

module.exports = Main;
