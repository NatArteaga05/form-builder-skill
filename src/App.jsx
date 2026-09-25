import FormPreview from './components/FormPreview.jsx'

function App() {
  return (
    <main className="app-shell">
      <div className="page-container">
        <header className="page-header">
          <div className="brand-mark" aria-hidden="true">F</div>
          <div>
            <p className="eyebrow">Demonstration environment</p>
            <h1 id="page-title">Form Builder Demo</h1>
            <p className="description">
              A simple space to try out form generation and preview the results.
            </p>
          </div>
        </header>

        <FormPreview />

        <aside className="skill-note" aria-label="Form generation information">
          <div className="skill-icon" aria-hidden="true">✳</div>
          <div>
            <h2>Generated with Form-Builder</h2>
            <p>
              The form will be generated here using the Form-Builder Agent Skill.
            </p>
          </div>
          <span className="skill-tag">AGENT SKILL</span>
        </aside>
      </div>
    </main>
  )
}

export default App
