<script>

</script>

<section class="w-screen min-h-screen bg-base-100 p-6">
    
    <form action="?/create" method="post" class="flex flex-col gap-4 bg-white my-6 p-6 w-96 mx-auto">
        
        <h1 class="text-4xl font-bold">
            Create Article
        </h1>
        
        <div class="form-control gap-2">
            <label for="title">title</label>
            <input type="text" id="title" name="title" class="input input-primary">
        </div>

        <div class="form-control gap-2">
            <label for="banner">banner</label>
            <input type="text" id="banner" name="banner" class="input input-primary">
        </div>

        <div class="form-control gap-2">
            <label for="content">content</label>
            <textarea name="content" id="content" class="textarea textarea-primary h-60"></textarea>
        </div>

        <button class="btn btn-primary w-4/12 ml-auto">
            submit
        </button>
    </form>

</section>