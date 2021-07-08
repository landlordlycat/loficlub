import sounds from "../sounds";
import toast, { Toaster } from "react-hot-toast";

const Sounds = () => {
  const playSound = (name) => {
    var audio = document.getElementById(name);
    const img = document.querySelector(`.${name}-image`);

    audio.onload = () => {
      toast.loading("Loading...");
    };

    if (audio.paused) {
      img.style.opacity = 1;
      audio.play();
    } else {
      img.style.opacity = 0.35;
      audio.pause();
    }
  };
  return (
    <div className="w-full flex items-center justify-center h-full pb-[10%]">
      <div className="relative w-9/12 flex flex-wrap items-center justify-center">
        {sounds.map((sound) => (
          <div
            data-sound={sound.name}
            key={sound.id}
            className="m-4 cursor-pointer"
            onClick={() => playSound(sound.name)}
          >
            <audio id={sound.name} preload="none">
              <source
                src={`/sounds/${sound.name}.mp3`}
                alt="play"
                type="audio/mp3"
              />
            </audio>
            <img
              src={`/img/${sound.name}.png`}
              width="80"
              height="80"
              className={`opacity-[.35] ${sound.name}-image`}
              alt={sound.name}
              title={sound.name}
            />
          </div>
        ))}
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
};

export default Sounds;
