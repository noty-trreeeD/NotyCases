import { useAppSelector } from '@/shared'
import { SkinCard } from '@/entities'
import { selectInventoryItems } from "@/widgets";
import styles from '../styles/Inventory.module.scss'

export const Inventory = () => {
    const items = useAppSelector(selectInventoryItems)

    if (!items.length) return <p>Инвентарь пуст</p>

    console.log(styles)
    return (
        <div className={styles.inventory}>
            <p className={styles.inventoryTitle}>Инвентарь</p>
            <div className={styles.inventoryItems}>
                {items.map((item) => (
                    <SkinCard key={item.id} skin={item} />
                ))}
            </div>
        </div>
    )
}
