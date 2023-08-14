import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return <div className={cx('wrapper')}>
        <img className={cx('avatar')} src='https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/a187c4dfa896a5ea449a4c5d3927b20a~c5_100x100.jpeg?x-expires=1692064800&x-signature=xuRAaEcJGCPq0xTxx4LKMIh4T0w%3D' alt='Hoa' />
        <div className={cx('info')}>
            <h4 className={cx('name')}>
                <span>Mixigaming</span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </h4>
            <span className={cx('username')}>
                Độ Phùng
            </span>

        </div>
    </div>;
}

export default AccountItem;
