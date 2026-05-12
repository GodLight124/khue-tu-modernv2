import React from 'react';
import Link from 'next/link';

export default function ProductDetail({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <nav className="p-6 border-b">
        <Link href="/" className="text-blue-600 hover:underline font-semibold">
          ← Quay lại trang chủ
        </Link>
      </nav>
      
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-slate-100 rounded-3xl h-[400px] flex items-center justify-center text-slate-400 text-xl font-bold border-4 border-dashed border-slate-300">
            [Ảnh thiết bị ID: {params.id}]
          </div>
          <div>
            <h1 className="text-4xl font-bold">Máy in/Thiết bị Mã vạch (Mẫu)</h1>
            <p className="text-2xl text-blue-600 font-bold mt-4">Giá: Liên hệ</p>
            
            <div className="mt-8 space-y-4">
              <div className="flex border-b py-2">
                <span className="w-40 font-semibold text-slate-500">Mã sản phẩm:</span>
                <span className="text-blue-600 font-bold">SP-{params.id}</span>
              </div>
              <div className="flex border-b py-2">
                <span className="w-40 font-semibold text-slate-500">Thương hiệu:</span>
                <span>Zebra / Honeywell</span>
              </div>
              <div className="flex border-b py-2">
                <span className="w-40 font-semibold text-slate-500">Bảo hành:</span>
                <span>12 tháng chính hãng</span>
              </div>
              <div className="flex border-b py-2">
                <span className="w-40 font-semibold text-slate-500">Tình trạng:</span>
                <span className="text-green-600 font-semibold">Còn hàng</span>
              </div>
            </div>
            
            <button className="mt-10 w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition">
              Liên hệ đặt hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}