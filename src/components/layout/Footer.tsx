import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-surface-darker border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-display text-lg font-bold text-white">
              {SITE.name.split(" ")[0]}
              <span className="font-normal text-white/40 ml-1">
                Partners
              </span>
              <span className="font-normal text-white/40 ml-1">
                Inc
              </span>
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-white/40">
            <a
              href={`mailto:${SITE.email}`}
              className="hover:text-brand-cyan transition-colors"
            >
              {SITE.email}
            </a>
            <span className="hidden md:inline">&middot;</span>
            <span>FSZT.Partners</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            &copy; 2026 FSZT Partners Inc. All rights reserved.
          </p>
          <p className="text-xs text-white/25">
            Made with <span className="text-red-500">❤</span> in SF
          </p>
        </div>
      </div>
    </footer>
  );
}
