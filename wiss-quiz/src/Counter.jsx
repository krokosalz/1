import { useState } from 'react';

function Counter({
  startwert = 0,
  schritt = 1,
  titel = 'fühl mich auf!',
  min = 0,
  max = 10,
}) {
  const [count, setCount] = useState(startwert);
  const [istSichtbar, setIstSichtbar] = useState(true);

  const erhoehen = () => {
    setCount(Math.min(count + schritt, max));
  };

  const verringern = () => {
    setCount(Math.max(count - schritt, min));
  };

  const reset = () => {
    setCount(startwert);
  };

  const toggle = () => {
    setIstSichtbar(!istSichtbar);
  };

  return (
    <div>
      <h2>{titel}</h2>
      <div className="counter-panel">
        <div className="button-row">
          <button className="terminal-button" onClick={toggle}>
            {istSichtbar ? 'Zähler ausblenden' : 'Zähler anzeigen'}
          </button>
        </div>

        {istSichtbar && (
          <div className="counter-panel">
            <p className="counter-value">
              <span className="keyword">int</span> aktuellerZaehler ={' '}
              <span className="number">{count}</span>;
            </p>

            <div className="button-row">
              <button className="terminal-button" onClick={erhoehen}>
                +{schritt}
              </button>
              <button className="terminal-button" onClick={verringern}>
                -{schritt}
              </button>
              <button className="terminal-button" onClick={reset}>
                Reset
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Counter;
