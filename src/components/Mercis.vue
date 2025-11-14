<template>
    <div class="merci-component">
        <div id="mercis">
            <img src="../assets/lesondees/2025/danyl.jpg" alt="" class="photo">
            <img src="../assets/lesondees/2025/entree_village.jpg" alt="" class="photo">
            <img src="../assets/lesondees/2025/equipe.jpg" alt="" class="photo">
            <img src="../assets/lesondees/2025/theodora.jpg" alt="" class="photo">
        </div>
    </div>

  </template>
  

<script>
    export default {

        
    }
</script>

<style scoped>
#mercis {
  display: flex;
  flex-wrap: wrap; /* ou column / nowrap selon ce que tu veux */
  gap: 10px;
  justify-content: center;
  align-items: center;
}

.photo{
    width: 45vw;
    height: 45vw;
    object-fit: cover; /* Pour garder le format sans déformation */
    border-radius: 8px; /* Optionnel : pour un look plus doux */
}


@media (min-width: 770px) {
    .photo {
    width: 20vw;
    height: 20vw;

}
}

</style>
