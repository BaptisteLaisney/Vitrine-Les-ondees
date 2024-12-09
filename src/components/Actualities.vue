<template>
    <div id="actualities">
        <div class="actuality" v-for="item in itemList" :key="item.id">
                        <a :href="item.link" target="_blank" rel="noopener noreferrer">
                            <img  :src="`/src/assets/actualities/${item.name}`"/>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    setup () {
        function getItemList() {
        return [
            { id: 1, name: 'que_sont_ils_devenues.jpeg', link:"https://www.instagram.com/p/DBJsyNbtOMx/?img_index=1" },
            { id: 2, name: 'recherche_partenaires.png', link:"https://www.linkedin.com/feed/update/urn:li:activity:7264587888418328576" },
            { id: 3, name: '25_etudiants.png', link: 'https://www.instagram.com/p/DCmdQCDOCti/?img_index=2'},
        ];
        }
        const itemList = getItemList();
        return {
            itemList
        };
    }
}
</script>

<style scoped>
#actualities {
    width: 100%;
    display: flex;
    overflow-x: auto; /* Enables horizontal scrolling */
    white-space: nowrap; /* Prevents items from wrapping to the next line */
    scroll-snap-type: x mandatory; /* Optional: Enables snapping for smoother scroll */
}

.actuality {
    margin: 10px;
    flex: 0 0 auto; /* Prevents items from shrinking and allows horizontal alignment */
    width: 40%; /* Set a fixed width for each item to control size */
    position: relative;

    border: 1px solid white;
}

.actuality img {
    width: 100%;
    height: 100%;
    position: relative;
    display: block;
    object-fit: cover;
}
</style>