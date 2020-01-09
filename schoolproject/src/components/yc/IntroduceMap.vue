<template>
    <div class="introduceMap">
        <div class="left">
            <h3 class="title">【开放公告】</h3>
            <ul class="cellBox" v-for="(con,index) of 3" :key="index">
                <li class="leftLi">
                    <h4>关于故宫博物馆</h4>
                    <p>根据中华人名共和国</p>
                </li>
            </ul>
        </div>
        <div class="right">
            <ul class="showCellBox">
                <li class="cell">
                    <div class="imgBox"></div>
                    <h3></h3>
                    <p></p>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.introduceMap {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: orange;
    display: flex;
    justify-content: space-between;
}
.left {
    width: 400px;
    background-color: orangered;
    padding: 1rem;
    color: white;
    overflow: hidden;
}
.right {
    flex-grow: 1;
    background-color: rgba(244, 244, 244, .5);
    position: relative;
    overflow: hidden;
}
</style>

<style scoped>
.cellBox {
    border-bottom: 1px solid #ccc;
}
.title {
    text-align: center;
}
.showCellBox {
    list-style: none;
    background-color: #fff;
    width: 600px;
    height: 350px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    padding: 0;
}
.cell {
    width: 214px;
    height: 175px;
    background-color: orange;
}
</style>
<script>
export default {
    data(){
        return {
            listInfo:3
        }
    },
    methods:{

    }
}
</script>