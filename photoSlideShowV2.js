let photoSlideShow = {
  photoList : ['photo1', 'photo2','photo3','photo4','photo5'],

  currentPhotoIndex : 3,

  nextPhoto : function(){
    let x = this.photoList.length;
  
    let y = this.currentPhotoIndex;
    
    if (this.currentPhotoIndex < this.photoList.length){
      this.currentPhotoIndex++;
      return this.photoList[this.currentPhotoIndex];
    }
    else if (y == x -1){
      return 'End of Slideshow';
    }

  },
  prevPhoto : function(){
    let x = this.photoList.length;
    if (this.currentPhotoIndex == 0 ){
      return 'Beginning of the Slideshow';
    }else{
      this.currentPhotoIndex--;
      return this.photoList[(this.currentPhotoIndex)];
    }

  },
  getCurrentPhoto : function(){
      return this.photoList[this.currentPhotoIndex];
  },
 
};
//photoSlideShow.currentPhotoIndex();
console.log("Photos in the array:" ,photoSlideShow.photoList);
console.log("Current Photo:", photoSlideShow.getCurrentPhoto());
console.log("Next Photo:", photoSlideShow.nextPhoto());
console.log("Previous Photo:", photoSlideShow.prevPhoto());

console.log("Previous Photo:", photoSlideShow.prevPhoto());
console.log("Next Photo:", photoSlideShow.nextPhoto());
