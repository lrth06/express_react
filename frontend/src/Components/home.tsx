
import React, { FunctionComponent,useState } from 'react';
import "../scss/home.scss";

export function Home({ initial = 0 }) {
  // since we pass a number here, clicks is going to be a number.
  // setClicks is a function that accepts either a number or a function returning
  // a number
  const [clicks, setClicks] = useState(initial);
  return <>
  <main>
    <p>Clicks: {clicks}</p>
    
    <button onClick={() => setClicks(clicks - 1)}>-</button>
    <button onClick={() => setClicks(clicks + 1)}>+</button>
    </main>
  </>;
}