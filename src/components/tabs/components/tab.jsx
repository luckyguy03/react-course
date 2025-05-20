import '../tabs.css';

export const Tab = ({ label, onClick, isActive }) => {
    return (
        <button className={isActive ? "activeTab" : "notActiveTab"}  onClick={onClick}>
            <b>{label}</b>
        </button>
    );
};