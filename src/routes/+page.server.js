import db from "../lib/conn"

export async function load(){
    let article = await db.article.findMany({
        orderBy : {
            id : "desc"
        }
    });

    return {
        article
    }

}

