function togglePlay() {
    var myAudio = document.getElementById("myAudio");
    myAudio.volume = 0.14;
    return myAudio.paused ? myAudio.play() : myAudio.pause();

  };