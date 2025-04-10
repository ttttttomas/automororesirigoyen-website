'use client'
import Card from '../Card'
import Loading from '../Loading'  

export default function Products({products}) {
  return (
    <>
      {products < 1 ? 
        <p className='font-bold mx-auto my-auto text-2xl'>No tenemos autos con esas caracteristicas.</p> : 
    <div className='grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] my-5 md:my-0 mx-auto place-content-center place-items-center gap-20 md:mx-20'>
        {products.map(product =>  (
        <Card key={product.ID} car={product} />
      ))}
    </div>
      } 
      </>
  )
}
