const getWishList = ()=>{
    const wishList= localStorage.getItem('wish-list');
    if(wishList){
        return JSON.parse(wishList);
    }
    return [];
}
const setWishList= (id)=>{
    const listWish = getWishList();
    const exist = listWish.find(list=>list===id);
    if(!exist){
        listWish.push(id);
        localStorage.setItem('wish-list',JSON.stringify(listWish))
    }
}
export{getWishList,setWishList}