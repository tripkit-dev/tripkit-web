import { css } from '@emotion/react'
import styled from '@emotion/styled'
import type { NextPage } from 'next'
import Head from 'next/head'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Container>
          <h1
            className={styles.title}
            css={css`
              background-color: green;
            `}
          >
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.tsx</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </div>
        </Container>
      </main>
    </div>
  )
}

export default Home

const Container = styled.div`
  background-color: #eaeaea !important;
`
