import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { profileNavData } from 'constants/profileNavData';
import * as S from './ProfileNav.styles';
import { Button } from 'components/common/buttons/Button/Button';

interface ProfileNavProps {
  menu: string;
  setCurrentMenu: (menu: string) => void;
}

export const ProfileNav: React.FC<ProfileNavProps> = ({ menu, setCurrentMenu }) => {
  const { t } = useTranslation();

  const onClickBtn = useCallback(
    (href) => () => {
      setCurrentMenu(href);
    },
    [setCurrentMenu],
  );

  return (
    <S.Wrapper>
      {profileNavData.map((item) => (
        <S.Btn
          key={item.id}
          icon={<item.Icon />}
          type="text"
          color={item.color}
          onClick={onClickBtn(item.href)}
          isActive={item.href === menu}
        >
          {t(item.name)}
        </S.Btn>
      ))}
      <Button type="primary">test</Button>
      <Button type="ghost">test</Button>
      <Button type="link">test</Button>
      <Button type="default">test</Button>
    </S.Wrapper>
  );
};
