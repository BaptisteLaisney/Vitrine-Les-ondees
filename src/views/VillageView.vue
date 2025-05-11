<template>
    <div class="village-view">
        <div id="header"></div>
      <div class="image-container">
        <div class="village-text">
            <h1>VILLAGE<br>CULTUREL</h1>
            <div class="entrance-container">
                <div>ENTRÉE LIBRE 14h - 18h30</div>
            </div>

        </div>
        <img src="../assets/village/banner.png" alt="" id="village">
      </div>
        <div class="resume">
            <h2>TEMPS FORTS</h2>
            <span>
                Post hoc impie perpetratum quod in aliis quoque iam timebatur, tamquam licentia crudelitati indulta per suspicionum nebulas aestimati quidam noxii damnabantur.
            </span>
        </div>
        <div class="dates">
            <img src="../assets/village/date-bg.png" alt="" class="dates-village">
            
            <div class="date date1">
              <div class="svg-bg">
                <svg viewBox="0 0 351 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.66797 7.33594C131.82 0.696186 306.843 4.02084 341.112 6.87793L342.638 7.01367C343.676 7.11291 344.468 7.73893 344.699 9.13867L344.738 9.42871C345.369 15.5509 346.459 27.2255 346.968 39.2393C347.466 50.9897 347.387 62.697 345.926 69.9131L345.78 70.5967C345.539 71.6741 344.468 72.6842 342.727 72.876L342.369 72.9033C211.061 78.5926 140.584 75.4409 21.8623 73.0518L10.2188 72.8232C7.79985 72.777 5.76697 71.0199 5.36719 68.7168L5.33398 68.4922C2.72511 47.6964 1.94026 33.6738 4.87695 13.374L5.17285 11.3896C5.50702 9.21284 7.25973 7.56654 9.4541 7.35254L9.66797 7.33594Z" fill="white" stroke="white" stroke-width="6"/>
                </svg>

              </div>
              <div class="date-text">23 MAI 2025</div>
            </div>
  
            <div class="date date2">
              <div class="svg-bg">
                <svg viewBox="0 0 353 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.68991 10.7589C3.33869 7.17947 6.46538 4.57488 10.0994 4.41176C138.59 -1.35568 213.31 -0.21721 341.831 4.47182C345.394 4.6018 348.506 7.07925 349.245 10.5667C353.657 31.3838 352.256 45.706 348.856 69.1217C348.303 72.9289 345.069 75.8051 341.225 75.9503C219.071 80.5628 142.111 78.6848 10.7618 75.8425C6.82792 75.7573 3.49165 72.8183 2.97203 68.918C0.0896866 47.283 -1.23798 32.4295 2.68991 10.7589Z" fill="#D8D8D8" fill-opacity="0.62"/>
                    <path d="M10.2344 7.40918C134.606 1.82666 208.534 2.71845 329.832 7.04102L341.722 7.46973C343.919 7.54988 345.754 9.02824 346.265 10.9971L346.311 11.1885C350.341 30.2018 349.42 43.5989 346.497 64.4229L345.887 68.6904C345.555 70.9758 343.65 72.7471 341.337 72.9385L341.111 72.9521C234.314 76.9848 162.104 76.0527 57.7246 73.8525L10.8271 72.8428C8.42491 72.7908 6.39773 71.046 5.98145 68.7461L5.94531 68.5215C3.16608 47.6604 1.87877 33.4142 5.2959 13.2627L5.6416 11.2939C6.01603 9.22816 7.80938 7.61588 10.0186 7.42285L10.2344 7.40918Z" stroke="white" stroke-opacity="0.29" stroke-width="6"/>
                </svg>

              </div>
              <div class="date-text">24 MAI 2025</div>
            </div>
        </div>
    </div>

  </template>
  

<script>
    export default {

        
    }
</script>

<style scoped>

.village-view{
    background-color: #E86B2A;
}
#header {
    background-color: #E86B2A;
    height: 10vh;
}
/** Wave */
.wave-bottom{
    width: 100%;

    position: relative;
    min-height: 100px;
}

.wave-bottom svg{
  position: absolute;
  top: -1px;
  left : 0px
}

/** Banner */
.image-container {
  position: relative;
  display: inline-block;
}

.village-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 1px 1px 2px black;
  z-index: 2;
  text-align: center;
}

#village {
  display: block;
  width: 100%;
}

.entrance-container{
    background-color: #E86B2A;
    padding: 10px 30px 10px 30px;
    border-radius: 10px;
    font-family: 'BlocHeavy';
    border: 0;
    font-size: 2rem;
    margin: 0px;
    margin-top: 20px;
    text-shadow: 0px 0px 0px black;
    flex-direction: column;
}
h1{
    font-size: 1.7em;
    padding: 0px;
}
.resume{
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items:center ;
    justify-content: center;
}
.resume span{
    width: 25%;
}

/** Dates */

.dates-village{
    width: 30vw;
    position: absolute;
}
.dates {
    display: flex;
    position: relative;
    font-family: 'BlocHeavy';
    gap: 10px;
    flex-wrap: wrap;
    width:500px;
    flex-direction: row;
    justify-content: center;
    margin: auto;
    padding-top: 10vh;
}

.date {
    top: 13px;
    position: relative;
    width: 45vw;
    height: 50px;
    padding-bottom: 40px;
    width:500px;
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
.date-text {
    position: relative;
    z-index: 1;
    font-size: 1.2rem;
    padding: 0 10px;
    text-align: center;
    width: 100%;
    color: #E86B2A;
}


@media (min-width: 770px) {
    .dates{
    display: flex;

  }
  .date {
    width: 12vw;
    height: 3vw;
  }

}
</style>