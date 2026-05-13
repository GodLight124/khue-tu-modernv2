import React from 'react';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
// Nhập bộ phận lướt vừa tạo vào
import HeroSlider from './HeroSlider';

export const revalidate = 0;

export default async function HomePage() {
  // Lấy danh sách Banner
  const homeData = await client.fetch(`*[_type == "homeSettings"][0]{
    slides[]{
      heroTitle,
      heroSubtitle,
      "imageUrl": heroImage.asset->url
    }
  }`);

  const products = await client.fetch(`*[_type == "product"] | order(_createdAt desc) {
    _id, name, price, tag, "slug": slug.current, "imageUrl": image.asset->url
  }`);

  const posts = await client.fetch(`*[_type == "post"] | order(publishedAt desc)[0...4] {
    _id, title, publishedAt, excerpt, "imageUrl": mainImage.asset->url
  }`);

  // Đảm bảo không bị lỗi nếu chưa nhập dữ liệu
  const slides = homeData?.slides || [];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <nav className="border-b sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">MODERN PRINT</div>
          <div className="hidden md:flex gap-8 font-medium text-slate-600">
            <Link href="/" className="hover:text-blue-600 transition">Trang chủ</Link>
            <Link href="#" className="hover:text-blue-600 transition">Máy in</Link>
            <Link href="#" className="hover:text-blue-600 transition">Vật tư</Link>
          </div>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700">Liên hệ</button>
        </div>
      </nav>

      {/* BANNER ĐƯỢC THAY THẾ BẰNG BỘ PHẬN LƯỚT */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <HeroSlider slides={slides} />
        </div>
      </section>

      {/* SẢN PHẨM */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">Sản phẩm nổi bật</h2>
        {products.length === 0 ? (
          <div className="text-center text-slate-500 py-10 bg-slate-50 rounded-2xl border border-dashed">
            Chưa có sản phẩm nào. Hãy vào /studio để đăng nhé!
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((p: any) => (
              <div key={p._id} className="group border border-slate-100 p-5 rounded-2xl hover:shadow-2xl transition-all flex flex-col">
                <div className="bg-slate-50 rounded-xl h-48 mb-4 overflow-hidden">
                  <img src={p.imageUrl || "https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=400"} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
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
        )}
      </section>

      {/* TIN TỨC */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold">Kiến thức In ấn</h2>
              <p className="text-slate-500 mt-2">Cập nhật công nghệ và hướng dẫn kỹ thuật mới nhất</p>
            </div>
          </div>
          
          {posts.length === 0 ? (
            <div className="text-center text-slate-500 py-10 bg-slate-50 rounded-2xl border border-dashed">
              Chưa có bài viết nào. Hãy vào /studio để đăng bài nhé!
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post: any) => (
                <div key={post._id} className="flex flex-col md:flex-row gap-6 group cursor-pointer border border-slate-100 p-4 rounded-2xl hover:shadow-xl transition-all">
                  <div className="md:w-1/3 h-40 rounded-xl overflow-hidden shrink-0 bg-slate-100">
                    <img src={post.imageUrl || "https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=400"} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-sm text-slate-400 mb-2">
                      {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('vi-VN') : 'Mới cập nhật'}
                    </p>
                    <h3 className="font-bold text-xl mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 line-clamp-2">{post.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}