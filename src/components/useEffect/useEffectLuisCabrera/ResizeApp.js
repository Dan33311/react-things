import { useState, useEffect } from "react";


const ResizeApp = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth) // Nos da el ancho de la pantalla

  const isMobile = windowWidth < 768;

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      console.log('return useEffect')
    }
  }, [])

  return (  
    <section className="mt-5 mb-2 pt-5 pb-4 bg-light rounded-2">
      <h3 className="text-primary mb-4">Resize App</h3>
      <div className="d-flex justify-content-center align-items-center mt-4">
        
        <h5>{windowWidth}</h5>
        { isMobile &&
          <p>Show this text only in mobile device</p>
        }
        
      </div>
    </section>
  );
}

export default ResizeApp;