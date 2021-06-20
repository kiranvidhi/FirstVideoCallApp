function enableUiControls(localStream) {

  $("#exit-btn").prop("disabled", false);

  $("#exit-btn").click(function(){
    alert("so sad to see you leave the channel");
    leaveChannel();
  });
}
