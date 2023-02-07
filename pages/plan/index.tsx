import { GetServerSideProps } from 'next'

import { routes } from '@shared/libraries'

export default function List() {
  return null
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: routes.plan.guide.path
    },
    props: {}
  }
}
