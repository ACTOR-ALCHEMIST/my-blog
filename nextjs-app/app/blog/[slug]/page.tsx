import { getPostBySlug } from '@/lib/blog'
import { notFound } from 'next/navigation'
import PageBuilder from '@/app/components/PageBuilder'
import PageOnboarding from '@/app/components/PageOnboarding'

type Props = {
  params: {
    slug: string
  }
}

export default async function BlogPost({ params }: Props) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return (
      <div className="py-40">
        <PageOnboarding />
      </div>
    )
  }

  return (
    <div className="my-12 lg:my-24">
      <PageBuilder page={post} />
    </div>
  )
} 