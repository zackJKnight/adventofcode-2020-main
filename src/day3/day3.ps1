$data = cat ./day3-data.txt

$lineLength = ($data -split '\n' | select -first 1).Length

$dataAsText = -join $data


$oneLine = $dataAsText.replace([System.Environment]::NewLine, '').replace('\r\n', '').replace('\n', '').replace('\r', '')

$index = 0

$moveRight = 3
$moveDown = 1

$moveIndex = $oneLine.Length % $moveRight + ($lineLength * $moveDown)

$matches = 0

while($index -lt $oneLine.Length) {

    $index += $moveIndex
    if($index -gt $oneLine.Length){
        break;
    }
    if($oneLine[$index] -eq '#'){
        $matches ++
    }

}

$matches