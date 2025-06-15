import { type Case, useAppDispatch } from "@/shared";
import type { FC } from "react";
import { openCase } from "@/features";
import styles from '../styles/CaseCard.module.scss'

interface CaseCardProps {
    caseData: Case
}

export const CaseCard: FC<CaseCardProps> = ({ caseData }) => {
    const dispatch = useAppDispatch()

    const handleOpen = () => {
        dispatch(openCase(caseData))
    }

    return (
        <div className={styles.caseCard}>
            <h3 className={styles.caseCardTitle}>{caseData.name}</h3>
            <img className={styles.caseCardImage} src={caseData.image} alt={caseData.name}/>
            <p className={styles.caseCardPrice}>Цена: {caseData.price}</p>
            <button onClick={handleOpen}>Открыть кейс</button>
        </div>
    )
}
