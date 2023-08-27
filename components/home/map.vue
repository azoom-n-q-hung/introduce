<script setup>
onMounted(() => {
  let map;
  function initMap() {
    const center = { lat: 21.030760, lng: 105.784404 };
  
    map = new google.maps.Map(document.getElementById("googleMap"), {
      center: center,
      zoom: 15,
    });
  
    const marker = new google.maps.Marker({
      position: center,
      map: map,
      title: "ZicZic Studio",
    });
  }

  initMap()
})
</script>

<template>
  <section id="googleMapSection">
    <div id="googleMap" style="height: 400px"></div>
  </section>
</template>

<style scoped></style>
