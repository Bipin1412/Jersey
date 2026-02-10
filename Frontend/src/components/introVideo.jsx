const IntroVideo = ({ onFinish, fadeOut }) => {
  return (
    <div
      className={`
        fixed inset-0 z-[9999] bg-black
        transition-opacity duration-700 ease-in-out
        ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}
      `}
    >
      <video
        src="/intro-video.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        className="w-full h-full object-cover"
        onEnded={onFinish}
        onError={onFinish}
      />

      {/* Skip Button */}
      <button
        onClick={onFinish}
        className="absolute bottom-6 right-6
                   px-4 py-2 text-white
                   bg-white/20 backdrop-blur-md
                   rounded-md hover:bg-white/30 transition"
      >
        Skip
      </button>
    </div>
  );
};

export default IntroVideo;
