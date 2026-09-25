import { useState } from 'react'

function FormPreview() {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const errors = {
    fullName: !values.fullName.trim() ? 'Enter your full name.' : '',
    email: !values.email
      ? 'Enter your email address.'
      : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
        ? 'Enter a valid email address.'
        : '',
    password: !values.password
      ? 'Enter a password.'
      : values.password.length < 8
        ? 'Password must be at least 8 characters.'
        : '',
    confirmPassword: !values.confirmPassword
      ? 'Confirm your password.'
      : values.confirmPassword !== values.password
        ? 'Passwords do not match.'
        : '',
  }

  function handleChange(event) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  function fieldError(name) {
    return submitted ? errors[name] : ''
  }

  return (
    <section className="preview-section" aria-labelledby="preview-title">
      <div className="section-heading">
        <div>
          <p className="section-label">Workspace</p>
          <h2 id="preview-title">Form Preview</h2>
        </div>
        <span className="status-badge status-ready"><span />Ready to preview</span>
      </div>

      <div className="preview-canvas">
        <div className="registration-card">
          <div className="registration-intro">
            <div className="registration-icon" aria-hidden="true">＋</div>
            <h3>Create your account</h3>
            <p>Enter your details to register.</p>
          </div>
          <form className="generated-form" onSubmit={handleSubmit} noValidate>
            <div className="form-field">
              <label htmlFor="registration-full-name">Full name <span aria-hidden="true">*</span></label>
              <input id="registration-full-name" name="fullName" type="text" autoComplete="name" required value={values.fullName} onChange={handleChange} aria-invalid={Boolean(fieldError('fullName'))} aria-describedby={fieldError('fullName') ? 'full-name-error' : undefined} />
              {fieldError('fullName') && <p className="field-error" id="full-name-error" role="alert">{fieldError('fullName')}</p>}
            </div>
            <div className="form-field">
              <label htmlFor="registration-email">Email <span aria-hidden="true">*</span></label>
              <input id="registration-email" name="email" type="email" autoComplete="email" required value={values.email} onChange={handleChange} aria-invalid={Boolean(fieldError('email'))} aria-describedby={fieldError('email') ? 'email-error' : undefined} />
              {fieldError('email') && <p className="field-error" id="email-error" role="alert">{fieldError('email')}</p>}
            </div>
            <div className="form-field">
              <label htmlFor="registration-password">Password <span aria-hidden="true">*</span></label>
              <input id="registration-password" name="password" type="password" autoComplete="new-password" minLength={8} required value={values.password} onChange={handleChange} aria-invalid={Boolean(fieldError('password'))} aria-describedby={fieldError('password') ? 'password-error' : undefined} />
              {fieldError('password') && <p className="field-error" id="password-error" role="alert">{fieldError('password')}</p>}
            </div>
            <div className="form-field">
              <label htmlFor="registration-confirm-password">Confirm password <span aria-hidden="true">*</span></label>
              <input id="registration-confirm-password" name="confirmPassword" type="password" autoComplete="new-password" required value={values.confirmPassword} onChange={handleChange} aria-invalid={Boolean(fieldError('confirmPassword'))} aria-describedby={fieldError('confirmPassword') ? 'confirm-password-error' : undefined} />
              {fieldError('confirmPassword') && <p className="field-error" id="confirm-password-error" role="alert">{fieldError('confirmPassword')}</p>}
            </div>
            <button className="form-submit" type="submit">Create account <span aria-hidden="true">→</span></button>
            {submitted && Object.values(errors).every((error) => !error) && <p className="form-success" role="status">Your details are valid and ready to submit.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

export default FormPreview
