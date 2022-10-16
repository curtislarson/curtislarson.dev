import Gh from "img/gh.png";

export default function () {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Curtis Larson</h1>
          <h2 class="text-5x1 py-2">Freelance Software Developer</h2>
        </div>
        <div class="items-center">
          <a href="https://github.com/curtislarson">
            <img class="object-scale-down h-10 w-10" alt="github" src={Gh} />
          </a>
        </div>
      </div>
    </div>
  );
}
