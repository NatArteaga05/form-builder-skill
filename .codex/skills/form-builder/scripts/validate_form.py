#!/usr/bin/env python3
"""Realiza comprobaciones deterministas básicas de un formulario React JSX."""

import re
import sys
from pathlib import Path


def find_elements(source, tag):
    """Devuelve las etiquetas JSX de apertura del elemento solicitado."""
    return re.findall(rf"<{tag}\b[^>]*>", source, flags=re.IGNORECASE | re.DOTALL)


def get_attribute(tag, name):
    match = re.search(
        rf"\b{re.escape(name)}\s*=\s*(?:\"([^\"]*)\"|'([^']*)'|\{{\s*['\"]([^'\"]*)['\"]\s*\}})",
        tag,
        flags=re.IGNORECASE,
    )
    if not match:
        return None
    return next((value for value in match.groups() if value is not None), None)


def report(label, passed, detail=None):
    status = "PASS" if passed else "FAIL"
    print(f"[{status}] {label if passed or not detail else detail}")
    return passed


def validate(path):
    try:
        source = path.read_text(encoding="utf-8")
    except (OSError, UnicodeError) as error:
        print("Validación del formulario\n-------------------------")
        print(f"[FAIL] No se pudo leer '{path}': {error}")
        print("\nValidación fallida.")
        return 1

    forms = find_elements(source, "form")
    inputs = find_elements(source, "input")
    buttons = find_elements(source, "button")
    labels = find_elements(source, "label")
    label_ids = {
        value
        for label in labels
        if (value := get_attribute(label, "htmlFor")) is not None
    }

    print("Validación del formulario\n-------------------------")
    results = []

    has_form = bool(forms)
    results.append(report("Elemento form detectado", has_form))

    has_submit = any(
        (get_attribute(button, "type") or "").lower() == "submit"
        for button in buttons
    )
    results.append(report("Botón submit detectado", has_submit))

    has_inputs = bool(inputs)
    results.append(report("Campos input detectados", has_inputs))

    ids = [get_attribute(input_tag, "id") for input_tag in inputs]
    all_have_ids = has_inputs and all(value for value in ids)
    results.append(report("Todos los input tienen un id", all_have_ids))

    names = [get_attribute(input_tag, "name") for input_tag in inputs]
    all_have_names = has_inputs and all(value for value in names)
    results.append(report("Todos los input tienen un name", all_have_names))

    labels_valid = has_inputs and all(value and value in label_ids for value in ids)
    results.append(report("Todos los input tienen etiquetas asociadas", labels_valid))

    types_valid = True
    for input_tag in inputs:
        field_type = (get_attribute(input_tag, "type") or "text").lower()
        identifier = " ".join(
            filter(None, [get_attribute(input_tag, "id"), get_attribute(input_tag, "name")])
        ).lower()

        if "email" in identifier and field_type != "email":
            print("[FAIL] El campo de correo electrónico debe usar type=\"email\".")
            types_valid = False
        if "password" in identifier and field_type != "password":
            print("[FAIL] El campo de contraseña debe usar type=\"password\".")
            types_valid = False

    results.append(report("Los tipos de campo son válidos", types_valid))

    passed = all(results)
    print("\nValidación exitosa." if passed else "\nValidación fallida.")
    return 0 if passed else 1


def main():
    if len(sys.argv) != 2:
        print(f"Uso: {Path(sys.argv[0]).name} <ruta-al-jsx>", file=sys.stderr)
        return 2

    path = Path(sys.argv[1])
    if not path.is_file():
        print("Validación del formulario\n-------------------------")
        print(f"[FAIL] El archivo no existe: {path}")
        print("\nValidación fallida.")
        return 1

    return validate(path)


if __name__ == "__main__":
    raise SystemExit(main())
