import Check from '../../images/Check';
import './FilterToggle.scss';

interface FilterToggleProps {
  label: string;
  toggled?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

export const FilterToggle: React.FC<FilterToggleProps> = ({ label, toggled = false, disabled, onClick }) => {
  function getStyles() {
    const classNames = ['filterToggle'];

    if (toggled) {
      classNames.push('toggled');
    } else if (disabled) {
      classNames.push('disabled');
    }

    return classNames.join(' ');
  }

  return (
    <button className={getStyles()} onClick={onClick}>
      {toggled && <Check className="check" />}
      {label}
    </button>
  );
};
