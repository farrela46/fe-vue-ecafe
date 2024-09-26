<script>
import ToolbarComp from '@/components/ToolbarComp.vue'
import FooterComp from '@/components/FooterComp.vue'

export default {
  name: 'Home',
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
          
        ]
      }
  },
  methods: {
    PushToOurProjects() {
      this.$router.push('/projects')
    }
  },
  mounted() {

  }

}
</script>

<template>
  <ToolbarComp>
    <v-container fluid>
      <v-row>
        <v-col class="carousel-block"
        >
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
              cover
            >
              <v-sheet
                class="transparent-sheet"
              >
                <div class="d-flex fill-height align-center">
                  <div class="text-content text-white">
                    <h3>Solusi Digital untuk company anda!</h3>
                    <p> Lorem ipsum dolor sit amet consectetur. </p>
                  </div>
                </div>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-row>
      <v-row class="mt-5 about-us">
        <v-col>
          <v-row class="title-row" >
            <a style="font-size: 36px; font-weight: 600"> Tentang Kami </a>
          </v-row>
          <v-row class="content-row">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, aliquid molestiae distinctio sapiente ullam repudiandae eum praesentium ab, sit ratione iste, autem tempora blanditiis. Ducimus, explicabo, fugiat minima incidunt id dolore accusantium eligendi eveniet suscipit, quo laudantium similique labore illo exercitationem. Dolor facilis et fugiat? Fugiat eos exercitationem sed aspernatur, dolore atque facere ex veritatis, debitis, sint nemo nostrum. Ad officiis incidunt molestias ex alias sed provident vero veritatis eius consequatur eos iste aspernatur, quam necessitatibus sit in voluptate explicabo totam omnis numquam vel corrupti, amet fuga? Illo, necessitatibus sit aperiam voluptatibus minima id eveniet iusto? Veniam nisi necessitatibus libero?
            </p>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid style="background-color: #EEEEEE">
        <v-row class="service" 
        data-aos="fade-up" 
        data-aos-anchor-placement="center-center"
        >
          <v-col>
            <v-row>
              <v-col>
                <div class="text-center">
                  <a style="font-size: 36px; font-weight: 600"> Service </a>
                </div>
              </v-col>
            </v-row>
            <v-row class="pt-7" data-aos="fade-up" data-aos-anchor-placement="center-center">
              <v-col cols="12" sm="4"   v-for="(item, index) in services"
              :key="index">
              <v-card class="mx-auto" max-width="378" height="350" style="display: flex; flex-direction: column;">
                <v-card-text style="flex-grow: 1;">
                  <v-col>
                    <v-row>
                      <a class="text-h5 text-dark font-weight-black p-2">{{ item.title }}</a>
                    </v-row>
                    <v-row>
                      <div class="service-paragraph p-2">
                        <p>{{ item.desc }}</p>
                      </div>
                    </v-row>
                  </v-col>
                </v-card-text>
                <v-card-actions class="p-2" style="margin-top: auto;">
                  <v-col>
                    <button type="button" class="btn text-white p-2 mb-2 w-100" style="background-color: #201E43;">Selengkapnya</button>
                  </v-col>
                </v-card-actions>
              </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
      <v-container fluid >
        <v-row class="projects" data-aos="fade-up" data-aos-anchor-placement="center-center">
          <v-col>
            <v-row data-aos="fade-up" data-aos-anchor-placement="center-center">
              <v-col>
                <a class="project-header"> Project Terbaru </a>
              </v-col>
              <v-col class="text-end align-end me-5">
                <a @click="PushToOurProjects" style="font-size: 15px; font-weight: 200; cursor: pointer"> Lihat Semua <v-icon icon="mdi-arrow-right-thin" size="small"></v-icon> </a>
              </v-col>
            </v-row>
            <v-row class="pt-7" data-aos="fade-up" data-aos-anchor-placement="center-center">
              <v-col cols="12" sm="4" v-for="(item, index) in projects"
              :key="index">
                <v-card
                  class="mx-auto"
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
                    <p >{{ item.desc }}</p>
                  </v-card-text>
                  
                  <v-card-actions style="margin-top: auto;">
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
  margin-left: 70px;
  height: 90%;
}

.text-content h3 {
  font-size: 2rem; 
  margin: 0;
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
  padding-top: 100px;
  padding-bottom: 100px;
}

.service-paragraph{
  padding-top: 30px;
}

.projects {
  padding-left: 130px;
  padding-right: 130px;
  padding-top: 80px;
  margin-bottom: 80px;
}

.project-header {
  font-size: 36px; 
  font-weight: 600;
  color: #212529
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
    margin-top: 10px
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

  .project-header {
  font-size: 24px; 
  font-weight: 600;
  color: #212529
}
}

</style>