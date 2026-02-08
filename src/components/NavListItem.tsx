import { Link } from 'react-router-dom';

interface NavListItemProps {
  to: string;
  label: string;
  onClick?: () => void;
}

export function NavListItem({ to, label, onClick }: NavListItemProps) {
  return (
    <Link to={to} className="nav-list-item" onClick={onClick}>
      <span>{label}</span>
      <span className="nav-list-arrow">→</span>
    </Link>
  );
}

interface NavListOptionProps {
  label: string;
  onClick: () => void;
  isSelected?: boolean;
}

export function NavListOption({ label, onClick, isSelected }: NavListOptionProps) {
  return (
    <button
      type="button"
      className={`nav-list-item ${isSelected ? 'is-selected' : ''}`}
      onClick={onClick}
    >
      <span>{label}</span>
      <span className="nav-list-arrow">→</span>
    </button>
  );
}
