<template>
    <div id="artiste" :class="['artiste', { reverse: isReverse }]">
        <div :class="['date', { visible: isDateVisible }]">
            <div class="wave-bottom">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E86B2A" fill-opacity="1" d="M0,160L80,149.3C160,139,320,117,480,122.7C640,128,800,160,960,160C1120,160,1280,128,1360,112L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
            </div>
            <h4 >{{ date }}</h4>
            <div class="wave-up">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E86B2A" fill-opacity="1" d="M0,160L80,165.3C160,171,320,181,480,197.3C640,213,800,235,960,218.7C1120,203,1280,149,1360,122.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            </div>
        </div>

        <div class="first-part">
            <div class="artiste-image">
                <img :src="artisteImage" alt="Artiste Image">
                <div class="wave-bottom">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E86B2A" fill-opacity="1" d="M0,160L80,133.3C160,107,320,53,480,58.7C640,64,800,128,960,144C1120,160,1280,128,1360,112L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
                </div>
            </div>
            <div class="content">
                <h3>{{ artisteName }}</h3>
                <span class="date-under">{{day}}</span>
                <p class="presentation presentation-first">
                    {{ presentationFirst }}
                </p>
                <p class="presentation presentation-second">
                    {{ presentationSecond }}
                </p>
                <div class="social-medias">
                    <!-- <a href="" target="_blank" rel="noopener noreferrer">
                        <img src="../../assets/logos/instagram.png" alt="Instagram" class="social-media" />
                    </a> -->
                    <a :href="spotify" target="_blank" rel="noopener noreferrer" >
                        <img src="../../assets/logos/spotify.webp" alt="Spotify" class="social-media" />
                    </a>
                    <a :href="deezer" target="_blank" rel="noopener noreferrer">
                        <img src="../../assets/logos/deezer.png" alt="Deezer" class="social-media" />
                    </a>
                </div>
            </div>
        </div>
        <div class="second-part">
            <div class="video-1">
                <h4>
                    {{ songName1 }}
                </h4>
            <!-- Video Embed -->
                <div class="video-container">
                    <iframe
                        class="clip" 
                        :src="songLink1" 
                        :title="songName1" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
            <div class="video-2">
                <h4>
                    {{ songName2 }}
                </h4>
            <!-- Video Embed -->
                <div class="video-container">
                    <iframe
                        class="clip" 
                        :src="songLink2" 
                        :title="songName2" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerpolicy="strict-origin-when-cross-origin" 
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
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
        songName1: {
            type: String
        },
        songLink1: {
            type: String
        },
        songName2: {
            type: String
        },
        songLink2: {
            type: String
        },
        artisteImage: {
            type: String
        },
        date: {
            type: String
        },
        day: {
            type: String
        },
        isReverse: {
            type: Boolean,
            default: false,
        },
        isDateVisible: {
            type: Boolean,
            default: true,
        },
        instagram: {
            type: String
        },
        spotify: {
            type: String
        },
        deezer: {
            type: String
        }
        
    }  
    }
</script>

<style scoped>
.artiste{
    display: flex;
    flex-direction: column;
}

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
.artiste-image .wave-bottom{
    background-color: transparent;
    width: 100%;
    position: absolute;
    min-height: 100px;
    top: 0;

}

.video-2{
    display: none;
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
.content{
    display: flex;
    flex-direction: column;
    align-items: center;
        padding: 5%;
    }
.presentation{
    text-align: left;
}
.presentation-second{
    display: none;

}
h4{
    padding-left: 50px;
    padding-right: 50px;
}
/** Social media */
.social-medias{
        /* padding: 40px 0px 0px 0px; */
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
    }


.logo-bottom{
    background-color: #E86B2A;
}
.social-media{
    width: 30px;
    padding: 0px 20px 0px 0px;
}
.date{
    background-color: white;
    color: #E86B2A;
}
/** Wave */

.wave-up, .wave-bottom{
  position: relative;
  width: 100%;
  padding: 6% 0% 6% 0%;
  background-color: white;
}
.wave-up svg{
  position: absolute;
  bottom: -1px;
  
  left : 0px
}
.wave-bottom svg{
    width: 100%;
  position: absolute;
  top: -1px;
  left : 0px
}
.date-under{
    font-size: 0.9rem;
    text-align: left;
    font-family: 'BlocHeavy';
}
.content h3{
    padding-bottom:0 ;
}
.date {
    display: none;
}
.date.visible{
    display: block;
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

@media (min-width: 770px) {
    .date{
        display: none;
    }
    .first-part{
        width: 65%;
    }

    .artiste{
        flex-direction: row;
    }
    .artiste-image {
        aspect-ratio: 16 / 9; /* Aspect ratio for images */
        position: relative;
    }
    .wave-bottom svg{
        display: none

    }
    .second-part{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 35%;
        margin: 0% 2% 0% 2%;
    }
    .video-1, .video-2{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80%;
    }
    .social-medias{
        /* padding: 40px 0px 0px 0px; */
        margin-top: 50px;
    }

    .social-media{
        width: 70px;
        padding: 0px 50px 0px 0px;
    }

    .content{
        align-items: start;
    }
    .content h3{
        text-align: left;
        font-size: 4rem;
    }
    .date-under{
        font-size: 1.8rem;
        text-align: left;
        font-family: 'BlocHeavy';
    }

    .artiste {
        display: flex;
        flex-direction: row;
    }
    h4{
        padding: 10px 50px 10px 50px;
        font-size: 2rem;
    }

    .artiste.reverse {
        flex-direction: row-reverse;
    }
    .video-2{
        display: block;
    }
    .date.visible{
        display: none;
    }

}

@media (min-width: 1200px ) {

}

@media (min-width:1360px ) {
}
</style>
