import {createSlice} from '@reduxjs/toolkit';
import { addDoc, collection, doc, setDoc,getDocs ,query, where, getDoc, updateDoc, arrayUnion, arrayRemove} from "@firebase/firestore"; 
import { db } from "../../firebase"; 

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";



export const ProductSlice=createSlice({
    name:"Uploads",
    initialState:{
        showOverlay:false,  
        progressBar:null, 
        CurrentUploadedFileDocument:null, 
        // CurrentUploadedFileDocument:{
        //     uploladedFileType:'Video', 
        // }, 
        viewPage:null,  
        previewPage:null,  



    },
    reducers:{

      
        setCurrentUploadedFileDocumentFN:(state,action)=>{   
            state.CurrentUploadedFileDocument=action.payload; 

        },

        setProgressBartFN:(state,action)=>{   
            state.progressBar=action.payload; 

        },

        setViewPageFN:(state,action)=>{   
            state.viewPage=true; 
            state.previewPage=null ; 
            // state.progressBar=null; 

        },
        setPreviewPageFN:(state,action)=>{   
            state.previewPage=action.payload; 
            // state.progressBar=null; 

        },


        setShowOverLayFN:(state,action)=>{   
            state.showOverlay=true; 

        },
        setHideOverLayFN:(state,action)=>{   
            state.showOverlay=false; 

        },


    }
});



export const {
                    setCurrentUploadedFileDocumentFN,
                    setProgressBartFN,
                    setShowOverLayFN,
                    setHideOverLayFN,
                    setViewPageFN,
                    setPreviewPageFN,
                    
                                } =ProductSlice.actions; 

//selectors
export const selectUploads=(state)=>state.uploads;

export default ProductSlice.reducer;







 export  const AddProduct=async (dispatch=null,data={})=>{
    try{

        // timeStamp:firebase.firestore.FieldValue.serverTimestamp(), 
        const docRef = await addDoc(collection(db, "docs"), {...data,timeStamp:new Date().getTime()} ); 
        console.log(data);
        console.log(docRef);
        dispatch(setCurrentUploadedFileDocumentFN(data))

        
    }catch(err){
        console.log(err);
    }

};


 export  const UploadFile=async (dispatch=null,file,setFileUrl)=>{

    let fileUrl;

    try{

                const storage = getStorage();
                const storageRef = ref(storage, `${Math.random()} ${file.name}`);

                const uploadTask = uploadBytesResumable(storageRef, file);

                // Register three observers:
                // 1. 'state_changed' observer, called any time the state changes
                // 2. Error observer, called on failure
                // 3. Completion observer, called on successful completion

              await  uploadTask.on('state_changed', 
                (snapshot) => {
                    // Observe state change events such as progress, pause, and resume
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                  
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    dispatch(setProgressBartFN(progress));
                    
                    if(progress==100){
                        dispatch(setPreviewPageFN(true));

                    }

                    switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    }
                }, 
                (error) => {
                    // Handle unsuccessful uploads
                }, 
               async () => {
                    // Handle successful uploads on complete
                    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                   await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                        fileUrl=downloadURL; 
                        setFileUrl(downloadURL);
                    });
                }
                );


                return fileUrl;
        
    }catch(err){
     
    }

};




