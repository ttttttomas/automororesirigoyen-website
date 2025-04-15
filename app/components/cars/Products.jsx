'use client'
import Card from '../Card'
import Loading from '../Loading'  

export default function Products({products}) {
  return (
    <>
      {products < 1 ? 
        <p className='font-bold mx-auto my-auto text-2xl'>No tenemos autos con esas caracteristicas.</p> : 
    <div className='flex flex-wrap md:justify-start justify-center my-5 md:my-0 md:items-start mx-auto w-full gap-10 md:mx-20'>
        {products.map(product =>  (
        <Card key={product.ID} car={product} />
      ))}
    </div>
      } 
      </>
  )
}
// grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] 
