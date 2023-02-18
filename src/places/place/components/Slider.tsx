import 'react-responsive-carousel/lib/styles/carousel.min.css'

import * as s from './Slider.styled'

import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'

import { GradationFilm, LinearFilm, Text } from '@shared/components'

export default function Slider() {
  const imgs = [
    '/images/sample/jamsil_01.png',
    '/images/sample/kangneung_01.png',
    '/images/sample/kyungju_02.png'
  ]
  return (
    <s.Slider>
      <Carousel
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        renderIndicator={(handler, isSelected) => (
          <s.Indicator onClick={handler} selected={isSelected} />
        )}
      >
        {imgs.map((img) => (
          <s.BackgroundImage key={img}>
            <Image
              src={img}
              alt="s"
              width="100%"
              height="100%"
              layout="fill"
              objectFit="cover"
            />
            <LinearFilm />
            <GradationFilm />

            <s.SummaryContainer>
              <s.Summary>
                <Text size="3xlarge">엔드 투 엔드</Text>
                <Text size="xlarge" fontWeight="500">
                  (end to end)
                </Text>
                <s.Description size="small" fontWeight="300">
                  온실 속에 들어와 있는 조경이 훌륭한 카페
                </s.Description>
              </s.Summary>
              <s.Image>
                <Image
                  src="/images/official/dog.svg"
                  width="32px"
                  height="32px"
                  alt="dog"
                />
              </s.Image>
            </s.SummaryContainer>
          </s.BackgroundImage>
        ))}
      </Carousel>
    </s.Slider>
  )
}
