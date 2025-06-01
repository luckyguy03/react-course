import styles from '../restaurant-page.module.css';

export const Tab = ({ label, onClick, isActive }) => {
    return (
        <button className={isActive ? styles.activeTab : styles.notActiveTab}  onClick={onClick}>
            <b>{label}</b>
        </button>
    );
};