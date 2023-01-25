export default function () {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex flex-col text-center">
        <h1 class="text-7xl font-bold">Curtis Larson</h1>
        <h2 class="text-2xl mt-2 font-light">Freelance Software Developer</h2>
        <hr />
        <div class="flex flex-row">
          <p class="text-primary py-2 px-2">
            <a href="mailto:hi@curtislarson.dev" alt="Contact" class="btn btn-primary">
              Contact
            </a>
          </p>
          <p class="text-primary py-2 px-2">
            <a href="/resume.pdf" alt="Resume" class="btn btn-primary">
              Resume
            </a>
          </p>
          <p class="text-primary py-2 px-2">
            <a href="https://github.com/curtislarson" alt="Github" class="btn btn-primary">
              Github
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
