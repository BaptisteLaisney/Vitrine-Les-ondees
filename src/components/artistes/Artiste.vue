<template>
    <div id="artiste">
        <div class="date">
            <div class="wave-bottom">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E86B2A" fill-opacity="1" d="M0,160L80,149.3C160,139,320,117,480,122.7C640,128,800,160,960,160C1120,160,1280,128,1360,112L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
            </div>
        <h4 >{{ date }}</h4>
        <div class="wave-up">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E86B2A" fill-opacity="1" d="M0,160L80,165.3C160,171,320,181,480,197.3C640,213,800,235,960,218.7C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </div>
        </div>

        <div class="artiste-image">
            <img :src="artisteImage" alt="Artiste Image">
        </div>
        <h3>{{ artisteName }}</h3>
        <div class="presentation presentation-first">
            {{ presentationFirst }}
        </div>
        <h4>
            {{ songName }}
        </h4>
        <!-- Video Embed -->
        <div class="video-container">
            <iframe
                class="clip" 
                :src="songLink" 
                :title="songName" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
            </iframe>
        </div>
        <div class="presentation presentation-second">
            {{ presentationSecond }}
        </div>
    </div>
</template>

<script>
    export default {
    props: {
        artisteName: {
            type: String
        },
        presentationFirst: {
            type: String
        },
        presentationSecond: {
            type: String
        },
        songName: {
            type: String
        },
        songLink: {
            type: String
        },
        artisteImage: {
            type: String
        },
        date: {
            type: String
        },
    }  
    }
</script>

<style scoped>
.artiste-image {
    flex: 0 0 auto; /* Prevents items from shrinking and allows horizontal alignment */
    width: 100%; /* Set a fixed width for each item to control size */
    aspect-ratio: 4 / 3; /* Aspect ratio for images */
    position: relative;
}

.artiste-image img {
    width: 100%;
    height: 100%;
    position: relative;
    display: block;
    object-fit: cover; /* Ensures the image fills the container */
}

/* Video Container with 16:9 Aspect Ratio */
.video-container {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9; /* Modern browsers */
    background-color: #000; /* Ensures a black background if the video doesn't load */
}

.clip {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border: none;
}
.presentation{
    text-align: left;
    padding: 20px;
}
.presentation-second{
    display: none;

}
.date{
    background-color: white;
    color: #E86B2A;
}
.date h4{
    padding: 0;
}
/** Wave */

.wave-up, .wave-bottom{
  position: relative;
  min-height: 80px;
  background-color: white;
}
.wave-up svg{
  position: absolute;
  bottom: -1px;
  left : 0px
}
.wave-bottom svg{
  position: absolute;
  top: -1px;
  left : 0px
}

/* For older browser support without aspect-ratio */
@supports not (aspect-ratio: 16 / 9) {
    .video-container {
        padding-top: 56.25%; /* 16:9 ratio */
        position: relative;
    }

    .clip {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}
</style>
