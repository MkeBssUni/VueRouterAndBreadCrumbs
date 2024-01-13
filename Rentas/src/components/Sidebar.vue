<template>
    <div>
        <b-sidebar id="sidebar-footer" aria-label="Sidebar with custom footer"
        no-header
        no-close-on-backdrop
        no-close-on-route-change
        shadow
        visible
        z-index="-1"
        >
            <template #footer="">
                <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
                    <strong class="mr-auto">J. Miguel Aguario Díaz</strong>
                </div>
            </template>
            <div class="px-3 py-2">
                <div id="buttonContainer">
                    <b-button variant="outline-dark" :to="'/rentar-espacio'" id="button">
                        <b-icon icon="house-door-fill" id="icon"></b-icon>
                        Espacios
                    </b-button>
                    <b-button variant="outline-dark" :to="'/renta-tu-espacio'" id="button">
                        <b-icon icon="person-circle" id="icon"></b-icon>
                        Mis Espacios
                    </b-button>
                </div>
            </div>
        </b-sidebar>
    </div>
</template>
<style scoped>

#buttonContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 200px;
}
#button {
    width: 200px;
    height: 50px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.20);
}
#icon {
    margin-right: 10px;
}
</style>

<script>
export default {
    name: 'Sidebar',
    mounted() {
        console.log('Componente siderbar montado');
    }
}
</script>