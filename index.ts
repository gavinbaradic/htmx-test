Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url)
    return new Response(
      Bun.file(import.meta.dir + url.pathname + '/index.html'),
    )
  },
})
