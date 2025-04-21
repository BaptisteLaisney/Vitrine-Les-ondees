<template>
    <div class="artistes-summary-list">
        <ArtisteSummary class="artiste-summary"
            v-for="artiste in artistes_summary_list" 
            @click="$emit('scrollToArtiste', artiste.id)"
            :key="artiste.id" 
            :artisteName="artiste.name"
            :artisteImage="artiste.image"
            :date="artiste.date"/>
    </div>
</template>

<script>
import artistes_summary_list from './artistes_summary_list.json';
import ArtisteSummary from './ArtisteSummary.vue';
export default {
    components: {
        ArtisteSummary
    },

    setup() {
        
        return {
            artistes_summary_list
        }
         
    }
    
}
</script>

<style scoped>
.artistes-summary-list{
    width: 100%;
    /* padding: 20px; */
    /* position: relative; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    color: black;
}
@media (min-width: 770px) {
    .artistes-summary-list{
        margin: auto;
        
        /* background-color: rebeccapurple;
   */
        width: 90%; 
        margin-bottom: 20vh;
        /* display: flex; */
    }
}

</style>