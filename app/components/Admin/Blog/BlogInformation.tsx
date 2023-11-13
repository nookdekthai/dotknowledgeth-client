import { styles } from "@/app/styles/style";
import { useGetHeroDataQuery } from "@/redux/features/layout/layoutApi";
import React, { FC, useEffect, useState } from "react";
import Editor from "../../Editor";
import { useCreateBlogMutation } from "@/redux/features/blog/blogsApi";

type Props = {
  // blogInfo: any;
  // setBlogInfo: (blogInfo: any) => void;
  // active: number;
  // setActive: (active: number) => void;
};

const BlogInformation: FC<Props> = ({
  // blogInfo,
  // setBlogInfo,
  // active,
  // setActive,
}) => {
  const [dragging, setDragging] = useState(false);
  const [blogInfo, setBlogInfo] = useState<any>({});
  const [active, setActive] = useState(0);
  const { data } = useGetHeroDataQuery("Categories", {});
  const [categories, setCategories] = useState([]);
  const [createBlog, { isSuccess, error }] = useCreateBlogMutation()

  useEffect(() => {
    if (data) {
      setCategories(data.layout.categories);
    }
  }, [data]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    createBlog(blogInfo)

  };

  const handleFileChange = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        if (reader.readyState === 2) {
          setBlogInfo({ ...blogInfo, fileImg: reader.result });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e: any) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setBlogInfo({ ...blogInfo, fileImg: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-[80%] m-auto mt-24">
      <form onSubmit={handleSubmit} className={`${styles.label}`}>
        <div>
          <label htmlFor="">Title</label>
          <input
            type="title"
            name=""
            required
            value={blogInfo.title}
            onChange={(e: any) =>
              setBlogInfo({ ...blogInfo, title: e.target.value })
            }
            onBlur={(e) => {
              setBlogInfo({ ...blogInfo, slug: blogInfo.title?.replace(/ /gi, '-') })
            }}
            id="title"
            placeholder="MERN stack LMS platform with next 13"
            className={`
            ${styles.input}`}
          />
        </div>
        <br />
        <div>
          <label htmlFor="">Slug</label>
          <input
            type="slug"
            name=""
            required
            value={blogInfo.slug}
            onChange={(e: any) =>
              setBlogInfo({ ...blogInfo, slug: e.target.value?.replace(' ', '-') })
            }
            id="slug"
            placeholder="lms-platform-with-next-13"
            className={`
            ${styles.input}`}
          />
        </div>
        <br />
        <div>
          <label htmlFor="">Keyword</label>
          <input
            type="keyword"
            name=""
            required
            value={blogInfo.keyword}
            onChange={(e: any) =>
              setBlogInfo({ ...blogInfo, keyword: e.target.value })
            }
            id="keyword"
            placeholder="MERN, stack LMS, platform , next 13"
            className={`
            ${styles.input}`}
          />
        </div>
        <br />
        <div className="mb-5">
          <label className={`${styles.label}`}>Description</label>
          <textarea
            name=""
            id=""
            cols={30}
            rows={2}
            placeholder="Write something amazing..."
            className={`${styles.input} !h-min !py-2`}
            value={blogInfo.description}
            onChange={(e: any) =>
              setBlogInfo({ ...blogInfo, description: e.target.value })
            }
          ></textarea>
        </div>
        <div className="w-full">
          <input
            type="file"
            accept="image/*"
            id="file"
            className="hidden"
            onChange={handleFileChange}
          />
          <label
            htmlFor="file"
            className={`w-full min-h-[10vh] dark:border-white border-[#00000026] p-3 border flex items-center justify-center ${
              dragging ? "bg-blue-500" : "bg-transparent"
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {blogInfo.fileImg ? (
              <img
                src={blogInfo.fileImg}
                alt=""
                className="max-h-full w-full object-cover"
              />
            ) : (
              <span className="text-black dark:text-white">
                Drag and drop your OG image here or click to browse
              </span>
            )}
          </label>
        </div>
        <br/>
        <div className="mb-5">
          <label className={`${styles.label} mb-2`}>Content </label>
          <Editor setPropsContent={(data)=> setBlogInfo(prev => ({ ...prev, content: data }))} />
        </div>
        <br />
        <div className="w-full flex items-center justify-end">
          <input
            type="submit"
            value="Save"
            className="w-full 800px:w-[180px] h-[40px] bg-[#37a39a] text-center text-[#fff] rounded mt-8 cursor-pointer"
          />
        </div>
        <br />
        <br />
      </form>
    </div>
  );
};

export default BlogInformation;
