import classNames from 'classnames';
import styles from './Popper.module.scss';

function Wrapper({ children }) {
  return (
    <div>
      <div className={classNames(styles['wrapper'])}>{children}</div>
    </div>
  );
}

export default Wrapper;
