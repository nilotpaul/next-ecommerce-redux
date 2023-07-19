'use server'
 
import { cookies } from 'next/headers'
 
async function getcookie(data) {
  const cookie = cookies().has("next-auth.session-token")
  if (cookie) {
    console.log("yes");
  }
}