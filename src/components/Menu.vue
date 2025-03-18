<template>
  <div>
    <div class="menu-icon" @click="toggleMenu">
      <div :class="menuOpen ? 'line open' : 'line'"></div>
      <div :class="menuOpen ? 'line open' : 'line'"></div>
    </div>
    <nav class="menu-line">
    <ul>
      <li class="menu-item"><router-link to="/">Accueil</router-link></li>
      <li class="menu-item"><router-link to="/programmation">Programmation</router-link></li>
      <li class="menu-item"><router-link to="/a-propos">À propos</router-link></li>
      <li class="menu-item"><router-link to="/partenaires">Partenaires</router-link></li>
      <li class="menu-item"><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>


    <div v-if="menuOpen" class="menu">
      <div class="menu-items">
        <ul>
          <li class="menu-item"><router-link to="/">Accueil</router-link></li>
          <li class="menu-item"><router-link to="/programmation">Programmation</router-link></li>
          <li class="menu-item"><router-link to="/a-propos">À propos</router-link></li>
          <li class="menu-item"><router-link to="/partenaires">Partenaires</router-link></li>
          <li class="menu-item"><router-link to="/contact">Contact</router-link></li>
        </ul>
      <img src="../assets/menu/nos_reseaux.png" alt="Nos réseaux" id="our-social-network">
      </div>

      <div class="social-media">
        <div class="icons">
          <a
            href="https://www.facebook.com/lesondees"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="../assets/logos/facebook.png"
              alt="Facebook"
              class="social-media"
            />
          </a>
          <a
            href="https://www.instagram.com/lesondees/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="../assets/logos/instagram.png"
              alt="Instagram"
              class="social-media"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/les-ond%C3%A9es/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="../assets/logos/linkedin.png"
              alt="LinkedIn"
              class="social-media"
            />
          </a>
          <a
            href="https://www.tiktok.com/@les_ondees"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="../assets/logos/tiktok.png"
              alt="TikTok"
              class="social-media"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
.menu-icon {
  position: fixed;
  top: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 1000;
}

#our-social-network{
  width: 200px;
  margin-top: 50px;
  text-align: start;
}
.menu-line {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 1000;
  display: none;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.menu-item {
  margin: 0 20px;
  font-family: 'BlocHeavy';
  font-size: 1.7rem;
}

.menu-item a {
  text-decoration: none;
  color: inherit;
}


.line {
  width: 30px;
  height: 4px;
  background: white;
  margin: 5px 0;
  transition: transform 0.3s, opacity 0.3s;
}

.line.open {
  transform: rotate(45deg);
}

.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #e86b2a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  z-index: 999;
}

.menu-items{
  padding-left: 50px;
}

.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
}

.menu ul li {
  margin: 10px 0;
  font-family: 'BlocHeavy';
}
.menu ul li a {
  font-size: 2rem;
}

a {
  text-decoration: none;
  font-weight: bold;
  color: white;
}

.social-media {
  margin-top: 30px;
  text-align: center;
  color: white;
}

.social-media p {
  font-size: 1.2rem;
  font-weight: bold;
}

.icons a {
  margin: 0 10px;
}

.icons img {
  width: 30px;
  height: 30px;
}

@media (min-width: 770px) {
  .menu-icon {
    display: none;
  }
  .menu-line {
    display: flex;
  }


}
</style>
