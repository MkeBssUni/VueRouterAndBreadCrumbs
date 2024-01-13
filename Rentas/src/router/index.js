import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes=[{
    path:'/',
    redirect: '/mi-app'
},{
    path:'/',
    component:{
        render(c){
            return c('router-view')
        }
    },children:[{
        path:'/mi-app',
        name:'mi-app',
        component:()=>import('../components/Inicio.vue')
    },{
        path:'/rentar-espacio',
        name:'rentar-espacio',
        component:()=>import('../components/RentarEspacio.vue')
    },{
        path:'/catalogo-de-espacios',
        name:'catalogo-de-espacios',
        component:()=>import('../components/CatalogoDeEspacios.vue')
    },{
        path:'/detalles-de-espacio',
        name:'detalles-de-espacio',
        component:()=>import('../components/DetallesDeEspacio.vue')
    },{
        path:'/renta-tu-espacio',
        name:'renta-tu-espacio',
        component:()=>import('../components/RentaTuEspacio.vue')
    },{
        path:'/informacion-de-espacio',
        name:'informacion-de-espacio',
        component:()=>import('../components/InformacionDeEspacio.vue')
    },{
        path:'/ofertar-espacio',
        name:'ofertar-espacio',
        component:()=>import('../components/OfertarEspacio.vue')
    }]
}]

const router = new VueRouter({routes})

export default router;