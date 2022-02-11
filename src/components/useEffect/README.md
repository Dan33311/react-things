# Info about this folder


* The components `FetchCard`, `LifeCycle`, and `ReziseApp` was created in order to learn useEffect,
  * source [useEffect explicado al detalle - Con 3 mini Apps](https://www.youtube.com/watch?v=6lvI-gTF_X8)  56:28 minutes
    ✅ Como usarlo
    ✅ Ciclo de vida
    ✅ Efecto - Sin dependencias
    ✅ Efecto - Arreglo vacío 
    ✅ Efecto - Una dependencia
    ✅ Efecto - Múltiples dependencias
    ✅ Efecto - Cleanup (return)


* Guia completa de useEffect `(working on)!`
  * Source [Blog](https://overreacted.io/es/a-complete-guide-to-useeffect/#tldr)
  * Folders used `/src/components/useEffect/02-useEffect`
  * Topics
    [x] 01. Cada Render Tiene Sus Propias Propiedades y Estado.
      <!-- Hablan sobre que necesitamos entender lo que es renderizado -->
      <!-- cada vez que cambiamos un estado se realiza un render, pero el estado se mantiene -->
    [x] 02. Cada Render Tiene Sus Propios Manejadores De Eventos
      <!-- En los manejadores de eventos en este ejemplo el `alert`,  recuerda el estado (count) que le pasamos, al momento exacto que ejecutamos el `alert`, asi sigamos cambiando el estado, -->
    [ ] 03. Cada Render Tiene Sus Propios Effect