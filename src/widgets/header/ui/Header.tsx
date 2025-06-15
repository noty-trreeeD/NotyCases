import { Balance } from '@/features'
import styles from '../styles/Header.module.scss'

export const Header = () => {
    return (
        <header className={styles.header}>
            <Balance />
        </header>
    )
}
