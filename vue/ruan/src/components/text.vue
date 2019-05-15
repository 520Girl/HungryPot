<template>
  <div>
    <div class="demo"></div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.demo {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 2px dashed black;
  /* border-right: 2px dashed black; */
  animation: myMover 1.5s 0s infinite;
}
@keyframes myMover {
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

