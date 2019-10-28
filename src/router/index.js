import Vue from 'vue'
import Router from 'vue-router'
import Photovoltaic from '../views/synthesize/navigation/source/photovoltaic'
import Windpower from '../views/synthesize/navigation/source/Windpower'
import Biomass from '../views/synthesize/navigation/source/biomass'
import Photothermal from '../views/synthesize/navigation/source/Photothermal'
import Thermoelectricity from '../views/synthesize/navigation/source/thermoelectricity'
import Dryhotrock from '../views/synthesize/navigation/source/Dryhotrock'
import Wasteheat from '../views/synthesize/navigation/source/wasteheat'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name:'/photovoltaic',
    component:Photovoltaic
  },{
    path: '/photovoltaic',
    name:'/photovoltaic',
    component:Photovoltaic
  },{
    path: '/Windpower',
    name:'Windpower',
    component:Windpower
  },{
    path: '/biomass',
    name:'biomass',
    component:Biomass
  },{
    path: '/Photothermal',
    name:'Photothermal',
    component:Photothermal
  },{
    path: '/thermoelectricity',
    name:'thermoelectricity',
    component:Thermoelectricity
  },{
    path: '/Dryhotrock',
    name:'Dryhotrock',
    component:Dryhotrock
  },{
    path: '/wasteheat',
    name:'wasteheat',
    component:Wasteheat
  }]
})
