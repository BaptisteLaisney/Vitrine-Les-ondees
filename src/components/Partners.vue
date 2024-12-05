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
            { id: 1, name: 'unicaen.png' },
            { id: 2, name: 'unicaen.png' },
            { id: 3, name: 'unicaen.png' },
            { id: 4, name: 'unicaen.png' },
            { id: 5, name: 'unicaen.png' },
            { id: 6, name: 'unicaen.png' },
            { id: 7, name: 'unicaen.png' },
            { id: 8, name: 'unicaen.png' },
            { id: 9, name: 'unicaen.png' }
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
    gap: 5px; 
    justify-content: space-between; 
}

.partner {
    width: 31%;
    position: relative;
    border: 1px solid white;
}

.partner img {
    width: 100%;
    height: auto;
    position: relative;
    display: block; 
}
</style>