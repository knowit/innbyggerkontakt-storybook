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
    <button className={`filterToggle ${toggled && 'toggled'} ${disabled && 'disabled'}`} onClick={onClick} type={type}>
      {<Check className={`check ${!toggled ? 'hidden' : ''} ${disabled && 'disabled'}`} />}
      {label}
    </button>
  );
};
