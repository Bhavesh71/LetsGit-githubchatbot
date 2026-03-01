import { UserButton } from "@clerk/nextjs";

interface HeaderUser {
  name: string | null;
  email: string;
  avatarUrl: string | null;
}

export default function AppHeader({ user }: { user: HeaderUser }) {
  return (
    <header className="h-14 border-b border-gray-100 bg-white flex items-center justify-between px-6 flex-shrink-0">
      <div />
      <div className="flex items-center gap-3">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-medium text-gray-900 leading-tight">
            {user.name ?? user.email.split("@")[0]}
          </p>
          <p className="text-[11px] text-gray-400">{user.email}</p>
        </div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
}
