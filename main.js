Webcam.set({
    width:360,
    height:250,
    Image_format:250,
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='img' src='" + data_uri + "'>";
    });
}
