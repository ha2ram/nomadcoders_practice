import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react';

function Hello() {
  useEffect(() => {
    console.log('hi :)');
    return () => console.log('bye :(');
  }, []);

  return <h1>Hello</h1>;
}

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState('');
  const [showing, setShowing] = useState(false);

  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const onClick2 = () => setShowing((prev) => !prev);

  useEffect(() => {
    console.log('I run only once.');
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' change.");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter'changes.");
  }, [counter]);
  useEffect(() => {
    console.log('I run when keyword & counter change');
  }, [keyword, counter]);

  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text={'Continue'} />

      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholer="Search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>

      {showing ? <Hello /> : null}
      <button onClick={onClick2}>{showing ? 'Hide' : 'Show'}</button>
    </div>
  );
}

export default App;
