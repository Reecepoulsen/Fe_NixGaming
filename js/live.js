window.addEventListener("load", () => {
  const players = document.getElementsByClassName("player");
  const urls = ['Ben', 'Lee', 'Sweet', 'Lennie', 'Dok'];
  checkTwitch(players, urls);
});

const checkTwitch = (players, urls) => {
  if (urls.length == 0) {
    // if the urls list is empty, show no one currently live
    const videoGrid = document.getElementsByClassName("video-grid");
    videoGrid.innerHtml = `<h1>Looks like the flock is offline, check back later</h1>`;
    return
  }

  urls.filter(url => {
    // check if the url is live
    // if live, keep it in the list
    // check twitch embed docs to on how to tell if live
  });

  players.map(player => {
    // players are hidden by default
    // show all players with url in urls
  })

};