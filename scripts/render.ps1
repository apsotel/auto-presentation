$ErrorActionPreference = 'Stop'
New-Item -ItemType Directory -Force -Path 'output' | Out-Null
npm run render
Write-Host 'Render complete: output/final.mp4'
