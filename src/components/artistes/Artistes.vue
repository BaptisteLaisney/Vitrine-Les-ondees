<template>
    <div class="artistes">
        <div class="wave-up">
            <svg  viewBox="0 0 1920 657" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_i_260_3733)">
            <path d="M1302.94 18.8379C1074 -49.3486 731.634 87.9708 683.096 108.284C680.056 109.556 676.639 107.59 675.701 104.432C672.521 93.7176 663.28 68.1717 637.272 18.8379C627.293 -0.0910931 465.632 -17.9268 48.0886 77.825C-285.946 154.426 -138.531 495.859 0.649689 657H1942.65C1989.64 599.201 1977.86 463.466 1778.29 382.914C1528.83 282.223 1265.59 356.301 1173.99 382.914C1082.39 409.527 1611.54 110.749 1302.94 18.8379Z" fill="url(#paint0_linear_260_3733)"/>
            </g>
            <defs>
            <filter id="filter0_i_260_3733" x="-172" y="0" width="2137.59" height="679" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="-17" dy="22"/>
            <feGaussianBlur stdDeviation="13.25"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.36 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_260_3733"/>
            </filter>
            <linearGradient id="paint0_linear_260_3733" x1="898.294" y1="657" x2="969.652" y2="-240" gradientUnits="userSpaceOnUse">
            <stop offset="0.12" stop-color="#E74A81"/>
            <stop offset="0.79" stop-color="#BEF8AE"/>
            </linearGradient>
            </defs>
            </svg>
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
    background-color: #e74a81 ;
}
.wave-up{
    background-color: white;
  position: relative;
  width: 100%;
  padding: 6% 0% 6% 0%;
  height: 20vh;
  background-color: white;
}
.wave-up svg{
  position: absolute;
  bottom: -1px;
  left : 0px
}
</style>