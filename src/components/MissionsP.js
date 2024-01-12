import React from 'react'
import '../styles/mission.css'
function MissionsP() {
  return (
    <>
    <div className="mission container">
      <h1 className="mission-heading">Missions de PANDA</h1>
    </div>
    <div className="row sub-mission">
      <div className="col-lg-2 col-md-6 col-sm-12">
        <div className="mission-miles">
        <p className='mission-number'>01</p>
          <h4>Networking</h4>
          <p>Faciliter la mise en réseau “networking” entre les organisations situées en Afrique et les experts et entrepreneurs africains et internationaux.</p>
        </div>
      </div>
      <div className="col-lg-2 col-md-6 col-sm-12">
        <div className="mission-miles">
        <p className='mission-number'>02</p>
           <h4>Partage</h4>
          <p>Promouvoir le partage de connaissances et d’expertises. </p>
        </div>
      </div>
      <div className="col-lg-2 col-md-6 col-sm-12">
        <div className="mission-miles">
        <p className='mission-number'>03</p>
          <h4>Recrutement</h4>
          <p>Augmenter la visibilité des offres d’emploi en Afrique et faciliter le recrutement de professionnels  qualifiés.</p>
        </div>
      </div>
      <div className="col-lg-2 col-md-6 col-sm-12">
        <div className="mission-miles">
        <p className='mission-number'>04</p>
          <h4>Collaborations</h4>
          <p> Créer des opportunités de collaborations en Afrique.</p>
        </div>
      </div>
      <div className="col-lg-2 col-md-6 col-sm-12">
        <div className="mission-miles">
        <p className='mission-number'>05</p>
          <h4>Evénements</h4>
          <p>Augmenter la visibilité des évenements autour du “Business in Africa”.</p>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default MissionsP
