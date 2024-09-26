<template>
  <v-app id="inspire">
    <v-main  class="bg-login">
      <v-container >
        <v-row justify="center" class="mt-4" style="padding-top: 80px;">
          <v-col
            align="center"
            md="6"
          >
            <p class="title"> Inovasi Media Teknologi</p>
            <v-card
              class="mt-4 pa-4"
              rounded="lg"
            >
              <v-row justify="center">
                <v-col
                md="8">
                  <div class="text-start text-h6 pa-2 font-weight-bold" style="color: #201E43;">Login</div>
                </v-col>
              </v-row>

              <v-row justify="center" class="mt-4">
                <v-col 
                  class="mt-4"
                  md="8">
                  <form>
                    <v-text-field
                      v-model="email"
                      label="E-mail"
                      variant="underlined"
                      required
                    ></v-text-field>

                    <v-text-field
                    v-model="password"
                    label="Password"
                    :type="show ? 'text' : 'password'"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    variant="underlined"
                    required
                    @click:append="show = !show"
                  ></v-text-field>
                                
                    <v-btn block elevated
                      class="mb-4"
                      color="#201E43"
                      @click="submit()"
                    >
                      Login
                    </v-btn>
                    <v-progress-linear v-if="loadingLoop"
                      indeterminate
                      color="primary"
                    ></v-progress-linear>
                  </form>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>


<script>

export default {
  name: 'LoginView',
  data () {
    return {
      show: false,
      loadingLoop: false,
      email: '',
      password: '',
    }
  },
  methods: {
    
  }
};
</script>

<style scoped>

* {
  font-family: 'Poppins';
  text-decoration: none;
  list-style: none;
}

.title {
  font-weight: bolder;
  font-size: 2rem;
}

.bg-login {
  background-color: #F5F7F9;
  background-size: cover;
  height: 100vh;
}
</style>