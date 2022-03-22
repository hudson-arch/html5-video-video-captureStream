console.log('hello!');

/*
  Works
  * video to video via captureStream()
  * target video will fail on page refresh if user has not interacted with DOM ( but not on view panel in stackblitz refresh strangely )

 *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
 *
 *  Use of this source code is governed by a BSD-style license
 *  that can be found in the LICENSE file in the root of the source
 *  tree.
 */
('use strict');

const leftVideo = document.getElementById('leftVideo');
const rightVideo = document.getElementById('rightVideo');
console.log(leftVideo);

leftVideo.addEventListener('canplay', () => {
  console.log('right canplay ');
  let stream;
  const fps = 24;
  if (leftVideo.captureStream) {
    stream = leftVideo.captureStream(fps);
  } else if (leftVideo.mozCaptureStream) {
    stream = leftVideo.mozCaptureStream(fps);
  } else {
    console.error('Stream capture is not supported');
    stream = null;
  }
  console.log('stream', stream);
  rightVideo.srcObject = stream;
  leftVideo.play();
  rightVideo.play();
});
