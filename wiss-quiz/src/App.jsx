import './App.css';
import Welcome from './Welcome';
import Counter from './Counter';

function App() {
  const nyanCats = Array.from({ length: 14 }, (_, index) => ({
    id: index,
  }));

  return (
    <>
      <div className="nyan-field" aria-hidden="true">
        {nyanCats.map((cat) => (
          <span className="nyan-cat" key={cat.id}>
            <i className="rainbow">
              <b />
              <b />
              <b />
              <b />
              <b />
              <b />
            </i>
            <i className="body" />
            <i className="head" />
            <i className="tail" />
            <i className="leg leg-one" />
            <i className="leg leg-two" />
            <i className="leg leg-three" />
            <i className="leg leg-four" />
          </span>
        ))}
      </div>

      <main className="app-shell">
        <section className="terminal">
          <div className="terminal-header">
            <span className="terminal-title">root@wiss-quiz:/opt/session</span>
            <span className="terminal-status">CONNECTED</span>
          </div>

          <div className="terminal-body">
            <p className="prompt-line">
              <span className="prompt">nicos@wiss-quiz:~$</span> java WissQuiz
            </p>

            <h1>
              <span className="keyword">public class</span>{' '}
              <span className="class-name">WissQuiz</span> {'{'}
            </h1>

            <p className="comment">// Hier wird bald unser Quiz starten.</p>

            <Welcome />
            <Counter titel="SmallOne" startwert={0} schritt={1} min={0} max={5}/>
            <Counter/>

            <p>{'}'}</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
