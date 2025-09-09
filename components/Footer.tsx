"use client";

export default function Footer() {
  return (
    <footer className="section-padding border-t border-gray pt-12 pb-10">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-[#A8A8A8]">Dark Matter Labs</p>
        <div className="flex gap-6">
          <a
            href="https://www.instagram.com/darkmatter_labs/"
            className="text-[#A8A8A8] hover:text-[#EBEBEB] transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/company/darkmatterlabs"
            className="text-[#A8A8A8] hover:text-[#EBEBEB] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://provocations.darkmatterlabs.org/"
            className="text-[#A8A8A8] hover:text-[#EBEBEB] transition-colors"
          >
            Substack
          </a>
        </div>
      </div>
    </footer>
  );
}
