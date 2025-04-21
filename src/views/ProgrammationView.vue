<template>
    <div class="programmation-view">
        <div class="header"></div>
        <div class="wave-bottom">
          <svg  viewBox="0 0 1728 62" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-2 55.1317C-2 55.1317 124.865 42.8798 206.635 42.3207C298.655 41.6916 441.602 55.1317 441.602 55.1317C441.602 55.1317 712.002 64.7066 885.205 61.2461C1061.25 57.7288 1158.79 38.5168 1334.88 36.7887C1493.22 35.2349 1740 49.0174 1740 49.0174V0.102608H-2V55.1317Z" fill="#E86B2A"/>
          </svg>
        </div>
      <div class="artistes">
        <h1>Programmation</h1>
        <div class="artistes-summary">
          <div class="dates">
            <div class="date date1">
              <div class="svg-bg">
                <svg class="bg-shape" viewBox="0 0 351 79" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.93021 10.9212C6.27499 8.6741 8.13184 6.99216 10.4254 6.86749C134.517 0.122291 313.172 3.66012 343.395 6.54483C344.503 6.65056 345.331 7.35572 345.496 8.9601C346.127 15.0823 347.216 26.7568 347.725 38.7706C348.239 50.9 348.139 62.9833 346.538 70.1283C346.281 71.2775 345.08 72.3502 343.127 72.4348C231.952 77.2518 164.384 75.7308 74.2206 73.701C54.4572 73.2561 33.6081 72.7867 10.9762 72.3543C8.47925 72.3066 6.39457 70.4359 6.09192 68.0234C3.39891 46.557 2.64898 32.3076 5.93021 10.9212Z" fill="#FFBCD3" stroke="#E74A81" stroke-width="6"/>
                </svg>
              </div>
              <div class="date-text">23 MAI 2025</div>
            </div>
  
            <div class="date date2">
              <div class="svg-bg">
                <svg class="bg-shape" viewBox="0 0 352 79" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.39963 10.8252C5.78616 8.69263 7.68455 7.04355 9.99177 6.93999C138.375 1.17737 213.008 2.31388 341.48 7.00108C343.748 7.08382 345.631 8.6561 346.068 10.72C350.367 31.0009 349.033 44.8914 345.645 68.2217C345.302 70.5808 343.283 72.3925 340.87 72.4837C222.225 76.9636 146.268 75.3165 21.467 72.6102C17.8806 72.5324 14.2538 72.4538 10.5845 72.3744C8.10471 72.3207 6.02462 70.4629 5.70357 68.0531C2.83465 46.5188 1.55552 32.0335 5.39963 10.8252Z" fill="#D8FFCE" stroke="#BEF8AE" stroke-width="6"/>
                </svg>
              </div>
              <div class="date-text">24 MAI 2025</div>
            </div>
          </div>
        </div>

        <ArtistesSummaryList @scrollToArtiste="scrollToArtiste"/>
        <Artistes ref="child2Ref" />
      </div>
    </div>
  </template>
  
  <script>
  import Artistes from '../components/artistes/Artistes.vue';
import ArtistesSummaryList from '../components/artistes/ArtistesSummaryList.vue';
  export default {
    components: {
      Artistes,
      ArtistesSummaryList
    },
    methods: {
      scrollToArtiste(artisteId) {
      this.$refs.child2Ref.scrollToArtiste(artisteId)
    }
  }
  }
  </script>
  
<style scoped>

h1{
  color: black;
}

.header {
    background-color: #E86B2A;
    width: 100%;
    height: 7vh;
}

.programmation-view{
    background-color: white;
    position: relative;
}

.dates {
    display: flex;
    font-family: 'BlocHeavy';
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
}

.date {
    position: relative;
    width: 45vw;
    height: 10vw;
    padding-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.svg-bg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
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

.bg-shape {
    width: 100%;
    height: auto;
    display: block;
}

.date-text {
    position: relative;
    z-index: 1;
    font-size: 1.2rem;
    padding: 0 10px;
    text-align: center;
    width: 100%;
}

.date2 .date-text {
    color: rgb(56, 56, 56);
}

@media (min-width: 770px) {
  .dates{
    display: flex;
    justify-content: start;
    padding-left: 6vw;

  }
  .date {
    width: 12vw;
    height: 3vw;
    
  }

}
</style>