<template>
  <div class="home">
    <div id="first-part">
      
        <img src="../assets/lesondees/logo_claim_typo_blanc.png" alt="" id ="logo-nav">
      <ButtonTicketing/>

      <video autoplay muted loop playsinline class="background custom-video" preload="auto">
        <source src="../assets/videos/After_movie.mov" type="video/mp4" />
        Votre navigateur ne supporte pas les vidéos HTML5.
      </video>
      <div class="wave-up">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#E86B2A" fill-opacity="1" d="M0,224L48,218.7C96,213,192,203,288,208C384,213,480,235,576,250.7C672,267,768,277,864,266.7C960,256,1056,224,1152,202.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
    </div>
    <div id="artistes-summary-part">
      <router-link to="/programmation" id="nav-artistes-button">
        <p id="dates-artistes">
          23 & 24 Mai 
        </p>
        <img src="../assets/lesondees/all_artistes.png" alt="Artistes clickable pour voir la programmation">
        <p id="summary-artistes">
          Théodora, Edge, Ajna... Voir toute la programmation ! 
        </p>
      </router-link>
    
      
    </div>
    
    

    <div id="presentation-part">
      
      <div class="side side-left">
       
        <div class="presentation">

          <h1>Les Ondées passent<br>sur 2 jours !</h1>
          <p>
            <strong> Les Ondées reviennent au Cargö les vendredi 23 et samedi 24 mai 2025</strong> ! <br>Après le succès des 3 précédentes éditions, le festival étudiant pour tous·tes passe la vitesse supérieure et propose 2 jours d’animations, de découvertes et surtout de concerts !
          </p>
        
        </div>
        <img src="/photos-selection/thurb.png" alt="">
      </div>
      <div class="side side-right">
        <!-- <img src="/photos-selection/(c) nath_pics 3.jpg" alt=""> -->
        <img src="/photos-selection/Spider Zed 3 (c)Lukastivecrea Border.png" alt="">
        <div class="presentation">
          <h2>Le rendez-vous caennais !</h2>
          <p>
            Après avoir <b>affiché complet en 2024</b>, Les Ondées s’imposent au grès des éditions comme un rendez-vous incontournable des étudiant·es caennais·es, et plus encore ! 
          </p>
        </div>

      </div>
    </div>
    <!-- <div id="photos-part">
      <h2>Nos photos</h2>
      <Photos/>
       <div id="voir-plus">
        voir plus...
      </div> 

    </div> -->

    <div id="actualities-part">
      <div class="wave-bottom">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E86B2A" fill-opacity="1" d="M0,160L80,149.3C160,139,320,117,480,122.7C640,128,800,160,960,160C1120,160,1280,128,1360,112L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      </div>


      <h2>Nos actualités</h2>
      <Actualities/>
    </div>
    <div id="partners-part">

      <div id="title-partners">
        <div class="wave-up">
        
          <svg  viewBox="0 0 1728 59" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1740 7.17298C1740 7.17298 1613.14 18.6765 1531.37 19.2015C1439.35 19.7922 1388.28 10.6553 1296.4 7.17298C1123.4 0.616306 1026 -1.81703 852.795 1.43211C676.751 4.73458 579.213 22.773 403.116 24.3956C244.784 25.8545 -2 12.9138 -2 12.9138V58.8407H1740V7.17298Z" fill="black"/>
</svg>
        </div>
        <h2>Merci à nos partenaires</h2>
        <div class="wave-bottom">
          <svg  viewBox="0 0 1728 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-2 55.1317C-2 55.1317 124.865 42.8798 206.635 42.3207C298.655 41.6916 441.602 55.1317 441.602 55.1317C441.602 55.1317 712.002 64.7066 885.205 61.2461C1061.25 57.7288 1158.79 38.5168 1334.88 36.7887C1493.22 35.2349 1740 49.0174 1740 49.0174V0.102608H-2V55.1317Z" fill="black"/>
          </svg>
        </div>
      </div>
        <Partners/>
      <div class="button-parts">
        <ButtonCTA buttonText="Devenir partenaire" @someEvent="goToPartners" />
      </div>
    </div>
    <ThePeopleCode/>
    <div id="bottom-part">
      <img src="../assets/lesondees/bottom_image.png" alt="" class="background">
      <div class="social-medias">
        <a href="https://www.facebook.com/lesondees" target="_blank" rel="noopener noreferrer">
          <img src="../assets/logos/facebook.png" alt="Facebook" class="social-media" />
        </a>
        <a href="https://www.instagram.com/lesondees/" target="_blank" rel="noopener noreferrer">
          <img src="../assets/logos/instagram.png" alt="Instagram" class="social-media" />
        </a>
        <a href="https://www.linkedin.com/company/les-ond%C3%A9es/" target="_blank" rel="noopener noreferrer" >
          <img src="../assets/logos/linkedin.png" alt="LinkedIn" class="social-media" />
        </a>
        <a href="https://www.tiktok.com/@les_ondees" target="_blank" rel="noopener noreferrer">
          <img src="../assets/logos/tiktok.png" alt="TikTok" class="social-media" />
        </a>
      </div>
      <div class="wave-up">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E86B2A" fill-opacity="1" d="M0,160L80,149.3C160,139,320,117,480,122.7C640,128,800,160,960,160C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>      
      </div>
      <div class="logo-bottom">
        <img src="../assets/lesondees/logo_claim_typo_blanc.png" alt="" class="logo">
      </div>
    </div>
  </div>

</template>

