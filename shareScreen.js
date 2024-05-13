const shareScreen = async () => {
    const options = {
        video: true,
        audio: false,
        surfaceSwitching: 'include', // include / exclude not boolean as true / false
    }
    try{
        mediaStream = await navigator.mediaDevices.getDisplayMedia(options);
    }catch(error){
        console.log(error);
    }
    
    // we don't handle all buttons paths, for all use a UI framework
    changeButtons([
        'green','green','blue','blue','green','green','green','green'
    ])
}