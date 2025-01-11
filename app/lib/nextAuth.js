import { signIn } from "next-auth/react";
import GoogleProvider from "next-auth/providers/google";
import { connectDB } from "@utils/database";
import User from "@models/user";

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    session: {
        strategy: "jwt",
        maxAge: 1 * 24 * 60 * 60,
    },
    pages: {
        signIn: "/app/(pages)/login/",
    },
    // callbacks: {
    //     async signIn({ profile }) {
    //         try {
    //             await connectDB();

    //             let user = await User.findOne({ email: profile.email });
    //             if (!user) {
    //                 user = await User.create({
    //                     email: profile.email,
    //                     username: profile.name.replace(/\s+/g, "").toLowerCase(),
    //                     image: profile.picture,
    //                 });
    //             }

    //             return true;
    //         } catch (error) {
    //             console.error("Error during sign-in:", error.message);
    //             return false;
    //         }
    //     },

    //     async session({ session, token }) {
    //         if (token?.sub) {
    //             session.user.id = token.sub;
    //         }
    //         return session;
    //     },

    //     async jwt({ token, user }) {
    //         if (user) {
    //             token.sub = user.id;
    //         }
    //         return token;
    //     },
    // },

};
