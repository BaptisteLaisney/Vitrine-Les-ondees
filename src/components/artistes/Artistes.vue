<template>
    <div id="artistes">
        <Artiste class="artiste"
            v-for="artiste in artistesList" 
            :key="artiste.id" 
            :artisteName="artiste.name"
            :artisteImage="artiste.image"
            :presentationFirst="artiste.presentationFirst"
            :presentationSecond="artiste.presentationSecond"
            :songName="artiste.songName"
            :songLink="artiste.songLink"
            :date="artiste.date"
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
.wave-up, .wave-bottom{
  position: relative;
  min-height: 100px;
  background-color: white;
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