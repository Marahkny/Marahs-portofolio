import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-7xl font-extrabold text-purple-500 animate-pulse glitch mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-center">
        Page not found
      </h2>
      <p className="text-gray-400 mb-6 text-center max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>
      <Link href="/">
        <a className="bg-purple-500 text-black px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-purple-400 transition-all">
          Back to Home
        </a>
      </Link>

      {/* Simple glow animation */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500 opacity-20 blur-3xl animate-ping top-1/3 left-1/2 -translate-x-1/2" />
      </div>

      <style jsx>{`
        .glitch {
          position: relative;
        }

        .glitch::before,
        .glitch::after {
          content: '404';
          position: absolute;
          left: 0;
          right: 0;
          color: #8b5cf6;
          background: transparent;
          overflow: hidden;
        }

        .glitch::before {
          top: -2px;
          animation: glitchTop 1s infinite linear alternate-reverse;
        }

        .glitch::after {
          bottom: -2px;
          animation: glitchBottom 1s infinite linear alternate-reverse;
        }

        @keyframes glitchTop {
          0% {
            clip-path: inset(0 0 80% 0);
            transform: translate(-2px, -2px);
          }
          100% {
            clip-path: inset(0 0 50% 0);
            transform: translate(2px, 2px);
          }
        }

        @keyframes glitchBottom {
          0% {
            clip-path: inset(80% 0 0 0);
            transform: translate(2px, -2px);
          }
          100% {
            clip-path: inset(50% 0 0 0);
            transform: translate(-2px, 2px);
          }
        }
      `}</style>
    </div>
  );
}
