
import styles from './arrow.module.scss'
import React from "react";

type ArrowType={
    reverse: boolean,
    page: number,
    handleSetPage(page:number): void
}

export const Arrow: React.FC<ArrowType> = ({reverse, page, handleSetPage}) => {
    return(
        <div className={`${styles.arrowRound} ${reverse ? styles.right : styles.left} ${(((!reverse)&&(page === 1)) || ((reverse) && (page === 4))) && styles.hide}`}
             onClick={reverse ? ()=>{handleSetPage(page+1)} : ()=>{handleSetPage(page-1)} }>
            <img src={'./icons/arrow.svg'} alt={'arrow'}/>
        </div>
    )
}