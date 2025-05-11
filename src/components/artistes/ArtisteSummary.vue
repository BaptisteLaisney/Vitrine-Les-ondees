<template>
   <div :class="['artiste-summary', dateClass]">
        <div class="artiste-image">
                <img :src="artisteImage" alt="Artiste Image">
        </div>
        <span>{{ artisteName }}</span>

    </div>
</template>

<script>
export default {
    props: {
        artisteName: {
            type: String
        },
        artisteImage: {
            type: String
        },
        date: {
            type: String
        },
    },
    computed: {
        dateClass() {
            return this.date === '23-05-2025' ? 'date2' : 'date1';
        }
    }
}
</script>

<style scoped>

.artiste-summary{
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: start;
    cursor: pointer;
}
.artiste-image img {
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    position: relative;
    display: block;
    object-fit: cover;
}
.date1 span {
    font-size: 1.3rem;
    font-family: 'BlocHeavy';
    color: rgb(32, 32, 32);
    -webkit-text-stroke: 1.8px #b3e9a4
}
.date1 .artiste-image img{
    border: solid #b3e9a4c1 3px ;
}
.date2 span {
    font-size: 1.3rem;
    font-family: 'BlocHeavy';
    color: #FFEEF4;
    -webkit-text-stroke: 1.8px #E74A81;
}
.date2 .artiste-image img{
    border: solid #e74a81b2 3px ;
}

@media (min-width: 770px) {
    .artiste-summary{
        width: 20%;
        margin: 1vh;
    }
}
</style>