import type { VercelRequest, VercelResponse } from "@vercel/node"

const { createProxyMiddleware } = require("http-proxy-middleware")

const apiProxy = createProxyMiddleware({
  target: process.env.PROXY_URL,
  changeOrigin: true,
  pathRewrite: {
    "^/api": ""
  }
})

export default function(req: VercelRequest, res: VercelResponse) {
  return apiProxy(req, res)
}
