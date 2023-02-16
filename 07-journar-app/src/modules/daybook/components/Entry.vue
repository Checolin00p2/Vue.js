<template>
  <div class="entry-container mb-3 pointer p-2" @click="$router.push({name:'entry',params:{id:10}})">
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Febrero</span>
      <span class="mx-1 fw-light">2023, Jueves</span>
    </div>

    <div class="entry-description">
      Nulla magna turpis, maximus ut imperdiet ac, egestas sed purus. Mauris ac
      nibh lectus. Sed non velit vulputate, pretium nibh et, tristique augue.
      Nam magna augue, scelerisque eget sodales id, vehicula in odio. Phasellus
      quis facilisis nisl. Mauris tempus fringilla porttitor. Donec eleifend
      odio non ultrices laoreet. Sed aliquam neque ac est maximus convallis.
      Quisque volutpat, libero bibendum laoreet facilisis, eros turpis
      condimentum nisi, at aliquam enim augue at massa.
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition:0.2s all ease-in;

    &:hover{
        background-color: lighten($color: grey,$amount:45);
        transition:0.2s all ease-in;
    }
    .entry-description{
        font-size: 12px;
    }
}



</style>