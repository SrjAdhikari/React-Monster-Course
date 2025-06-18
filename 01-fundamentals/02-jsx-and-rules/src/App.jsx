import JSXRules from "../exercises/components/JSXRules"
import WelcomeMessage from "../exercises/components/WelcomeMessage"

const App = () => {
  return (
    <div>
      {/* 👇 JSX: JavaScript XML */}
      <section id="section">
        <h1>My Website</h1>
        <article>
          <h2>Welcome To React</h2>
          <p className="text">Paragraph Content</p>
        </article>
      </section>


      {/* 👇 Exercises */}
      <WelcomeMessage />
      <JSXRules />
    </div>
  )
}

export default App