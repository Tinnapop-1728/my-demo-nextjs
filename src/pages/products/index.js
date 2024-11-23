import Head from "next/head"
import Image from "next/image"
import product1 from "../../../public/assets/[images]/chicken1.jpg"
import Link from "next/link";

export default function Product({product}){
    console.log('-Product-',product)
    return (<>
        <Head>
            <title>Products</title>
        </Head>
        <div style={{background : "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"}}
            className="min-h-screen justify-items-center p-5">
                <p className="text-5xl font-bold font-sans text-purple-700 mb-3">Products</p>
                <h1 className="text-center p-3">Chicken!!!</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

                {product.map((item) => (
                    <Link
                        key={item.id}
                        href={`/products/${item.id}`}
                        className="mix-blend-multiply items-center "
                        >
                        <div>
                            <Image
                            src = {item.image}
                            alt = {item.title}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-[180px] h-[230px] justify-self-center hover:scale-105"
                            />
                            <p className = 'font-xl font-bold justify-items-center'>{item.title}</p>
                            <p className="text-sm">${item.price}</p>
                        </div>
                    </Link>
                ))}

                </div>
        </div> 
    </>)
}

export async function getServerSideProps (){
    const resp = await fetch (`https://fakestoreapi.com/products`);
    const product = await resp.json();
   
    return {
        props : { product }  
    }
}