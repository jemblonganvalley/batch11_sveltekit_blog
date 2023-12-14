import db from '../../../../../lib/conn.js'


export async function load({ params }){
    let {id, slug} = params

    let detailArticle = await db.article.findUnique({
        where : {
            id : parseInt(id)
        }
    });

    return {
        detailArticle
    }

}

