import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return ( 
        <div className={cx('account-item')}>
            <img className={cx('avatar')} src='https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/1212f6150780cd4a82ab13104c7c431b~c5_100x100.jpeg?x-expires=1693576800&x-signature=f9gZXGDzr8xd3KtOXWMrQRdqv78%3D' alt='' />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>
                        CR7Siuuu
                    </strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Cristiano Ronaldo</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;