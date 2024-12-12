<template>
    <div id="button-ticketing" >
        <div id="cool-down">
            <span>
                {{ countdown }}
            </span>
        </div>
        <a href="https://billetterie.lecargo.fr/evenement/23-05-2025-18-30-les-ond%C3%A9es-4" target="_blank" rel="noopener noreferrer">
            <img src="../assets/lesondees/billetterie_button.png" alt="Billetterie" id="image-button"  >
        </a>

  </div>
</template>

<script>
export default {
    data() {
        return {
            countdown: "",
            targetDate: new Date("2025-05-23T18:00:00").getTime()
        };
    },
    methods: {
        updateCountdown() {
            const now = new Date().getTime();
            const distance = this.targetDate - now;

            if (distance < 0) {
                this.countdown = "C'est maintenant !";
                clearInterval(this.timer); // Stop the countdown
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            this.countdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    },
    mounted() {
        this.updateCountdown(); // Initialize countdown
        this.timer = setInterval(this.updateCountdown, 1000); // Update every second
    },
    beforeUnmount() {
        clearInterval(this.timer); // Clean up timer
    }
};
</script>

<style scoped>

#button-ticketing{

    position: absolute;
    top: 100px;
    right: 20px;

}
#image-button{
    width: 150px;
    cursor: pointer;
    position: relative;;
    z-index: 10;
}
#cool-down{
    width: 150px;
    color: black;
    position: absolute;
    top: 20px;
    font-family: 'BlocHeavy';
    font-size: 0.9em;
    z-index: 15;
}

@media (min-width: 770px) {
    #button-ticketing{
        top: 150px;
        right: 50px;
    }
    #image-button {
        width: 250px;

    }
    #cool-down{
        top: 35px;
        width: 250px;
        font-size: 1.3em;
    }
}
</style>