function setup(){
    createCanvas(700, 500)
    noLoop()
    draw()
}

function draw(){
    loadPixels()
    for(let x = 0; x < width; x++){
        for(let y = 0; y < width; y++){
            let pos_pix = (x + y * width) * 4
            pixels[pos_pix] = 0  // R  
            pixels[pos_pix + 1] = 0 // G
            pixels[pos_pix + 2] = 0  // B
            pixels[pos_pix + 3] = 255 // Alpha

    }
}
    updatePixels()
}