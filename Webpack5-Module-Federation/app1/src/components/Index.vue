<template>
    <div>
        <div class="title">App1</div>
        <Header></Header>
    </div>
</template>

<script lang="js">
    import Header from './Header.vue';

    export default {
        components: {
            Header
        }
    }

</script>

<style>
    .title {
        font-size: 22px;
        text-align: center;
    }
</style>