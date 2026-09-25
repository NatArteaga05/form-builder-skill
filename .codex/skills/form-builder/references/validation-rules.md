# Validation rules

Use these rules when creating or validating a form:

1. **Input types:** Use `type="email"` for email addresses and `type="password"` for passwords. Choose other HTML input types appropriate to the requested data.
2. **Required fields:** Add the `required` attribute to fields that are mandatory.
3. **Field identifiers:** Give each input a unique `id` and a meaningful `name` so labels and submitted values can be identified.
4. **Labels:** Associate every input with a label. Do not leave inputs without an associated label.
5. **Password confirmation:** When a password confirmation field exists, validate that its value matches the password field.
6. **Error feedback:** Provide a mechanism to display understandable validation errors near the relevant fields.
7. **Submission:** Prevent form submission while any field contains invalid data. Use native HTML validation where appropriate and add custom validation for rules HTML cannot express.
