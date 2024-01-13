<template>
    <div>
        <b-navbar type="dark" variant="dark">
            <b-navbar-nav>
                <b-nav-item :to="'/'">Inicio</b-nav-item>

                <b-nav-item-dropdown text="Mis espacios" right>
                    <b-dropdown-item :to="'/renta-tu-espacio'">Renta tu espacio</b-dropdown-item>
                    <b-dropdown-item :to="'/informacion-de-espacio'">Información de espacio</b-dropdown-item>
                    <b-dropdown-item :to="'/ofertar-espacio'">Ofertar espacio</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown text="Espacios" right>
                    <b-dropdown-item :to="'/rentar-espacio'">Rentar espacio</b-dropdown-item>
                    <b-dropdown-item :to="'/catalogo-de-espacios'">Catalogo de espacios</b-dropdown-item>
                    <b-dropdown-item :to="'/detalles-de-espacio'">Detalles de espacio</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>