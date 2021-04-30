#!/usr/bin/env pwsh
Set-StrictMode -Version latest
if (Test-Path "app.zip") {
    Remove-Item -Recurse -Force "app.zip"
}
Set GOOS=linux
Set CGO_ENABLED=0
go build -o main ./bin
zip -r app.zip ./config ./main