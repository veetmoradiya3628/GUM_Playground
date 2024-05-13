const videoEl = document.querySelector('#my-video');
 
let stream = null; // Init stream var
let mediaStream = null; // Init media stream var for display share
const constrains = {
    audio: true,
    video: true
}



const getMicAndCamera = async() => {
    try{
        stream = await navigator.mediaDevices.getUserMedia(constrains);
        getDevices();
        console.log(stream);
        changeButtons([
            'green','blue','blue','grey','grey','grey','grey','grey'
        ])
    }catch(error){  
        // user denied access to constrains
        console.log("user denied access to constrains");
    }   
}

const showMyFeed = (e) => {
    console.log(`showing my feed`);
    if(!stream) {
        alert('stream still loading...')
        return;
    }
    videoEl.srcObject = stream // set our MediaStream to our VideoTag
    const tracks = stream.getTracks();
    console.log(tracks);
    changeButtons([
        'green','green','blue','blue','blue','grey','grey','blue'
    ])
}

const stopMyFeed = (e) => {
    if(!stream) {
        alert('stream still loading...')
        return;
    }
    const tracks = stream.getTracks()
    tracks.forEach(track => {
        console.log(track);
        track.stop() // diassociates the track with the source
    });
    changeButtons([
        'green','grey','grey','grey','grey','grey','grey','grey'
    ])
}

document.querySelector("#share").addEventListener('click', e => getMicAndCamera(e))
document.querySelector("#show-video").addEventListener('click', e => showMyFeed(e))
document.querySelector("#stop-video").addEventListener('click', e => stopMyFeed(e))
document.querySelector("#change-size").addEventListener('click', e => changeVideoSize(e))

document.querySelector("#start-record").addEventListener('click', e => startRecording(e))
document.querySelector("#stop-record").addEventListener('click', e => stopRecording(e))
document.querySelector("#play-record").addEventListener('click', e => playRecording(e))

document.querySelector("#share-screen").addEventListener('click', e => shareScreen(e))

document.querySelector("#audio-input").addEventListener('change', e => changeAudioInput(e))
document.querySelector("#audio-output").addEventListener('change', e => changeAudioOutput(e))
document.querySelector("#video-input").addEventListener('change', e => chagneVideoInput(e))
