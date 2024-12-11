<template>
  <div>
    <div class="menu-icon" @click="toggleMenu">
      <div :class="menuOpen ? 'line open' : 'line'"></div>
      <div :class="menuOpen ? 'line open' : 'line'"></div>
    </div>

    <div v-if="menuOpen" class="menu">
      <ul>
        <li><a href="#">Accueil</a></li>
        <li><a href="#">Édition 2025</a></li>
        <li><a href="#">Billetterie</a></li>
        <li><a href="#">À propos</a></li>
        <li><a href="#">Partenaires</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <div class="social-media">
        <p>Nos réseaux</p>
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
  align-items: center;
  z-index: 999;
}

.menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu ul li {
  margin: 20px 0;
}

.menu ul li a {
  text-decoration: none;
  font-size: 1.5rem;
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
</style>
