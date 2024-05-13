let mediaRecorder;
let recordedBlobs;

const startRecording = () => {
    if(!stream){
        alert('No current feed!!')
        return;
    }
    console.log(`startRecording`);
    recordedBlobs = [];
    mediaRecorder = new MediaRecorder(stream)
    mediaRecorder.ondataavailable = e => {
        console.log(`data is available for media recorded`);
        recordedBlobs.push(e.data);
    }
    mediaRecorder.start();

    changeButtons([
        'green','green','blue','blue','green','blue','grey','blue'
    ])
}

const stopRecording = () => {
    if(!mediaRecorder){
        alert('please recoed before stopping!!')
        return;
    }
    console.log(`stopRecording`);
    mediaRecorder.stop();

    changeButtons([
        'green','green','blue','blue','green','green','blue','blue'
    ])
}

const playRecording = () => {
    console.log(`playRecording`);
    if(!recordedBlobs){
        console.log(`No recorded blobs!`);
        return;
    }
    const superBuffer = new Blob(recordedBlobs);
    const recordedVideoEl = document.querySelector("#other-video");
    recordedVideoEl.src = window.URL.createObjectURL(superBuffer);
    recordedVideoEl.controls = true;
    recordedVideoEl.play();

    changeButtons([
        'green','green','blue','blue','green','green','green','blue'
    ])
}