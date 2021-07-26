<template>
  <svg>
    <use :href="`#i-${id}`"></use>
  </svg>
</template>

<script>
  export default {
    props: {
      id: {
        type: String,
        required: true
      }
    }
  }
</script>