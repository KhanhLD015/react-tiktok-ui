import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
  const [SearchResult, setSearchResult] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResult([1, 2, 3]);
    }, 0);
  }, []);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="tiktok-logo" />

        <div className={cx('search')}>
          <Tippy
            interactive={true}
            visible={SearchResult.length > 0}
            render={(attrs) => (
              <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                <PopperWrapper>Result</PopperWrapper>
              </div>
            )}
          >
            <input type="text" placeholder="Search account and video" spellCheck={false} />
          </Tippy>

          <button className={cx('clear-btn')}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
          {/* Loading */}
          <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

          <button className={cx('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

        {/* action */}
        <div className={cx('action')}></div>
      </div>
    </header>
  );
}

export default Header;
