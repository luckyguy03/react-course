import { Button } from '../../../button/button';

import styles from '../restaurant-page.module.css';

export const Tab = ({ label, onClick, isActive }) => {
    return (
        <Button className={isActive ? styles.activeTab : styles.notActiveTab}  onClick={onClick} title={<b>{label}</b>}/>
    );
};