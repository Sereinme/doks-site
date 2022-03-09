---
title: "FFmpeg 📽️"
description: "Ffmpeg learning notes. Using ffmpeg as video editor and converter. Change the fps and convert mp4 file to gif and other formats."
lead: ""
date: 2022-03-07T22:02:18+08:00
lastmod: 2022-03-07T22:02:18+08:00
draft: false
images: []
menu:
  docs:
    parent: "notes"
weight: 140
toc: true
---

[FFmpeg](http://ffmpeg.org/) is a complete, cross-platform solution to record, convert and stream audio and video. This is my FFmpeg learning notes. Using ffmpeg as video editor and converter. Change the fps and convert `.mp4` file to `.gif` and other formats.

## Overview

FFmpeg is short for "Fast Forward Moving Pictures Experts Group". It is a huge project and it provides 3 command line tools as follow

* `ffmpeg`: video and audio converter.
* `ffplay`: media player.
* `ffprobe`: gathers information from multimedia streams.

This note mainly review some of the usages of `ffmpeg`, which is most useful. The documentation of [`ffplay`](https://ffmpeg.org/ffplay.html) and [`ffprobe`](https://ffmpeg.org/ffprobe.html) is available in Internet and it's convenient to check.

## Install

### Windows

Enter the official site of [FFmpeg](http://ffmpeg.org/) and choose [Windows builds from gyan.dev](https://www.gyan.dev/ffmpeg/builds/), find the "release build" section, download `ffmpeg-release-full.7z` file, then unpack the compressed package locally, and finally add `ffmpeg` to the system path, then type in your `powershell` and get logs like this

```powershell
$ ffmpeg -version
ffmpeg version 5.0-full_build-www.gyan.dev Copyright (c) 2000-2022 the FFmpeg developers
built with gcc 11.2.0 (Rev5, Built by MSYS2 project)
configuration: --enable-gpl --enable-version3 --enable-static --disable-w32threads --disable-autodetect --enable-fontconfig --enable-iconv --enable-gnutls --enable-libxml2 --enable-gmp --enable-bzlib --enable-lzma --enable-libsnappy --enable-zlib --enable-librist --enable-libsrt --enable-libssh --enable-libzmq --enable-avisynth --enable-libbluray --enable-libcaca --enable-sdl2 --enable-libdav1d --enable-libdavs2 --enable-libuavs3d --enable-libzvbi --enable-librav1e --enable-libsvtav1 --enable-libwebp --enable-libx264 --enable-libx265 --enable-libxavs2 --enable-libxvid --enable-libaom --enable-libopenjpeg --enable-libvpx --enable-mediafoundation --enable-libass --enable-frei0r --enable-libfreetype --enable-libfribidi --enable-libvidstab --enable-libvmaf --enable-libzimg --enable-amf --enable-cuda-llvm --enable-cuvid --enable-ffnvcodec --enable-nvdec --enable-nvenc --enable-d3d11va --enable-dxva2 --enable-libmfx --enable-libshaderc --enable-vulkan --enable-libplacebo --enable-opencl --enable-libcdio --enable-libgme --enable-libmodplug --enable-libopenmpt --enable-libopencore-amrwb --enable-libmp3lame --enable-libshine --enable-libtheora --enable-libtwolame --enable-libvo-amrwbenc --enable-libilbc --enable-libgsm --enable-libopencore-amrnb --enable-libopus --enable-libspeex --enable-libvorbis --enable-ladspa --enable-libbs2b --enable-libflite --enable-libmysofa --enable-librubberband --enable-libsoxr --enable-chromaprint
libavutil      57. 17.100 / 57. 17.100
libavcodec     59. 18.100 / 59. 18.100
libavformat    59. 16.100 / 59. 16.100
libavdevice    59.  4.100 / 59.  4.100
libavfilter     8. 24.100 /  8. 24.100
libswscale      6.  4.100 /  6.  4.100
libswresample   4.  3.100 /  4.  3.100
libpostproc    56.  3.100 / 56.  3.100
```

And that means you have completely install the `ffmpeg`.

If there are previous versions of `ffmpeg`, we need to delete them.

### Ubuntu

It's quite easy to install `ffmpeg` on Ubuntu compared with Windows, just use `apt` for installing

```powershell
sudo apt install ffmpeg
```

## Usage

It's convenient to edit videos using `ffmpeg` with simple commands.

### Information

We can print the basic information of a video using command below

```powershell
ffmpeg -i <input file>
```

If you want to hide the redundant[^1] info, add `-hide_banner`

```powershell
ffmpeg -i <input file> -hide_banner
```

### Transcoding

Transcoding means converting video files from one encoding to another, like from H.264 encoding to H.265, usually we use encoder `libx265`, so the command goes like

```powershell
ffmpeg -i <input file> -c:v libx265 <output file>
```

If you want to reverse from H.265 to H.264, just change the encoder to `libx264`.

### Transmuxing

Transmuxing means transfer video files from one container to another. Notice that transfering container does not change encoding, so it's pretty fast. Here is an example from `.mp4` to `.webm`

```powershell
ffmpeg -i <input file>.mp4 -c copy <output file>.webm
```

In the command above, `-c copy` means copy directly, without transcoding.

### Transrating

Transrating means adjusting bit rate, often used to reduce the size of a file. We can set the maximum rate, minimum rate and the buffer, like `3856K` for maximum rate, `964K` for minimum rate and `2000K` for buffer size. Command like

```powershell
ffmpeg -i <input file> -minrate <minimum rate> -maxrate <maximum rate> -bufsize <buffer> <output file>
```

### Transsizing

Transsizing means changing video resolution[^2], also called scale[^3] Control.

If the video is a high definition file, and we want to scale it down to reduce the size, then we can use the scale control commands.

```powershell
ffmpeg -i <input file> -vf scale=<width>:<height>:flags=lanczos <output file>
```

`lanczos` is the algorithm of zoom, and if we want to set the width of the output file to half the width of the source video and the height to scale proportionally[^4], we will set the scale like this

```powershell
ffmpeg -i <input file> -vf scale=iw/2:-1 :flags=lanczos <output file>
```

The `iw` means video width, obviously `ih` means video height, and `-1` means zoom proportionally. And we can also set the pixels of width and height. If we wnat to get a 480p video, just set the width to 480.

```powershell
ffmpeg -i <input file> -vf scale=480:-1 <output file>
```

### Demuxing

Demuxing means extracting audio from video. It goes like this

```powershell
ffmpeg -i <input file>.mp4 -vn -c:a copy <output file>.aac
```

In the command above, `-vn` means removing video, `-c:a copy` indicates that the audio encoding is not changed, and is copied directly.

### Muxing

Muxing means adding external audio to the video, such as adding background music or narration[^5].

```powershell
ffmpeg -i <input file>.aac -i <input file>.mp4 <output file>.mp4
```

There are 2 input files, one audi and one video, and `ffmpeg` combine them as one.

### Screenshots

Screenshots need a start time and a last time, and it means from the start time, get sreenshots continuosly till last time ends.

```powershell
ffmpeg -y -i <input file> -ss <start time> -t <last time> <output file>_%3d.png
```

And if you only need a frame of screenshot, it's also available

```powershell
ffmpeg -ss <cut time> -i <input file> -vframes 1 -q:v 2 <output>.png
```

In the above command, `-vframes 1` specifies that only one frame is to be captured, and `-q:v 2` indicates the output image quality, which is generally between `1` and `5` (`1` is the highest quality).

### Cutting

Usually we only need a part of video, so we can cut it with start time and last time or end time

```powershell
ffmpeg -ss <start time> -i <input file> -t <last time> -c copy <output file>
ffmpeg -ss <start time> -i <input file> -to <end time> -c copy <output file>
```

Time unit is second, and we can also use format like `00:00:00.000`, which represents `hours:minutes:seconds.points`. `-c copy` means do not change the encoding format of audio and video, copy directly, which will be much faster.

### Loop

If we convert to `.gif` file or other animation pictures, we can set the loop times, basically `1` for once, and `0` for infinity.

```powershell
ffmpeg -i <input file> -loop <loop times> <output file>
```

### Adjusting

FFmpeg allows you to adjust video playback speed. To increase the video playback speed, just run

```powershell
ffmpeg -i <input file> -vf "setpts=0.5*PTS" <output file>
```

This command will double the speed of the video. To slow down your video you need to use a parameter greater than `1`, like

```powershell
ffmpeg -i <input file> -vf "setpts=4.0*PTS" <output file>
```

### Compressing

### GIF

It's direct to convert videos like `.mp4` files to `.gif` animations, just use commands below

```powershell
ffmpeg -i <input>.mp4 <output>.gif
```

The default conversion is medium quality mode, to convert high quality gif, you can modify the bit rate

```powershell
ffmpeg -i <input>.mp4 -b 2048k <output>.gif
ffmpeg -i <input>.mp4 -lossless 1 <output>.gif
```

We can also convert `.gif` file to other formats

```powershell
ffmpeg -f gif -i <input>.gif <output file>
```

### WEBP

The following command line can convert the file named input.mp4 into a lossless, loop played file named output.webp with size 800:600 and default persentation.

```powershell
ffmpeg -i <input>.mp4 -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:600 <output>.webp
```

If you want the exported output.webp animation to be played only once, it is lossy, the compression level is 3 (0-6, the default is 4, the higher the better the effect), the quality is 70 (0-100, the default is 75, the higher The better the effect), rendering[^6] as a picture.

```powershell
ffmpeg -i <input>.mp4 -vcodec libwebp -filter:v fps=fps=20 -lossless 0 -compression_level 3 -q:v 70 -loop 1 -preset picture -an -vsync 0 -s 800:600 <output>.webp
```

## Parameters

There are some parameters.

* Main parameters
  * `-i`: Set the input filename.
  * `-f`: Set the output format.
  * `-y`: Overwrite the output file if it already exists.
  * `-fs`: end conversion when the specified file size is exceeded.
  * `-ss`: start conversion from the specified time.
  * `-t`: converts from -ss time.
  * `-title`: Set the title.
  * `-timestamp`: Set the timestamp.
  * `-vsync`: Increase or decrease Frame to synchronize video and audio.
  * `-lossless`: Lossless quality, `1` for lossless, and `0` for loss by default.
  * `-loop`: `0` by default means infinity, and `1` for once.
* Video parameters
  * `-b:v`: Set the video traffic, the default is 200Kbit/sec. (Please refer to the following precautions for the unit)
  * `-r`: Set the frame rate value, the default is 25.
  * `-s`: Set the width and height of the screen.
  * `-aspect`: Set the aspect ratio of the screen.
  * `-vn`: Don't process video, use when only processing sound.
  * `-vcodec/-c:v`: Set the video codec, if not set, use the same codec as the input file.
* Sound parameters
  * `-b:a`: Set the traffic per channel (the latest SVN version is the sum of all channels). (Please refer to the following precautions for the unit)
  * `-ar`: Set the sample rate.
  * `-ac`: Set the number of channels for the sound.
  * `-acodec/-c:a`: Set the sound codec, if not set the same as the video, use the same codec as the input file.
  * `-an`: do not process sound, used when processing video only.
  * `-vol`: set the volume, 256 is the standard volume. (To set it to double the volume, enter 512, and so on.)

## Reference

* See official documentation: [FFmpeg Documentation →](https://ffmpeg.org/).
* [Using FFmpeg convert video to gif](https://www.jianshu.com/p/9af00bfe21b3).
* [FFmpeg useful commands](https://www.cnblogs.com/brt2/p/14006745.html).

[^1]:_adi._ 冗余的;多余的
[^2]:_n._ 分辨率
[^3]:_n._ 规模;范围;程度;等级;级别; _vt._ 攀登;改变...的大小
[^4]:_adv._ 按比例的
[^5]:_n._ 旁白
[^6]:_v._ 渲染
