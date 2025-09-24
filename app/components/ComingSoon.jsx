import Image from "next/image";

export default function ComingSoon() {
  return (
    <div className="min-h-screen grid place-items-center bg-slate-900 text-white">
      <div className="text-center px-6">
        <div className="flex justify-center mb-6">
          <Image
            src="/WalkThru_logo_white_no_tagline.png"
            alt="WalkThruNY"
            width={240}
            height={48}
            priority
            className="h-12 w-auto"
          />
        </div>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Coming soon</h1>
        <p className="mt-3 text-white/80 max-w-prose mx-auto">
          We’re putting the finishing touches on our site. In the meantime, reach out and we’ll get back to you shortly.
        </p>
        <p className="mt-6">
          <a
            className="inline-flex items-center rounded-full bg-blue-600 px-5 py-3 text-white font-medium hover:bg-blue-500"
            href="mailto:gabe@walkthruny.com"
          >
            Get started
          </a>
        </p>
      </div>
    </div>
  );
}

