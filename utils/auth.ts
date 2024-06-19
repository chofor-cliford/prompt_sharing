import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { connectToDatabase } from "./db";
import User from "@/lib/models/user.model";


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({ email: session?.user?.email });

      session.user.id = sessionUser?._id.toString();

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
