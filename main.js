import Fastify from "fastify";

const fastifyApp = Fastify({
	logger: true,
});

fastifyApp.get("/", (req, reply) => {
	reply.send("Hello World!");
});

const address = await fastifyApp.listen({
	host: "0.0.0.0",
	port: process.env.PORT || "8000",
});
