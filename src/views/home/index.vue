<template>
  <div class="home-container">
    <div class="vedio-wrap">
      <video autoplay="true" muted loop>
        <source
          src="https://openaicomproductionae4b.blob.core.windows.net/production-twill-01/121dd5e0-eaea-424d-bdf2-db02ca1f5e55/gpt-4-92586ac_1080p60.mp4"
          type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="modal-wrap">
        <div class="nav-wrap">
          <img src="../../assets/logo.png" alt="">
          <div class="nav-list">
            <div v-for="(item, index) in state.navList" :key="item" :class="['nav-item', index === 0 && 'home', state.activeNavIndex === index && 'active']" @click="changeNav(index)">{{ item }}</div>
          </div>
          <span class="select-wrap">
            <span>English</span><img src="../../assets/polygon.png" alt="">
          </span>
        </div>
        <div class="nav-title">
          <div class="main-title">A brief introduction text</div>
          <div class="sub-title">If there are any subheading</div>
        </div>
      </div>
    </div>
    <div class="intro-ours-wrap">
      <div class="title-dot">Who we are</div>
    </div>
    <div class="intro-ours-wrap">
      <div class="title-dot">Featured Products</div>
    </div>
  </div>
</template>

<script src="./component.js"></script>
<style src="./style.scss" lang="scss"></style>
