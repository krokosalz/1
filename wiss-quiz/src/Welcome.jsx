function Welcome() {
  return (
    <div className="welcome-block">
      <h2>
        <span className="keyword">String</span> greeting ={' '}
        <span className="string">"Hallo Spieler!"</span>;
      </h2>
      <p>
        <span className="method">System.out.println</span>(
        <span className="string">"Bereit für die erste Frage?"</span>);
      </p>
    </div>
  );
}

export default Welcome;
