import * as s from './PublicNavigation.styled'

import { useRouter } from 'next/router'

import { Text } from '@shared/components'

export default function PublicNavigation() {
  const { push } = useRouter()

  const menuList = [
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
        {menuList.map(({ label, path }) => {
          const handleRoute = () => {
            push(path)
          }

          return (
            <s.Menu key={label} onClick={handleRoute}>
              <Text size="small">{label}</Text>
              &gt;
            </s.Menu>
          )
        })}
      </s.Menus>
    </s.Container>
  )
}
