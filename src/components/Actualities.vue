<template>
    <div id="actualities">
        <div class="actuality" v-for="item in itemList" :key="item.id">
            <img  :src="`/src/assets/actualities/${item.name}`"/>
        </div>
    </div>
</template>
<script>
export default {
    setup () {
        function getItemList() {
        return [
            { id: 1, name: '25_etudiants.png' },
            { id: 2, name: '25_etudiants.png' },
            { id: 3, name: '25_etudiants.png' },
            { id: 4, name: '25_etudiants.png' },
            { id: 5, name: '25_etudiants.png' },
            { id: 6, name: '25_etudiants.png' },
            { id: 7, name: '25_etudiants.png' },
            { id: 8, name: '25_etudiants.png' },
            { id: 9, name: '25_etudiants.png' }
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
    height: auto; /* Maintains aspect ratio */
    position: relative;
    display: block;
}
</style>