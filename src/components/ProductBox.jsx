
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/store/ProductBox.module.css';

export default function ProductBox() {  
  return (  
    <div className={`${styles.card} bg-white p-4 rounded-lg shadow`}>  
      <Link href={`/store/product-details/${product.id}`}>  
        <Image width={300} height={150} src={product.image} alt={product.title} />  
      </Link>  
      <div className="mt-4">  
        <h3 className="text-sm min-h-[70px] font-semibold">{product.title}</h3>  
        <p className="text-gray-900 font-semibold mt-2">${product.price}</p>  
        <button className="mt-4 bg-pink-500 text-white py-2 px-4">  
          Buy Now  
        </button>  
      </div>  
    </div>  
  );  
}  