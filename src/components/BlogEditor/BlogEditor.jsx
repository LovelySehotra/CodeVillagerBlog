import { Link } from "react-router-dom";
// import logo from "../imgs/logo.png";
// import AnimationWrapper from "./page-animation";
// import defaultBanner from "../imgs/blogbanner.png";
import { useCallback, useContext, useEffect } from "react";
// import { uploadImage } from "../common/aws";
import { Toaster, toast } from "react-hot-toast";
import { EditorContext } from "../../Pages/Editor/Editor";
import EditorJS from "@editorjs/editorjs";
import { tools } from "../../components/Tools/Tools.jsx";
import axios from "axios";
import { useSelector } from "react-redux";
import appwriteService from "../../appwrite/config";

// const userData = useSelector(state => state.auth.userData);
const BlogEditor = () => {
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
  let {
    blog,
    blog: { title, banner, content, tags, des },
    setBlog,
    textEditor,
    setTextEditor,
    setEditorState,
  } = useContext(EditorContext);
  const userData = useSelector((state) => state?.auth?.data);
  useEffect(() => {
    if (!textEditor.isReady) {
      setTextEditor(
        new EditorJS({
          holder: "textEditor",
          data: Array.isArray(content)?content[0]: content,
          tools: tools,
          placeholder: "Lets write an awesome story",
        })
      );
    }
  }, []);
  const handleBannerSubmit = (e) => {
    let img = e.target.files[0];
    if (img) {
      let loadingToast = toast.loading("Uploading...");
      uploadImage(img)
        .then((url) => {
          if (url) {
            toast.dismiss(loadingToast);
            toast.success("Uploaded");
            setBlog({ ...blog, banner: url });
          }
        })
        .catch((err) => {
          toast.dismiss(loadingToast);
          return toast.error(err);
        });
    }
  };
  const handleTitleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };
  const handleTitleChange = (e) => {
    let input = e.target;
    input.style.height = "auto";
    input.style.height = input.scrollHeight + "px";
    setBlog({ ...blog, title: input.value });
  };
  const handleError = (e) => {
    let img = e.target;
    // img.src = defaultBanner;
  };
  const handlePublish = () => {
    // if (!banner.length) {
    //   return toast.error("Upload a blog banner to publish it");
    // }
    if (!title.length) {
      return toast.error("Write blog title to publish it");
    }
    if (textEditor.isReady) {
      textEditor
        .save()
        .then((data) => {
          if (data.blocks.length) {
            setBlog({ ...blog, content: data });
            setEditorState("publish");
          } else {
            return toast.error("Write something in your blog to publish it");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const handleSaveDraft = (e) => {
    if (e.target.className.includes("disable")) {
      return;
    }
    if (!title.length) {
      return toast.error("You must provide a title to publish the blog");
    }
    let loadingToast = toast.loading("Saving as draft...");
    e.target.classList.add("disable");
    if (textEditor.isReady) {
      textEditor.save().then((content) => {
        let blogObj = {
          title,
          banner,
          slug,
          des,
          content,
          tags,
          draft: true,
        };
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
        axios
          .post(
            import.meta.env.VITE_SERVER_DOMAIN + "/api/v1/blog/create-blog",
            {...blogObj,id:blog_id},
            {
              headers: {
                Authorization: `Banner ${userData.access_token}`,
              },
            }
          )
          .then(() => {
            e.target.classList.remove("disable");
            toast.dismiss(loadingToast);
            toast.success("Saved");
            setTimeout(() => {
              navigate("/");
            }, 500);
          })
          .catch(({ response }) => {
            e.target.classList.remove("disable");
            toast.dismiss(loadingToast);
            console.log(response);
            return toast.error(response?.data?.error);
          });
      });
    }
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
// React.useEffect(() => {
//   const subscription = watch((value, { name }) => {
//       if (name === "title") {
//           setValue("slug", slugTransform(value.title), { shouldValidate: true });
//       }
//   });

//   return () => subscription.unsubscribe();
// }, [watch, slugTransform, setValue]);
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="flex-none w-10">
          <img src="" />
        </Link>
        <p className="max-md:hidden text-black line-clamp-1 w-full">
          {title.length ? title : "New Blog"}
        </p>
        <div className="flex gap-4 ml-auto">
          <button className="btn-dark py-2" onClick={handlePublish}>
            Publish
          </button>
          <button className="btn-light py-2" onClick={handleSaveDraft}>
            Save draft
          </button>
        </div>
      </nav>
      <Toaster />
      {/* <AnimationWrapper> */}
        <section>
          <div className="mx-auto max-w-[900px] w-full">
            <div className="relative aspect-video hover:opacity-80 bg-white bottom-4 border-grey">
              <label htmlFor="uploadBanner">
                <img src={banner} onError={handleError} className="z-20" />
                <input
                  type="file"
                  id="uploadBanner"
                  accept=".png, .jpg, jpeg"
                  hidden
                  onChange={handleBannerSubmit}
                />
              </label>
            </div>
            <textarea
              defaultValue={title}
              placeholder="Blog Title"
              className="text-4xl font-medium w-full h-20 outline-none resize-none mt-10 leading-tight placeholder:opacity-40"
              onKeyDown={handleTitleKeyDown}
              onChange={handleTitleChange}
            ></textarea>
            <hr className="w-full opacity-10 my-5" />
            <div id="textEditor" className="font-gelasio"></div>
          </div>
        </section>
      {/* </AnimationWrapper> */}
    </>
  );
};
export default BlogEditor;
