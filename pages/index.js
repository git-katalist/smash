import Head from 'next/head'
import Image from 'next/image'

import {Hero, Chicken, Beef, Seafood} from '../components/index'

export default function Home() {
  return (
		<>
			<Hero />
			<Chicken />
			<Beef />
			<Seafood />
		</>
  )
}
