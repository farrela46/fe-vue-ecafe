<script>
import ToolbarComp from '@/components/ToolbarComp.vue'
import FooterComp from '@/components/FooterComp.vue'

export default {
  name: 'Our Menus',
  components: {
    ToolbarComp,
    FooterComp
  },
  data () {
      return {
        loaded: false,
        loading: false,
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
        chunkedCoffees: [],
        coffees: [
          {
            id: 1,
            img: 'https://www.seriouseats.com/thmb/x5dQAByuE9saNvybQ4sjTU1dHG8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20230621-SEA-DalognaCoffee-LorenaMasso-hero-e6a0eb179a2d457fb40c059d91594c35.jpg',
            title: 'Dalgona Coffee',
            rating: '4',
            desc: 'Dalgona Coffee is a beverage originating from Macau made by whipping equal parts instant coffee powder, sugar, and hot water until it becomes creamy and then adding it to cold or hot milk.',
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
            desc: 'Nigga Coffee offering bold, high-quality brews with a lighthearted twist. Perfect for those who enjoy their coffee with a side of laughter!',
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
            desc: 'MatchaLatte is a fun parody of classic matcha drinks, blending earthy flavors with humor. Enjoy a delicious, high-quality latte experience with a playful twist for matcha lovers!',
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
            desc: 'Nigga Chocolate is a playful take on dark chocolate, blending rich, bold flavors with a touch of humor. Perfect for those who enjoy deep, intense chocolate with a fun, lighthearted twist!',
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
            id: 5,
            img: 'https://www.bitkaorigin.com/assets/myback/js/elFinder/files/Americano-coffee.jpg',
            title: 'Americano',
            rating: '2.5',
            desc: 'Americano adalah minuman kopi yang terbuat dari espresso dan air panas. Kopi ini memiliki rasa yang lebih ringan dibandingkan espresso karena dicampur dengan air. Americano merupakan kopi yang populer di seluruh dunia',
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
            id: 6,
            img: 'https://cdn0-production-images-kly.akamaized.net/AfHTJcbtPM-CBHxG7Mc3JVfwhwE=/357x0:981x624/1200x1200/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4100082/original/085004000_1658734379-exterior-banner_2.jpg',
            title: 'Espresso',
            rating: '3.5',
            desc: 'Suzuki Spresso hadir dengan panel instrumen yang stylish, ergonomis, dan gampang dijangkau. Semakin lengkap dengan kabin yang lebih lega dan nyaman.',
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
            id: 7,
            img: 'https://www.elespectador.com/resizer/L_d9v6uuxjkcZkONzjrpOAr9Lus=/arc-anglerfish-arc2-prod-elespectador/public/3RLSJX3IBNA55F5OZPNWSLSGQE.jpg',
            title: 'Kapucino',
            rating: '4.5',
            desc: 'Kapucino adalah minuman kopi khas Italia yang dibuat dari espreso dan susu, tetapi referensi lain juga ada yang menyebutkan bahwa kapucino berawal dari biji biji kopi tentara Turki yang tertinggal setelah peperangan yang dipimpin oleh Kara Mustapha Pasha di Wina',
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
            id: 8,
            img: 'https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/01/2024/02/21/ice-tea-with-mint_144627-41785-926817588.jpg',
            title: 'Teh',
            rating: '4.5',
            desc: 'Es teh adalah minuman teh yang disajikan dingin dengan es batu. Biasanya, Es teh seringkali ditambahkan rasa seperti melati, dan buah-buahan seperti lemon, ceri, dan stroberi, atau susu. Es teh adalah minuman yang sering diminum saat siang hari karena suhu udara yang panas.',
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
    chunkCoffees() {
      this.chunkedCoffees = [];
      for (let i = 0; i < this.coffees.length; i += 4) {
        this.chunkedCoffees.push(this.coffees.slice(i, i + 4));
      }
    },
    onClick () {
      this.loading = true

      setTimeout(() => {
        this.loading = false
        this.loaded = true
      }, 2000)
    },
  },
  mounted() {
    this.chunkCoffees();
  }

}
</script>

<template>
  <ToolbarComp>
    <v-container fluid>
      <v-row class="mt-5">
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
                    <h3>Our Menus</h3>
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
          <v-col cols="12" sm="1" class="sidebar">
            <v-row class="align-center text-navbar">
              <a class="me-7 text-muted">Search by Category</a>
              <v-chip-group
                column
                color="indigo"
                selected-class="text-primary"
              >
                <v-chip
                  v-for="item in category"
                  :key="item.id"
                  class="white--text mb-2"
                >
                  <a>{{ item.name }}</a>
                </v-chip>
              </v-chip-group>
            </v-row>
          </v-col>
          <v-col cols="12" sm="11">
            <v-card
              class="mx-auto mb-4"
              color="surface-light"
              max-width="400"
            >
              <v-card-text>
                <v-text-field
                  :loading="loading"
                  append-inner-icon="mdi-magnify"
                  density="compact"
                  label="Search Menus"
                  variant="solo"
                  hide-details
                  single-line
                  @click:append-inner="onClick"
                ></v-text-field>
              </v-card-text>
            </v-card>
            <v-virtual-scroll
              :items="chunkedCoffees"
              max-height="1000"
              item-height="500"
            >
              <template v-slot:default="{ item }">
                <v-row>
                  <v-col
                    v-for="card in item"
                    :key="card.id"
                    cols="6"
                    sm="1"
                    md="3"
                  >
                    <v-card
                      class=" mb-4 mx-1"
                      max-width="378"
                      min-height="500"
                      style="display: flex; flex-direction: column; border-radius: 12px;"
                    >
                      <v-img
                        class="align-end text-white"
                        :src="card.img"
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
                          :model-value="card.rating"
                          active-color="primary"
                          readonly
                          half-increments
                        />
                        <p style="font-weight: 700; color: #967259;">Rp. 20.000</p>
                      </v-card-title>
                      <v-card-text>
                        <a class="text-h5 text-dark font-weight-black p-2">{{ card.title }}</a>
                      </v-card-text>
                      <v-card-text class="px-2 mb-2">
                        <p>{{ card.desc }}</p>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </template>
            </v-virtual-scroll>
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
  max-height: 300px;
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
  height: 60%;
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