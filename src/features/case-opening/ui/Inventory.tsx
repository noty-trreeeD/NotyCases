import { useAppSelector } from '@/shared'
import { selectInventoryItems } from '@/entities'

export const Inventory = () => {
    const items = useAppSelector(selectInventoryItems)

    if (!items.length) return <p>Инвентарь пуст</p>

    return (
        <div>
            <h4>Инвентарь</h4>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {items.map(item => (
                    <div key={item.id} style={{ border: '1px solid #ccc', padding: 8, width: 80 }}>
                        <img src={item.image} alt={item.name} style={{ width: '100%', height: 60, objectFit: 'cover' }} />
                        <div style={{ fontSize: 12 }}>{item.name}</div>
                        <div style={{ fontSize: 10, color: '#666' }}>{item.rarity}</div>
                        <div style={{ fontSize: 10, color: 'green' }}>{item.price}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
