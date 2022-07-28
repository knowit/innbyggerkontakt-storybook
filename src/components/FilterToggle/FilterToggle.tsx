import Check from '../../images/Check';
import './FilterToggle.scss';

interface FilterToggleProps {
  label: string;
  toggled?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

export const FilterToggle: React.FC<FilterToggleProps> = ({ label, toggled = false, disabled, onClick }) => {
  return (
    <button className={`filterToggle ${toggled && 'toggled'} ${disabled && 'disabled'}`} onClick={onClick}>
      {<Check className={`check ${!toggled ? 'hidden' : ''}`} />}
      {label}
    </button>
  );
};
