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
        coffees: [
        {
            id: 1,
            img: 'https://www.seriouseats.com/thmb/x5dQAByuE9saNvybQ4sjTU1dHG8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20230621-SEA-DalognaCoffee-LorenaMasso-hero-e6a0eb179a2d457fb40c059d91594c35.jpg',
            title: 'Dalgona Coffee',
            rating: '4',
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
            img: 'https://i.insider.com/610c373d2a24d0001861ede4?width=1136&format=jpeg',
            title: 'Nigga Coffee',
            rating: '4.5',
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
            img: 'https://cdn.loveandlemons.com/wp-content/uploads/2023/06/iced-matcha-latte.jpg',
            title: 'Matcha Latte',
            rating: '4.5',
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
            id: 4,
            img: 'https://www.healthyfood.com/wp-content/uploads/2016/11/Dark-hot-chocolate-1.jpg',
            title: 'Nigga Chocolate',
            rating: '3.5',
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
      <v-row class="mt-5 about-us">
        <v-col>
          <v-img
            cover
            height="800"
            src="https://www.bhg.com/thmb/Dw9Sxcivh_bczUpo91Egapy-lGc=/7952x0/filters:no_upscale():strip_icc()/feshly-brewed--latte-coffee-on-a-white-table-1434303312-4d24a51e3bc748d68553a836499d0100.jpg"
            class="fade-img"
          >
          <div class="fade-overlay"></div>
        </v-img>
        </v-col>
        <v-col class="align-self-center">
          <v-row class="title-row" >
            <a style="font-weight: 800;"> Tentang Kami </a>
          </v-row>
          <v-row class="content-row">
            <p>
              Café X adalah kafe modern yang menawarkan kopi spesial berbahan biji kopi premium serta aneka minuman non-kopi. Menyediakan makanan ringan, dessert, dan sarapan favorit seperti croissant dan pancake. Dengan suasana nyaman dan pelayanan ramah, Café X cocok untuk bersantai atau bekerja di tengah kota.
            </p>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row class="mt-5 about-us">
        <v-col class="align-self-center our-facility">
          <v-row class="subtitle-row" >
            <a style="font-weight: 800;"> &mdash; Tentang Kami </a>
          </v-row>
          <v-row class="title-row" >
            <a style="font-weight: 800;"> Our Innovations </a>
          </v-row>
        </v-col>
        <v-col class="align-self-center">
          <v-row class="content-row">
            <p>
              Di Café X, kami selalu berusaha untuk menghadirkan inovasi dalam setiap cangkir kopi. Kami menggunakan metode penyeduhan terbaru dan bahan-bahan berkualitas tinggi untuk menciptakan rasa yang unik. Setiap bulan, kami memperkenalkan menu baru yang mengeksplorasi kombinasi rasa yang menarik, memberikan pengalaman berbeda bagi pengunjung.
            </p>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <v-row class="mt-5 about-us">
        <v-col class="align-self-center our-facility">
          <v-row class="subtitle-row" >
            <a style="font-weight: 800;"> &mdash; Tentang Kami </a>
          </v-row>
          <v-row class="title-row" >
            <a style="font-weight: 800;"> Our Specialty </a>
          </v-row>
        </v-col>
        <v-col class="align-self-center">
          <v-row class="content-row">
            <p>
              Kopi spesial adalah fokus utama kami di Café X. Kami menyajikan berbagai pilihan kopi, mulai dari espresso yang kaya hingga latte art yang cantik. Setiap biji kopi dipilih secara cermat dan diseduh dengan teknik terbaik. Kami juga menawarkan variasi minuman non-kopi yang menggugah selera, cocok untuk semua pengunjung.
            </p>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid style="background-color: #EEEEEE">
        <v-row class="service" 
        >
          <v-col cols="12">
            <v-card
              class="mx-auto p-5"
              style="border-radius: 24px;"
            >
            <v-row>
              <v-col align-self="center" >
                <v-row justify="center">
                  <v-avatar
                  size="450"
                  >
                    <v-img
                      alt="Ava"
                      src="https://wallpapercave.com/wp/wp7926787.jpg"
                    ></v-img>
                  </v-avatar>
                </v-row>
                <v-row justify="center">
                  <a class="title-profile"> Mr. Riz Xtar</a>
                </v-row>
              </v-col>
              <v-col class="align-self-center">
                <v-row class="text-owner">
                  <p>
                    "Terima kasih sudah datang ke kafe saya dan membuat saya makin kaya. Kalian beli kopi, saya dapat untung! Semoga uang kalian cukup untuk balik lagi besok. Jangan lupa ajak teman, biar saya makin sukses."
                  </p>
                </v-row>
              </v-col>
            </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <v-container fluid >
        <v-row class="projects">
          <v-col>
            <v-row>
              <v-col>
                <a class="project-header"> Newcomer </a>
              </v-col>
              <v-col class="text-end align-end me-5">
                <a @click="PushToOurProjects" style="font-size: 15px; font-weight: 200; cursor: pointer"> See More <v-icon icon="mdi-arrow-right-thin" size="small"></v-icon> </a>
              </v-col>
            </v-row>
            <v-row class="pt-7">
              <v-col cols="12" sm="3" v-for="(item, index) in coffees"
              :key="index">
                <v-card
                  class="mx-auto"
                  max-width="378"
                  height="489"
                  style="display: flex; flex-direction: column; border-radius: 12px;"
                >
                  <v-img
                    class="align-end text-white"
                    :src="item.img"
                    aspect-ratio="1/1"
                    max-height="300"
                    cover
                  >
                  </v-img>
                  <v-card-title class="px-2">
                    <v-rating
                      hover
                      :length="5"
                      :size="32"
                      :model-value="item.rating"
                      active-color="primary"
                      half-increments
                    />
                  </v-card-title>
                  <v-card-text class="p-2">
                    <a class="text-h5 text-dark font-weight-black p-2"> {{ item.title }}</a>
                  </v-card-text>
                  <v-card-actions style="margin-top: auto; margin-left: 10px">
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

.fade-img {
  position: relative;
}

.fade-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 1) 95%, rgba(255, 255, 255, 1) 100%);
}

.title-row {
  font-size: 72px;
}

.subtitle-row {
  font-size: 24px;
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
  padding-top: 60px;
  margin-bottom: 80px;
}

.our-facility {
  padding-left: 80px;
}

.content-row {
  padding-top: 0 !important;
  padding-right: 80px;
  font-size: 24px;
}

.content-owner {
  padding-right: 80px;
  font-size: 24px;
}

.service {
  padding-left: 130px;
  padding-right: 130px;
  padding-top: 100px;
  padding-bottom: 100px;
}

.title-profile {
font-size: 32px;
color: #080808;
  
}

.text-owner {
font-size: 32px;
color: #080808;
  
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