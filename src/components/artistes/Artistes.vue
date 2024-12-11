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
            :isReverse="artiste.isReverse"
            :instagram="artiste.instagram"
            :spotify="artiste.spotify"
            :deezer="artiste.deezer"
        />
    </div>
</template>

<script>
import Artiste from './Artiste.vue';
import artistesJSON from './artistes.json';

    export default {
        components:{
            Artiste
        },
        setup (){
        const artistesList = artistesJSON;
        
        return {
            artistesList,
        };
    }


    }
</script>

<style scoped>


</style>