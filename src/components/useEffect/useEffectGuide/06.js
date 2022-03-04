// // Primer render, props son {id: 10}
// function Example() {
//   // ...
//   useEffect(
//     // Effect del primer render
//     () => {
//       ChatAPI.subscribeToFriendStatus(10, handleStatusChange);
//       // Función de limpieza del primer render
//       return () => {
//         ChatAPI.unsubscribeFromFriendStatus(10, handleStatusChange);
//       };
//     }
//   );
//   // ...
// }

// // Siguiente render, las props son {id: 20}
// function Example() {
//   // ...
//   useEffect(
//     // Effect del segundo render
//     () => {
//       ChatAPI.subscribeToFriendStatus(20, handleStatusChange);
//       // Función de limpieza del segundo render
//       return () => {
//         ChatAPI.unsubscribeFromFriendStatus(20, handleStatusChange);
//       };
//     }
//   );
//   // ...
// }


// Imagina que props es {id: 10} en el primer renderizado, y {id: 20} en el segundo.

// React renderiza el UI para {id: 10}.
// El navegador dibuja. Vemos la UI para {id: 10} en la pantalla.
// React corre el effect para {id: 10}.
// React renderiza la UI para {id: 20}.
// El navegador dibuja. Vemos la UI para {id: 20} en la pantalla.
// React limpia el effect con valor {id: 10}.
// React corre el effect para {id: 20}.