"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ROLES, type Role } from "@/src/shared/types/roles";

type RoleSwitcherProps = {
  value: Role;
};

export function RoleSwitcher({ value }: RoleSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onRoleChange = (nextRole: Role) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("role", nextRole);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <label className="flex items-center gap-3 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm shadow-sm">
      <span className="text-zinc-500">Demo role</span>
      <select
        value={value}
        onChange={(event) => onRoleChange(event.target.value as Role)}
        className="rounded-md bg-zinc-100 px-2 py-1 font-medium text-zinc-800 outline-none"
      >
        {ROLES.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>
    </label>
  );
}
