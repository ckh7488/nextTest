import { useRouter } from "next/router";
import client  from "../../../lib/mongodb"

export default async (req,res)=>{
    // await clientPromise;
    const myClient = await client;
    // const ret = await myClient.db().admin().listDatabases();                                         // ====> db리스트 얻기.
    // const ret = await myClient.db('local').collection('startup_log').insertOne({name:'ckh'});        // insertOne
    const ret3 = await myClient.db('local').collection('startup_log').insertMany([{name: 'asd'},{name: 'zxc'}]);
    // const ret = await myClient.db('admin').collection('system.version').insertOne({name:'ckh'});
    // const ret = await myClient.db('local').collection('startup_log').find({}).toArray(); 
    // const ret = await myClient.db('config').listCollections().toArray().then(el=>el.map(e=>e.name));
    const ret = await myClient.db().admin().listDatabases()?.then(obj=>obj?.databases);
    
    console.log(ret);
    res.json({data: ret })
}