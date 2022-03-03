# Info about this folder

* USEEFFECT BY LUIS CABRERA
  * The components `FetchCard`, `LifeCycle`, and `ReziseApp` was created in order to learn useEffect,
  * Source [useEffect explicado al detalle - Con 3 mini Apps](https://www.youtube.com/watch?v=6lvI-gTF_X8)  56:28 minutes
  * Folders used `/src/components/useEffect/useEffectLuisCabrera`
  * Topics
    ✅ Como usarlo
    ✅ Ciclo de vida
    ✅ Efecto - Sin dependencias
    ✅ Efecto - Arreglo vacío 
    ✅ Efecto - Una dependencia
    ✅ Efecto - Múltiples dependencias
    ✅ Efecto - Cleanup (return)


* GUIA COMPLETA DE USEEFFECT `(working on)!`
  * Source [Blog](https://overreacted.io/es/a-complete-guide-to-useeffect/#tldr)
  * Folders used `/src/components/useEffect/useEffectGuide`
  * Topics
    [x] 01. Cada Render Tiene Sus Propias Propiedades y Estado.
      <!-- Hablan sobre que necesitamos entender lo que es renderizado -->
      <!-- cada vez que cambiamos un estado se realiza un render, pero el estado se mantiene -->
    [x] 02. Cada Render Tiene Sus Propios Manejadores De Eventos
      <!-- En los manejadores de eventos en este ejemplo, el `alert`, recuerda el estado (count) que le pasamos, al momento exacto que ejecutamos el `alert`, asi sigamos cambiando el estado (count), -->
    [x] 03. Cada Render Tiene Sus Propios Effect
      <!-- al cambiar el estado, recordemos que por cada cambio se realiza un render, entonces si lo utilizamos en un efecto, este efecto se ejecuta,
      por cada vez que cambiemos el estado, (por cada render) -->
    [x] 04. Cada Render Tiene Su Propio… Todo
      <!-- funciona diferente a clases aunque en apariencia se vean igual, cada render loggea independientemente el efecto.
      cada cambio de estado ejecuta su Todo (console.log)  -->
