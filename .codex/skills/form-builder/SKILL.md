---
name: form-builder
description: Esta skill crea formularios web accesibles, responsivos y validados a partir de los requisitos del usuario. Utiliza esta skill cuando el usuario solicite crear, generar o implementar un formulario en una aplicación frontend.
---

# Form-Builder

Esta skill crea formularios React accesibles, responsivos y validados según los requisitos del usuario. Sigue este flujo de trabajo cada vez que se utilice la skill.

## Flujo de trabajo obligatorio

1. Analiza la solicitud e identifica el propósito del formulario, los campos solicitados, los campos obligatorios, los tipos de datos y las validaciones necesarias. No agregues campos que el usuario no haya solicitado, salvo que sean técnicamente necesarios. Si falta información esencial que no se pueda inferir razonablemente, consulta al usuario antes de realizar cambios importantes.

2. Antes de implementar el formulario, consulta todas estas referencias:
   - `references/form-guidelines.md`
   - `references/validation-rules.md`
   - `references/accessibility.md`

3. Lee y utiliza estos assets como puntos de partida:
   - `assets/form-template.jsx`
   - `assets/form-styles.css`

   Adáptalos al formulario solicitado; no los copies sin revisarlos. Conserva las buenas prácticas aplicables e integra el resultado en la aplicación existente, en lugar de copiar los assets sin cambios.

4. Inspecciona la aplicación existente e identifica el componente y la hoja de estilos adecuados para el formulario. Conserva el comportamiento existente y modifica solo lo necesario. No instales dependencias externas, salvo que sean estrictamente necesarias y el usuario lo autorice.

5. Implementa el formulario solicitado con React/JSX y HTML semántico. Asigna a cada input un `id` único, un `name` significativo y un `<label>` visible asociado mediante valores coincidentes en `htmlFor` e `id`. No uses placeholders como sustituto de etiquetas. Elige los tipos de input HTML adecuados, identifica los campos obligatorios, incluye un botón submit y proporciona mensajes de validación comprensibles cerca de los campos correspondientes.

6. Implementa las validaciones necesarias para los campos solicitados. Impide el envío cuando el formulario no sea válido, utiliza la validación nativa de HTML cuando corresponda y añade validación personalizada para las restricciones que HTML no pueda expresar (por ejemplo, comprobar que coincidan la contraseña y su confirmación cuando se soliciten ambas). Mantén lógica la navegación con teclado y visibles los indicadores de foco. Utiliza ARIA solo cuando la semántica nativa no sea suficiente. Asegura que el diseño sea responsivo.

7. Después de generar o modificar el formulario, ejecuta el validador desde la raíz del repositorio y sustituye el marcador por la ruta real del componente JSX:

   ```sh
   python .codex/skills/form-builder/scripts/validate_form.py <ruta-del-componente-jsx>
   ```

8. Revisa la salida y el código de salida del validador. Un código distinto de cero significa que la validación falló. Lee los problemas reportados, corrige el formulario cuando sea posible y vuelve a ejecutar el validador. Repite el proceso hasta que pase o hasta que exista un problema que no se pueda resolver de forma segura. Nunca informes que la validación fue exitosa si falló. Si el archivo objetivo no existe, localiza el componente correcto antes de continuar; no consideres que un archivo inexistente pasó la validación.

9. Cuando la validación pase, informa que se creó el formulario, identifica los archivos modificados, resume brevemente las validaciones implementadas y confirma que `validate_form.py` terminó correctamente. Si no se puede lograr que la validación pase de forma segura, explica el impedimento e informa el resultado con precisión.

## Criterios de finalización

Una ejecución exitosa genera un formulario funcional en la aplicación, aplica las pautas pertinentes de `references/`, adapta los puntos de partida de `assets/` y pasa `scripts/validate_form.py`. Finaliza con un breve resumen de los cambios.
