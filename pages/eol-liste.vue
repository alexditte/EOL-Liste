<template>
  <v-container
    class="fill-height"
    fluid
    style="min-height: 434px"
  >
  
    <v-row row wrap>
      <v-col cols="4" md="4" lg="2">
        <v-list-item three-line>
          <v-list-item-avatar
            tile
            size="80"
          >
            <v-img
              src="https://www.brickmerge.de/img/sets/s/LEGO_76239_alt1.jpg"
              aspect-ratio="2"
              contain
            />
          </v-list-item-avatar>
        </v-list-item>
      </v-col>
      <v-col cols="8" md="6" lg="4">
        <div class="caption grey--text">Super Heroes</div>
        <div>Batmobile™ Tumbler: Duell mit Scarecrow™</div>
          <v-chip-group
            active-class="deep-purple accent-2 white--text"
            column
          >
            <v-chip
              color="blue"
              label
              outlined
              small
            >
              Exklusiv
            </v-chip>
        </v-chip-group>
      </v-col>
       <v-col  cols="6" xs="6" lg="1">
         <div class="caption grey--text">UVP</div>
       <div>39,99 €</div>
       </v-col>
       <v-col  cols="6" xs="6" lg="1">
         <div class="caption grey--text">Alter</div>
       <div>8+</div>
       </v-col>
          <v-col xs="1">
         <div class="caption grey--text">Erscheinungsjahr</div>
       <div>10/2021</div>
       </v-col>
        <v-col xs="1">
         <div class="caption grey--text">EOL</div>
       <div>12/2022</div>
       </v-col>
        <v-col xs="2">
         <div class="caption grey--text">EOL-Temperatur</div>
       <div>ongoing</div>
       </v-col>
    </v-row>
    <v-row row wrap>
      <v-col cols="4" md="4" lg="2">
        <v-list-item three-line>
          <v-list-item-avatar
            tile
            size="80"
          >
            <v-img
              src="https://www.brickmerge.de/img/sets/s/LEGO_76239_alt1.jpg"
              aspect-ratio="2"
              contain
            />
          </v-list-item-avatar>
        </v-list-item>
      </v-col>
      <v-col cols="8" md="6" lg="4">
        <div class="caption grey--text">76239 Super Heroes</div>
        <div>Batmobile™ Tumbler: Duell mit Scarecrow™</div>
          <v-chip-group
            active-class="deep-purple accent-2 white--text"
            column
          >
            <v-chip
              color="blue"
              label
              outlined
              small
            >
              Exklusiv
            </v-chip>
        </v-chip-group>
      </v-col>
       <v-col cols="6" xs="6" lg="1">
         <div class="caption grey--text">UVP</div>
         <div>39,99 €</div>
         <div class="caption grey--text">Markpreis</div>
         <div>39,99 €</div>
       </v-col>
       <v-col  cols="6" xs="6" lg="1">
         <div class="caption grey--text">Alter</div>
       <div>8+</div>
       </v-col>
       <v-col cols="6" xs="6" lg="2">
         <div class="caption grey--text">Erscheinungsjahr</div>
         <div>10/2021</div>
         <div class="caption grey--text">EOL</div>
         <div>12/2022</div>
       </v-col>
       <v-col cols="6" xs="6" lg="2">
         <div class="caption grey--text">EOL-Temperatur</div>
         
      <div class="gauge-block">
         <div class="gauge-wrapper">
        <div class="gauge four rischio3">
          <div class="slice-colors">
            <div class="st slice-item"></div>
            <div class="st slice-item"></div>
            <div class="st slice-item"></div>
            <div class="st slice-item"></div>
          </div>
          <div class="needle"></div>
          <div class="gauge-center">
            <div class="label">Status</div>
            <div class="number">HIGH</div>
          </div>    
        </div>  
        </div>
      </div>
         <div>
                Verfügbarkeit
                <v-progress-linear
                    background-color="success"
                    buffer-value="75"
                    color="warning"
                    value="15"
                />
                </div>
       </v-col>
    </v-row>
    <v-fade-transition mode="out-in">
    <v-row>
        
      <v-col
      v-for="set of sets" :key="set.setnumber"
        cols="12"
        xs="12"
        md="6"
        lg="4"
      >
        
          <v-card
            class="mx-auto"
            max-width="460"
            outlined
          >
            <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-4">
                    {{set.theme}}
                  </div>
                  <v-list-item-title class="text-h5 mb-1">
                    {{set.setnumber}}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{set.name}}
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                    tile
                    size="80"
                >
                <v-img
                    :src="'https://www.brickmerge.de/img/sets/l/' + set.scr"
                    aspect-ratio="2"
                    contain
                    ></v-img>
                </v-list-item-avatar>
            </v-list-item>
            <v-divider class="mx-4"></v-divider>
            <v-card-text>
            <v-row align="center">
                <v-col
                cols="8"
                >
                    <p class="my-1">UVP • 39,99 €</p>
                    <p class="my-1">Alter • 8+</p>
                    <p class="my-1">Erscheinungsjahr • 10/2021</p>
                    <p class="my-1">EOL • 12/2022</p>
                </v-col>
                <v-col cols="4">
                <div class="gauge-block">
         <div class="gauge-wrapper">
        <div class="gauge four rischio3">
          <div class="slice-colors">
            <div class="st slice-item"></div>
            <div class="st slice-item"></div>
            <div class="st slice-item"></div>
            <div class="st slice-item"></div>
          </div>
          <div class="needle"></div>
          <div class="gauge-center">
            <div class="label">Status</div>
            <div class="number">HIGH</div>
          </div>    
        </div>  
        </div>
      </div>
                </v-col>
            </v-row>
            </v-card-text>
            <v-card-text>
              <v-chip-group
                active-class="deep-purple accent-2 white--text"
                column
              >
                <v-chip
                  color="blue"
                  label
                  outlined
                  small
                >
                  Exklusiv
                </v-chip>
              </v-chip-group>
            </v-card-text>
            <v-card-text>
                Text
                <v-progress-linear
                    background-color="success"
                    buffer-value="75"
                    color="warning"
                    value="15"
                />
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-actions>
                <v-btn
                  color="deep-purple lighten-2"
                  outlined
                  text
                >
                  <v-icon left>
                    mdi-cart
                  </v-icon>
                  Jetzt Kaufen
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
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
                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                </v-card-text>
            </div>
            </v-expand-transition>
        </v-card>
      </v-col>  
      <v-col
        cols="12"
        xs="12"
        md="6"
        lg="4"
      >
        
          <v-card
            class="mx-auto"
            max-width="460"
            outlined
          >
            <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-4">
                    Super Heroes
                  </div>
                  <v-list-item-title class="text-h5 mb-1">
                    76239
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    Batmobile™ Tumbler: Duell mit Scarecrow™
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                    tile
                    size="80"
                >
                <v-img
                    src="https://www.brickmerge.de/img/sets/s/LEGO_76239_alt1.jpg"
                    aspect-ratio="2"
                    contain
                    ></v-img>
                </v-list-item-avatar>
            </v-list-item>
            <v-divider class="mx-4"></v-divider>
            <v-card-text>
            <v-row align="center">
                <v-col
                cols="8"
                >
                    <p class="my-1">UVP • 39,99 €</p>
                    <p class="my-1">Alter • 8+</p>
                    <p class="my-1">Erscheinungsjahr • 10/2021</p>
                    <p class="my-1">EOL • 12/2022</p>
                </v-col>
                <v-col cols="4">
                <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sun.png"
                    alt="Sunny image"
                    width="92"
                ></v-img>
                </v-col>
            </v-row>
            </v-card-text>
            <v-card-text>
              <v-chip-group
                active-class="deep-purple accent-2 white--text"
                column
              >
                <v-chip
                  color="blue"
                  label
                  outlined
                  small
                >
                  Exklusiv
                </v-chip>
              </v-chip-group>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-actions>
                <v-btn
                  color="deep-purple lighten-2"
                  text
                >
                  Kufen
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
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
                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                </v-card-text>
            </div>
            </v-expand-transition>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        xs="12"
        md="6"
        lg="4"
      >
        
          <v-card
            class="mx-auto"
            max-width="460"
            outlined
          >
            <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-4">
                    Super Heroes {{users}}
                    <v-btn
                        @:click="add"
                        >
                        Kufen
                    </v-btn>
                  </div>
                  <v-list-item-title class="text-h5 mb-1">
                    76239
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    Batmobile™ Tumbler: Duell mit Scarecrow™
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                    tile
                    size="80"
                >
                <v-img
                    src="https://www.brickmerge.de/img/sets/s/LEGO_76239_alt1.jpg"
                    aspect-ratio="2"
                    contain
                    ></v-img>
                </v-list-item-avatar>
            </v-list-item>
            <v-divider class="mx-4"></v-divider>
            <v-card-text>
            <v-row align="center">
                <v-col
                cols="8"
                >
                    <p class="my-1">UVP • 39,99 €</p>
                    <p class="my-1">Alter • 8+</p>
                    <p class="my-1">Erscheinungsjahr • 10/2021</p>
                    <p class="my-1">EOL • 12/2022</p>
                </v-col>
                <v-col cols="4">
                <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sun.png"
                    alt="Sunny image"
                    width="92"
                ></v-img>
                </v-col>
            </v-row>
            </v-card-text>
            <v-card-text>
              <v-chip-group
                active-class="deep-purple accent-2 white--text"
                column
              >
                <v-chip
                  color="blue"
                  label
                  outlined
                  small
                >
                  Exklusiv
                </v-chip>
              </v-chip-group>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-actions>
                <v-btn
                  color="deep-purple lighten-2"
                  text
                  @:click="$store.commit('counter/increment')"
                >
                  Kufen
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
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
                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                </v-card-text>
            </div>
            </v-expand-transition>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        xs="12"
        md="6"
        lg="4"
      >
        
          <v-card
            class="mx-auto"
            max-width="460"
            outlined
          >
            <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-overline mb-4">
                    Super Heroes
                  </div>
                  <v-list-item-title class="text-h5 mb-1">
                    76239
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    Batmobile™ Tumbler: Duell mit Scarecrow™
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                    tile
                    size="80"
                >
                <v-img
                    src="https://www.brickmerge.de/img/sets/s/LEGO_76239_alt1.jpg"
                    aspect-ratio="2"
                    contain
                    ></v-img>
                </v-list-item-avatar>
            </v-list-item>
            <v-divider class="mx-4"></v-divider>
            <v-card-text>
            <v-row align="center">
                <v-col
                cols="8"
                >
                    <p class="my-1">UVP • 39,99 €</p>
                    <p class="my-1">Alter • 8+</p>
                    <p class="my-1">Erscheinungsjahr • 10/2021</p>
                    <p class="my-1">EOL • 12/2022</p>
                </v-col>
                <v-col cols="4">
                <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/sun.png"
                    alt="Sunny image"
                    width="92"
                ></v-img>
                </v-col>
            </v-row>
            </v-card-text>
            <v-card-text>
              <v-chip-group
                active-class="deep-purple accent-2 white--text"
                column
              >
                <v-chip
                  color="blue"
                  label
                  outlined
                  small
                >
                  Exklusiv
                </v-chip>
              </v-chip-group>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-actions>
                <v-btn
                  color="deep-purple lighten-2"
                  text
                >
                  Kufen
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
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
                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                </v-card-text>
            </div>
            </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
      
    </v-fade-transition>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      show: false,
      sets: []
    }),
    async mounted() {
        this.sets = await this.$axios.$get('https://script.google.com/macros/s/AKfycbz6okDH1siCTnAVTveZf16Qh10S9XDiM9zwu5pD_lg1gUdS90Geyc6CHm0Bznn6NCTl/exec?listing=eol')
    },
    methods: {
        add () {
            this.$store.commit('counter/increment')
        },
    }
  }
</script>

<style>
.gauge-block {
  transform: scale(0.5);
  width: auto;
  margin: 0 auto;
  display: inline-block;
  position: relative;
  left: -70px;
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