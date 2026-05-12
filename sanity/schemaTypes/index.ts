import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Đây là khuôn mẫu cho Bài Viết (Tin Tức)
    {
      name: 'post',
      title: 'Bài Viết (Tin Tức)',
      type: 'document',
      fields: [
        {
          name: 'title',
          title: 'Tiêu đề bài viết',
          type: 'string',
        },
        {
          name: 'excerpt',
          title: 'Mô tả ngắn (Hiển thị ở trang chủ)',
          type: 'text',
        },
        {
          name: 'mainImage',
          title: 'Ảnh đại diện',
          type: 'image',
          options: {
            hotspot: true, // Cho phép cắt/chỉnh vùng trọng tâm ảnh
          },
        },
        {
          name: 'publishedAt',
          title: 'Ngày đăng',
          type: 'date',
        },
        {
          name: 'body',
          title: 'Nội dung chi tiết',
          type: 'array',
          of: [{ type: 'block' }], // Đây chính là trình soạn thảo văn bản
        },
      ],
    },
  ],
}