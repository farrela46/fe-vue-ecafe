<script>
import ToolbarComp from '@/components/ToolbarComp.vue'
import FooterComp from '@/components/FooterComp.vue'

export default {
  name: 'Our Projects',
  components: {
    ToolbarComp,
    FooterComp
  },
  data () {
      return {
        items: [
          {
            src: '../src/assets/background.svg',
          },
        ],
        teams: [
          {
            id: 1,
            name: 'Farrel Ahmad Darmawan',
            src:'https://avatarfiles.alphacoders.com/336/thumb-1920-336986.jpg',
            role: 'Duelist'
          },
          {
            id: 2,
            name: 'Yasfa Ainun Abdullah',
            src:'https://images4.alphacoders.com/121/thumb-1920-1211517.jpg',
            role: 'Fullstack Web Developer'
          },
          {
            id: 3,
            name: 'Rizky Agung Prayogi',
            src:'https://i.ibb.co.com/ftBMLL5/michelle.jpg',
            role: 'Fullstack Web Developer'
          }
        ]
      }
        
  },
  methods: {

  },
  mounted() {

  }

}
</script>

<template>
  <ToolbarComp>
    <v-container fluid>
      <v-row>
        <v-col class="carousel-block">
           <v-carousel
            data-aos="fade-up"
            data-aos-anchor-placement="center-center"
            :show-arrows="false"
            hide-delimiter-background
            class="carousel-block"
          >
            <v-carousel-item
              v-for="(item, i) in items"
              :key="i"
              :src="item.src"
              class="carousel-item"
              cover
            >
              <v-sheet
                class="transparent-sheet"
              >
                <div class="d-flex fill-height justify-center align-center">
                  <div class="text-content text-white">
                    <h3>Our Teams</h3>
                  </div>
                </div>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid >
        <v-row class="projects"
        >
          <v-col class="text-center" v-for="(item) in teams"
              :key="item.id"
              cols="12" sm="4"
              >
            <v-row class="d-flex justify-content-center">
              <v-avatar
              size="250"
              >
                <v-img
                  alt="Ava"
                  :src="item.src"
                ></v-img>
              </v-avatar>
            </v-row>
            <v-row class="d-flex justify-content-center">
              <a class="text-name">
                {{ item.name }}
              </a>
            </v-row>
            <v-row class="d-flex justify-content-center">
              <a class="text-detail">
                {{ item.role }}
              </a>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </ToolbarComp>
    <FooterComp />
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  font-family: 'Poppins';
  text-decoration: none;
  list-style: none;
}

.carousel-item {
  position: relative;
}

.carousel-block {
  width: 100%;
  height: 100%;
  max-height: 500px;
  margin-left: 10px;
  margin-right: 30px;
  margin-top: 10px;
  border-radius: 24px;
}

.transparent-sheet {
  background-color: transparent !important;
  box-shadow: none;
  height: 90%;
}

.text-name {
  font-size: 1.5rem;
  color: #080808;
  font-weight: 600;
}
.text-detail {
  font-size: 1rem;
  color: #808080;
  font-weight: 600;
}

.text-content h3 {
  font-size: 3rem; 
  margin: 0;
  font-weight: bold;
}

.text-content p {
  font-size: 1rem; 
  margin: 0;
}

.about-us {
  padding-left: 130px;
  padding-right: 130px;
  padding-top: 60px;
  margin-bottom: 80px;
}


.service {
  padding-left: 130px;
  padding-right: 130px;
  padding-top: 60px;
  margin-bottom: 60px;
}

.service-paragraph{
  padding-top: 30px;
}

.projects {
  padding-left: 130px;
  padding-right: 130px;
  padding-top: 60px;
  margin-bottom: 60px;
}


@media (max-width: 600px) {

  [data-aos] {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }

  .carousel-block {
    width: 100%;
    height: 100%;
    max-height: 150px;
    margin-top: 10px;
  }

  .carousel-item {
  position: relative;
  height: 300px;
  }

  .transparent-sheet {
    background-color: transparent !important;
    box-shadow: none;
    height: 20%;
  }

  .text-content h3 {
    padding-top: 40px;
    font-size: 1.15rem;
  }
  .text-content p {
    font-size: 0.575rem;
  }
  .text-navbar {
    font-size: 0.775rem;
    margin-left: 5px
  }
  .about-us {
    padding-left: 10px;
    padding-right: 10px;
  }
  .content-row {
    padding-top: 0 !important;
  }
  .service {
    padding-left: 10px;
    padding-right: 10px;
  }

  .projects {
    padding-left: 10px;
    padding-right: 10px;
  }
}

</style>