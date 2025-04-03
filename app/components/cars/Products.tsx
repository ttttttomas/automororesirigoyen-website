import Card from '../Card'

export default function Products({products}) {
  return (
    <>
      {products < 1 ? 
        <p className='text-xl font-bold text-center'>No hay productos que coincidan con los criterios de búsqueda.</p> : 
    <div className='grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] my-5 md:my-0 mx-auto place-content-center place-items-center gap-20 md:mx-20'>
        {products.map(product => (
        <Card key={product.id} product={product.id} />
      ))}
    </div>
      } 
      </>
  )
}
