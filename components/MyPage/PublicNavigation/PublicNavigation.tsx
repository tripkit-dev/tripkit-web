import * as s from './PublicNavigation.styled'

import { Menu as MenuType } from 'types/MyPage'

import Menu from './Menu'

export default function PublicNavigation() {
  const menuList: MenuType[] = [
    {
      label: '공지사항',
      path: ''
    },
    {
      label: '이벤트',
      path: ''
    },
    {
      label: '장소알리기',
      path: ''
    },
    {
      label: '로그아웃',
      path: ''
    }
  ]

  return (
    <s.Container>
      <s.Menus>
        {menuList.map((menu) => (
          <Menu key={menu.label} {...menu} />
        ))}
      </s.Menus>
    </s.Container>
  )
}
