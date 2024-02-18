import { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import BlogEditor from "../../components/BlogEditor/BlogEditor.jsx";
import PublishForm from "../../components/Publish/PublishForm.jsx";
import Loader from "../../components/Loader/Loader.jsx";

const blogStructure = {
  title: "",
  banner: "",
  content: [],
  tags: [],
  des: "",
  author: { personal_info: {} },
};
export const EditorContext = createContext({});
const Editor = () => {
  let{blog_id} = useParams();
  const [blog, setBlog] = useState(blogStructure);
  const [ editorState, setEditorState ] = useState("editor");
  const [textEditor,setTextEditor] = useState({isReady:false})
  const [loading,setLoading] = useState(true);
  let userData = useSelector((state) => state?.auth?.data);

  const submit = async (data) => {

    if (post) {
        const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

        if (file) {
            appwriteService.deleteFile(post.featuredImage);
        }
        const dbPost = await appwriteService.updatePost(post.$id, {
            ...data,
            featuredImage: file ? file.$id : undefined,
        });
        if (dbPost) {
            navigate(`/post/${dbPost.$id}`);
        } 
    }else {
        const file = await appwriteService.uploadFile(data.image[0]);
        if (file) {
            const fileId = file.$id;
            data.featuredImage = fileId;
            const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        }
    }
}

  useEffect(()=>{
    if(!blog_id){
      return setLoading(false)
    }
    axios.post(import.meta.env.VITE_SERVER_DOMAIN + '/api/v1/blog/get-blog',{blog_id,draft:true,mode:'edit'})
    .then(({data:{blog}})=>{
      setBlog(blog);
      setLoading(false)
    })
    .catch(err =>{
      setBlog(null)
      setLoading(false)
    })
  },[])
  return (
    <EditorContext.Provider value={{blog,setBlog,editorState,setEditorState,textEditor,setTextEditor}}>
      {userData?.access_token === null ? (
        <Navigate to="/signin" />
      ) : 
      loading ? <Loader/>:
      editorState == "editor" ? (
        <BlogEditor />
      ) : (
        <PublishForm />
      )}
    </EditorContext.Provider>
  );
};
export default Editor;
