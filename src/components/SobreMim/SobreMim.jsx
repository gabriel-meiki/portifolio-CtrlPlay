
import imagemSasukeComputador from '../../assets/sasuke-computador.png'
import './SobreMim.css'

function SobreMim() {

  return (
    <>
      <section id='sobre-mim'>
          <div className='sobre-section'>
            <div className='sobre-imagem'>
                <img src={imagemSasukeComputador} alt="" />
            </div>
            <div className='sobre-info'>
                <h2>Sobre mim</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet magnam accusamus nemo fuga officiis necessitatibus iusto sapiente optio distinctio, dicta quo illo animi, non ducimus nam rerum! Dignissimos, nam? Officiis?</p>
            </div>
          </div>
      </section>
    </>
  )
}

export default SobreMim