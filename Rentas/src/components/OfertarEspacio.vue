<template>
    <div>
        <b-breadcrumb id="bread-crumbs" :items="items"></b-breadcrumb>
        <b-row class="my-1">
            <b-col cols="12">
                <b-card>
                    <b-card-text>
                        <h1 class="text-center">Ofertar espacio</h1>
                        <p class="text-center
                            ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                    </b-card-text>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name: 'OfertarEspacio',
    mounted() {
        console.log('Componente Ofertar espacio montado');
    },
    data() {
        return {
            items: [{
                text: 'Renta tu espacio',
                to: { name: 'renta-tu-espacio' },
            },{
                text: 'Información de espacio',
                to: { name: 'informacion-de-espacio' },
            },{
                text: 'Ofertar espacio',
                to: { name: 'ofertar-espacio' },
                active: true
            }]
        }
    }
}
</script>

<style>
#bread-crumbs {
    font-size: 1.2rem;
    font-weight: 400;
    color: #000;
}</style>