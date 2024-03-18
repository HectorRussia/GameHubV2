import noImage from '../assets/92bf08382f9b2540338040591d8dd329.jpg';

const getCroppedImageUrl = (url:string) =>{
    if(!url) return noImage;
    const target = 'media/';
    const index = url.indexOf(target)+target.length;
    return url.slice(0,index)+'crop/600/400/'+url.slice(index);
}

export default getCroppedImageUrl