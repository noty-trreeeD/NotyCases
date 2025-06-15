import {skinRarities, useAppDispatch, useAppSelector} from '@/shared'
import { selectLastDrop, selectIsDropOpen } from '../model/dropResult-selectors'
import { closeModal } from '../model/dropResult-slice'

export const DropModal = () => {
    const dispatch = useAppDispatch()
    const isOpen = useAppSelector(selectIsDropOpen)
    const lastDrop = useAppSelector(selectLastDrop)

    if (!isOpen || !lastDrop) return null

    return (
        <div
            style={{
                position: 'fixed',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'rgba(0,0,0,0.5)',
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                zIndex: 9999,
            }}
            onClick={() => dispatch(closeModal())}
        >
            <div
                onClick={e => e.stopPropagation()}
                style={{
                    background: '#222',
                    padding: 20,
                    borderRadius: 8,
                    color: 'white',
                    textAlign: 'center',
                    minWidth: 300,
                }}
            >
                <h2>Вам выпал предмет:</h2>
                <img src={lastDrop.image} alt={lastDrop.name} style={{ maxWidth: '100%', borderRadius: 4 }} />
                <p>{lastDrop.name}</p>
                <p style={{ color: lastDrop.rarity ? (skinRarities[lastDrop.rarity] ?? '#fff') : '#fff' }}>
                    Редкость: {lastDrop.rarity}
                </p>
                <button onClick={() => dispatch(closeModal())} style={{ marginTop: 10, padding: '8px 16px' }}>
                    Закрыть
                </button>
            </div>
        </div>
    )
}
