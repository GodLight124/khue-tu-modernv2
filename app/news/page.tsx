import React from 'react';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';

export const revalidate = 0;

export default async function AllNewsPage() {
  const posts = await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
    _id, title, publishedAt, excerpt, "imageUrl": mainImage.asset->url, "slug": slug.current
  }`);

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-extrabold">Kiến thức & Tin tức</h1>
          <p className="text-blue-100 mt-4">Hướng dẫn kỹ thuật và cập nhật công nghệ in ấn mới nhất</p>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post: any) => (
            <div key={post._id} className="group cursor-pointer flex flex-col">
              <div className="h-56 rounded-2xl overflow-hidden bg-slate-100 mb-6">
                <img src={post.imageUrl || "https://via.placeholder.com/600x400"} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <p className="text-sm text-slate-400 mb-3">{new Date(post.publishedAt).toLocaleDateString('vi-VN')}</p>
              <h3 className="font-bold text-xl mb-4 group-hover:text-blue-600 transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-slate-600 line-clamp-3 mb-6">{post.excerpt}</p>
              <button className="text-blue-600 font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                Đọc thêm <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
