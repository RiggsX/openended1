import { auth } from "@/lib/auth";
import { getUserSubscription } from "@/lib/subscription";

export default async function DebugPage() {
  const session = await auth();
  const subscription = await getUserSubscription();

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl mb-8">Debug Info</h1>

        <div className="space-y-6">
          <div className="bg-white/5 p-6 rounded">
            <h2 className="text-xl mb-4">Session</h2>
            <pre className="text-sm overflow-auto">{JSON.stringify(session, null, 2)}</pre>
          </div>

          <div className="bg-white/5 p-6 rounded">
            <h2 className="text-xl mb-4">Subscription Info</h2>
            <pre className="text-sm overflow-auto">{JSON.stringify(subscription, null, 2)}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
