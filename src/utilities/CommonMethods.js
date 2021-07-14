export const convertDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString();
}

export const comaSeparateNames = (arr) => {
    return arr.length ? arr.map((name, i) => { 
            return name + (i < arr?.length - 1 ? ' ,' : '') 
        })
        : [];
};

export const filterRecordByName = (arr, arrCopy, value) => {
    if(value.length === 0){
        return arrCopy;
    } else{
        if(arr?.length){
            return arr?.filter((item) => 
                item?.firstName ? item.firstName .toLowerCase().indexOf(value.toLowerCase()) !== -1 :
                item?.fullName ? item.fullName .toLowerCase().indexOf(value.toLowerCase()) !== -1 :
                item?.lastName ? item.lastName .toLowerCase().indexOf(value.toLowerCase()) !== -1 :
                item?.name ? item.name .toLowerCase().indexOf(value.toLowerCase()) !== -1 :
                item?.businessName ? item.businessName .toLowerCase().indexOf(value.toLowerCase()) !== -1 
                : item
            );
        }
    }
}

export const uploadFirebaseImage = async (storage, image, callback) => {

    let name = image?.name ? image.name : 'image-name';

    const uploadTask = storage.ref(`images/${name}`).put(image);
    uploadTask.on('state_changed', 
    (snapShot) => {
        console.log(snapShot)
    }, (err) => {
            console.log(err)
    }, async () => {
    
        const url = await storage.ref('images').child(name).getDownloadURL();
        callback(url);
        
    });

}