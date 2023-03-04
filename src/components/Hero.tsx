export default function Hero() {
  return (
    <div class="hero min-h-[70vh]">
      <div class="items-center justify-center max-w-full gap-4 p-4 flex flex-col text-center">
        <h1 class="text-7xl font-bold">Curtis Larson</h1>
        <h2 class="text-2xl mt-2 font-light">Freelance Software Developer</h2>
        <div class="flex flex-row">
          <p class="text-primary py-2 px-2">
            <a href="mailto:hi@curtislarson.dev" alt="Contact" class="btn btn-primary">
              Email
            </a>
          </p>
          <p class="text-primary py-2 px-2">
            <a href="/resume.pdf" alt="Resume" class="btn btn-primary">
              Resume
            </a>
          </p>
          <p class="text-primary py-2 px-2">
            <a
              href="https://github.com/curtislarson"
              rel="noopener noreferrer nofollow"
              target="_blank"
              alt="Github"
              class="btn btn-primary"
            >
              Github
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
