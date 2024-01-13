<template>
    <div>
        <b-breadcrumb id="bread-crumbs" :items="items"></b-breadcrumb>
        <b-row class="my-1">
            <b-col cols="12">
                <b-card>
                    <b-card-text>
                        <h1 class="text-center">Detalles de espacio</h1>
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
    name: 'DetallesDeEspacio',
    mounted() {
        console.log('Componente detalles de espacio montado');
    },
    data() {
        return {
            items: [{
                text: 'Rentar espacio',
                to: { name: 'rentar-espacio' },
            },{
                text: 'Catalogo de espacios',
                to: { name: 'catalogo-de-espacios' },
            },{
                text: 'Detalles de espacio',
                to: { name: 'detalles-de-espacio' },
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
}

#buttonContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
}

#button {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.20);
}

#icon {
    margin-right: 10px;
}</style>