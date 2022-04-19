import type { VercelRequest, VercelResponse, VercelApiHandler } from "@vercel/node"

const { createProxyMiddleware } = require("http-proxy-middleware")

const apiProxy = createProxyMiddleware({
  target: process.env.PROXY_URL,
  changeOrigin: true,
  pathRewrite: {
    "^/api": ""
  }
})

const allowCors = (fn: VercelApiHandler) => async (req: VercelRequest, res: VercelResponse) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT")
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  )
  if (req.method === "OPTIONS") {
    res.status(200).end()
    return
  }
  fn(req, res)
}

const handler = (req: VercelRequest, res: VercelResponse) => {
  return apiProxy(req, res)
}

module.exports = allowCors(handler)
