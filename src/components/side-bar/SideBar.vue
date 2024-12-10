<template>
    <div class="side-bar">
        <div class="indexes-menu">
            <div class="indexes-header"></div>
        </div>
        <div class="right-menu">
            <ul class="list-options">
                <li class="option-menu"></li>
                <li class="option-menu"></li>
                <li class="option-menu"></li>
                <li class="option-menu"></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideBar',
}

mounted(){
    var allOptionMenu = document.querySelectorAll('.option-menu')
    console.log(allOptionMenu);
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