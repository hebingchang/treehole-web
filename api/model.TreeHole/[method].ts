import type { VercelRequest, VercelResponse } from "@vercel/node"

const { createProxyMiddleware } = require("http-proxy-middleware")

const apiProxy = createProxyMiddleware({
  target: process.env.PROXY_URL,
  changeOrigin: true,
  pathRewrite: {
    "^/api": ""
  }
})

export default function handler(req: VercelRequest, res: VercelResponse) {
  req.url = req.url ? req.url.split(/[?#]/)[0] : req.url
  return apiProxy(req, res)
}
