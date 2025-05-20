import '../tabs.css';

export const Tab = ({ label, onClick, isActive }) => {
    return (
        <button className={isActive ? "activeTab" : "notActiveTab"}  onClick={onClick}>
            {label}
        </button>
    );
};