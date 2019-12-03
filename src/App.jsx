import React from 'react';

// function App() {
//   let ev = process.env;
//   console.log(ev);
//   return (
//     <div className = "App" >
//       {this.props.children}
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}
export default App;
