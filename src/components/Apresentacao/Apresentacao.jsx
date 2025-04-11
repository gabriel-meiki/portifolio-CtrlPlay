
import imagemSasukeApresentacao from '../../assets/sasuke-solitario.png'
import './styles.css'

function Apresentacao() {

  return (
    <>
      <section id='apresentacao'>
          <div className='apresentacao-section'>
              <div className='apresentacao-titulo'>
                <h1>Sasuke Uchiha</h1>
                <h2>Programador</h2>
              </div>
              <div className='apresentacao-imagem'>
                <img src={imagemSasukeApresentacao} alt="" />
              </div>
          </div>
      </section>
    </>
  )
}

export default Apresentacao