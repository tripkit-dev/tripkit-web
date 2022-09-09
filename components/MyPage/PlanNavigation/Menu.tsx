import * as s from './Menu.styled'

import { useRouter } from 'next/router'

import { Size as TextSize } from '@enums/Text'

import { Menu as MenuType } from 'types/MyPage'

import { Img, Text } from '@components/common'

const Menu = ({ label, path }: MenuType) => {
  const { push, pathname } = useRouter()

  const isActive = path === pathname

  const handleRoute = () => {
    push(path)
  }

  return (
    <s.Menu onClick={handleRoute} active={isActive}>
      <Text size={TextSize.SMALL}>{label}</Text>
      <Img
        src="/images/img_profile_example.png"
        sideLength="20px"
        containerCss={s.iconStyle}
      />
    </s.Menu>
  )
}

export default Menu
