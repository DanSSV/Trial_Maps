let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });

scanner.addListener('scan', function (content) {

  let data = content.split("\n");
  document.getElementById('tricycleNumber').value = data[0].split(": ")[1];
  document.getElementById('plateNumber').value = data[1].split(": ")[1];
  document.getElementById('toda').value = data[2].split(": ")[1];

  scanner.stop();
});

document.getElementById('tricycleNumber').value = "";
document.getElementById('plateNumber').value = "";
document.getElementById('toda').value = "";

Instascan.Camera.getCameras().then(function (cameras) {
  if (cameras.length > 0) {
    scanner.start(cameras[0]);
  } else {
    console.error('No cameras found.');
  }
}).catch(function (e) {
  console.error(e);
});

