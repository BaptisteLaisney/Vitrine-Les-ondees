<template>
    <div class="village-view">
        <div id="header"></div>
      <div class="image-container">
        <div class="village-text">
            <h1>VILLAGE<br>CULTUREL</h1>
            <!-- <div class="entrance-container">
                <div>SAMEDI - ENTRÉE LIBRE 14h - 18h30</div>
            </div> -->

        </div>
        <img src="../assets/village/banner.png" alt="" id="village">
      </div>
        <div class="resume">
            <h2>PROGRAMMATION</h2>

            <img src="../assets/village/village-culturel.png" alt="" id="affiche-village">
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
#affiche-village{
    width: 80%;
    margin-bottom: 80px;
}



@media (min-width: 770px) {
    .dates{
    display: flex;

  }
  .date {
    width: 12vw;
    height: 3vw;
  }
  #affiche-village{
    width: 50%;
    border: 50px solid white;
    border-radius: 50px;
}

}
</style>