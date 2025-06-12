import React from 'react'
import type { Case } from '@/shared'

interface CaseCardProps {
    caseData: Case
}

export const CaseCard: React.FC<CaseCardProps> = ({ caseData }) => {
    return (
        <div>
            <h2>{caseData.name}</h2>
            <img src={caseData.imageUrl} alt={caseData.name} />
            <div>
                {caseData.loot.map((skin) => (
                    <div key={skin.id}>
                        <img src={skin.image} alt={skin.name} />
                        <p>{skin.name}</p>
                        <p>{skin.rarity}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
