import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const buttons_info = [
  { label: 'トップページ', icon: <HomeIcon />, link_to: '/' },
  { label: 'プロフィール', icon: <AccountCircleIcon />, link_to: '/profile' },
  { label: 'サインアウト', icon: <ExitToAppIcon />, link_to: '/signin' },
];
