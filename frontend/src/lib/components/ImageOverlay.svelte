<script>
  let {
    image = '',
    alt = '',
    ...rest
  } = $props();
</script>

<img
  src={image}
  alt={alt}
  class="absolute inset-0"
  { ...rest}
>