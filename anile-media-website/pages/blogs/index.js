import { useState, useEffect} from "react";
import axios from 'axios';
import {useRouter} from "next/router";
import HomeCard from '../../src/components/Miscellaneous/card';
import Head from "next/head";
import Navbar from "src/components/Navbar/Navbar";
import styles from '../../src/components/css/blogs.module.css'
export default function feed(){
  const router = useRouter();
    const [posts,setPosts]= useState([0,0,0,0,0,0]);
    const [loading,setLoading]= useState(true);
    async function getPosts(){
        try{
        
        const res = await axios.get('api/getBlogs');
         console.log(res.data);
          setPosts(res.data);
          setLoading(false);
           }catch(err){
               console.log(err);
               }
       }

    useEffect(()=>{
     
 getPosts();
 console.log(posts);
    },[]);


return(
  <div>
      <Head>
        <title>Anile Media | Blogs</title>
      </Head>
     <Navbar/>
      <main>
    <div className={styles.container}>
      <div className={styles.title}>Blogs</div>
    <br/>
    <br/>
    {posts.map(post => (
        
    <div className={styles.blog_card}>
        <HomeCard  post={post} loading = {loading} className={styles.card} authorIsUser = {0} />
        <br/>
        <br/>
        </div>

    ))}
        
    </div>
    </main>
    </div>
)

}


  
