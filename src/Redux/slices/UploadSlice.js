import {createSlice} from '@reduxjs/toolkit';
import { addDoc, collection, doc, setDoc,getDocs ,query, where, getDoc, updateDoc, arrayUnion, arrayRemove} from "@firebase/firestore"; 
import { db } from "../../firebase"; 

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";
import {child, get, getDatabase, onValue, ref as REF, set } from "@firebase/database";



export const ProductSlice=createSlice({
    name:"Uploads",
    initialState:{
        showOverlay:false,  
        progressBar:null, 
        CurrentUploadedFileDocument:null, 
        viewPage:null,  
        previewPage:null,  
        viewCount:null,  



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
        setViewCountFN:(state,action)=>{   
            state.viewCount=action.payload; 

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
                    setViewCountFN,
                    
                                } =ProductSlice.actions; 

//selectors
export const selectUploads=(state)=>state.uploads;

export default ProductSlice.reducer;







 export  const AddProduct=async (dispatch=null,data={})=>{
    try{

        // timeStamp:firebase.firestore.FieldValue.serverTimestamp(), 
        const docRef = await addDoc(collection(db, "docs"), {...data,timeStamp:new Date().getTime()} ); 
        dispatch(setCurrentUploadedFileDocumentFN(data))

        
    }catch(err){
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
                    dispatch(setProgressBartFN(progress));
                    
                    if(progress==100){
                        dispatch(setPreviewPageFN(true));

                    }

                    switch (snapshot.state) {
                    case 'paused':
                        break;
                    case 'running':
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
                        fileUrl=downloadURL; 
                        setFileUrl(downloadURL);
                    });
                }
                );


                return fileUrl;
        
    }catch(err){
     
    }

};


 export  const setViewCount=async (setViewCountState)=>{


    try{

        // Read data 
        
        const dbRef = REF(getDatabase());
        get(child(dbRef, `viewsCount`)).then((snapshot) => {
            if (snapshot.exists()) {
                // snapshot.val().number+1;
                        // writeUserData(snapshot.val().number+1);
                        writeUserData(snapshot.val().number+1);


                      
                        setViewCountState(snapshot.val().number+1);

                   

            } else {
                console.log("No data available");
            }
            }).catch((error) => {
            console.error(error);
            });








            // Write data 
        function writeUserData(updatedNum) {
                const db = getDatabase();
                set(REF(db, 'viewsCount'), {
                    number: updatedNum,
                });
        }



    }catch(err){
     
    }

};