<script>
import Actualities from '../components/Actualities.vue';
import Partners from '../components/Partners.vue';
import Photos from '../components/Photos.vue';
import ButtonCTA from '../components/shared/ButtonCTA.vue';
import Artistes from '../components/artistes/Artistes.vue';
import ButtonTicketing from '../components/ButtonTicketing.vue';
import ThePeopleCode from '../components/partners/ThePeopleCode.vue';
export default {
  components:{
    Photos,
    Actualities,
    Partners,
    ButtonCTA,
    Artistes,
    ButtonTicketing,
    ThePeopleCode
  },
  data() {
    return {
      isMenuOpen: false, // Indique si le menu est ouvert
    };
  },
  methods: {
    goToPartners() {
      const pdfUrl = "/partners/Dossier_de_partenariat_Les_Ondées_2025.pdf";
      window.open(pdfUrl, "_blank");
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Basculer l'état du menu
    },
  },
}
</script>
<style scoped>
.home{
  background-color: #E86B2A;
}
.custom-video {
  width: 100%; /* Largeur fixe */
  height: 75vh; /* Hauteur fixe pour un ratio 16:9 */
  object-fit: cover;
}

/* First part */

#first-part{
  display: flex;
  position: relative;
  background-color: #E86B2A;

}
#logo-nav{
  width: 120px;
  position: absolute;
  top: 0px;
  left: 20px;
  
}
#first-part .wave-up{
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 0px;
}

#first-part .background{
  width: 100%;
}


#logo-title{
  width: 60%;
  margin: auto;
}

.button-parts{
  display: block;
  padding: 30px;
}

/** Artistes Nav */

#artistes-summary-part {
  width: 100%;
  margin: 20px 0px 5cap 0px;
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
  font-family: 'BlocHeavy';
  font-size: 1.4rem;
}

#nav-artistes-button {
  cursor: pointer;
  width: 70%;
  transition: transform 0.3s ease-in-out;
}
#nav-artistes-button img {
  width: 100%;
}

#nav-artistes-button:hover {
  transform: scale(1.1);
}

#summary-artistes{
  color: white;
}

#dates-artistes{
  color: rgba(255, 255, 255, 0.522);
}
/* Présentation part */

.side{
  display: flex;
  flex-direction: column;
  background-color: #E86B2A;
  justify-content: center;
  padding: 10px 20px 0px 20px ;
  position: relative;


}

.side h2 {
  display: none;
}
#title-off{
  display: block;
}

.side img{
  display: none;
  height: auto;
}
.presentation{
  text-align: left;
}
.presentation h1{
  text-align: center;
  padding: 20px;
}


/* Photos */


#photos-part #voir-plus {
  color: white;
  font-size: 2rem;
  font-family: 'BlocHeavy';
  color: transparent; /* Make the text fill invisible */
  -webkit-text-stroke: 1px white; /* Outline thickness and color */
}

/** Actualities part */

#actualities-part{
  background-color: white;
  position: relative;
  display: block;
}
h2{
  display: block;
}
#actualities-part h2{
  color: #E86B2A;
}

/** Partners part */

#partners-part{
  background-color: white;
}

#partners-part #title-partners{
  color: white;
  background-color: white;
  padding: 0px;
}
#partners-part #title-partners h2{
  background-color: black;
}
#partners-part h2{
  /* padding: 0px; */
}

/** Bottom */

#bottom-part{
  /* display: flex; */
  flex-direction: column;
  position: relative;
  background-color: black;
  justify-content: center;
  align-items: center;

}
#bottom-part .background{
  width: 100%;
}
#bottom-part .logo{
  width: 40%;
  margin: 0px 20px 20px 20px;
}
.social-medias{
  padding: 40px 0px 0px 0px;
  width: 100%;
  display: flex;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
}

.logo-bottom{
  background-color: #E86B2A;
}
.social-media{
  width: 40px;
  padding: 10px;
}

/** Wave */

.wave-up, .wave-bottom{
  position: relative;
  min-height: 100px;
  /* padding: 6% 0% 6% 0%; */
}
.wave-up svg{
  position: absolute;
  bottom: -1px;
  left : 0px
}
.wave-bottom svg{
  position: absolute;
  top: -1px;
  left : 0px
}


@media (min-width: 770px) {

    /** Header */
    #logo-nav{
      width: 250px;
      top: 0px;
      left: 20px;
      
    }
  .custom-video {
    height: 85vh;

  }
  #billetterie-button{
    top: 20%;
    width: 200px;
  }
  /** Présentation */

  #presentation-part{
    display: flex;
    position: relative;
    padding: 50px;
  }
  .presentation h1, .presentation h2{
    font-size: 1.8rem;
    text-align: left;
    padding:0px ;
  }
  .side{
    
    flex-direction: column;
    padding: 20px;
    width: 50%;
    position: relative;
    justify-content:start;


  }
  .side-left{
    flex-direction: column-reverse;

  }
  .side .presentation{
    margin-top: 30px;
    padding: 10px;
    font-size: 0.8rem;

  }
  .side img{
    display: block;

    width: 100%;

  }

  .side h2 {
    display: block;
    margin-top: 0px;
    margin-bottom: 0px;
  }

  .side #affiche-off{
    display: block;
    padding: 5%;
    width: 40%;
  }
  #image-les-ondees-button{
    width: 300px;
  }

  /**Artites */
  h2{
    margin-top: 100px;
    margin-bottom: 100px;
  }
  #title-partners{
    padding-top: 100px;
    background-color: white;
  }
  #title-partners h2{
    margin: 0;
    background-color: aliceblue;
  }
  /** Bottom */

  #bottom-part .background, #bottom-part .wave-up{
    display: none;
  }
  #bottom-part .logo-bottom{
    margin: auto;
    background-color: transparent;
    width: 23%;
  }

}

@media (min-width: 1200px ) {

}

@media (min-width:1360px ) {
}


</style>