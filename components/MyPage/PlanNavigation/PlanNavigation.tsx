import * as s from './PlanNavigation.styled'

import { Menu as MenuType } from 'types/MyPage'

import Menu from './Menu'

export default function Navigation() {
  const menuList: MenuType[] = [
    {
      label: '만든 여행지',
      path: ''
    },
    {
      label: '공유한 여행지',
      path: ''
    },
    {
      label: '초대된 여행지',
      path: ''
    },
    {
      label: '좋아요한 여행지',
      path: ''
    }
  ]

  return (
    <s.Container>
      <s.Navigation>
        {menuList.map((menu) => (
          <Menu key={menu.label} {...menu} />
        ))}
      </s.Navigation>
    </s.Container>
  )
}
