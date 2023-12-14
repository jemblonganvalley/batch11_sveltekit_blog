import { redirect } from '@sveltejs/kit';
import db from '../../../../lib/conn.js'

export async function load({ params }){

    let {id} = params;

    let detailArticle = await db.article.findUnique({
        where : {
            id : parseInt(id)
        }
    });
    
    return { detailArticle }

}

export const actions = {
    update : async ({ request })=>{
        let fd = await request.formData();
        let id = fd.get("id");
        let title = fd.get("title");
        let banner = fd.get("banner");
        let content = fd.get("content");
        let slug = title.split(" ").join("-");

        let result = await db.article.update({
            where : {
                id : parseInt(id)
            },
            data : {
                title, banner, content
            }
        });
        
        throw redirect(303, `/content/detail/${id}/${slug}`);
    }
}


