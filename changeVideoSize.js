const supportedConstrains = navigator.mediaDevices.getSupportedConstraints();
console.log(supportedConstrains);

const changeVideoSize = () => {
    stream.getVideoTracks().forEach(track => {
        // track is a video track

        const capabilities = track.getCapabilities()
        const height = document.querySelector("#vid-height").value
        const width = document.querySelector("#vid-width").value
        const vConstrains = {
            height: {exact: height < capabilities.height.max ? height: capabilities.height.max},
            width: {exact: width < capabilities.width.max ? width: capabilities.width.max},
            // height: 500,
            // width: 500,
            // frameRate: 5
        }
        track.applyConstraints(vConstrains);
    });
    // stream.getTracks().forEach(track => {
    //     const capabilities = track.getCapabilities();
    //     console.log(capabilities);
    // });
}