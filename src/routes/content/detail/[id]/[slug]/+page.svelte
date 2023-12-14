<script>
    export let data;
    let { detailArticle } = data;

    function handleDelete(id){
        fetch("/api/content", {
            method : "POST",
            body : JSON.stringify({id})
        })
        .then(res => res.json())
        .then(data =>{
            console.info(data);
            window.location.href = "/";
        })
    }

</script>

<section class="w-96 mx-auto min-h-screen bg-base-100 p-6 flex flex-col gap-4">
    <h1 class="text-4xl font-bold">
        {detailArticle.title}
    </h1>

    <img src={detailArticle.banner} alt="">

    {@html detailArticle.content}

    <div class="join">
        <button class="btn btn-error join-item" on:click={()=>{handleDelete(detailArticle.id)}}>
            Delete
        </button>
        <a href={`/content/update/${detailArticle.id}`} class="btn btn-success join-item" >
            Update
        </a>
    </div>

</section>
