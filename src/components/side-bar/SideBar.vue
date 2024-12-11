<template>
    <div class="side-bar">
        <div class="indexes-menu">
            <div class="indexes-header">{{ titulo }}</div>
            <router-view name="SideBarContent"/>
            <div class="indexes-menu-indicator"></div>
        </div>
        <div class="right-menu">
            <ul class="list-options">
                <router-link to="/" class="option-menu" @click="SetPositionIndicator($event)"></router-link>
                <router-link to="/projetos" class="option-menu" @click="SetPositionIndicator($event)"></router-link>
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
    background-color: var(--semi-black);
}

.right-menu {
    width: 50px;
    height: 100%;
    right: 0;
    background-color: #ff00001c;
}

.indexes-menu {
    background-color: #ffff001e;
    height: 100%;
    width: 300px;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
}

.indexes-menu-indicator {
    width: 5px;
    height: 5px;
    background-color: blue;
    position: absolute;
    right: 0;
}

.indexes-header {
    background-color: rgba(0, 0, 255, 0.13);
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
    background-color: rgba(51, 255, 0, 0.603);
}
</style>