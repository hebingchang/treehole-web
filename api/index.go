package handler

import (
	"net/http"
	"net/http/httputil"
	"net/url"
	"os"
)

var (
	proxy *httputil.ReverseProxy
)

func init() {
	proxyUrl, _ := url.Parse(os.Getenv("PROXY_URL"))
	proxy = httputil.NewSingleHostReverseProxy(proxyUrl)
}

func Handler(w http.ResponseWriter, r *http.Request) {
	proxy.ServeHTTP(w, r)
}
