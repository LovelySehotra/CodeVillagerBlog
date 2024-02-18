import { useCallback, useContext } from "react";
// import AnimationWrapper from "./page-animation";
import { EditorContext } from "../../Pages/Editor/Editor";
import toast, { Toaster } from "react-hot-toast";
// import Tag from "./tags.component";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import appwriteService from "../../appwrite/config";

const PublishForm = () => {
  let navigate = useNavigate()
  const userData = useSelector(state => state.auth.userData);
  let charaxterLimit = 200;
  let tagLimit = 10;
  let {blog_id} = useParams();
  let {
    blog: { banner, slug, content, title, des, tags },
    setEditorState,
    setBlog,
    blog,
  } = useContext(EditorContext);
  const handleCloseEvent = () => {
    setEditorState("editor");
  };
  const handleBlogTitleChange = (e) => {
    let input = e.target;
    setBlog({ ...blog, title: input.value });
  };
  const handleBlogDesChange = (e) => {
    let input = e.target;
    setBlog({ ...blog, des: input.value });
  };
  const handleTitleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };
  const handleKeyDown = (e) => {
    if (e.keyCode == 13 || e.keyCode == 188) {
      e.preventDefault();
      let tag = e.target.value;
      if (tags.length < tagLimit) {
        if (!tags.includes(tag) && tag.length) {
          setBlog({ ...blog, tags: [...tags, tag] });
        }
      } else {
        toast.error(`You can add max ${tagLimit}`);
      }
      e.target.value = "";
    }
  };
  const publishBlog = async(e) => {
    if (e.target.className.includes("disable")) {
      return;
    }
    if (!title.length) {
      return toast.error(  "You must provide a title to publish the blog" );
    }
    if (!des.length || des.length > charaxterLimit) {
      return toast.error(`You must provide blog description under ${charaxterLimit} character`
      );
    }
    // if (!banner.length) {
    //   return toast.error(  "You must provide blog banner to publish it" );
    // }
    // if (!tags.length || tags.length > 10) {
    //   return toast.error(
    //      "Provide tags in order to publish the blog,Maximun 10",
    //   );
    // }
    let loadingToast = toast.loading("Publishing...");
    e.target.classList.add("disable");
    let blogObj = {
      title,
      banner,
      slug,
      des,
      content ,
      tags,
      draft: false,
    };
    blogObj.slug=slugTransform(blogObj.title)
    blogObj.content= content.blocks[0].data
    console.log(blogObj)
     const dbPost = await appwriteService.createPost({ ...blogObj, userId: userData.$id })
    .then((dbPost)=>{
      console.log(dbPost)
      e.target.classList.remove("disable");
      toast.dismiss(loadingToast);
      toast.success("Published")
      // setTimeout(()=>{
      //   navigate("/")
      // },500)
    })
    .catch((err)=>{
      e.target.classList.remove("disable");
      toast.dismiss(loadingToast);
      console.log(err)
      return toast.error(response?.data?.error)
    })
  };
  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
        return value
            .trim()
            .toLowerCase()
            .replace(/[^a-zA-Z\d\s]+/g, "-")
            .replace(/\s/g, "-");

    return "";
}, []);
  return (
    // <AnimationWrapper>
      <section className="w-screen min-h-screen grid items-center lg:grid-cols-2 py-16 lg:gap-4">
        <Toaster />
        <button
          className="w-12 h-12 absolute right-[5vw] z-10 top-[5%] lg:top-[10%]"
          onClick={handleCloseEvent}
        >
          <i className="fi fi-br-cross"></i>
        </button>
        <div className="max-w-[550px] center">
          <p className="text-dark-grey mb-1">Preview </p>
          <div className="w-full aspect-video rounded-lg overflow-hidden bg-grey mt-4">
            <img src={banner} />
          </div>
          <h1 className="text-4xl font-medium mt-2 leading-tight line-clamp-2">
            {title}
          </h1>
          <p className="font-gelasio line-clamp-2 text-xl leading-7 mt-4">
            {des}
          </p>
        </div>
        <div className="border-grey lg:border-1 lg:pl-8">
          <p className="text-dark-grey mb-2 mt-9">Blog Title</p>
          <input
            type="text"
            placeholder="Blog Title"
            defaultValue={title}
            className="input-box pl-4"
            onChange={handleBlogTitleChange}
          />
          <p className="text-dark-grey mb-2 mt-9">
            Short description about your blog{" "}
          </p>
          <textarea
            maxLength={charaxterLimit}
            defaultValue={des}
            className="h-40 resize-none leading-7 input-box pl-4"
            onChange={handleBlogDesChange}
            onKeyDown={handleTitleKeyDown}
          ></textarea>
          <p className="mt-1 text-dark-grey text-sm text-right">
            {charaxterLimit - des.length} character left
          </p>
          <p className="text-dark-grey mb-2 mt-9"> Topic- {}</p>
          <div className="relative input-box pl-2 py-2 pb-4 ">
            <input
              type="text"
              placeholder="Topic"
              className="sticky input-box bg-white top-0 left-0 pl-4 mb-3 focus:bg-white"
              onKeyDown={handleKeyDown}
            />
            {tags.map((tag, i) => {
              return <Tag tag={tag} tagIndex={i} key={i} />;
            })}
          </div>
          <p className="mt-1 mb-4 text-dark-grey text-right">
            {tagLimit - tags.length} Tags left
          </p>
          <button className="btn-dark px-8" onClick={publishBlog}>Publish</button>
        </div>
      </section>
    // </AnimationWrapper>
  );
};
export default PublishForm;
