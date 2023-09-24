const config ={
    appwwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),
    appwwriteProjectId : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwwriteCollectionId : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwwriteBucketId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
}
export default config