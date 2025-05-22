import '../restaurant-page.css';

export const Tab = ({ label, onClick, isActive }) => {
    return (
        <button className={isActive ? "active-tab" : "not-active-tab"}  onClick={onClick}>
            <b>{label}</b>
        </button>
    );
};