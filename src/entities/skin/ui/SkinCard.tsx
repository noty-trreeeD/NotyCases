import type { Skin } from '@/shared'
import { skinRarities } from '@/shared'
import styles from './SkinCard.module.scss'

interface Props {
    skin: Skin
}

export const SkinCard = ({ skin }: Props) => {
    const rarityColor = skinRarities[skin.rarity]

    return (
        <div
            className={styles.card}
            style={{ border: `2px solid ${rarityColor}` }}
        >
            <img src={skin.image} alt={skin.name} className={styles.image} />
            <div className={styles.name}>{skin.name}</div>
            <div className={styles.rarity} style={{ color: rarityColor }}>
                {skin.rarity}
            </div>
            <div className={styles.price}>${skin.price.toFixed(2)}</div>
        </div>
    )
}
