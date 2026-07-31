package main

import (
	"backend/internal/dev"
	"log"
	"log/slog"
	"net/http"
	"net/http/httputil"
	"net/url"
)

func mustProxy(port string) *httputil.ReverseProxy {
	// HMR STUFF

	originalUrl := "http://localhost:" + port
	slog.Debug("Setting up proxy: " + originalUrl)

	target, err := url.Parse(originalUrl)
	if err != nil {
		log.Fatal(err)
	}

	proxy := httputil.NewSingleHostReverseProxy(target)

	// IMPORTANT: preserve the original Host header for Vite
	originalDirector := proxy.Director
	proxy.Director = func(req *http.Request) {
		// req.URL.Scheme = target.Scheme
		// req.URL.Host = target.Host
		originalDirector(req)
		req.Host = target.Host
	}

	// // enable websocket reverse proxying too
	// proxy.Transport = &http.Transport{
	// 	Proxy:             http.ProxyFromEnvironment,
	// 	DialContext:       (&net.Dialer{}).DialContext,
	// 	ForceAttemptHTTP2: false, // crucial for ws to work reliably
	// }

	return proxy
}

func loggingMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		dev.Trace("", "method", r.Method, "url", r.URL.Path)
		next.ServeHTTP(w, r) // call the next handler
	})
}

func main() {
	dev.Config()

	vite := mustProxy(dev.GetPortEnv("PORT_VITE"))
	backend := mustProxy(dev.GetPortEnv("PORT_GO_DEV"))

	mux := http.NewServeMux()

	// backend API
	// fiberHandler := adaptor.FiberApp(app)
	// mux.Handle("/api/", fiberHandler)
	mux.Handle("/api/", backend)

	// everything else → Vite
	mux.Handle("/", vite)

	port := dev.GetPortEnv("VITE_GO_PORT")

	slog.Info("attempting to start dev proxy on http://localhost:" + port)
	log.Fatal(http.ListenAndServe(":"+port, loggingMiddleware(mux)))
}
