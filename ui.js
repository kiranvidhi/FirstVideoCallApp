function enableUiControls(localStream) {
  $("#mic-btn").prop("disabled", false);
  $("#video-btn").prop("disabled", false);
  $("#exit-btn").prop("disabled", false);

  $("#mic-btn").click(function(){
    toggleMic(localStream);
  });

  $("#video-btn").click(function(){
    toggleVideo(localStream);
  });

  $("#exit-btn").click(function(){
    alert("So sad to see you leave the channel!");
    leaveChannel();
  });
}
function toggleBtn(btn){
  btn.toggleClass('btn-dark').toggleClass('btn-danger');
}

function toggleVisibility(elementID, visible) {
  if (visible) {
    $(elementID).attr("style", "display:block");
  } else {
    $(elementID).attr("style", "display:none");
  }
}

function toggleMic(localStream) {
toggleBtn($("#mic-btn")); // toggle button colors
$("#mic-icon").toggleClass('fa-microphone').toggleClass('fa-microphone-slash'); // toggle the mic icon
if ($("#mic-icon").hasClass('fa-microphone')) {
  localStream.enableAudio(); // enable the local mic
  toggleVisibility("#mute-overlay", false); // hide the muted mic icon
} else {
  localStream.disableAudio(); // mute the local mic
  toggleVisibility("#mute-overlay", true); // show the muted mic icon
}
}

function toggleVideo(localStream) {
  toggleBtn($("#video-btn")); // toggle button colors
  $("#video-icon").toggleClass('fa-video').toggleClass('fa-video-slash'); // toggle the video icon
  if ($("#video-icon").hasClass('fa-video')) {
    localStream.enableVideo(); // enable the local video
    toggleVisibility("#no-local-video", false); // hide the user icon when video is enabled
  } else {
    localStream.disableVideo(); // disable the local video
    toggleVisibility("#no-local-video", true); // show the user icon when video is disabled
  }
}
