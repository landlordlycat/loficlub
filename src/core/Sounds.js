import sounds from "../sounds";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { Slider } from "@material-ui/core";

const Sounds = ({ setPaused }) => {
  useEffect(() => {
    setPaused(true);
    // eslint-disable-next-line
  }, []);

  const playSound = (name) => {
    var audio = document.getElementById(name);
    const img = document.querySelector(`.${name}-image`);

    if (audio.paused) {
      toast.loading(`Loading ${name} 🎵`); /// loading state

      audio.play();
      img.style.opacity = 1;
      setTimeout(() => {
        toast.remove();
      }, [1000]);
    } else {
      audio.pause();
      setTimeout(() => {
        toast.remove();
      }, [1000]);
      img.style.opacity = 0.35;
    }
  };
  return (
    <div className="flex h-full items-center justify-center flex-wrap overflow-scroll pb-[30%] lg:pb-[10%] w-full">
      {sounds.map((sound) => (
        <div
          data-sound={sound.name}
          key={sound.id}
          className="m-3 cursor-pointer relative"
        >
          <audio id={sound.name} preload="none">
            <source
              src={`/sounds/${sound.name}.mp3`}
              alt="play"
              type="audio/mp3"
            />
          </audio>
          <img
            src={`/img/${sound.name}.gif`}
            onClick={() => playSound(sound.name)}
            width="250"
            style={{
              height: "150px",
            }}
            className={`opacity-[.35] relative rounded-md ${sound.name}-image`}
            alt={sound.name}
            title={sound.name}
          />
          <h1 className="absolute top-0 left-0 ml-2 text-md font-light mt-1 opacity-[.85]">
            {sound.name}
          </h1>
          <div className="w-[250px]">
            <Slider min={0} max={100} valueLabelDisplay="auto" />
          </div>
        </div>
      ))}
      <Toaster position="bottom-right" />
    </div>
  );
};

export default Sounds;
