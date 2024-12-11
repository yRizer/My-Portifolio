<template>
    <div class="side-bar">
        <div class="indexes-menu">
            <div class="indexes-header">{{ titulo }}</div>
            <router-view name="SideBarContent"/>
            <div class="indexes-menu-indicator"></div>
        </div>
        <div class="right-menu">
            <ul class="list-options">
                <router-link to="/" class="option-menu" @click="SetPositionIndicator($event)"><img src="../assets/image/sidebar/Home.png" alt="Imagem Casa"></router-link>
                <router-link to="/projetos" class="option-menu" @click="SetPositionIndicator($event)"><img src="../assets/image/sidebar/Person.png" alt=""></router-link>
                <router-link to="/" class="option-menu" @click="SetPositionIndicator($event)"></router-link>
                <router-link to="/" class="option-menu" @click="SetPositionIndicator($event)"></router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideBar',
    methods: {

        SetPositionIndicator(event) {
            const menuItem = event.target
            const indexesMenu = document.querySelector(".indexes-menu")
            const indexesMenuIndicator = indexesMenu.querySelector(".indexes-menu-indicator")

            var newTopPosition = menuItem.offsetTop + menuItem.offsetHeight / 2 - indexesMenuIndicator.offsetHeight / 2

            indexesMenuIndicator.style.top = `${newTopPosition}px`

        }
    },
    data(){
        return {
            titulo: this.$route.meta.title
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side-bar {
    width: 350px;
    height: 100vh;
    display: flex;
    color: var(--antiflash-white);
    background-color: var(--semi-black);
}

.right-menu {
    width: 50px;
    height: 100%;
    right: 0;
}

.indexes-menu {
    height: 100%;
    width: 300px;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    background-color: var(--eerie-black);
}

.indexes-menu-indicator {
    width: 0px;
    height: 0px;
    background-color: #0000ff00;
    position: absolute;
    right: -10px;
    border-left: 10px solid var(--eerie-black);
    border-block: 8px solid #0000;
    transition: 0.4s;
}

.indexes-header {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    position: relative;
}

.list-options {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    padding: 0;
    gap: 5px;
    height: 100%;
}

.list-options li {
    list-style: none;
}

.option-menu {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    transition: 0.4s;
}

.option-menu:hover {
    background-color: rgba(255, 255, 255, 0.023);
}

.option-menu img {
    width: 50%;
}
</style>