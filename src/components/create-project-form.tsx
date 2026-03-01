"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { GitBranch, Loader2, Plus, X } from "lucide-react";
import { createProject } from "@/actions/project.actions";
import type { CreateProjectState } from "@/actions/project.actions";

const initial: CreateProjectState = {};

export default function CreateProjectForm() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [state, action, pending] = useActionState(createProject, initial);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.projectId) {
      formRef.current?.reset();
      setOpen(false);
      router.push(`/projects/${state.projectId}`);
    }
  }, [state.projectId, router]);

  return (
    <div>
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 w-full bg-white border-2 border-dashed border-gray-200 rounded-2xl px-5 py-4 text-sm text-gray-500 hover:border-brand-300 hover:text-brand-600 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add a GitHub repository
        </button>
      ) : (
        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-900">Add Repository</h2>
            <button
              onClick={() => setOpen(false)}
              className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <form ref={formRef} action={action} className="space-y-4">
            <div>
              <label
                htmlFor="repoUrl"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                GitHub Repository URL
              </label>
              <input
                id="repoUrl"
                name="repoUrl"
                type="text"
                placeholder="https://github.com/owner/repo"
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-shadow"
                disabled={pending}
              />
              <p className="text-xs text-gray-400 mt-1.5">
                Works with public repos. Private repos need a GITHUB_TOKEN with
                repo access.
              </p>
            </div>

            {state.error && (
              <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">
                {state.error}
              </div>
            )}

            <div className="flex gap-2">
              <button
                type="submit"
                disabled={pending}
                className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-medium px-5 py-2.5 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {pending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Adding…
                  </>
                ) : (
                  <>
                    <GitBranch className="w-4 h-4" />
                    Add Repository
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
