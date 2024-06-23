import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { connectToDatabase } from "./db";
import User from "@/lib/models/user.model";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // User is available during sign-in
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }) {
      // Check if session has a user, if not, return session immediately
      if (!session?.user) {
        return session;
      }

      // Ensure that there is a user and that the user has an email
      if (session?.user?.email) {
        await connectToDatabase();

        // Fetch the user from the database
        const sessionUser = await User.findOne({ email: session.user.email });

        // Assign the user ID to the session
        session.user.id = sessionUser?._id.toString() || token.id;
      }

      return session;
    },

    async signIn({ profile }) {
      try {
        await connectToDatabase();

        // Check if user already exists in the database
        const userExists = await User.findOne({ email: profile?.email });

        // If not, create a new user
        if (!userExists) {
          await User.create({
            email: profile?.email,
            username: profile?.name?.replace(" ", "").toLocaleLowerCase(),
            image: profile?.picture,
          });
        }

        return true;
      } catch (error) {
        console.log(error);

        return false;
      }
    },
  },
});
