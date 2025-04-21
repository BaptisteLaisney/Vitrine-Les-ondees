<template>
    <div id="the-people-code">
        <div class="wave-up">
            <svg  viewBox="0 0 1728 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1740 7.17298C1740 7.17298 1613.14 18.6765 1531.37 19.2015C1439.35 19.7922 1388.28 10.6553 1296.4 7.17298C1123.4 0.616306 1026 -1.81703 852.795 1.43211C676.751 4.73458 579.213 22.773 403.116 24.3956C244.784 25.8545 -2 12.9138 -2 12.9138V58.8407H1740V7.17298Z" fill="#e86b2a"/>
            </svg>
        </div>
        <h2>Où dormir à Caen ?</h2>
        <p>
            The People Caen est le mix parfait entre le confort d'un hôtel et l'ambiance ultra cool d'une auberge de jeunesse. 
            On t'offre une remise exclusive de 15% sur ton hebergement The People pendant le festival, entre le 23 et le 24 Mai.

        </p>
        <div class="bloc-reduction">
            <p>Rendez vous sur le site avec le code LESONDEES pour profiter de l'offre !</p>
            <a id="redirection" href="https://www.thepeoplehostel.com/fr/destinations/caen/" target="_blank">
                PROFITEZ-EN
            </a>
        </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

#the-people-code{
    width: 100%;
    padding-bottom: 50px;
    align-items: center;
    display: flex;
    flex-direction: column;
    background-color: #e86b2a;
    color: white;
}

.wave-up, .wave-bottom{
    width: 100%;
    background-color: white;
    position: relative;
    min-height: 100px;
}
.wave-up svg{
  position: absolute;
  bottom: -1px;
  left : 0px
}
#the-people-code p{
    width: 70%;
}
p{
    font-family: 'BlocHeavy';
    font-size: 1.3rem;
}

.bloc-reduction{
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    padding: 30px 0px 30px 0px;
    margin: 50px 0px 20px 0px ;
    position: relative;


}

#redirection{
    margin-top: 20px;
    padding:  10px  50px 10px 50px;
    border: 1px white solid;
    font-size: 2rem;
    font-family: 'BlocHeavy';
    color: white;
    cursor: pointer;
}

@media (min-width: 770px) {
    .bloc-reduction{
        border: 1px white solid;
    }
}
</style>