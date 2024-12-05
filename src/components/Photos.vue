<template>
    <div id="photos">
        <div class="photo" v-for="item in itemList" :key="item.id">
            <img  :src="`/src/assets/photos-selection/${item.name}`"/>
        </div>
    </div>
</template>
<script>
export default {
    setup () {
        function getItemList() {
        return [
            { id: 1, name: 'photo1.png' },
            { id: 2, name: 'photo1.png' },
            { id: 3, name: 'photo1.png' },
            { id: 4, name: 'photo1.png' },
            { id: 5, name: 'photo1.png' },
            { id: 6, name: 'photo1.png' },
            { id: 7, name: 'photo1.png' },
            { id: 8, name: 'photo1.png' },
            { id: 9, name: 'photo1.png' }
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
#photos {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 5px; 
    justify-content: space-between; 
}

.photo {
    width: 31%;
    position: relative;
    border: 1px solid white;
}

.photo img {
    width: 100%;
    height: auto;
    position: relative;
    display: block; 
}
</style>