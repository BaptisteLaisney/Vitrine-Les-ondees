<template>
    <div id="photos">
        <div class="photo" v-for="item in itemList" :key="item.id">
            <img  :src="`/photos-selection/${item.name}`"    @click="openModal(`/src/assets/photos-selection/${item.name}`)"  />
        </div>
         <!-- Modal Overlay -->
                <div 
            v-if="isModalOpen" 
            class="modal-overlay" 
            @click="closeModal"
        >
            <div class="modal-content" @click.stop>
                <img :src="modalImage" alt="Partner Image" />
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue'
export default {
    setup () {
        const isModalOpen = ref(false);
        const modalImage = ref('');

        function openModal(imageSrc) {
            modalImage.value = imageSrc;
            isModalOpen.value = true;
        }
        function closeModal() {
            isModalOpen.value = false;
        }
        function getItemList() {
        return [
            { id: 1, name: '(c) nath_pics 1.jpeg' },
            { id: 2, name: '(c) nath_pics 2.png' },
            { id: 3, name: '(c) nath_pics 3.jpg' },
            { id: 4, name: 'bb-jacques-public-ondees-23-gregory-forestier.jpeg' },
            { id: 5, name: 'bro-ondees-23-gregory-forestier.jpeg' },
            { id: 6, name: 'esam-ondees-23-gregory-forestier.jpeg' },
            { id: 7, name: 'fanfare-2-ondees-23-gregory-forestier.jpeg' },
            { id: 8, name: 'marcelle-room-ondees-23-gregory-forestier.jpeg' },
            { id: 9, name: 'Spider Zed 3 (c)Lukastivecrea.jpeg' }
        ];
        }
        const itemList = getItemList();
        return {
            itemList,
            isModalOpen,
            modalImage,
            openModal,
            closeModal,
        };
    }
}
</script>

<style scoped>
#photos {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 4px 0px;
    justify-content: space-between;
}

.photo {
    width: 32%;
    aspect-ratio: 1 / 1;
    position: relative;
    border: 1px solid white;
    overflow: hidden;
}

.photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    max-width: 90%;
    max-height: 90%;
    background: white;
    border-radius: 8px;
    overflow: hidden;
}

.modal-content img {
    width: 100%;
    height: auto;
    display: block;
}

@media (min-width: 770px ) {
    .photo{
        aspect-ratio: 16 / 9;
    }
    #photos {
        gap: 8px 0px;
    }
}
@media (min-width: 1200px ) {

}

@media (min-width:1360px ) {
}
</style>