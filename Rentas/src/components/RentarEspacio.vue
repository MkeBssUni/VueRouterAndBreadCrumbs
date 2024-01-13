<template>
    <div>
        <b-breadcrumb id="bread-crumbs" :items="items"></b-breadcrumb>
        <b-row class="my-1">
            <b-col cols="12">
                <b-card>
                    <b-card-text>
                        <h1 class="text-center">Rentar espacio</h1>
                        <p class="text-center
                            ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                    </b-card-text>
                    <div id="buttonContainer">
                        <b-button variant="outline-dark" :to="'/catalogo-de-espacios'" id="button">
                            <b-icon icon="info-circle-fill" id="icon"></b-icon>
                            Catalogo de espacios
                        </b-button>
                    </div>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>

<script>
export default {
    name: 'RentarEspacio',
    mounted() {
        console.log('Componente Rentar espacio montado');
    },
    data() {
        return {
            items: [{
                text: 'Rentar espacio',
                to: { name: 'rentar-espacio' },
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