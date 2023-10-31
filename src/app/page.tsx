import { redirect } from "next/navigation";

import { initialProfile } from "@/lib/initialProfile";

import CreateProfileModal from "@/components/modals/createProfileModal";

export default async function Home() {
  const profile = await initialProfile();

  if (profile) {
    return redirect("/chat");
  }

  return <CreateProfileModal />
}
