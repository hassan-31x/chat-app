import { redirect } from "next/navigation"

import { initialProfile } from "@/lib/initialProfile"

export default async function Home() {
  const profile = await initialProfile()

  if (profile) {
   return redirect('/chat') 
  }

  return (
    <div>
      Create your Profile
    </div>
  )
}
