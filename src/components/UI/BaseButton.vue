<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['mode'],
};
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: rgb(225, 124, 136);
  border: 1px solid black;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

button:hover,
button:active {
  background-color: black;
  border-color: black;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>
