function Plane(image, top, left, size){
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getPlaneElement = function (){
        return'<img width="' + this.size + '"' +
            'height = "' + this.size + '"' +
            'src="' + 
    }
}