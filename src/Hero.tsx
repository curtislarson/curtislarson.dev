import Gh from "img/gh.png";

export default function () {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col text-center">
        <div class="max-w-md">
          <h1 class="text-6xl font-bold">Curtis Larson</h1>
          <h2 class="text-2xl py-4">Freelance Software Developer</h2>
          <p>I build stuff while traveling around the world.</p>
          <p class="text-primary py-2">
            <a href="mailto:hi@curtislarson.dev">hi@curtislarson.dev</a>
          </p>
        </div>
        <div class="items-center py-2">
          <a href="https://github.com/curtislarson">
            <img class="object-scale-down h-10 w-10" alt="github" src={Gh} />
          </a>
        </div>
      </div>
    </div>
  );
}
