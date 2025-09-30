import { useState, useEffect } from 'react';
import { useDebounce } from './useDebouce'

export function App(props) {

  const [serachText, setSearchText] = useState('');
  const debounce = useDebounce(serachText, 1000);

  const apiFn = (param) => {
    console.log("param : ", param)
  }
  useEffect(() => {
    console.log("debounce : ", debounce)
    if (debounce) {
      apiFn(debounce)
    }
  }, [debounce])
  return (
    <div className='App'>
      <input type='text' placeholder='first name' onChange={(e) => setSearchText(e.target.value)} />
      <h1>Hello React. {serachText} </h1>
    </div>
  );
}
