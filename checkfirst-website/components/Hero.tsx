export default function Hero() {
  return (
    <section id="home">
      <div className="relative flex h-auto min-h-[90vh] w-full flex-col bg-background-dark">
        <div className="container mx-auto">
          <div className="p-4">
            <div
              className="flex min-h-[calc(90vh-2rem)] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-4 text-center rounded-xl"
              style={{
                backgroundImage: `linear-gradient(rgba(16, 22, 34, 0.6) 0%, rgba(16, 22, 34, 1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDmdJ7LEO4r9eZdCNLKyBX17WVcMRdbUlnY6tOjC7cB1WrFMjRQptLvLxXInSDWM6ai4BMgN5T26aNdf7RSmze5xRe2ZvafHPPuQta0DreNVW0pqOE_cCS3N4UuFofofNqEfARPMVwE-Ck6mrjdVRg4uNNodAaFVY2OEHbj8feDZQzxMLMzReJKMPe8-1kn7zN6Rm3iFQtK2r9cL4vAXa7Vmh2Razoslzt8ZSGzPyojT6U62LdLyo4USjoO8TosDTZ4eFIzxEmvnBs")`
              }}
            >
              <div className="flex flex-col gap-2 max-w-3xl">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-6xl">
                  Revolutionize Third-Party Risk Management with AI
                </h1>
                <h2 className="text-white/80 text-base font-normal leading-normal md:text-lg">
                  CHECKFIRST leverages AI agents and comprehensive security frameworks to automate and accelerate your security assessments.
                </h2>
              </div>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                <span className="truncate">Get a Demo</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
