<template>
    <div id="the-people-code">
        <h2>Où dormir à Caen ?</h2>
        <p>
            The People Caen est le mix parfait entre le confort d'un hôtel et l'ambiance ultra cool d'une auberge de jeunesse. 
            On t'offre une remise exclusive de 15% sur ton hebergement The People pendant le festival, entre le 23 et le 24 Mai.

        </p>
        <div class="bloc-reduction">
            <p>Rendez vous sur le site avec le code LESONDEES pour profiter de l'offre !</p>
            <a id="redirection">
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
    height: 100vh;
    align-items: center;
    display: flex;
    flex-direction: column;

    
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