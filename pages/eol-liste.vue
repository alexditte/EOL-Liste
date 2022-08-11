<template>
  <v-container>
    <v-sheet
    color="grey lighten-4"
    :class="`pa-3 ${loader ? 'd-none' : 'd-block'}`"
    loading
  >
    <v-skeleton-loader
      class="mx-auto"
      type="card"
      loading
    ></v-skeleton-loader>
  </v-sheet>
    <v-row row wrap>
      <v-col cols="4" md="4" lg="2">
        <v-select
          :items="getTheme"
          label="Standard"
          dense
          outlined
          @input="listFilterByTheme"
        /> {{ themeFilterValue }}
      </v-col>
    </v-row>
    <v-card
      v-for="product of getList" :key="product.setnumber"
      outlined
      flat
    >
      <v-card-text>
        <v-row row wrap>
          <v-col cols="4" md="4" lg="2">
            <v-list-item three-line>
              <v-list-item-avatar
                tile
                size="80"
              >
                <!-- <v-img
                  :src="'https://www.brickmerge.de/img/sets/s/' + product.scr"
                  aspect-ratio="2"
                  contain
                /> -->
              </v-list-item-avatar>
            </v-list-item>
          </v-col>
          <v-col cols="8" md="6" lg="4">
            <div class="caption grey--text">{{ product.setnumber }} {{ product.theme }}</div>
            <div>{{ product.name }}</div>
              <v-chip-group
                active-class="deep-purple accent-2 white--text"
                column
              >
                <v-chip
                  v-if="product.exclusives == 'LEGO exclusive'"
                  color="blue"
                  label
                  outlined
                  x-small
                >
                  Exklusiv
                </v-chip>
                <v-chip
                  v-if="product.exclusives == 'Retail - limited'"
                  color="indigo"
                  label
                  outlined
                  x-small
                >
                  Seltene Sets
                </v-chip>
                <v-chip
                  color="orange"
                  label
                  outlined
                  x-small
                >
                  Exklusiven Minifiguren
                </v-chip>
            </v-chip-group>
            <v-row no-gutters>
              <v-col
                cols="12"
                md="12"
              >
                <div class="caption grey--text">Verfügbarkeit</div>
                <v-progress-linear
                  background-color="success"
                  buffer-value="75"
                  color="warning"
                  value="15"
                />
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="6" xs="6" lg="1">
            <div class="caption grey--text">UVP</div>
            <div>{{ product.retailpricebrutto }} €</div>
            <div class="caption grey--text">Markpreis</div>
            <div>{{ product.averageprice }} €</div>
          </v-col>
          <v-col  cols="6" xs="6" lg="1">
            <div class="caption grey--text">Alter</div>
          <div>{{ product.age }}</div>
          </v-col>
          <v-col cols="6" xs="6" lg="2">
            <div class="caption grey--text">Erscheinungsjahr</div>
            <div>{{ product.year }}</div>
            <div class="caption grey--text">EOL</div>
            <div>{{ product.eol }}</div>
          </v-col>
          <v-col cols="6" xs="6" lg="2" style="height: 135px;">
            <div class="caption grey--text">EOL-Temperatur {{ product.gauge }}</div>
            <div class="gauge-block">
              <div class="gauge-wrapper">
                <div
                  :class="`gauge six rischio${product.gauge}`"
                >
                  <div class="slice-colors">
                    <div class="st slice-item"></div>
                    <div class="st slice-item"></div>
                    <div class="st slice-item"></div>
                    <div class="st slice-item"></div>
                    <div class="st slice-item"></div>
                  </div>
                  <div class="needle"></div>
                  <div class="gauge-center">
                    <div class="label">Status</div>
                    <div class="number">{{ status[product.gauge - 1] }}</div>
                  </div>    
                </div>  
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="secondary"
          small
          text
        >
          Jetzt Kaufen
        </v-btn>
        <v-btn
          :key="product.setnumber"
          icon
          @click="show = !show"
        >
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <v-card-text>
            <v-row row wrap>
              <v-col cols="4">
                <v-card
                  flat
                  tile
                >
                <v-window
                  v-model="onboarding"
                  reverse
                >
                  <v-window-item
                    v-for="n in length"
                    :key="`card-${n}`"
                  >
                    <v-card
                      color="grey"
                      height="200"
                    >
                      <v-row
                        class="fill-height"
                        align="center"
                        justify="center"
                      >
                        <h1
                          style="font-size: 5rem;"
                          class="white--text"
                        >
                          Slide {{ n }}
                        </h1>
                      </v-row>
                    </v-card>
                  </v-window-item>
                </v-window>
                <v-card-actions class="justify-space-between">
                  <v-btn
                    text
                    @click="prev"
                  >
                    <v-icon>mdi-chevron-left</v-icon>
                  </v-btn>
                <v-item-group
                  v-model="onboarding"
                  class="text-center"
                  mandatory
                >
              <v-item
                v-for="n in length"
                :key="`btn-${n}`"
                v-slot="{ active, toggle }"
              >
                <v-btn
                  :input-value="active"
                  icon
                  @click="toggle"
                >
                  <v-icon>mdi-record</v-icon>
                </v-btn>
              </v-item>
            </v-item-group>
            <v-btn
              text
              @click="next"
            >
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </v-card-actions>
                </v-card>
              </v-col>
              <v-col cols="8">
                <v-card
                  class="mx-auto"
                  tile
                >
                  <v-list-item>
                    <v-list-item-avatar
                      height="35"
                      tile
                      rounded="false"
                      width="105"
                    >
                      <!-- <v-img
                        src="https://avyqdkbazq.cloudimg.io/v7/_brickfact-images/shop-icons/amazon_de_color.png?w=300">
                      </v-img> -->
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title>305,99 EUR</v-list-item-title>
                      <v-list-item-subtitle>Spare 79%!</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                            <v-btn
                              elevation="3"
                              color="primary lighten-2"
                              outlined
                              text
                              small
                            >
                              <v-icon left>
                                mdi-cart
                              </v-icon>
                              Zum Shop
                            </v-btn>
                    </v-list-item-action>
                  </v-list-item>
                  <v-divider></v-divider>
                  <v-list-item>
                  <v-list-item-avatar
                    height="35"
                    tile
                    rounded="false"
                    width="105"
                  >
                    <!-- <v-img
                      src="https://avyqdkbazq.cloudimg.io/v7/_brickfact-images/shop-icons/alternate_de_color.png?w=300">
                    </v-img> -->
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>305,99 EUR</v-list-item-title>
                    <v-list-item-subtitle>
                      <v-progress-linear
                        buffer-value="75"
                        color="amber"
                        height="20"
                        value="15"
                      >
                        <strong>35 %</strong>
                      </v-progress-linear>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                      <v-btn
                            elevation="3"
                            color="primary lighten-2"
                            outlined
                            text
                            small
                          >
                            <v-icon left>
                              mdi-cart
                            </v-icon>
                            Zum Shop
                          </v-btn>
                  </v-list-item-action>
                  </v-list-item>
                  <v-divider></v-divider>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>

    <v-row row wrap>
      <v-col cols="4" md="4" lg="2">
        <v-btn
          depressed
          color="primary"
          :loading="getLoading"
          @click="fetchProducts"
        >
          Primary
        </v-btn>
      </v-col>
      <v-col cols="4" md="4" lg="2">
        <v-btn
          depressed
          color="primary"
          :loading="getLoading"
          @click="addToList"
        >
          {{ getList.length }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mapGetters, mapActions } from "vuex"
  export default {
    data: () => ({
      loader: true,
      power: 78,
      length: 3,
      onboarding: 0,
      show: false,
      status: ['Frischling', 'Entspannt', 'In Kürze', 'Zielgerade', 'Frührente', 'EOL'],
      themeFilterValue: null, 
    }),
    computed: {
      // 
      // async fetchProducts({store}){
      //   if (store.getters.products.length > 0) {
      //     await store.dispatch('products/fetchProducts')
      //   }
      // },
      ...mapGetters({
        getProducts: 'products/getProducts',
        getList: 'products/getList',
        getTheme: 'products/getTheme',
        getLoading: 'products/getLoading',
      }),
    },
    mounted() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      })
    },
    methods: {
      ...mapActions({
        fetchProducts: 'products/fetchProducts',
        addToList: 'products/addToList',
        listFilterByTheme: 'products/listFilterByTheme',
      }),
      next () {
        this.onboarding = this.onboarding + 1 === this.length
          ? 0
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding - 1 < 0
          ? this.length - 1
          : this.onboarding - 1
      },
    },
  }
