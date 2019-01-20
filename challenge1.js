function  VolumeOfaCylinder(radius,height,decimalplace){
    const pi= 3.142;
    const area = pi * (radius*radius*height);
    return area.toFixed(decimalplace);

}
function areaofaParallelogram(base,height){
    return (base * height);
    
}

function areaOfaRectangle(length,breadth){
    return(length*breadth);
}








const calculator = {
    VolumeOfaCylinder: function(radius,height,decimalplace){
        const pi= 3.142;
        const area = pi * (radius*radius*height);
        return area.toFixed(decimalplace);
    },

    areaofaParallelogram: function(base,height){
            return (base * height);
            
    },

    areaOfaRectangle: function(length,breadth){
        return(length*breadth);
    }

        
}

console.log(areaofaParallelogram(4,8))
console.log(areaOfaRectangle(57,90))
console.log(VolumeOfaCylinder(5,6))