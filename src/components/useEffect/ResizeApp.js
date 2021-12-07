import { useState, useEffect } from "react";


const ResizeApp = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth) // Nos da el ancho de la pantalla

  const isMobile = windowWidth < 768;

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth)
    })
  }, [])

  return (  
    <section className="mt-5 mb-2 pt-5 pb-4 bg-light rounded-2">
      <h3 className="text-primary mb-4">Resize App</h3>
      <div className="d-flex justify-content-center align-items-center mt-4">
        <h5>{windowWidth}</h5>
        { isMobile && <p>Show this text only in mobile device</p> }
        
        {/* <button className="btn btn-primary mb-3 me-5" onClick={updateUser}>Get a random user</button>
        <div className="d-flex flex-column mt-2">
          <h5>{user.name}</h5>
          <p>{user.email}</p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-3">User: {user.id} - POSTS</h3>
        <ol className="list-group list-group-numbered d-flex justify-content-center">
          {posts.map(post => (
            <div key={post.id}>
              <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 mt-2 me-auto">
                  <div className="fw-bold mb-2">{post.title}</div>
                  {post.body}
                </div>
              </li>
            </div>
          ))}
        </ol> */}
      </div>
    </section>
  );
}

export default ResizeApp;