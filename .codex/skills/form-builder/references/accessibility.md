# Accesibilidad en formularios

- En React, asocia cada `<label>` visible con su input mediante valores coincidentes de `htmlFor` e `id`.
- Asegúrate de que se pueda llegar a todos los controles y utilizarlos con el teclado, siguiendo un orden de tabulación lógico.
- No comuniques los errores únicamente mediante el color; incluye texto claro y comprensible.
- Utiliza elementos HTML semánticos para formularios, incluidos `<form>`, `<label>` y los tipos de input adecuados.
- No utilices placeholders como sustitutos de etiquetas visibles.
- Mantén visibles los indicadores de foco del teclado.
- Utiliza atributos ARIA solo cuando la semántica HTML nativa no sea suficiente; mantenlos precisos y sincronizados con la interfaz.
- Usa en los botones un texto que describa claramente su acción.
