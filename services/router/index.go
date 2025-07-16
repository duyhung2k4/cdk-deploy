package router

import "github.com/gin-gonic/gin"

func AppRouter() *gin.Engine {
	router := gin.Default()

	router.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Welcome to the App!",
		})
	})

	router.GET("/v1/health", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"status": "healthy v1",
		})
	})

	router.GET("/v2/health", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"status": "healthy v2",
		})
	})

	return router
}
