import { useState } from 'react';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './ShareAction.module.scss';
import { EmbedIcon, PaperPlaneIcon, ChevronDownIcon, EmailIcon, LinkRoundedIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function ShareAction({ children, offset }) {
    const [expanded, setExpanded] = useState(false);

    const SHARE_MENU = [
        {
            icon: <EmbedIcon />,
            title: 'Embed',
        },
        {
            icon: <PaperPlaneIcon />,
            title: 'Send to friends',
        },
        {
            icon: <img src={images.facebook} alt="" />,
            title: 'Share to Facebook',
        },
        {
            icon: <img src={images.whatsapp} alt="" />,
            title: 'Share to WhatsApp',
        },
        {
            icon: <LinkRoundedIcon />,
            title: 'Copy link',
        },
    ];

    const EXPANDED_SHARE_MENU = [
        ...SHARE_MENU,
        {
            icon: <img src={images.twitter} alt="" />,
            title: 'Share to Twitter',
        },
        {
            icon: <img src={images.linkedin} alt="" />,
            title: 'Share to LinkedIn',
        },
        {
            icon: <img src={images.telegram} alt="" />,
            title: 'Share to Telegram',
        },
        {
            icon: <EmailIcon />,
            title: 'Share to Email',
        },
        {
            icon: <img src={images.line} alt="" />,
            title: 'Share to LINE',
        },
        {
            icon: <img src={images.pinterest} alt="" />,
            title: 'Share to Pinterest',
        },
    ];

    return (
        <HeadlessTippy
            interactive
            hideOnClick="false"
            placement="top"
            offset={offset}
            delay={[200, 700]}
            zIndex="99"
            render={(attrs) => (
                <div tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('share-tab')}>
                        <div className={cx('share-wrapper')}>
                            {expanded
                                ? EXPANDED_SHARE_MENU.map((item, index) => {
                                      return (
                                          <div key={index} className={cx('share-item')}>
                                              {item.icon} {item.title}
                                          </div>
                                      );
                                  })
                                : SHARE_MENU.map((item, index) => {
                                      return (
                                          <div key={index} className={cx('share-item')}>
                                              {item.icon} {item.title}
                                          </div>
                                      );
                                  })}
                            {!expanded && (
                                <div className={cx('more-btn')} onClick={() => setExpanded(true)}>
                                    <ChevronDownIcon />
                                </div>
                            )}
                        </div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setExpanded(false)}
        >
            {children}
        </HeadlessTippy>
    );
}

export default ShareAction;
