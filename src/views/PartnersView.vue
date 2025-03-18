<template>
    <div class="partners-view">
        <h1>Merci à nos partenaires</h1>
        <Partners/>
        <ThePeopleCode/>
        

    </div>
</template>
<script>
import Partners from '../components/Partners.vue';
import ThePeopleCode from '../components/partners/ThePeopleCode.vue';

export default {
    components: {
        ThePeopleCode, Partners
    }
    
}
</script>

<style scoped>

.partners-view{
    background-color: #E86B2A;

    width: 100%;
    position: relative;
}


</style>