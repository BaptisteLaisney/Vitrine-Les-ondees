<template>
    <div class="artistes">
        <div class="wave-up">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E86B2A" fill-opacity="1" d="M0,160L80,165.3C160,171,320,181,480,197.3C640,213,800,235,960,218.7C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </div>
        <Artiste class="artiste" :id="'artiste-' + artiste.id"
            v-for="artiste in artistesList" 
            :key="artiste.id" 
            :artisteName="artiste.name"
            :artisteImage="artiste.image"
            :presentationFirst="artiste.presentationFirst"
            :presentationSecond="artiste.presentationSecond"
            :songName1="artiste.songName1"
            :songLink1="artiste.songLink1"
            :songName2="artiste.songName2"
            :songLink2="artiste.songLink2"
            :date="artiste.date"
            :day="artiste.day"
            :isReverse="artiste.isReverse"
            :isDateVisible="artiste.isDateVisible"
            :instagram="artiste.instagram"
            :spotify="artiste.spotify"
            :deezer="artiste.deezer"
        />
    </div>
</template>

<script>
import Artiste from './Artiste.vue';
import artistesJSON from './artistes.json';
import artistesJSONOne from './artistesOne.json';
import artistes_25 from './artistes_25.json';

export default {
    components: {
        Artiste
    },
    setup() {
        // Heure cible : 17h (UTC+1) le 12 décembre 2024
        const targetDate = new Date('2025-02-26T18:00:00+01:00');
        const now = new Date();

        // Choisir le fichier JSON en fonction de l'heure actuelle
        const artistesList = now >= targetDate ?  artistes_25  : artistesJSON;

        return {
            artistesList,
        };
    },
    methods: {
        scrollToArtiste(artisteId) {
            const element = document.getElementById(`artiste-${artisteId}`)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }
  }
};
</script>

<style scoped>
.artistes{
    background-color:#E86B2A ;
}
.wave-up{
    background-color: white;
  position: relative;
  width: 100%;
  padding: 6% 0% 6% 0%;
  background-color: white;
}
.wave-up svg{
  position: absolute;
  bottom: -1px;
  left : 0px
}
</style>