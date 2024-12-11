<template>
    <div id="button-cta" @click="$emit('someEvent')">
        {{ buttonText }}
    </div>
</template>
<script>
export default {
    props: {
        buttonText: {
            type: String,
            default: "Submit",
        },
    }
}
</script>

<style scoped>



#button-cta {
  background-color: #e86b2a;
  color: white;
  font-family: 'Montserrat', sans-serif;
  padding: 3px 30px;
  text-align: center;
  border: none;
  border-radius: 35px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: inline-block;
  margin: 10px;

}
@media (min-width: 770px) {
    #button-cta{
        font-size: 1.5em;
        margin: 50px;
        padding: 10px 50px;
    }
}
@media (min-width: 1200px ) {

}

@media (min-width:1360px ) {
}

</style>