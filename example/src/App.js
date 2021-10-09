import ParticleTextEffect from "particle-text-effect";
import "./App.css";

function App() {
  return (
    <div>
      <ParticleTextEffect text="LINES" type="lines" />
      <ParticleTextEffect text="HEARTS" type="hearts" />
      <ParticleTextEffect text="BEAMS" type="sunbeams" />
      <ParticleTextEffect text="BUBBLES" type="bubbles" />
      <ParticleTextEffect text="CONFETTI" type="confetti" />
      <ParticleTextEffect text="FIRE" type="fire" />
    </div>
  );
}

export default App;
