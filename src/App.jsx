import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <nav id='nav' className='d-flex justify-content-around'>
        <h5><a href="#habilidades">Habilidades</a></h5>
        <h5><a href="#proyectos">Proyectos</a></h5>
        <h5><a href="#experiencia">Experiencia</a></h5>
        <h5><a href="#contacto">Contacto</a></h5>
      </nav>
      <header className=' d-flex justify-content-evenly'>
        <div>
          <h1>Hola, soy karen</h1>
          <h4>Desarroladora web frontend</h4>
          <button>Contactar</button>
        </div>
        <img className='photo' src="../img/photo.png" alt="carita" />
      </header>
      <section id='habilidades'>
        <h3>Habilities</h3>
        <div className='containerhabilidades d-flex justify-content-evenly py-5'>
          <img className='habilidades' src="../img/html.png" alt="nn" />
          <img className='habilidades' src="../img/css.png" alt="nn" />
          <img className='habilidades' src="../img/js.png" alt="nn" />
          <img className='habilidades' src="../img/react.png" alt="nn" />
        </div>
      </section>
      <section id='proyectos'>
        <h3>Proyects</h3>
        <div className='proyecto'>
          <a className='cartas' href='https://tributo-redhotchillpeppers.netlify.app/'><img className='proyect card bg-light bg-opacity-10' src="../img/webtributo.jpg" alt="" /></a>
          <a className='cartas' href='https://react-rick-and-morty-api-karen.netlify.app'><img className='proyect card bg-light bg-opacity-10' src="../img/rickandmorty.jpg" alt=""/></a>
          <a className='cartas' href='https://wheel-of-doom.netlify.app'><img className='proyect card bg-light bg-opacity-10' src="../img/wheelofdoom.jpg" alt="" /></a>
          <a className='cartas' href='https://calculadora-js-karen.netlify.app'><img className='proyect card bg-light bg-opacity-10' src="../img/calculadora.jpg" alt="" /></a>
        </div>
      </section>
      <section id='experiencia'>
        <h3>Experiencia</h3>
        <div className='d-flex justify-content-evenly'>
          <h4>text</h4>
          <h4>text</h4>
          <h4>text</h4>
        </div>
      </section>
      <section id='contacto'>
        <h3>Contacto</h3>
        <div className='contact d-flex justify-content-evenly'>
          <img className='contactlogo' src="../img/linkedin.png" alt="x" />
          <img className='contactlogo' src="../img/whatsapp.png" alt="x" />
          <img className='contactlogo' src="../img/github.png" alt="x" />
        </div>
      </section>
      <section id='flecha'>
        <a className='flecha' href="#nav"><img src="../img/flecha.png" alt="" /></a>
      </section>
    </div>
  )
}

export default App
