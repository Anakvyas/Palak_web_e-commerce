"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  name: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: " Single Puli",
    image: "/images/single.png",
  },
  {
    id: 2,
    name: "Chest Handle",
    image: "/images/double.png",
  },
  {
    id: 3,
    name: "Stopper",
    image: "/images/stopper.png",
  },

  {id: 4,
    name:"Double Puli",
    image:"/images/doublepuli.jpg"
  },
  // Add more here easily — just include { id, name, image }
];

const premium = [
    {
    id:1,
    name:"Door Kit",
    image:"/images/door.jpg"
  }
]

export default function Products() {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/products/${id}`);
  };

  const handlepremiumclick = (id:number) =>{
    router.push(`/premium/${id}`)
  }

  return (
    <section
      id="products"
      className="py-16 bg-black text-center text-white flex flex-col justify-center items-center"
    >
      <h3 className="text-4xl font-bold text-amber-400 mb-12">
        Our <span className="text-white ">Products</span>
      </h3>

      <div className="max-w-7xl w-full px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => handleClick(product.id)}
              className="relative bg-gray-900 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:scale-105 hover:shadow-amber-500/30 transition-transform duration-300 w-72"
            >
              {/* Image section */}
              <div className="relative w-full h-52">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-t-2xl transition-transform duration-300 group-hover:brightness-75"
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button className="bg-amber-500 hover:bg-amber-400 text-black px-5 py-2 rounded-full font-semibold">
                  View Product
                </button>
              </div>

              {/* Product name */}
              <div className="bg-[#0f172a] py-4 rounded-b-2xl text-center">
                <h4 className="text-lg font-bold text-amber-400">
                  {product.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>


      <h3 className="text-4xl font-bold text-amber-400 mb-12 mt-14">
        Premium<span className="text-white ml-3">Products</span>
      </h3>

      <div className="max-w-7xl w-full px-6">
        <div className="flex flex-row flex-wrap  justify-center items-center">
          {premium.map((product) => (
            <div
              key={product.id}
              onClick={() =>handlepremiumclick(product.id)}
              className="relative bg-gray-900 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:scale-105 hover:shadow-amber-500/30 transition-transform duration-300 w-72"
            >
              {/* Image section */}
              <div className="relative w-full h-52">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-t-2xl transition-transform duration-300 group-hover:brightness-75"
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button className="bg-amber-500 hover:bg-amber-400 text-black px-5 py-2 rounded-full font-semibold">
                  View Product
                </button>
              </div>

              {/* Product name */}
              <div className="bg-[#0f172a] py-4 rounded-b-2xl text-center">
                <h4 className="text-lg font-bold text-amber-400">
                  {product.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
