import Check from '../../images/Check';
import './FilterToggle.scss';

interface FilterToggleProps {
  label: string;
  toggled?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick: () => void;
}

export const FilterToggle: React.FC<FilterToggleProps> = ({
  label,
  toggled = false,
  disabled,
  onClick,
  type = 'button',
}) => {
  return (
    <button type={type} className={`filterToggle ${toggled && 'toggled'} ${disabled && 'disabled'}`} onClick={onClick}>
      {toggled && <Check className="check" />}
      {label}
    </button>
  );
};
