import styles from "./Button.module.css";

export default function Button({disabled, onClick, children}) {

    return (
        <button className={`${styles.btn} ${disabled ? styles.btnDisabled : ''}`}
                disabled={disabled}
                onClick={onClick}>
            {children}
        </button>
    )
}