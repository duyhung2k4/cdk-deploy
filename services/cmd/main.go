package main

import "app/router"

func main() {
	// Initialize the application router
	app := router.AppRouter()

	// Start the server on port 8080
	if err := app.Run(":8080"); err != nil {
		panic(err)
	}
}
