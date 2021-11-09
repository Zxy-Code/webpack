<template>
    <div>
        <div class="title">App2</div>
        <Header title="baiduditu"></Header>
    </div>
</template>

<script lang="js">
//    import Header from './Header.vue';
//    import Header from 'app1Container/Header';
//    let Header;
//    import('app1Container/Header').then(res => {
//        console.log(4444);
//        console.log(res.default);
//        Header = res.default;
//    });
    const Header = () => import('app1/Header');
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