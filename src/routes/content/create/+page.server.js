import { redirect } from '@sveltejs/kit';
import db from '../../../lib/conn.js';

export let actions = {
    create : async ({ request })=>{
        let formData = await request.formData();
        let title = formData.get("title");
        let banner = formData.get("banner");
        let content = formData.get("content");

        // save ke database
        let createArticle = await db.article.create({
            data : {title, banner, content}
        });

        throw redirect(303, "/");

    }
}

