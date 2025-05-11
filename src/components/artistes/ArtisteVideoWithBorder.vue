<template>
    <div id="artiste-video-border">
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
        <div class="overlay"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
        songLink: {
            type: String
        },
        songName: {
            type: String
        }
    }
  }
  </script>
  
  <style scoped>
  #artiste-video-border {
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding: 40px; */
  }
  
  .video-container {
    position: relative;
    width: 100%;
    max-width: 800px;
    aspect-ratio: 16 / 9;
    background-color: #000;
    overflow: hidden;
  }
  
  .clip {
    width: 100%;
    height: 100%;
    border: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/artistes-border/border-video.png'); /* <-- Ton image ici */
    background-size: cover;
    background-position: center;
    z-index: 2;
    pointer-events: none; /* Important : pour ne pas bloquer les clics sur la vidéo */
  }
  
  /* Fallback pour les navigateurs sans aspect-ratio */
  @supports not (aspect-ratio: 16 / 9) {
    .video-container {
      padding-top: 56.25%;
    }
  
    .clip, .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  </style>
  