<template>
    <div class="partners-view">
        <div class="header"></div>
        <div class="wave-bottom">
          <svg  viewBox="0 0 1728 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-2 55.1317C-2 55.1317 124.865 42.8798 206.635 42.3207C298.655 41.6916 441.602 55.1317 441.602 55.1317C441.602 55.1317 712.002 64.7066 885.205 61.2461C1061.25 57.7288 1158.79 38.5168 1334.88 36.7887C1493.22 35.2349 1740 49.0174 1740 49.0174V0.102608H-2V55.1317Z" fill="#E86B2A"/>
          </svg>
        </div>
        <h1>Merci à nos partenaires</h1>
        <br>
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
.header {
    background-color: #E86B2A;
    width: 100%;
    height: 7vh;
}

.partners-view{
    background-color: white;
    color: black;
    width: 100%;
    position: relative;
}

.wave-up, .wave-bottom{
    width: 100%;
    background-color: white;
    position: relative;
    min-height: 100px;
}

.wave-bottom svg{
  position: absolute;
  top: -1px;
  left : 0px
}

</style>