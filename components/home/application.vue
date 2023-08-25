<template>
  <section class="android-app-section">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h2>Download & Install the App on Your Device</h2>
          <ul class="descriptions">
            <li class="li">
              <i class="icons mdi mdi-check mdi-24px"></i>
              <span class="content">The Best Leading Store in the Industry Today</span>
            </li>
            <li class="li">
              <i class="icons mdi mdi-check mdi-24px"></i>
              <span class="content">A Wide Range of High-Quality Products</span>
            </li>
            <li class="li">
              <i class="icons mdi mdi-check mdi-24px"></i>
              <span class="content">Affordable Prices</span>
            </li>
            <li class="li">
              <i class="icons mdi mdi-check mdi-24px"></i>
              <span class="content">Fast Delivery, No Deposit Required</span>
            </li>
          </ul>
          <a class="button -android" href="#" target="_blank">
            <img src="" alt="android-download">
          </a>
          <a class="button -apple" href="#" target="_blank">
            <img src="" alt="apple-download">
          </a>
        </div>
        <div class="col-md-4">
          <img
            src=""
            alt="Android App"
            class="app-image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.android-app-section {
  padding: 40px 0;
  margin-top: 10px;
  background-color: #ffeded;
}
.app-image {
  width: 300px;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}
.app-download-button {
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
}
.app-download-button:hover {
  background-color: #45a049;
}
.button {
  margin-right: 10px;
  color: #ffffff;
  display: inline-block;
  cursor: pointer;
  text-align: center;
  border: none;
  padding: 0px 35px;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 400;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  background-size: 200% auto;
  background-color:#198754;
  height: 50px;
  line-height: 50px;
  -webkit-box-shadow: 0px 17px 43px 1px rgba(221, 26, 68, 0.356);
  box-shadow: 0px 17px 43px 1px rgba(221, 26, 68, 0.356);
}
.descriptions {
  list-style-type: none;
  > .li {
    padding: 10px 0;
  }
  > .li > .icons {
    color: #198754;
  }
  > .li > .content {
    margin-left: 10px;
  }
}
</style>
