export default function Footer() {
  return (
    <footer className="bg-background-dark border-t border-white/10">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-white/70">© 2024 CHECKFIRST. All Rights Reserved.</p>
            <a className="text-sm text-white/50 hover:text-primary transition-colors" href="#">Privacy Policy</a>
          </div>
          <div className="flex items-center gap-4">
            <a aria-label="LinkedIn" className="text-white/70 hover:text-primary transition-colors" href="#">
              <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </a>
            <a aria-label="Twitter" className="text-white/70 hover:text-primary transition-colors" href="#">
              <svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.793 4.649-.65.177-1.354.23-2.067.087.606 1.885 2.364 3.264 4.448 3.303-1.716 1.34-3.882 2.05-6.223 1.72C.931 19.526 3.016 20.5 5.253 20.5c6.305 0 9.762-5.224 9.762-9.762 0-.148-.003-.295-.009-.442A6.995 6.995 0 0 0 24 4.557z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
