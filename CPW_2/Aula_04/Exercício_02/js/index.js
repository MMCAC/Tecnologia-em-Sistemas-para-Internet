// Alias baseado no jQuery
const $ = document.querySelector.bind(document)
const $all = document.querySelectorAll.bind(document)

const onChangeRangesRGBA_HSL = () => {
    const red = $('#red').value; 
    const green = $('#green').value;
    const blue = $('#blue').value;
    const alpha = $('#alpha').value;

    $('#color-display-rgba').style.backgroundColor = `rgba(${red},${green},${blue},${alpha})`;

    const hue = $('#hue').value;
    const saturation = $('#saturation').value;
    const lightnees = $('#lightness').value;
    console.log(`${hue},${saturation},${lightnees}`)

    $('#color-display-hsl').style.backgroundColor = `hsl(${hue}deg,${saturation}%,${lightnees}%)`;
    
}

// $('#red').oninput = onChangeRangesRGBA

// $('#green').oninput = onChangeRangesRGBA

// $('#blue').oninput = onChangeRangesRGBA

// $('#alpha').oninput = onChangeRangesRGBA

/**
 * for(ler i = 0; i < tamanaho; i++)
 */

$all('#color-ranges-rgba input[type=range]').forEach((range) => range.oninput = onChangeRangesRGBA_HSL)

$all('#color-ranges-hsl input[type=range]').forEach((range) => range.oninput = onChangeRangesRGBA_HSL)

/**
 * rgb(128,128,128)
 * 
 * hsl(0deg, 0, 50)
 * cada input varia de 0 a 100
 * 
 */