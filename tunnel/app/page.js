import Image from 'next/image'
import Header from './components/Header/page'
import HomeScreen from './components/HomeScreen/page'

export default function Home() {
  return (
    <main className="w-full h-screen">
      <Header/>
      <HomeScreen/>
    </main>
  )
}
