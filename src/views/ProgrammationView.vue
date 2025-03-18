<template>
    <div class="programmation-view">
        <h1>Artistes</h1>
        <div class="artistes">
            <Artistes/>
        </div>

    </div>
</template>

<script>
import Artistes from '../components/artistes/Artistes.vue';
    export default {
        components:{
            Artistes
        }
        
    }
</script>

<style scoped>

.programmation-view{
    background-color: #E86B2A;
}

</style>