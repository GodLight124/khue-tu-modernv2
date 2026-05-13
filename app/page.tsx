import React from 'react';
import Link from 'next/link';
import { client } from '@/sanity/lib/client'; 

export const revalidate = 0;

export default async function HomePage() {
  // Lấy Tin tức
  const posts = await client.fetch(`*[_type == "post"] | order(publishedAt desc)[0...4] {
    _id, title, publishedAt, excerpt, "imageUrl": mainImage.asset->url
  }`);

  // Lấy Sản phẩm thật từ Sanity
  const products = await client.fetch(`*[_type == "product"] | order(_createdAt desc) {
    _id, name, price, tag, "slug": slug.current, "imageUrl": image.asset->url
  }`);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <nav className="border-b sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">MODERN PRINT</div>
          <div className="hidden md:flex gap-8 font-medium text-slate-600">
            <Link href="/" className="hover:text-blue-600">Trang chủ</Link>
            <Link href="#" className="hover:text-blue-600">Máy in</Link>
            <Link href="#" className="hover:text-blue-600">Vật tư</Link>
          </div>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold">Liên hệ</button>
        </div>
      </nav>

      {/* Hero Section giữ nguyên... */}

      <section className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">Sản phẩm nổi bật</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p: any) => (
            <div key={p._id} className="group border border-slate-100 p-5 rounded-2xl hover:shadow-2xl transition-all">
              <div className="bg-slate-50 rounded-xl h-48 mb-4 overflow-hidden">
                <img src={p.imageUrl} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-[10px] font-bold uppercase text-blue-500 bg-blue-50 px-2 py-1 rounded">{p.tag}</span>
              <h3 className="font-bold text-lg mt-3 group-hover:text-blue-600">{p.name}</h3>
              <p className="text-blue-600 font-black text-xl mt-2">{p.price}</p>
              {/* Chuyển hướng đến trang chi tiết dùng slug */}
              <Link href={`/products/${p.slug}`} className="block text-center w-full mt-5 bg-slate-100 py-3 rounded-lg font-bold group-hover:bg-blue-600 group-hover:text-white transition-all">
                Xem chi tiết
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Phần Tin tức giữ nguyên... */}
    </div>
  );
}