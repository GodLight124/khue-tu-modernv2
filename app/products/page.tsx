import React from 'react';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';

export const revalidate = 0;

export default async function AllProductsPage() {
  const products = await client.fetch(`*[_type == "product"] | order(_createdAt desc) {
    _id, name, price, tag, "slug": slug.current, "imageUrl": image.asset->url
  }`);

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header trang danh mục */}
      <div className="bg-slate-50 py-16 border-b">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900">Danh mục Máy In</h1>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Khám phá các dòng máy in mã vạch, máy in đầu cốt và vật tư chính hãng chất lượng cao.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p: any) => (
            <div key={p._id} className="group border border-slate-100 p-5 rounded-2xl hover:shadow-2xl transition-all flex flex-col">
              <div className="bg-slate-50 rounded-xl h-48 mb-4 overflow-hidden">
                <img src={p.imageUrl || "https://via.placeholder.com/400"} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              </div>
              <span className="self-start text-[10px] font-bold uppercase text-blue-500 bg-blue-50 px-2 py-1 rounded">{p.tag}</span>
              <h3 className="font-bold text-lg mt-3 group-hover:text-blue-600 flex-grow">{p.name}</h3>
              <p className="text-blue-600 font-black text-xl mt-2">{p.price}</p>
              <Link href={`/products/${p.slug}`} className="block text-center w-full mt-5 bg-slate-100 text-slate-900 py-3 rounded-lg font-bold group-hover:bg-blue-600 group-hover:text-white transition-all">
                Xem chi tiết
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}