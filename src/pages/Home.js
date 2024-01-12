import React from 'react'
import '../styles/Home.css'
import home1 from '../images/Home-img-1.png'
import home2 from '../images/Home-image-2.png'
import MissionsP from '../components/MissionsP'
import Exparts from '../components/Exparts'
import Fonctionnalités from '../components/Fonctionnalités'
function Home() {
  return (
    <>
      <div className="home">
   <h1 className='Home-heading'>Nous réunissons experts du monde
   </h1>
   <h1 className='Home-heading'> entier et organisations en Afrique</h1>
   <div className="container">
    <div className="row">
      <div className="col-lg-4">
        <h1 className='home-small-heading'>Organisations en Afrique</h1>
        <p className='home-smal-heading'>Vous êtes une entreprise privée ou publique basée en Afrique et vous avez du mal à recruter des profils expérimentés? Vous êtes une start-up africaine et vous souhaitez faire appel aux services d'un prestataire externe?  Vous recherchez une expertise spécifique pour réaliser un futur projet?

        </p><p className='home-smal-heading'>Grâce à son réseau, PANDA vous aide à trouver les experts dont vous avez besoin!</p>
      </div>
      <div className="col-lg-4">
      <div className='home-img'>

        <img src={home1} className='img-fluid '/>
      </div>
     

      </div>
      <div className="col-lg-4">
        <h1 className='home-small-heading'>Experts </h1>
        <p className='home-smal-heading'>Vous êtes un professionnel expérimenté et vous planifiez de partir travailler en Afrique? Vous vous rendez souvent sur le continent africain pour des raisons professionnelles et vous souhaitez étendre votre réseau? Vous souhaitez partager votre expertise avec des organisations africaines sans vous déplacer?

   </p><p className='home-smal-heading'> PANDA est la plateforme de networking des experts pour la réalisation de leurs projets professionnels sur le continent africain! </p>
      </div>
    </div>
   </div>
      </div>
      <MissionsP/>
      <Fonctionnalités/>
      <Exparts/>
    </>
  )
}

export default Home
