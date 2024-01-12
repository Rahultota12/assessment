import React from 'react'
import '../styles/Fonctionnalités.css'
import func from '../images/funcation.png'
import start from '../images/Union.png'
function Fonctionnalités() {
  return (
    <>
      <div className="funcation">
        <h1>Fonctionnalités</h1>
        <div className="row ">
          <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-4 col-sm-12">
                    <div className="function-small">
                    <div className="fun-img">
                                  <img src={start} alt="" />
                                  </div>
                      <h5>Sélection de profils</h5>
                      <p>Sélectionnez les meilleurs profils d'experts ou organisations qui vous intéressent et entrez en contact avec eux! </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-12">
                    <div className="function-small">
                    <div className="fun-img">
                                  <img src={start} alt="" />
                                  </div>
                      <h5> Publication</h5>
                      <p>Offres d’emploi, annonces, collaborations, événements, etc. Publiez du contenu exclusif sur votre page privée !</p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-12">
                    <div className="function-small">
                    <div className="fun-img">
                                  <img src={start} alt="" />
                                  </div>
                      <h5>TRAVEL MAP</h5>
                      <p>Rencontrez-vous grâce à notre Travel Map! Cette fonctionnalité permet aux experts de notifier leurs déplacements sur le continent africain. Il ne reste plus qu'à planifier la rencontre! </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-12">
                    <div className="function-smal">
                    <div className="fun-img">
                                  <img src={start} alt="" />
                                  </div>

                      <h5>Filtres & recherche avancée</h5>
                      <p>Ciblez vos recherches par secteur d'activité, pays et plus encore. </p>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-12">
                    <div className="function-smal">
                    <div className="fun-img">
                      <img src={start} alt="" />
                      </div>
                      <h5>NOTIFICATIONS</h5>
                      <p>Soyez directement avertis des nouvelles publications et mises à jour grâce aux notifications.</p>
                    </div>
                  </div>
                </div>
          </div>
          <div className="col-lg-4">
       <img src={func} alt="" className='img-fluid' />
       <button className='buttonn'>Explorer la Travel Map</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Fonctionnalités
