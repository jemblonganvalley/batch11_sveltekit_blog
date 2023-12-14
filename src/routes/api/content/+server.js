import { json } from '@sveltejs/kit';
import db from '../../../lib/conn.js';


export async function POST({request}){
    
    let req = await request.json();   
    
    let deleteData = await db.article.delete({
        where : {
            id : parseInt(req.id)
        }
    });

    return json({
        success : true,
        message : "Berhasil delete data",
    });

}