</script>

<style>
.gauge-block {
  height: 120px;
  transform: scale(0.5);
  width: auto;
  margin: 0 auto;
  display: inline-block;
  position: relative;
  left: -62px;
  top: -10px;
}

.gauge-wrapper {
  padding: 20px 15px 15px;
}

.gauge {
  background: #e7e7e7;
  box-shadow: 0 -3px 6px 2px rgba(0, 0, 0, 0.50);
  width: 200px;
  height: 100px;
  border-radius: 100px 100px 0 0!important;
  position: relative;
  overflow: hidden;
}
.gauge.min-scaled {
  transform: scale(0.5);
}

.gauge-center {
  content: '';
  color: #fff;
  width: 60%;
  height: 60%;
  background: #15222E;
  border-radius: 100px 100px 0 0!important;
  position: absolute;
  box-shadow: 0 -13px 15px -10px rgba(0, 0, 0, 0.28);
  right: 21%;
  bottom: 0;
  color: #fff;
  z-index:10;
}

.gauge-center .label, .gauge-center .number {display:block; width: 100%; text-align: center; border:0!important;}
.gauge-center .label {font-size:0.75em; opacity:0.6; margin:1.1em 0 0.3em 0;}
.gauge-center .number {font-size:1.2em;}

.needle {
  width: 80px;
  height: 7px;
  background: #15222E;
  border-bottom-left-radius: 100%!important;
  border-bottom-right-radius: 5px!important;
  border-top-left-radius: 100%!important;
  border-top-right-radius: 5px!important;
  position: absolute;
  bottom: -2px;
  left: 20px;
  transform-origin: 100% 4px;
  transform: rotate(0deg);
  box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.38);
  display:none;
  z-index:9;
}

