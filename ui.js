function enableUiControls(localStream) {

  $("#exit-btn").prop("disabled", false);

  $("#exit-btn").click(function(){
    console.log("so sad to see you leave the channel");
    leaveChannel();
  });
}
