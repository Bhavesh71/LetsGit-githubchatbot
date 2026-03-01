import { SignUp } from "@clerk/nextjs";
import { GitBranch } from "lucide-react";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] flex flex-col items-center justify-center gap-8 p-6">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 bg-gradient-to-br from-brand-500 to-purple-600 rounded-lg flex items-center justify-center">
          <GitBranch className="w-4 h-4 text-white" />
        </div>
        <span className="font-bold text-lg text-white">Lets Git</span>
      </div>
      <SignUp />
    </div>
  );
}
