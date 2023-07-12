import { useState } from "react"
import styles from "./select.module.css"

type SelectOption = {
    label: string
    value: any
}

type SelectProps = {
    value?: SelectOption
    onChange: (value: SelectOption | undefined) => void
    options: SelectOption[]
}

const Selects = ({ value, onChange, options }: SelectProps) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div 
            tabIndex={0} 
            className={styles.container}
            onClick={() => setIsOpen(prev => !prev)}
            onBlur={() => setIsOpen(false)}
        >
            <span className={styles.value}>
                {value?.label}
            </span>
            <button className={styles["clear-btn"]}>&times;</button>
            <div className={styles.divider}></div>
            <div className={styles.caret}></div>
            <ul className={`${styles.options} ${isOpen ? styles.show : ''}`}>
                {options.map(option => (
                    <li key={option.label} className={styles.option}>{option.label}</li>
                ))}
            </ul>
        </div>
    )
}

export default Selects