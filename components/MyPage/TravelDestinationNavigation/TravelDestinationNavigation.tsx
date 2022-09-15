import * as s from './TravelDestinationNavigation.styled'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { Size as TextSize } from '@enums/Text'

import { planNavigationModels } from 'models/planNavigation'

import { Img, Text } from '@components/common'

export default function Navigation() {
  const { query } = useRouter()
  const currentCategory = query.category

  return (
    <s.Container>
      <s.Navigation>
        {planNavigationModels.map(({ key, label, path }) => {
          const isActive = key === currentCategory

          return (
            <Link key={key} href={path} shallow>
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
        })}
      </s.Navigation>
    </s.Container>
  )
}
