<template>
  <div class="footer">
    <div class="footer_container d-flex container">
      <img src="../static/photo.jpg" alt="photo">
      <div class="d-flex flex-column justify-content-end">
        <p>Иван Уланович</p>
        <p>telegram: @ulanivan</p>
        <a target="_blank" href="http://github.com/ulanivan">http://github.com/ulanivan</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  padding-top: 10px;
  padding-bottom: 10px;
}
.footer_container {
  img {
    height: 100px;
    margin-right: 30px;
  }
}
</style>
