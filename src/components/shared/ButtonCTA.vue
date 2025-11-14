<template>
    <div
      id="button-cta"
      :style="{ backgroundColor: backgroundColor, color: textColor }"
      @click="$emit('someEvent')"
    >
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
      color: {
        type: String,
        default: "orange", // "orange" ou "white"
        validator: (value) => ["orange", "white"].includes(value),
      },
    },
    computed: {
      backgroundColor() {
        return this.color === "white" ? "#ffffff" : "#e86b2a";
      },
      textColor() {
        return this.color === "white" ? "#1b0102" : "#ffffff";
      },
    },
  };
  </script>
  
  <style scoped>
  #button-cta {
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
    #button-cta {
      font-size: 1.5em;
      margin: 50px;
      padding: 10px 50px;
    }
  }
  </style>
  