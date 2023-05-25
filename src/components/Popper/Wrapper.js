import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function Wrapper({ children, className }) {
  return (
    <div>
      <div className={classNames(styles[('wrapper', className)])}>{children}</div>
    </div>
  );
}

export default Wrapper;
