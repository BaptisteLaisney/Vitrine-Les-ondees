

<template>
  <div class="home">
    <div id="first-part">
      <img src="../assets/lesondees/logo_claim_typo_blanc.png" alt="" id ="logo-nav">
      <img src="../assets/lesondees/billetterie_button.png" alt="" id ="billetterie-button">
      <img src="../assets/lesondees/background_home.png" alt="" class="background">
    </div>
    <div id="presentation-part">
      <h1>Les ondées<br>reviennent !</h1>
      <div id="presentation">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac justo sed neque accumsan mollis. Quisque vitae ipsum a eros iaculis commodo.
        
      </div>
    </div>
    <img src="../assets/lesondees/logo_claim_typo_blanc_only_les_ondees.png" alt="" id ="logo-title">
    <div id="photos-part">
      <h2>Nos photos</h2>
      <Photos/>
      <div id="voir-plus">
        voir plus...
      </div>
    </div>
    <div id="actualities-part">
      <h2>Nos actualités</h2>
      <Actualities/>
    </div>
    <div id="partners-part">
      <div id="title-partners">
        <h2>Merci à nos partenaires</h2>
      </div>
      <Partners/>
      <div class="button-parts">
        <ButtonCTA buttonText="Devenir partenaire" @someEvent="goToPartners" />
      </div>
    </div>
    <div id="bottom-part">
      
      <img src="../assets/lesondees/bottom_image.png" alt="" class="background">
      <div class="social-medias">
        <img src="../assets/logos/facebook.png" alt="" class="social-media">
        <img src="../assets/logos/instagram.png" alt="" class="social-media">
        <img src="../assets/logos/linkedin.png" alt="" class="social-media">
        <img src="../assets/logos/tiktok.png" alt="" class="social-media">
      </div>
      <img src="../assets/lesondees/logo_claim_typo_blanc_only_les_ondees.png" alt="" class="logo">
    </div>

  </div>

</template>

<script>
import Actualities from '../components/Actualities.vue';
import Partners from '../components/Partners.vue';
import Photos from '../components/Photos.vue';
import ButtonCTA from '../components/shared/ButtonCTA.vue';

export default {
  components:{
    Photos,
    Actualities,
    Partners,
    ButtonCTA
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
<style>
.home{
  background-color: #E86B2A;
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
  font-family: 'Montserrat';
  font-size: 1rem;
  text-align: left;
  padding: 20px;
  
}

#logo-title{
  width: 60%;
}

.button-parts{
  display: block;
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
  padding: 10px 0px 10px 0px;
}

/** Bottom */

#bottom-part{
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #E86B2A;
  justify-content: center;
  align-items: center;

}
#bottom-part .background{
  width: 100%;
}
#bottom-part .logo{
  width: 40%;
  margin: 20px;
}
.social-medias{
  padding: 40px 0px 40px 0px;
  background-color: black;
  width: 100%;
  display: flex;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
}

.social-media{
  width: 40px;
  padding: 10px;
}
</style>