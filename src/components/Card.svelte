<script>
  export let title="placeholer";
  export let content="Placolher Content";
  export let imageLink ="https://api.lorem.space/image/house?w=150&h=150";
  export let id;
</script>


<div class="card w-96 bg-base-100 shadow-xl border-yellow-700 border-2">
    <figure class="px-10 pt-10">
      <img src={imageLink} alt="Shoes" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">{title}</h2>
      <p>{content}</p>
      <div class="card-actions">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>