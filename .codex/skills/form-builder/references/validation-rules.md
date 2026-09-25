# Reglas de validación

Aplica estas reglas al crear o validar un formulario:

1. **Tipos de input:** Utiliza `type="email"` para direcciones de correo electrónico y `type="password"` para contraseñas. Elige otros tipos de input HTML que correspondan a los datos solicitados.
2. **Campos obligatorios:** Añade el atributo `required` a los campos que sean obligatorios.
3. **Identificadores de campos:** Asigna a cada input un `id` único y un `name` significativo para poder identificar las etiquetas y los valores enviados.
4. **Etiquetas:** Asocia cada input con una etiqueta. No dejes inputs sin una etiqueta asociada.
5. **Confirmación de contraseña:** Si existe un campo de confirmación de contraseña, valida que su valor coincida con el campo de contraseña.
6. **Mensajes de error:** Proporciona un mecanismo para mostrar errores de validación comprensibles cerca de los campos correspondientes.
7. **Envío:** Impide enviar el formulario mientras algún campo contenga datos no válidos. Utiliza la validación nativa de HTML cuando corresponda y añade validación personalizada para las reglas que HTML no pueda expresar.
