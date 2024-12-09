<template>
  <div class="home">
    <div id="first-part">
      <img src="../assets/lesondees/logo_claim_typo_blanc.png" alt="" id ="logo-nav">
      <img src="../assets/lesondees/billetterie_button.png" alt="" id ="billetterie-button">
      <video autoplay muted loop playsinline class="background custom-video">
        <source src="../assets/videos/After_movie.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas les vidéos HTML5.
      </video>
      <div class="wave-up">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#E86B2A" fill-opacity="1" d="M0,224L48,218.7C96,213,192,203,288,208C384,213,480,235,576,250.7C672,267,768,277,864,266.7C960,256,1056,224,1152,202.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
    </div>

    <div id="presentation-part">
      <h1>Les Ondées passent<br>sur 2 jours !</h1>
      <div id="presentation">
        Les Ondées reviennent au Cargö les <b> vendredi 23 et samedi 24 mai 2025 </b> ! Après le succès des 3 précédentes éditions, le festival étudiant pour tous·tes passent la vitesse supérieure et propose 2 jours d’animations, de découvertes et surtout de concerts !
      </div>
      <img src="../assets/lesondees/logo_claim_typo_blanc_only_les_ondees.png" alt="" id ="logo-title">
      <div id="presentation">
        Après avoir <b>affiché complet en 2024</b>, Les Ondées s’imposent au grès des éditions comme un rendez-vous incontournable des étudiant·es caennais·es, et plus encore ! 
      </div>
    </div>
    <h2>Les premiers <br> noms</h2>
    <div class="artistes">
      <Artistes/>
    </div>
    <div id="photos-part">
      <h2>Nos photos</h2>
      <Photos/>
      <!-- <div id="voir-plus">
        voir plus...
      </div> -->
      <div class="wave-up">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fill-opacity="1" d="M0,64L80,69.3C160,75,320,85,480,74.7C640,64,800,32,960,37.3C1120,43,1280,85,1360,106.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </div>

    <div id="actualities-part">

      <h2>Nos actualités</h2>
      <Actualities/>
    </div>
    <div id="partners-part">
      <div class="wave-up">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0000000" fill-opacity="1" d="M0,160L60,170.7C120,181,240,203,360,224C480,245,600,267,720,256C840,245,960,203,1080,197.3C1200,192,1320,224,1380,240L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      </div>
      <div id="title-partners">
        <h2>Merci à nos partenaires</h2>
      </div>
      <div class="wave-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0000000" fill-opacity="1" d="M0,32L60,26.7C120,21,240,11,360,26.7C480,43,600,85,720,90.7C840,96,960,64,1080,64C1200,64,1320,96,1380,112L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>      </div>
      <Partners/>
      <div class="button-parts">
        <ButtonCTA buttonText="Devenir partenaire" @someEvent="goToPartners" />
      </div>
    </div>
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
export default {
  components:{
    Photos,
    Actualities,
    Partners,
    ButtonCTA,
    Artistes
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
#billetterie-button{
  width: 150px;
  position: absolute;
  top: 10px;
  right: 0px;
}

/* Présentation part */

#presentation-part{
  display: flex;
  flex-direction: column;
  background-color: #E86B2A;
  justify-content: center;

}

#first-part .background{
  width: 100%;
}

#presentation{
  font-size: 1rem;
  text-align: left;
  padding: 20px;
  
}

#logo-title{
  width: 60%;
  margin: auto;
}

.button-parts{
  display: block;
  padding: 30px;
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
  background-color: black;
  padding: 0px;
}
#partners-part h2{
  padding: 0px;
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



</style>