.four.rischio1 .needle {animation: fourspeed1 2s 1 both; animation-delay: 1s; display:block;}
.four.rischio2 .needle {animation: fourspeed2 2s 1 both; animation-delay: 1s; display:block;}
.four.rischio3 .needle {animation: fourspeed3 2s 1 both; animation-delay: 1s; display:block;}
.four.rischio4 .needle {animation: fourspeed4 2s 1 both; animation-delay: 1s; display:block;}

.slice-colors {height:100%;}

.slice-colors .st {
  position: absolute;
  bottom: 0;
  width: 0;
  height: 0;
  border: 50px solid transparent;  
}

/* GAUGE SIX LEVELS */
.six.rischio1 .needle {animation: sixspeed1 2s 1 both; animation-delay: 1s; display:block;}
.six.rischio2 .needle {animation: sixspeed2 2s 1 both; animation-delay: 1s; display:block;}
.six.rischio3 .needle {animation: sixspeed3 2s 1 both; animation-delay: 1s; display:block;}
.six.rischio4 .needle {animation: sixspeed4 2s 1 both; animation-delay: 1s; display:block;}
.six.rischio5 .needle {animation: sixspeed5 2s 1 both; animation-delay: 1s; display:block;}
.six.rischio6 .needle {animation: sixspeed6 2s 1 both; animation-delay: 1s; display:block;}

.six .slice-colors .st.slice-item:nth-child(1) {  
  border-left: 86px transparent solid;    
  border-right: 86px transparent solid;
  border-top: 50px  transparent solid;
  border-bottom: 50px #1eaa59 solid;
	margin-left:-75px;
  z-index: 6;
}

.six .slice-colors .st.slice-item:nth-child(2) {
  border-left: 80px transparent solid;    
  border-right: 80px transparent solid;
  border-top: 130px  transparent solid;
  border-bottom: 130px #f1c40f solid;
	margin-left:-60px;
  z-index: 5;
  background-color: #f1af0f;
}

.six .slice-colors .st.slice-item:nth-child(4) {
  border-left: 80px transparent solid;    
  border-right: 80px transparent solid;
  border-top: 130px  transparent solid;
  border-bottom: 130px #f1470f solid;
	margin-left:100px;
  z-index: 5;
  background-color: #f15e0f;
}

.six .slice-colors .st.slice-item:nth-child(6) {  
  border-left: 86px transparent solid;    
  border-right: 86px transparent solid;
  border-top: 50px  transparent solid;
  border-bottom: 50px #F00 solid;
	margin-left:100px;
  z-index: 6;
}


.four .slice-colors .st.slice-item:nth-child(2) {
  border-top: 50px #f1c40f solid;
  border-right: 50px #f1c40f solid;
  background-color:#1eaa59;
}

.four .slice-colors .st.slice-item:nth-child(4) {
  left:50%;
  border-bottom: 50px #E84C3D solid;
  border-right: 50px #E84C3D solid;
  background-color:#e67e22;
}


@-webkit-keyframes sixspeed1 {
	0% {transform: rotate(0);}
  100% {transform: rotate(13deg);}
}

@-webkit-keyframes sixspeed2 {
	0% {transform: rotate(0);}
  100% {transform: rotate(43deg);}
}

@-webkit-keyframes sixspeed3 {
	0% {transform: rotate(0);}
  100% {transform: rotate(74deg);}
}

@-webkit-keyframes sixspeed4 {
	0% {transform: rotate(0);}
  100% {transform: rotate(107deg);}
}

@-webkit-keyframes sixspeed5 {
	0% {transform: rotate(0);}
  100% {transform: rotate(137deg);}
}

@-webkit-keyframes sixspeed6 {
	0% {transform: rotate(0);}
  100% {transform: rotate(167deg);}
}

@-webkit-keyframes fourspeed1 {
	0% {transform: rotate(0);}
  100% {transform: rotate(16deg);}
}

@-webkit-keyframes fourspeed2 {
	0% {transform: rotate(0);}
  100% {transform: rotate(65deg);}
}

@-webkit-keyframes fourspeed3 {
	0% {transform: rotate(0);}
  100% {transform: rotate(115deg);}
}

@-webkit-keyframes fourspeed4 {
	0% {transform: rotate(0);}
  100% {transform: rotate(164deg);}
}
</style> 