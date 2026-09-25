---
name: form-builder
description: Creates accessible, responsive, and validated web forms based on user requirements. Use this skill when the user asks to create, generate, or implement a form in a frontend application.
---

# Form-Builder

Create accessible, responsive React forms based on the user's requirements. Follow this workflow whenever this skill is used.

## Required workflow

1. Analyze the request and identify the form's purpose, requested fields, required fields, data types, and necessary validations. Do not add fields the user did not request unless they are technically necessary. If essential information is missing and cannot reasonably be inferred, ask the user before making significant changes.

2. Before implementing the form, read all of these references:
   - `references/form-guidelines.md`
   - `references/validation-rules.md`
   - `references/accessibility.md`

3. Read and use these assets as starting points:
   - `assets/form-template.jsx`
   - `assets/form-styles.css`

   Adapt them to the requested form; do not copy them blindly. Preserve their applicable good practices and integrate the result into the existing application rather than copying the assets into it unchanged.

4. Inspect the existing application and identify the correct component and stylesheet for the form. Preserve existing behavior and modify only what is needed. Do not install external dependencies unless strictly necessary and authorized by the user.

5. Implement the requested form in React/JSX using semantic HTML. Give each input a unique `id`, a meaningful `name`, and a visible `<label>` associated through matching `htmlFor` and `id` values. Do not use placeholders as label substitutes. Choose appropriate HTML input types, identify required fields, include a submit button, and provide understandable validation feedback near the relevant fields.

6. Implement the validations required by the requested fields. Prevent submission when the form is invalid, use native HTML validation where appropriate, and add custom validation for constraints that native HTML cannot express (for example, matching password and confirmation values when both are requested). Keep keyboard navigation logical and focus indicators visible. Use ARIA only when native semantics are insufficient. Ensure the layout is responsive.

7. After generating or modifying the form, run the validator from the repository root, replacing the placeholder with the actual JSX component path:

   ```sh
   python .codex/skills/form-builder/scripts/validate_form.py <ruta-del-componente-jsx>
   ```

8. Review the validator's output and exit code. A non-zero exit code means validation failed. Read the reported issues, correct the form when possible, and rerun the validator. Repeat until it passes or a problem cannot be resolved safely. Never report success after a failed validation. If the target file does not exist, locate the correct component before continuing; do not treat a missing file as successful validation.

9. When validation passes, report that the form was created, identify the modified file(s), briefly summarize the implemented validations, and confirm that `validate_form.py` completed successfully. If validation cannot be made to pass safely, explain the blocker and report the failure accurately.

## Completion criteria

A successful run produces a functional form in the application, applies the relevant guidance in `references/`, adapts the starting points in `assets/`, and passes `scripts/validate_form.py`. Finish with a brief summary of the changes.
