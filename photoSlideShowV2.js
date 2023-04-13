let photoSlideShow = {
  photoList : ['photo1', 'photo2','photo3','photo4','photo5'],

  currentPhotoIndex : 3,

  nextPhoto : function(){
    let x = this.photoList.length;
  
    let y = this.currentPhotoIndex;
    
    if (y < x-1 ){
      return this.photoList[y+1];
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
      return this.photoList[(this.currentPhotoIndex) -1];
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

