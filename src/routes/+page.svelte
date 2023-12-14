
<script>
    import dayjs from "dayjs";
    export let data;
    let { article } = data;

    function generateSlug(text){
        let slug = text.split(" ").join("-");
        return slug.toLowerCase();
    }

</script>

<section class="w-screen min-h-screen bg-base-100 p-6 max-w-sm mx-auto">

    <h1 class="text-4xl font-bold">Article</h1>

    {#each article as ac (ac.id) }
        <div class="card w-96 bg-base-100 shadow-xl my-6">
            <figure class="h-32">
                <img src={ac.banner} alt="">
            </figure>
            <div class="card-body">
                <h1 class="card-title">{ac.title}</h1>
                <small class="text-xs font-light text-gray-500">
                    {dayjs(ac.created_at).format("dddd DD/MM/YYYY")}
                </small>
                <a href={`/content/detail/${ac.id}/${generateSlug(ac.title)}`} class="link link-primary">
                    Baca Selengkapnya..
                </a>
            </div>

        </div>
    {/each}

</section>

