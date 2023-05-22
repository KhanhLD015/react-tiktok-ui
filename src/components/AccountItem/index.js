import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/3b3e439246feb06ca3f540e8ad49ec22~c5_100x100.jpeg?x-expires=1684911600&x-signature=4KntRWQQYOxlnmRAphVzjiePrXk%3D"
        alt="xiaochaomengggggg"
      ></img>
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>xiaochaomengggggg</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <span className={cx('username')}>@xiaochaomengggggg</span>
      </div>
    </div>
  );
}

export default AccountItem;
