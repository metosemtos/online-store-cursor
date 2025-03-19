import ProductCard from './components/ProductCard'
import CategoryMenu from './components/CategoryMenu'
import Advertisement from './components/Advertisement'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <CategoryMenu />
      <Advertisement />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ProductCard />
      </div>
    </main>
  )
}