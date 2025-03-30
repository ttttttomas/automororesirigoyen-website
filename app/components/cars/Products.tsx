import Card from '../Card'

export default function Products({products}) {
  return (
    <div className='grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] place-content-center place-items-center gap-20 mx-20'>
      {products.map(product => (
        <Card key={product.id}/>
      ))}
    </div>
  )
}
