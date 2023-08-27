<template>
  <section class="projects">
    <div class="container">
      <h2 class="text-center mb-5">Projects</h2>
      <div class="row">
        <div class="col-lg-3 col-md-6 mb-3">
          <div class="product-image">
            <img
              class="image"
              src="/images/nestviet.png"
              alt="nestviet"
            />
          </div>
          <p class="name">NestViet</p>
          <p class="description">For Swallow's nest shopping</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding: 40px 0;
}
.product-image {
  padding: 20px;
  background-color: #ffffff;
  > .image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
}
</style>
