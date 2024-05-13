const audioInputEl = document.querySelector("#audio-input")
const audioOutputEl = document.querySelector("#audio-output")
const videoInputEl = document.querySelector("#video-input")

const getDevices = async () => {
    try{
        const devices = await navigator.mediaDevices.enumerateDevices();
        console.log(devices);
        devices.forEach(d => {
            const option = document.createElement('option')
            option.value = d.deviceId
            option.label = d.label
            if(d.kind === "audioinput"){
                audioInputEl.appendChild(option)
            }else if(d.kind === "audiooutput"){
                audioOutputEl.appendChild(option)
            }else{
                videoInputEl.appendChild(option)
            }
        })


    }catch(error) {
        console.log(error);
    }
}

const changeAudioInput = async (e) => {
    // changed audio input!!
    const deviceId = e.target.value
    const newConstrains = {
        audio: {deviceId: {exact: deviceId}},
        video: true
    }
    try{
        stream = await navigator.mediaDevices.getUserMedia(newConstrains);
        console.log(stream);
    }catch(error){
        console.log(error);
    }
}

const changeAudioOutput = async (e) => {
    await videoEl.setSinkId(e.target.value)
}

const chagneVideoInput = async (e) => {
    // changed video input!!
    const deviceId = e.target.value
    const newConstrains = {
        audio: true,
        video: {deviceId: {exact: deviceId}},
    }
    try{
        stream = await navigator.mediaDevices.getUserMedia(newConstrains);
        console.log(stream);
    }catch(error){
        console.log(error);
    }
}