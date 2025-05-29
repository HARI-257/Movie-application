import { Client, Databases , Query} from "appwrite";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

const client = new Client()
.setEndpoint('https://cloud.appwrite.io/v1')//
.setProject(PROJECT_ID);

const database = new Databases(client) 

export const updateSearchCount = async (searchTerm,movie) => {
  console.log(PROJECT_ID, DATABASE_ID, COLLECTION_ID);
  //use appwrite sdk to check if the search term exists in the db
  try{
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID,[Query.equal('searchTerm', searchTerm)]);
    if(result.documents.length > 0){
        await database.updateDocument(DATABASE_ID, COLLECTION_ID, result.documents[0].$id, {
          count: result.documents[0].count + 1
        })
    }
  }catch(e){
    console.log(e);
  }
  //if it does, increment the count
  //if it doesn't, create a new document with the search term and count as 1


};
