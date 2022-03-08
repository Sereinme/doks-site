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
weight: 999
toc: true
---

[FFmpeg](http://ffmpeg.org/) is a complete, cross-platform solution to record, convert and stream audio and video. This is my FFmpeg learning notes. Using ffmpeg as video editor and converter. Change the fps and convert mp4 file to gif and other formats.

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

### Transmuxing

### Transrating

### Transsizing

### Demuxing

### Muxing

### Screenshots

### Cutting

Usually we only need a part of video, so we can cut it with start time and last time

```powershell
ffmpeg -ss <start time> -t <last time> -i <input file> <output file>
```

Time unit is second, and we can also use format like `00:00:00.000`, which represents `hours:minutes:seconds.points`.

### Loop

If we convert to `.gif` file or other animation pictures, we can set the loop times, basically `1` for once, and `0` for infinity.

```powershell
ffmpeg -i <input file> -loop <loop times> <output file>
```

### Adjusting Speed

### Compressing

### Scale[^2] Control

If the video is a high definition file, and we want to scale it down to reduce the size, then we can use the scale control commands.

```powershell
ffmpeg -i <input file> -vf scale=<width>:<height>:flags=lanczos <output file>
```

`lanczos` is the algorithm of zoom, and if we want to set the width of the output file to half the width of the source video and the height to scale proportionally[^3], we will set the scale like this

```powershell
ffmpeg -i <input file> -vf scale=iw/2:-1 :flags=lanczos <output file>
```

The `iw` means video width, obviously `ih` means video height, and `-1` means zoom proportionally. And we can also set the pixels of width and height.

### GIF

It's direct to convert videos like `.mp4` files to `.gif` animations, just use commands below

```powershell
ffmpeg -i <input>.mp4 <output>.gif
```

### WEBP

## Reference

* See official documentation [FFmpeg Documentation →](https://ffmpeg.org/ffmpeg.html).

[^1]:_adi._ 冗余的;多余的
[^2]:_n._ 规模;范围;程度;等级;级别; _vt._ 攀登;改变...的大小
[^3]:_adv._ 按比例的.
