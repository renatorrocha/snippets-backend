import jwt from "@elysiajs/jwt";
import Elysia from "elysia";

export const authRoutes = new Elysia({
    detail: {
        tags: ["auth"],
    },
})
    .use(
        jwt({
            name: "jwt",
            secret: Bun.env.JWT_SECRET!,
        })
    )
    .get("/sign/:name", async ({ jwt, cookie: { auth }, params }) => {
        auth.set({
            value: await jwt.sign(params),
            httpOnly: true,
            maxAge: 7 * 86400, // 1 week
            path: "/profile",
        });

        return `Sign in as ${auth.value}`;
    })
    .get("/profile", async ({ jwt, set, cookie: { auth } }) => {
        const profile = await jwt.verify(auth.value);
        console.log(profile);
        if (!profile) {
            set.status = 401;
            return "Unauthorized";
        }

        return `Hello ${profile.name}`;
    });
