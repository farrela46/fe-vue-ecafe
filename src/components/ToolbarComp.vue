<template>
    <v-layout>
      <v-app-bar 
      style="position: fixed; background: #FFF;"
      class="shadow-sm p-3 mb-5 bg-body rounded"
      fixed
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
      >
        <v-toolbar-title class="ms-7"><a><b> E-Cafe</b></a></v-toolbar-title>
        <v-spacer></v-spacer>
        <div class="menu hidden-sm-and-down mx-2 pe-12">
            <a
                v-for="item in menuItems"
                :key="item.title"
                :href="item.link"
                class="menu-link mx-7"
                :class="{ 'active-link': isActive(item.link), 'inactive-link': isInactive(item.link) }"
                style="cursor: pointer; font-size: 15px;"
                >
                {{ item.title }}
            </a>
        <button type="button" class="btn text-white mx-3" style="background-color: #967259;"><v-icon class="me-2" icon="mdi-whatsapp"></v-icon>Contact Us</button>
        </div>

        <v-btn icon @click="toggleDrawer" class="hidden-md-and-up">
        <v-icon>mdi-menu</v-icon>
        </v-btn>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" 
      :location="$vuetify.display.mobile ? 'top' : undefined"
      color="light"
      style="position: fixed;"
      temporary>
        <v-list dense>
          <v-list-item v-for="item in menuItems" :key="item.title" @click="drawer = false" color="primary">
            <v-list-item-content>
              <v-list-item-title @click="navigateTo(item.link)" class="menu-link-mobile">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <v-main  id="scrolling-techniques-7">
        <slot id="scrolling-techniques-7"></slot>
      </v-main>
    </v-layout>
  </template>

<script>
export default {
  data() {
    return {
      drawer: false,
      menuItems: [
        { title: 'Home', link: '/' },
        { title: 'Menu', link: '/menu' },
        { title: 'Book Now', link: '/teams' },
      ],
      isScrolled: false,
    };
  },
  computed: {
    activeRoute() {
      return this.$route.path;
    },
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
    navigateTo(link) {
      this.drawer = false;
      this.$router.push(link);
    },
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    isActive(link) {
      return this.activeRoute === link;
    },
    isInactive(link) {
      return this.activeRoute !== link;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped>
a {
  font-family: 'Poppins';
  font-size: 22px;
}


.menu {
  display: flex;
  align-items: center;
}

.menu-link {
  position: relative;
  margin-left: 20px;
  padding: 7px 15px;
  font-size: 17px;
  font-weight: 500;
  transition: 0.2s all ease-in-out;
}

.menu-link.active-link {
  opacity: 1;
  font-weight: 800;
  color: #201E43;
}

.menu-link.active-link::after {
  margin-left: 12px;
  width: 32px;
}

.menu-link.inactive-link {
  opacity: 0.4;
  color: #201E43
}

.menu-link.inactive-link::after {
  width: 0;
}

.menu a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #201E43;
  transition: width 0.5s ease;
}

.menu-link:hover::after {
  width: 32px;
  margin-left: 12px;
}

.menu-link-mobile {
  color: #808080;
  font-weight: 500;
  font-size: 17px;
}

.hidden-md-and-up {
  display: none;
}

@media (max-width: 960px) {
  .hidden-md-and-up {
    display: inline-flex;
  }

  .hidden-sm-and-down {
    display: none;
  }
}
</style>
