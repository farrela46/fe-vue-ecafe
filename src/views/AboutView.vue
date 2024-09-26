<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.inline-photo {
  opacity: 0;
  transform: translateY(4em) rotateZ(-0deg);
  transition: transform 4s .25s cubic-bezier(0,1,.3,1),opacity .3s .25s ease-out;
  will-change: transform, opacity;
}
.inline-photo.is-visible {
  opacity: 1;
  transform: rotateZ(-0deg);
}

</style>
