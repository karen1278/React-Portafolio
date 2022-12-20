import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
          <nav className='d-flex justify-content-around'>
            <h5>Habilidades</h5>
            <h5>Proyectos</h5>
            <h5>Experiencia</h5>
            <h5>Contacto</h5>
          </nav>
          <header className=' d-flex justify-content-evenly'>
            <div>
              <h1>Hola, soy karen</h1>
              <h4>Desarroladora web frontend</h4>
              <button>Contactar</button>
            </div>
            <img className='photo' src="../img/photo.png" alt="carita" />
          </header>
          <section>
            <h3 className='text-start '>Habilities</h3>
            <div className='d-flex justify-content-evenly'>
              <img src="../img/html.png" alt="nn" />
              <img src="../img/css.png" alt="nn" />
              <img src="../img/js.png" alt="nn" />
              <img src="../img/react.png" alt="nn" />
            </div>
          </section>
          <section>
            <h3>Proyects</h3>
            <img src="../img/webtributo.jpg" alt="" />
            <img src="../img/rickandmorty.jpg" alt="" />
            <img src="../img/wheelofdoom.jpg" alt="" />
            <img src="../img/calculadora.jpg" alt="" />
          </section>
          <section>
            <h3>Experiencia</h3>
            <div className='d-flex justify-content-evenly'>
              <h4>text</h4>
              <h4>text</h4>
              <h4>text</h4>
            </div>
          </section>
          <section>
            <h3>Contacto</h3>
            <div className='d-flex justify-content-around'>
              <img src="../img/linkedin.png" alt="x" />
              <img src="../img/whatsapp.png" alt="x" />
              <img src="../img/github.png" alt="x" />
            </div>
          </section>
          
    </div>
  )
}

export default App
