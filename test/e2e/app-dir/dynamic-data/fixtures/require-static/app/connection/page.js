import Server, { connection } from 'next/server'

console.log('Server', Server)

export const dynamic = 'error'

export default async function Page({ searchParams }) {
  await connection()
  return (
    <div>
      <section>
        This example uses `connection()` but is configured with `dynamic =
        'error'` which should cause the page to fail to build
      </section>
    </div>
  )
}