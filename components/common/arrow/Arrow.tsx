
import styles from './arrow.module.scss'
import React from "react";

export const Arrow: React.FC<{reverse: boolean,page: number, handleSetPage: any }> = ({reverse, page, handleSetPage}) => {
console.log(page)
    return(
        <div className={`${styles.arrowRound} ${reverse ? styles.right : styles.left} ${(((!reverse)&&(page === 1)) || ((reverse) && (page === 4))) ? styles.hide : ''}`}
             onClick={reverse ? ()=>{handleSetPage(page+1)} : ()=>{handleSetPage(page-1)} }>
            <img src={'./arrow.svg'} alt={'arrow'}/>
        </div>
    )
}