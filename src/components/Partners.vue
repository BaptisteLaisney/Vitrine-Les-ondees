<template>
    <div id="partners">
        <div class="partner" v-for="item in itemList" :key="item.id">
            <img  :src="`/partners/${item.name}`"/>
        </div>
    </div>
</template>
<script>
export default {
    setup () {
        function getItemList() {
        return [
        { id: 1, name: 'unicaen.png' },
        { id: 2, name: 'CROUS.jpeg' },
            { id: 3, name: 'CVEC.png' },
            { id: 4, name: 'IUT.png' }, 
            { id: 5, name: 'caen.jpg' }, 
            { id: 6, name: 'calvados.gif' }, 
            { id: 7, name: 'twisto.png' },
            { id: 8, name: 'Logo-Le-Renard-Portrait_1.jpg' },
            { id: 9, name: 'cesi.jpg' },
            { id: 9, name: 'the_people.png' },
            
            { id: 10, name: 'hello_caen.jpeg' },
            { id: 11, name: 'cercle_vertueux.jpg' },
            { id: 12, name: 'le_cargo.png' },
            
            
            
            
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
    margin: auto;
    background-color: white;
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
@media (min-width: 770px) {
    .partner {
        width: 20%; 
    }
}

</style>
