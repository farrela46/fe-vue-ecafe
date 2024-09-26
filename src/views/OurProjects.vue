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
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        
        items: [
          {
            src: '../src/assets/background.svg',
          },
        ],
        services: [
        {
            id: 1,
            title: 'Unified Modelling Language',
            desc: 'Kami menyediakan layanan pembuatan diagram UML, seperti Use Case, Activity Diagram, Sequence Diagram, dan lainnya dengan harga terjangkau'
          },  
        {
            id: 2,
            title: 'Pembuatan Website',
            desc: 'Kami menyediakan layanan pembuatan website untuk bisnis anda, sistem manajemen, website pembelian dan lainnya dengan harga terjangkau'
          },
          {
            id: 3,
            title: '3D Modelling',
            desc: 'Kami menyediakan layanan pembuatan website untuk pembelian'
          },
          
        ],
        projects: [
        {
            id: 1,
            img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
            title: 'Unified Modelling Language',
            desc: 'Kami menyediakan layanan pembuatan diagram UML, seperti Use Case, Activity Diagram, Sequence Diagram, dan lainnya dengan harga terjangkau',
            category: [
              { 
                id: 1,
                name: "Diagram"
              },
              { 
                id: 2,
                name: "Use Case"
              }
            ]
          },  
        {
            id: 2,
            img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
            title: 'Pembuatan Website',
            desc: 'Kami menyediakan layanan pembuatan website untuk bisnis anda, sistem manajemen, website pembelian dan lainnya dengan harga terjangkau',
            category: [
              { 
                id: 1,
                name: "Website"
              },
              { 
                id: 2,
                name: "Landing Page"
              }
            ]
          },
          {
            id: 3,
            img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
            title: '3D Modelling',
            desc: 'Kami menyediakan layanan pembuatan website untuk pembelian',
            category: [
              { 
                id: 1,
                name: "3D Model"
              },
              { 
                id: 2,
                name: "Animation"
              }
            ]
          },
          {
            id: 1,
            img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
            title: 'Unified Modelling Language',
            desc: 'Kami menyediakan layanan pembuatan diagram UML, seperti Use Case, Activity Diagram, Sequence Diagram, dan lainnya dengan harga terjangkau',
            category: [
              { 
                id: 1,
                name: "Diagram"
              },
              { 
                id: 2,
                name: "Use Case"
              }
            ]
          },  
        {
            id: 2,
            img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
            title: 'Pembuatan Website',
            desc: 'Kami menyediakan layanan pembuatan website untuk bisnis anda, sistem manajemen, website pembelian dan lainnya dengan harga terjangkau',
            category: [
              { 
                id: 1,
                name: "Website"
              },
              { 
                id: 2,
                name: "Landing Page"
              }
            ]
          },
          {
            id: 3,
            img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
            title: '3D Modelling',
            desc: 'Kami menyediakan layanan pembuatan website untuk pembelian',
            category: [
              { 
                id: 1,
                name: "3D Model"
              },
              { 
                id: 2,
                name: "Animation"
              }
            ]
          },
          {
            id: 1,
            img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
            title: 'Unified Modelling Language',
            desc: 'Kami menyediakan layanan pembuatan diagram UML, seperti Use Case, Activity Diagram, Sequence Diagram, dan lainnya dengan harga terjangkau',
            category: [
              { 
                id: 1,
                name: "Diagram"
              },
              { 
                id: 2,
                name: "Use Case"
              }
            ]
          },  
        {
            id: 2,
            img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
            title: 'Pembuatan Website',
            desc: 'Kami menyediakan layanan pembuatan website untuk bisnis anda, sistem manajemen, website pembelian dan lainnya dengan harga terjangkau',
            category: [
              { 
                id: 1,
                name: "Website"
              },
              { 
                id: 2,
                name: "Landing Page"
              }
            ]
          },
          {
            id: 3,
            img: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
            title: '3D Modelling',
            desc: 'Kami menyediakan layanan pembuatan website untuk pembelian',
            category: [
              { 
                id: 1,
                name: "3D Model"
              },
              { 
                id: 2,
                name: "Animation"
              }
            ]
          },
        ],
        category: [
          {
            id: 1,
            name: "Website"
          },
          {
            id: 2,
            name: "Landing Page"
          },
          {
            id: 3,
            name: "Diagrams"
          },
          {
            id: 4,
            name: "Mobile"
          },
          {
            id: 5,
            name: "Front End "
          },
          {
            id: 6,
            name: "Back End"
          },
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
                    <h3>Our Projects</h3>
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
          <v-col>
            <v-row class="align-center text-navbar">
              <a class="me-7 text-muted">Search by Category</a>
              <v-chip-group
                column
                color="indigo"
                selected-class="text-primary"
                v-for="item in category" :key="item.id"
              >
                <v-chip 
                class="white--text"
                >
                <a>  {{ item.name }} </a>
                </v-chip>
              </v-chip-group>
            </v-row>
            <v-row class="pt-7">
              <v-col cols="12" sm="4" v-for="(item, index) in projects"
              :key="index">
                <v-card
                  class="mx-auto mb-3"
                  max-width="378"
                  height="489"
                  style="display: flex; flex-direction: column;"
                >
                  <v-img
                    class="align-end text-white"
                    height="200"
                    :src="item.img"
                    cover
                  >
                </v-img>
                <v-card-title>
                  <a class="text-h7 text-dark font-weight-black p-2"> {{ item.title }}</a>
                </v-card-title>
                  <v-card-text class="p-2">
                    <p>{{ item.desc }}</p>
                  </v-card-text>
                  
                  <v-card-actions class="p-2" style="margin-top: auto;">
                    <v-chip-group
                      column
                      color="indigo"
                      mandatory
                      v-for="item in item.category" :key="item.id"
                    >
                      <v-chip 
                      class="white--text"
                      >
                      {{ item.name }}
                    </v-chip>
                    </v-chip-group>
                  </v-card-actions>
                </v-card>
              </v-col>
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

.carousel-block {
  width: 100%;
  height: 100%;
  max-height: 500px;
  margin-left: 10px;
  margin-right: 30px;
  margin-top: 10px;
  border-radius: 24px;
}

.carousel-item {
  position: relative;
}

.transparent-sheet {
  background-color: transparent !important;
  box-shadow: none;
  height: 90%;
}

.text-navbar {
  font-size: 1rem;
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