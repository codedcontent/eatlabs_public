import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { connectToDB } from "./db";
import User from "@/models/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user, account }) {
      console.log(user, account);

      if (account?.provider === "google") {
        const { name, email } = user;

        // Store the user credential in the database
        try {
          await connectToDB();
          const userExists = await User.findOne({ email });

          if (userExists) {
            console.log("User already exists in DB");
            return true;
          }

          // Add user to db
          const resp = await fetch(`${process.env.NEXTAUTH_URL}/api/user`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name,
              email,
            }),
          });

          if (resp.ok) {
            console.log("User stored in DB");
            return true;
          }
        } catch (error) {
          console.log(error);
        }
      }

      return true;
    },
  },
});
