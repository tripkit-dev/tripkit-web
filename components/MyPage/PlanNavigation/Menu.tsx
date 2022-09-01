import * as s from './Menu.styled'

import { useRouter } from 'next/router'

import { Menu as MenuType } from 'types/MyPage'

import { Img } from '@components/common'

const Menu = ({ label, path }: MenuType) => {
  const { push } = useRouter()

  const handleRoute = () => {
    push(path)
  }

  return (
    <s.Menu onClick={handleRoute}>
      {label}
      <Img
        src="/images/img_profile_example.png"
        sideLength="20px"
        containerCss={s.iconStyle}
      />
    </s.Menu>
  )
}

export default Menu
