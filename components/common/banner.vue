<script setup>
const banners = [
  {
    image: '/images/banner1.jpeg',
    alt: 'banner1'
  }
]
</script>
<template>
  <div class="container">
    <div id="bannerCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(item, index) in banners" :key="index" :class="['carousel-item', { 'active': index === 0 }]">
          <img :src="item.image" class="d-block w-100" :alt="item.alt">
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
#bannerCarousel {
  max-width: 100%;
  margin: 0 auto;
}
</style>
