const videoLinks = document.querySelectorAll('.video-link');
const videoPlayer = document.getElementById('videoPlayer');
const videoSource = document.getElementById('videoSource');

// Add hover event to each video link
videoLinks.forEach(link => {
  link.addEventListener('mouseenter', (event) => {
    const video = event.target.getAttribute('data-video');
    videoSource.src = `${video}.mp4`; // Change the source to match the hovered video's name
    videoPlayer.load();  // Reload the video player with the new source
    videoPlayer.play();  // Play the new video
  });

  link.addEventListener('mouseleave', () => {
    videoPlayer.pause(); // Pause the video when the mouse leaves
    videoPlayer.currentTime = 0; // Reset video time
  });
});
