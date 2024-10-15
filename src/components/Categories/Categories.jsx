import React from 'react'

import styles from '../../styles/styles/Categories.module.css';


const Categories = ({ title,  Products = [], amount }) => {
 const list = Products.filter((_, i) => i < amount);

  return (
  <section className={styles.section}>
    <h2>
        {title}
    </h2>
<div className={styles.section}>
{list.map(({ id, name , image }) => (
    <link to={`/categories${id}`} key={id} className={styles.item} >
    <div
    className={styles.image}
    style={{backgroundImage: `url(${image})`}}
    />
<h3 className={styles.title}>{name}</h3>
    </link>
))}
</div>
  </section>
  )
};

export default Categories