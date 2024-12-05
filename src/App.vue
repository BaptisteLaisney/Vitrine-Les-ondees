<template>
  <div id="lesondees">
    <router-view />
  </div>
</template>

<style>
html, body {
    margin: 0;
    padding: 0;


}
#lesondees{
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
}
</style>