import Head from 'next/head'
import Card from '../components/common/Card'
import Button from '../components/common/Button'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ALX Listing App</title>
      </Head>

      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Welcome to ALX Listing App</h1>
        <p className="text-gray-700 mb-6">Your Airbnb-style property listings start here.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            title="Cozy Apartment"
            description="2 Bed, 1 Bath in downtown area."
            imageUrl="/assets/sample-property.jpg"
          />
          <Card
            title="Luxury Villa"
            description="Spacious villa with pool and sea view."
            imageUrl="/assets/sample-property.jpg"
          />
          <Card
            title="Modern Studio"
            description="Perfect for solo travelers and short stays."
            imageUrl="/assets/sample-property.jpg"
          />
        </div>

        <div className="mt-6">
          <Button label="Explore More" onClick={() => alert('Explore listings coming soon!')} />
        </div>
      </main>
    </div>
  )
}
