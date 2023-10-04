//import logo from './logo.svg';
import PropTypes from 'prop-types';
import './App.css';
import React, { useCallback, useState } from 'react';

//* Hook - UseState
// function App() {
//   const [reverse, setReverse] = useState(false);
//   const [counter, setCounter] = useState(0);

//   const reverseClass = reverse ? 'reverse' : '';

//   const handleClick = () => {
//     setReverse(!reverse);
//     //setCounter(counter + 1);
//   };

//   const handleIncrement = () => {
//     setCounter((prevState) => prevState + 1);
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
//         <h1>Contador: {counter}</h1>
//         <button type="button" onClick={handleClick}>
//           Reverse
//         </button>
//         <button type="button" onClick={handleIncrement}>
//           Contador
//         </button>
//       </header>
//     </div>
//   );
// }

//* Hook - useEffect
// const eventFn = () => {
//   console.log('h2 clicado');
// };
// function App() {
//   const [counter1, setCounter1] = useState(0);
//   const [counter2, setCounter2] = useState(0);

//   // executado sempre que algum componente atualiza
//   // useEffect(() => {
//   //   console.log('componentDidUpdate');
//   // });

//   // executado somente uma vez
//   // useEffect(() => {
//   //   console.log('componentDidMount');
//   // }, []);

//   // executa sempre que a dependência muda
//   useEffect(() => {
//     console.log('C1:', counter1, 'C2:', counter2);
//   }, [counter1, counter2]);

//   // limpar
//   useEffect(() => {
//     document.querySelector('h2')?.addEventListener('click', eventFn);

//     // componentWillUnmount
//     return () => {
//       document.querySelector('h2')?.removeEventListener('click', eventFn);
//     };
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h2>Teste 1</h2>
//         <h1>
//           C1: {counter1} C2: {counter2}
//         </h1>
//         <button type="button" onClick={() => setCounter1(counter1 + 1)}>
//           +(1)
//         </button>
//         <button type="button" onClick={() => setCounter2(counter2 + 1)}>
//           +(2)
//         </button>
//       </header>
//     </div>
//   );
// }

//* Hook - useCallback
const Button = React.memo(function Button({ incrementButton }) {
  console.log('Filho renderizou');
  return <button onClick={() => incrementButton(10)}>+</button>;
});

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((prevCounter) => prevCounter + num);
  }, []);

  console.log('Pai renderizou');

  return (
    <div className="App">
      <p>Teste</p>
      <h1>C1: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

// class App extends Component {
//   state = {
//     reverse: false,
//   };

//   handleClick = () => {
//     const { reverse } = this.state;
//     this.setState({ reverse: !reverse });
//   };
//   render() {
//     const { reverse } = this.state;
//     const reverseClass = reverse ? 'reverse' : '';

//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
//           <button type="button" onClick={this.handleClick}>
//             Reverse
//           </button>
//         </header>
//       </div>
//     );
//   }
// }

export default App;

Button.propTypes = {
  incrementButton: PropTypes.func,
};
