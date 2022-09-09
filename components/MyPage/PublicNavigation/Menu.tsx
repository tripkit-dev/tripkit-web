import * as s from './Menu.styled'

import { useRouter } from 'next/router'

import { Size as TextSize } from '@enums/Text'

import { Menu as MenuType } from 'types/MyPage'

import { Text } from '@components/common'

const Menu = ({ label, path }: MenuType) => {
  const { push } = useRouter()

  const handleRoute = () => {
    push(path)
  }

  return (
    <s.Menu onClick={handleRoute}>
      <Text size={TextSize.SMALL}>{label}</Text>
      &gt;
    </s.Menu>
  )
}

export default Menu
