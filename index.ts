const defaultFile = 'index.html'
const isFile = (pathname: string) => pathname.match(/\.[^\/]+$/)

Bun.serve({
  port: 3000,
  fetch(req) {
    const { pathname } = new URL(req.url)
    const filePath = isFile(pathname)
      ? pathname
      : pathname.endsWith('/')
      ? `${pathname}${defaultFile}`
      : `${pathname}/${defaultFile}`

    return new Response(Bun.file(`${import.meta.dir}/src/${filePath}`))
  },
})
