<template>
    <div id="partners">
        <div class="partner" v-for="item in itemList" :key="item.id">
            <img  :src="`/src/assets/partners/${item.name}`"/>
        </div>
    </div>
</template>
<script>
export default {
    setup () {
        function getItemList() {
        return [
            { id: 1, name: 'CVEC.png' },
            { id: 2, name: 'unicaen.png' },
            { id: 3, name: 'CROUS.jpeg' },
            { id: 4, name: 'Logo-Le-Renard-Portrait_1.jpg' },
            { id: 5, name: 'IUT.png' },
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
#partners {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: space-around;
}

.partner {
    width: 25%; 
    aspect-ratio: 16 / 9; /* Ensures consistent height based on width (16:9 ratio) */
    position: relative;
    border: 1px solid white;
    overflow: hidden; 
}

.partner img {
    width: 100%; 
    height: 100%;
    object-fit: contain;
    display: block;
}
</style>
