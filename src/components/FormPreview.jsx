function FormPreview() {
  return (
    <section className="preview-section" aria-labelledby="preview-title">
      <div className="section-heading">
        <div>
          <p className="section-label">Workspace</p>
          <h2 id="preview-title">Form Preview</h2>
        </div>
        <span className="status-badge"><span />Waiting for a form</span>
      </div>

      <div className="preview-canvas">
        <div className="empty-state">
          <div className="empty-icon" aria-hidden="true">
            <svg viewBox="0 0 48 48" fill="none">
              <rect x="10" y="7" width="28" height="34" rx="4" />
              <path d="M17 17h14M17 24h14M17 31h8" />
            </svg>
          </div>
          <h3>No form has been generated yet.</h3>
          <p>Your generated form will appear here.</p>
        </div>
      </div>
    </section>
  )
}

export default FormPreview
