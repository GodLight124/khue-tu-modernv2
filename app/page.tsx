import React from 'react';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: string;
  tag: string;
  image: string;
}

interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

export default function HomePage() {
  const products: Product[] = [
    { id: 1, name: "Máy in mã vạch Zebra ZT411", price: "18.500.000đ", tag: "Bán chạy", image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=400" },
    { id: 2, name: "Mực in Ribbon Wax/Resin", price: "280.000đ", tag: "Vật tư", image: "https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?q=80&w=400" },
    { id: 3, name: "Máy quét Honeywell 1950g", price: "4.200.000đ", tag: "Mới", image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=400" },
    { id: 4, name: "Giấy in tem nhãn nhiệt", price: "75.000đ", tag: "Giá tốt", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=400" },
  ];

  const newsList: BlogPost[] = [
    {
      id: 1,
      title: "Cách chọn máy in mã vạch phù hợp cho kho hàng lớn",
      date: "12/05/2026",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=400",
      excerpt: "Việc lựa chọn đúng dòng máy in công nghiệp giúp tiết kiệm 30% chi phí vận hành..."
    },
    {
      id: 2,
      title: "Hướng dẫn vệ sinh đầu in máy in nhiệt đúng cách",
      date: "10/05/2026",
      image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=400",
      excerpt: "Đầu in là bộ phận đắt tiền nhất, hãy học cách bảo vệ nó trước khi quá muộn..."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <nav className="border-b sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">MODERN PRINT</div>
          <div className="hidden md:flex gap-8 font-medium text-slate-600">
            <Link href="#" className="hover:text-blue-600 transition">Máy in</Link>
            <Link href="#" className="hover:text-blue-600 transition">Vật tư</Link>
            <Link href="#" className="hover:text-blue-600 transition">Hỗ trợ</Link>
          </div>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700">Liên hệ ngay</button>
        </div>
      </nav>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-extrabold mt-4 leading-tight">Nâng tầm <span className="text-blue-600">Công nghệ Mã vạch</span></h1>
            <p className="mt-6 text-lg text-slate-600">Thiết bị chính hãng, giải pháp tối ưu cho kho bãi và bán lẻ.</p>
          </div>
          <div className="rounded-3xl h-[300px] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1563315629-c88d89318f61?q=80&w=800" className="w-full h-full object-cover" alt="Hero" />
          </div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">Sản phẩm nổi bật</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p) => (
            <div key={p.id} className="group border border-slate-100 p-5 rounded-2xl hover:shadow-2xl transition-all flex flex-col">
              <div className="bg-slate-50 rounded-xl h-48 mb-4 overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <span className="self-start text-[10px] font-bold uppercase tracking-wider text-blue-500 bg-blue-50 px-2 py-1 rounded">{p.tag}</span>
              <h3 className="font-bold text-lg mt-3 group-hover:text-blue-600 transition-colors flex-grow">{p.name}</h3>
              <p className="text-blue-600 font-black text-xl mt-2">{p.price}</p>
              
              {/* Đây chính là phần Link chuyển trang */}
              <Link 
                href={`/products/${p.id}`} 
                className="text-center w-full mt-5 bg-slate-100 text-slate-900 py-3 rounded-lg font-bold group-hover:bg-blue-600 group-hover:text-white transition-all"
              >
                Chi tiết
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold">Kiến thức In ấn</h2>
              <p className="text-slate-500 mt-2">Cập nhật công nghệ và hướng dẫn kỹ thuật mới nhất</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsList.map((post) => (
              <div key={post.id} className="flex flex-col md:flex-row gap-6 group cursor-pointer border border-slate-100 p-4 rounded-2xl hover:shadow-xl transition-all">
                <div className="md:w-1/3 h-40 rounded-xl overflow-hidden shrink-0">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-sm text-slate-400 mb-2">{post.date}</p>
                  <h3 className="font-bold text-xl mb-3 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                  <p className="text-slate-600 line-clamp-2">{post.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}