import * as s from './Menu.styled'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { Size as TextSize } from '@enums/Text'

import { Menu as MenuType } from 'types/MyPage'

import { Img, Text } from '@components/common'

const Menu = ({ label, path }: MenuType) => {
  const { pathname } = useRouter()

  const isActive = path === pathname

  return (
    <Link href={path}>
      <s.Menu active={isActive}>
        <Text size={TextSize.SMALL}>{label}</Text>
        <Img
          src="/images/img_profile_example.png"
          sideLength="20px"
          containerCss={s.iconStyle}
        />
      </s.Menu>
    </Link>
  )
}

export default Menu
