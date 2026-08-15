$ErrorActionPreference = 'Stop'

Write-Host 'Checking Node.js...'
node --version
npm --version

Write-Host 'Checking FFmpeg...'
ffmpeg -version | Select-Object -First 1
ffprobe -version | Select-Object -First 1

Write-Host 'Installing Node dependencies...'
npm install

New-Item -ItemType Directory -Force -Path 'public/audio' | Out-Null
New-Item -ItemType Directory -Force -Path 'public/images' | Out-Null
New-Item -ItemType Directory -Force -Path 'public/video' | Out-Null
New-Item -ItemType Directory -Force -Path 'output' | Out-Null

Write-Host 'Setup complete. Run: npm run dev'
