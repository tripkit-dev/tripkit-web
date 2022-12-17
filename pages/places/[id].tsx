import { useRouter } from 'next/router'

export default function Place() {
  const { query } = useRouter()

  return <div>{query.id}</div>
}

export function getServerSideProps() {}
