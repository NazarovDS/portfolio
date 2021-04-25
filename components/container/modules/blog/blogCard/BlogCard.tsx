import styles from './blogCard.module.scss'
import React from "react";
import Image from 'next/image'

export const BlogCard = () => {
    const ref = React.useRef()
    console.log(ref)
    return (
        <div ref={ref} className={styles.blogCard}>
            <div className={styles.imagePart}>
                <Image src="/blogImages/1.jpg"
                       alt="cardImage"
                       objectFit="cover"
                       layout="fill"
                />
            </div>
            <div className={styles.cardName}>
                Name
            </div>
            <div className={styles.cardText}>
                <p>
                    Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является
                    стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник
                    создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов.
                    Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в
                    электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами
                    Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus
                    PageMaker, в шаблонах которых используется Lorem Ipsum.
                </p>
            </div>
        </div>
    )
}