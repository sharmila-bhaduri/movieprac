// Define an array of movies (videos and images)
const mediaItems = [
    { type: "video", title: "show your video", source: "video1.mp4" },
    { type: "image", title: "your NETFLEX", source: "image1.jpg" },
    { type: "image", title: "Watch now TV", source: "image2.jpg" },
    // Add more media items as needed
];

// Function to add media items to the DOM
function addMediaItems() {
    const contentContainer = document.querySelector('.content');

    mediaItems.forEach(media => {
        const mediaElement = document.createElement('div');
        mediaElement.classList.add('media-item');

        if (media.type === "video") {
            const videoElement = document.createElement('video');
            videoElement.src = media.source;
            videoElement.controls = true;

            const h2Element = document.createElement('h2');
            h2Element.textContent = media.title;

            mediaElement.appendChild(videoElement);
            mediaElement.appendChild(h2Element);
        } else if (media.type === "image") {
            const imgElement = document.createElement('img');
            imgElement.src = media.source;
            imgElement.alt = media.title;

            const h2Element = document.createElement('h2');
            h2Element.textContent = media.title;

            mediaElement.appendChild(imgElement);
            mediaElement.appendChild(h2Element);
        }

        contentContainer.appendChild(mediaElement);
    });
}

// Call the function to add media items when the page loads
document.addEventListener('DOMContentLoaded', addMediaItems);