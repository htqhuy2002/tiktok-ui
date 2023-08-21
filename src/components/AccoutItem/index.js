import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return <div className={cx('wrapper')}>
        <Image className={cx('avatar')} src='https://toigingiuvedep.vn/wp-content/uploads/2023/03/hinh-do-mixi-cat-toc-mai-ngo.jpg' alt='Mixigaming' />
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
