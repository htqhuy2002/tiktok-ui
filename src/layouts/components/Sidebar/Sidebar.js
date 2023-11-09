import { useState, useEffect } from 'react';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import config from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import Menu, { MenuItem } from './Menu';
import SuggestedAccounts from '../SuggestedAccounts/SuggestedAccounts';
import * as userService from '~/services/userService';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Sidebar() {
    const currentUser = false;
    const [suggestedUser, setSuggestedUser] = useState([]);
    const currentYear = new Date().getFullYear();
    const [seeAll, setSeeAll] = useState(false);

    useEffect(() => {
        const fetchAPI = async () => {
            if (!seeAll) {
                const result = await userService.getSuggested(1, 5);
                setSuggestedUser(result);
            } else {
                const result = await userService.getSuggested(1, 16);
                setSuggestedUser(result);
            }
        };

        fetchAPI();
    }, [seeAll]);

    return (
        <aside>
            <aside className={cx('wrapper')}>
                <Menu>
                    <MenuItem
                        title="For You"
                        to={config.routes.home}
                        icon={<HomeIcon />}
                        activeIcon={<HomeActiveIcon />}
                    />
                    <MenuItem
                        title="Following"
                        to={config.routes.following}
                        icon={<UserGroupIcon />}
                        activeIcon={<UserGroupActiveIcon />}
                    />
                    <MenuItem
                        title="LIVE"
                        to={config.routes.live}
                        icon={<LiveIcon />}
                        activeIcon={<LiveActiveIcon />}
                    />
                </Menu>
                {!currentUser && (
                    <div className={cx('login')}>
                        <div className={cx('detail')}>
                            <p>Log in to follow creators, like videos, and view comments.</p>
                            <Button outline>Log in</Button>
                        </div>
                    </div>
                )}

                <SuggestedAccounts
                    seeAll={seeAll}
                    setSeeAll={setSeeAll}
                    label="Suggested accounts"
                    data={suggestedUser}
                />
                {currentUser && (
                    <SuggestedAccounts
                        seeAll={seeAll}
                        setSeeAll={setSeeAll}
                        label="Following accounts"
                        data={suggestedUser}
                    />
                )}
                <div className={cx('footer')}>
                    <div className={cx('links-1')}>
                        <a href="https://www.tiktok.com/about?lang=en" target="blank">
                            About
                        </a>
                        <a href="https://www.tiktok.com/browse" target="blank">
                            TikTok Browse
                        </a>
                        <a href="https://newsroom.tiktok.com/" target="blank">
                            Newsroom
                        </a>
                        <a href="https://www.tiktok.com/about/contact?lang=en" target="blank">
                            Contact
                        </a>
                        <a href="https://careers.tiktok.com" target="blank">
                            Careers
                        </a>
                        <a href="https://www.bytedance.com/" target="blank">
                            ByteDance
                        </a>
                    </div>

                    <div className={cx('links-2')}>
                        <a href="https://www.tiktok.com/forgood" target="blank">
                            TikTok for Good
                        </a>
                        <a
                            href="https://www.tiktok.com/business/?attr_medium=tt_official_site_guidance&amp;attr_source=tt_official_site&amp;refer=tiktok_web"
                            target="blank"
                        >
                            Advertise
                        </a>
                        <a href="https://developers.tiktok.com/?refer=tiktok_web" target="blank">
                            Developers
                        </a>
                        <a href="https://www.tiktok.com/transparency?lang=en" target="blank">
                            Transparency
                        </a>
                        <a href="https://www.tiktok.com/tiktok-rewards/en" target="blank">
                            TikTok Rewards
                        </a>
                    </div>

                    <div className={cx('links-3')}>
                        <a href="https://support.tiktok.com/en" target="blank">
                            Help
                        </a>
                        <a href="https://www.tiktok.com/safety?lang=en" target="blank">
                            Safety
                        </a>
                        <a href="https://www.tiktok.com/legal/terms-of-service?lang=en" target="blank">
                            Terms
                        </a>
                        <a href="https://www.tiktok.com/legal/privacy-policy-row?lang=en" target="blank">
                            Privacy
                        </a>
                        <a href="https://www.tiktok.com/creators/creator-portal/en-us/" target="blank">
                            Creator Portal
                        </a>
                        <a href="https://www.tiktok.com/community-guidelines?lang=en" target="blank">
                            Community Guidelines
                        </a>
                    </div>

                    <span className={cx('copyright')}>
                        <FontAwesomeIcon icon={faCopyright} /> <p>{currentYear} TikTok - Made by htqhuy1762</p>
                    </span>
                </div>
            </aside>
        </aside>
    );
}

export default Sidebar;
