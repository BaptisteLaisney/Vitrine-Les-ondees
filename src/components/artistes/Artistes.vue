<template>
    <div id="artistes">
        <Artiste class="artiste"
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
export default {
    components: {
        Artiste
    },
    setup() {
        // Heure cible : 17h (UTC+1) le 12 décembre 2024
        const targetDate = new Date('2024-12-12T18:00:00+01:00');
        const now = new Date();

        // Choisir le fichier JSON en fonction de l'heure actuelle
        const artistesList = now >= targetDate ? artistesJSON : artistesJSONOne;

        return {
            artistesList,
        };
    }
};
</script>

<style scoped>


</style>