package handler

import (
	"net/http"
	"net/http/httputil"
	"net/url"
	"os"
)

var (
	proxyUrl *url.URL
	proxy    *httputil.ReverseProxy
)

func init() {
	proxyUrl, _ := url.Parse(os.Getenv("PROXY_URL"))
	proxy = httputil.NewSingleHostReverseProxy(proxyUrl)
}

func Handler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	w.Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")

	r.URL.Host = proxyUrl.Host
	r.URL.Scheme = proxyUrl.Scheme
	r.Header.Set("X-Forwarded-Host", r.Header.Get("Host"))
	r.Host = proxyUrl.Host

	w.Header().Set("Access-Control-Allow-Origin", "*")
	proxy.ServeHTTP(w, r)
}
