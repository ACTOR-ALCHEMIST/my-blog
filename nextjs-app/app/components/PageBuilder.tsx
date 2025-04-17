import { BlogPost } from '@/types/blog'

interface PageBuilderProps {
  page: BlogPost
}

export default function PageBuilder({ page }: PageBuilderProps) {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        {/* 作者信息 */}
        {page.author && (
          <div className="flex items-center mb-8">
            {page.author.image && (
              <img
                src={page.author.image}
                alt={page.author.name}
                className="w-12 h-12 rounded-full mr-4"
              />
            )}
            <div>
              <div className="font-medium">{page.author.name}</div>
              <div className="text-gray-500">
                {new Date(page.date).toLocaleDateString()}
              </div>
            </div>
          </div>
        )}

        {/* 封面图片 */}
        {page.coverImage && (
          <div className="mb-8">
            <img
              src={page.coverImage.url}
              alt={page.coverImage.alt}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        )}

        {/* 文章内容 */}
        <div className="prose prose-lg max-w-none">
          {page.content}
        </div>
      </div>
    </div>
  )
} 