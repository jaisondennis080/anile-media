import styles from './BlogsCard.module.css'
import BlogsData from '../../data/BlogsData'
function BlogsCard()
{
    return(
        BlogsData.map((data) => (
            <div>
                <div class={styles.vl}></div>
         <div className={styles.mar_card_1}>
  
    <div class={styles.head}>{data.heading}</div>
    <div class={styles.mar_text}>{data.description}</div>
  

</div>

</div>
        )));
}
export default BlogsCard