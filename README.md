# Form-Builder Agent Skill

## Overview

Form-Builder is an Agent Skill designed to generate accessible, responsive, and validated React forms from user requirements. This repository also contains a small React + Vite application used to demonstrate the skill. The current demo displays a registration form in the Form Preview area.

## Features

- Generates React forms from user requirements.
- Provides practical form validation rules and accessibility guidelines.
- Includes reusable JSX and CSS form assets as starting points.
- Runs `validate_form.py` to check form structure and common field issues.
- Detects invalid forms, including missing input identifiers, names, labels, and incorrect email or password types.

## Requirements

- Node.js and npm to install and run the demo application.
- Python 3 to run the validator.
- Codex with Agent Skills support to invoke Form-Builder.

## Installation

Clone the repository and start the demo:

```sh
git clone <repository-url>
cd form-builder-skill
npm install
npm run dev
```

Open the local URL printed by Vite in your browser.

## Skill Structure

The skill is located at `.codex/skills/form-builder/`:

```text
.codex/skills/form-builder/
├── SKILL.md
├── scripts/
│   └── validate_form.py
├── assets/
│   ├── form-template.jsx
│   └── form-styles.css
├── references/
│   ├── form-guidelines.md
│   ├── validation-rules.md
│   └── accessibility.md
└── tests/
    └── invalid-form.jsx
```

- `SKILL.md` defines the required form-generation and validation workflow.
- `scripts/validate_form.py` performs basic deterministic checks on a JSX component containing a form.
- `assets/form-template.jsx` and `assets/form-styles.css` provide adaptable React and CSS starting points.
- `references/form-guidelines.md` describes general form design practices.
- `references/validation-rules.md` documents field and submission validation rules.
- `references/accessibility.md` documents accessible form patterns.
- `tests/invalid-form.jsx` is an intentionally invalid fixture for demonstrating validator errors.

The demonstration application is built with React and Vite. Its entry point is `src/main.jsx`, the page is `src/App.jsx`, and `src/components/FormPreview.jsx` contains the current registration form. Styles are in `src/styles.css`.

## How the Skill Works

```text
User request
→ Form-Builder
→ Read references
→ Adapt assets
→ Generate or modify React form
→ Run validate_form.py
→ Fix validation problems if necessary
→ Return validated result
```

The references, assets, and script are working parts of this workflow: the references guide implementation, the assets provide adaptable starting points, and the validator checks the resulting JSX. They are not decorative files.

## Usage

In Codex with Agent Skills support, explicitly invoke the skill using `$form-builder` and describe the form you want:

```text
$form-builder

Create a registration form in the Form Preview section with:

- Full name
- Email
- Password
- Confirm password

All fields are required.
Validate the email format.
The password must contain at least 8 characters.
Confirm password must match the password.

Implement it in the existing React application.
```

## Expected Result

The requested result is a registration form inside Form Preview with full name, email, password, and confirm password fields, along with the specified required-field, email-format, minimum-password-length, and password-match validation. The skill should run `validate_form.py` against the component and finish with successful validation.

The current checked-in demo already contains this registration example in `src/components/FormPreview.jsx`, including inline validation feedback and a success message after valid submission.

## Validation

From the repository root, manually validate the current form (or the generated form in that component):

```sh
python .codex/skills/form-builder/scripts/validate_form.py src/components/FormPreview.jsx
```

The script prints individual checks; a successful run ends with:

```text
Validation passed.
```

## Error Test

`.codex/skills/form-builder/tests/invalid-form.jsx` is intentionally invalid and exists to demonstrate error handling. Run it with:

```sh
python .codex/skills/form-builder/scripts/validate_form.py .codex/skills/form-builder/tests/invalid-form.jsx
```

This test is expected to produce `[FAIL]` results and end with:

```text
Validation failed.
```

That failure is intentional and demonstrates that the validator detects invalid forms; it does not indicate a problem with the working demo.

## Demo

1. Start the application with `npm run dev`. The current checked-in starting state already shows the registration form in Form Preview; an empty preview is the state before a form is generated.
2. In Codex, invoke `$form-builder` and request the registration form using the example above.
3. Show that Codex reads and follows the skill workflow, references, and assets.
4. Show the generated form in the browser.
5. Run the validator against the generated form and show `Validation passed.`
6. Run it against `tests/invalid-form.jsx` and show the expected `Validation failed.` result.

## Project Purpose

This educational Agent Skill project demonstrates an end-to-end workflow using `SKILL.md`, scripts, assets, references, a working React example, and intentional error handling.
