# Amazon stop being cringe and let people disable updates

if ([Threading.Thread]::CurrentThread.ApartmentState -ne 'STA') {
    Start-Process -FilePath pwsh -ArgumentList '-STA','-NoProfile','-File', "`"$PSCommandPath`"" -Verb RunAs
    exit
}

Add-Type -AssemblyName System.Windows.Forms

function Get-DesiredFreeSpace {
    $form = New-Object System.Windows.Forms.Form
    $form.Text = 'Kindle Filler 9000'
    $form.Size = New-Object System.Drawing.Size(300,250)
    $form.StartPosition = 'CenterScreen'
    $form.FormBorderStyle = 'FixedDialog'
    $form.MaximizeBox = $false

    $label = New-Object System.Windows.Forms.Label
    $label.Location = New-Object System.Drawing.Point(10,20)
    $label.Size = New-Object System.Drawing.Size(280,20)
    $label.Text = 'Select free space to leave on device:'
    $form.Controls.Add($label)

    $y = 50
    foreach ($mb in 20,50,75,100) {
        $rb = New-Object System.Windows.Forms.RadioButton
        $rb.Location = New-Object System.Drawing.Point(20,$y)
        $rb.Size = New-Object System.Drawing.Size(120,20)
        $rb.Text = "$mb MB"
        $rb.Tag = $mb
        $form.Controls.Add($rb)
        $y += 25
    }

    $radioCustom = New-Object System.Windows.Forms.RadioButton
    $radioCustom.Location = New-Object System.Drawing.Point(20,$y)
    $radioCustom.Size = New-Object System.Drawing.Size(120,20)
    $radioCustom.Text = 'Custom:'
    $form.Controls.Add($radioCustom)

    $textBox = New-Object System.Windows.Forms.TextBox
    $textBox.Location = New-Object System.Drawing.Point(140,$y)
    $textBox.Size = New-Object System.Drawing.Size(60,20)
    $textBox.Enabled = $false
    $form.Controls.Add($textBox)

    $radioCustom.Add_Click({ $textBox.Enabled = $true })
    foreach ($ctrl in $form.Controls | Where-Object { $_ -is [System.Windows.Forms.RadioButton] -and $_ -ne $radioCustom }) {
        $ctrl.Add_Click({ $textBox.Enabled = $false })
    }

    $button = New-Object System.Windows.Forms.Button
    $button.Location = New-Object System.Drawing.Point(100,180)
    $button.Size = New-Object System.Drawing.Size(75,23)
    $button.Text = 'OK'
    $button.DialogResult = [System.Windows.Forms.DialogResult]::OK
    $form.AcceptButton = $button
    $form.Controls.Add($button)

    $form.Topmost = $true
    $result = $form.ShowDialog()

    if ($result -ne [System.Windows.Forms.DialogResult]::OK) {
        exit
    }

    if ($radioCustom.Checked) {
        if (-not ([int]::TryParse($textBox.Text, [ref]$null) -and [int]$textBox.Text -gt 0)) {
            [System.Windows.Forms.MessageBox]::Show('Invalid custom value!', 'Error', 'OK', 'Error')
            return Get-DesiredFreeSpace
        }
        return [int]$textBox.Text
    }

    $sel = $form.Controls | Where-Object { $_ -is [System.Windows.Forms.RadioButton] -and $_.Checked }
    return [int]$sel.Tag
}

$shell        = New-Object -ComObject Shell.Application
$myPC         = $shell.Namespace(17)
$deviceItem   = $myPC.Items() | Where-Object { $_.Name -match 'Kindle' } | Select-Object -First 1
if (-not $deviceItem) {
    [System.Windows.Forms.MessageBox]::Show('MTP device not found!', 'Error', 'OK', 'Error')
    exit 1
}
$deviceNS     = $shell.Namespace($deviceItem)
$internalItem = $deviceNS.Items() | Where-Object { $_.Name -match 'Internal Storage' } | Select-Object -First 1
if (-not $internalItem) {
    [System.Windows.Forms.MessageBox]::Show('Internal storage not found!', 'Error', 'OK', 'Error')
    exit 1
}
$internalNS   = $shell.Namespace($internalItem)

$self       = $internalNS.Self
$freeSpace  = [int64]$self.ExtendedProperty('System.FreeSpace')
if (-not $freeSpace) {
    [System.Windows.Forms.MessageBox]::Show('Could not retrieve free space!', 'Error', 'OK', 'Error')
    exit 1
}

$desiredMB    = Get-DesiredFreeSpace
$desiredBytes = $desiredMB * 1000000
$fillerSize   = $freeSpace - $desiredBytes
if ($fillerSize -le 0) {
    $curMB = [math]::Round($freeSpace/1MB,2)
    [System.Windows.Forms.MessageBox]::Show(
        "Insufficient free space!`nCurrent: $curMB MB`nDesired: $desiredMB MB",
        'Error','OK','Error'
    )
    exit 1
}

$tempFile = Join-Path $env:TEMP 'fill.bin'
fsutil file createnew $tempFile $fillerSize | Out-Null
$internalNS.CopyHere($tempFile, 16)

do {
    Start-Sleep -Seconds 1
    $exists = $internalNS.ParseName([IO.Path]::GetFileName($tempFile))
} while (-not $exists)

$newFree   = [int64]$self.ExtendedProperty('System.FreeSpace')
$remainMB  = [math]::Round($newFree/1000000,2)
[System.Windows.Forms.MessageBox]::Show(
    "Operation completed!`nRemaining space: $remainMB MB",
    'Success','OK','Information'
)

Remove-Item $tempFile -ErrorAction SilentlyContinue
