import { openCase } from '../model/openCaseThunk'
import {type Case, useAppDispatch} from "@/shared";

interface CaseCardProps {
    caseData: Case
}

export const CaseCard: React.FC<CaseCardProps> = ({ caseData }) => {
    const dispatch = useAppDispatch()

    const handleOpen = () => {
        dispatch(openCase(caseData))
    }

    return (
        <div style={{ border: '1px solid #ccc', padding: 12, width: 250 }}>
            <h3>{caseData.name}</h3>
            <img src={caseData.imageUrl} alt={caseData.name} style={{ width: '100%', height: 120, objectFit: 'cover' }} />
            <div style={{ display: 'flex', gap: 8, overflowX: 'auto', margin: '8px 0' }}>
                {caseData.loot.map(skin => (
                    <div key={skin.id} style={{ minWidth: 50, textAlign: 'center' }}>
                        <img src={skin.image} alt={skin.name} style={{ width: 40, height: 40, objectFit: 'cover' }} />
                        <div style={{ fontSize: 10 }}>{skin.name}</div>
                    </div>
                ))}
            </div>
            <p>Цена: {caseData.price}</p>
            <button onClick={handleOpen}>Открыть кейс</button>
        </div>
    )
}
